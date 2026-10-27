import { useState, type ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  containerClassName?: string;
  skeletonClassName?: string;
};

export default function ImageWithSkeleton({
  containerClassName = "",
  skeletonClassName = "",
  className = "",
  onLoad,
  onError,
  ...props
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {!loaded && !failed && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 mac-skeleton ${skeletonClassName}`}
        />
      )}
      {failed ? (
        <div aria-hidden="true" className="absolute inset-0 bg-black/[0.03] dark:bg-white/[0.04]" />
      ) : (
        <img
          {...props}
          onLoad={(event) => {
            setLoaded(true);
            onLoad?.(event);
          }}
          onError={(event) => {
            setFailed(true);
            onError?.(event);
          }}
          className={`h-full w-full object-cover transition-[opacity,transform] duration-500 ease-out ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
        />
      )}
    </div>
  );
}
