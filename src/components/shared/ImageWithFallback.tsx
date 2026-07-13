import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  wrapperClassName?: string;
  srcSet?: string;
  sizes?: string;
  isHero?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  wrapperClassName,
  fallbackSrc = images.fallback,
  srcSet,
  sizes,
  isHero,
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
  }, [src, srcSet]);

  const handleError = () => setError(true);
  const handleLoad = () => setLoaded(true);

  // Auto-generate srcSet for optimized local webp images
  let autoSrcSet = srcSet;
  if (!autoSrcSet && src && typeof src === 'string' && src.endsWith('.webp') && src.includes('/optimized/')) {
    const base = src.replace('.webp', '');
    if (src.includes('/hero/')) {
      autoSrcSet = `${base}-480w.webp 480w, ${base}-768w.webp 768w, ${base}-1200w.webp 1200w`;
    } else {
      autoSrcSet = `${base}-480w.webp 480w, ${base}-800w.webp 800w`;
    }
  }

  const imageSrc = error ? fallbackSrc : src;
  const activeSrcSet = error ? undefined : autoSrcSet;

  const aspectRatioStyle = props.width && props.height 
    ? { aspectRatio: `${props.width} / ${props.height}` } 
    : undefined;

  // Defensive rendering: If no valid source exists, just show skeleton
  if (!imageSrc) {
    return (
      <div 
        className={cn("relative overflow-hidden bg-muted animate-pulse", wrapperClassName)}
        style={aspectRatioStyle}
      />
    );
  }

  // Set default sizes based on context
  let defaultSizes = sizes;
  if (!defaultSizes && activeSrcSet) {
    defaultSizes = (isHero || (src && typeof src === 'string' && src.includes('/hero/'))) 
      ? "100vw" 
      : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
  }

  return (
    <div className={cn("relative overflow-hidden bg-muted", wrapperClassName)}>
      <img
        ref={imgRef}
        src={imageSrc}
        srcSet={activeSrcSet}
        sizes={sizes || defaultSizes}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={cn(
          props.loading !== "eager" && "transition-opacity duration-500",
          (props.loading === "eager" || loaded) ? "opacity-100" : "opacity-0",
          className
        )}
        loading={props.loading || "lazy"}
        {...props}
      />
    </div>
  );
}
