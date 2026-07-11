import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/lib/supabase-client";
import type { User as SupabaseUser } from "@supabase/supabase-js";

type User = {
  id: string;
  name: string;
  email: string;
  avatar_url?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
  simulateLogin: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const resolveUser = async (sessionUser: SupabaseUser) => {
      let name = sessionUser.user_metadata?.name;
      try {
        // 1. Try profiles table
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("name, full_name, first_name, last_name")
          .eq("id", sessionUser.id)
          .maybeSingle();

        if (profileData && !profileError) {
          name = profileData.name || profileData.full_name || 
                (profileData.first_name ? `${profileData.first_name} ${profileData.last_name || ''}`.trim() : undefined) || 
                name;
        } else {
          // 2. Try users table if profiles fails
          const { data: userData, error: userError } = await supabase
            .from("users")
            .select("name, full_name, first_name, last_name")
            .eq("id", sessionUser.id)
            .maybeSingle();
            
          if (userData && !userError) {
            name = userData.name || userData.full_name || 
                  (userData.first_name ? `${userData.first_name} ${userData.last_name || ''}`.trim() : undefined) || 
                  name;
          }
        }
      } catch (err) {
        // Ignore errors if tables don't exist
      }

      // Fallback 3: email
      const fallbackName = sessionUser.email?.split('@')[0] || "Volunteer";

      setUser({
        id: sessionUser.id,
        name: name || fallbackName,
        email: sessionUser.email || "",
        avatar_url: sessionUser.user_metadata?.avatar_url,
      });
      setLoading(false);
    };

    const initializeAuth = async () => {
      // 1. Check for tokens in URL hash (from Dashboard redirect)
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hashParams.get("access_token");
      const refreshToken = hashParams.get("refresh_token");

      if (accessToken && refreshToken) {
        console.log("Found tokens in URL, manually setting session...");
        const { data, error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        
        if (data.session) {
          // Clean the URL hash
          window.history.replaceState(null, "", window.location.pathname + window.location.search);
          resolveUser(data.session.user);
          return;
        }
      }

      // 2. Get initial session from local storage
      console.log("Checking session from storage");
      const { data: { session }, error } = await supabase.auth.getSession();
      console.log("Session:", session, "Error:", error);
      
      if (session?.user) {
        resolveUser(session.user);
      } else {
        setLoading(false);
      }
    };

    initializeAuth();

    // 2. Listen for auth changes (login, logout, refresh)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth event:", event);
      console.log("User:", session?.user);
      if (session?.user) {
        resolveUser(session.user);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  const simulateLogin = () => {
    // Left for testing UI without backend credentials setup
    setUser({ id: "user_1", name: "Shubhdeep", email: "shubhdeep@example.com" });
  };

  if (typeof window !== "undefined") {
    (window as any).simulateLogin = simulateLogin;
    (window as any).simulateLogout = () => setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout, simulateLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
