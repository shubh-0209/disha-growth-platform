import { useState } from "react";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  fallbackSrc = images.fallback,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // When error occurs, swap to fallback image
  const handleError = () => {
    setError(true);
  };

  // When image loads successfully
  const handleLoad = () => {
    setLoaded(true);
  };

  const imageSrc = error ? fallbackSrc : src;

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      {/* 
        We use object-cover by default to ensure the image fills its container,
        but allow it to be overridden via className.
        If the image is not loaded yet, the bg-muted div acts as a skeleton placeholder.
        The transition helps the image fade in once it is fully loaded.
      */}
      <img
        src={imageSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0"
        )}
        {...props}
      />
    </div>
  );
}
