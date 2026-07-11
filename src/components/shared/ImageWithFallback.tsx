import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  wrapperClassName?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  wrapperClassName,
  fallbackSrc = images.fallback,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if image is already loaded (e.g. cached or SSR)
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  // When error occurs, swap to fallback image
  const handleError = () => {
    setError(true);
  };

  // When image loads successfully
  const handleLoad = () => {
    setLoaded(true);
  };

  const imageSrc = error ? fallbackSrc : src;

  // Defensive rendering: If no valid source exists, just show skeleton
  if (!imageSrc) {
    return <div className={cn("relative overflow-hidden bg-muted animate-pulse", wrapperClassName)} />;
  }

  return (
    <div className={cn("relative overflow-hidden bg-muted", wrapperClassName)}>
      {/* 
        The wrapper serves as a skeleton while loading.
        The image itself gets the passed className (like w-full, object-cover) so it sizes correctly.
      */}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        loading={props.loading || "lazy"}
        {...props}
      />
    </div>
  );
}
