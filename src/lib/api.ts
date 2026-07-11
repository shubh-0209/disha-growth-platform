import axios from 'axios';
import { supabase } from './supabase-client';

const BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_API_URL : 'http://localhost:5000/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

const redirectToLogin = () => {
  const onAuthPage = window.location.pathname === '/login' || window.location.pathname === '/volunteer';
  if (!onAuthPage) {
    window.dispatchEvent(new CustomEvent('auth-expired'));
  }
};

api.interceptors.request.use(
  async (config) => {
    // Fix Axios URL resolution: ensure baseURL ends with '/' and url doesn't start with '/'
    if (config.baseURL && !config.baseURL.endsWith('/')) {
      config.baseURL += '/';
    }
    if (config.url && config.url.startsWith('/')) {
      config.url = config.url.substring(1);
    }

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.access_token) {
        config.headers['Authorization'] = `Bearer ${session.access_token}`;
      }
    } catch {
      // Ignore
    }
    return config;
  },
  (err) => Promise.reject(err)
);

api.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const original = error.config;
    const status = error.response?.status;

    if (status === 401 && !original._retry) {
      original._retry = true;
      try {
        const { data: { session }, error: refreshError } = await supabase.auth.refreshSession();
        if (refreshError || !session) throw refreshError;

        setAuthToken(session.access_token);
        original.headers['Authorization'] = `Bearer ${session.access_token}`;
        return api(original);
      } catch (err) {
        redirectToLogin();
        return Promise.reject(error);
      }
    }

    return Promise.reject(error.response?.data || error);
  }
);

// --- Public Endpoints API wrappers ---
export const publicApi = {
  getPrograms: async (params?: { page?: number; limit?: number }) => {
    return api.get('/public/programs', { params });
  },
  getTopLeaderboard: async (params?: { limit?: number }) => {
    return api.get('/public/leaderboard/top', { params });
  },
  getImpactAnalytics: async () => {
    return api.get('/public/analytics/impact');
  },
  getAnnouncements: async (params?: { limit?: number }) => {
    return api.get('/public/announcements', { params });
  },
  getVolunteerCount: async () => {
    return api.get('/public/volunteers/count');
  }
};

export default api;
