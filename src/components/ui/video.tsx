interface VideoProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
  poster?: string;
}
export function Video({ src, width, height, className, poster }: VideoProps) {
  return (
    <video width={width} height={height} controls poster={poster} className={className}>
      <source src={src} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
}
