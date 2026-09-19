/**
 * A television. The cabinet, the glass and the standby lamp — nothing about
 * what is on screen, which is whatever gets passed in.
 */
export function Tv({
  children,
  className = "",
  screenClassName = "",
  small = false,
}: {
  children: React.ReactNode;
  className?: string;
  screenClassName?: string;
  small?: boolean;
}) {
  return (
    <div className={`tv ${small ? "tv-sm" : ""} ${className}`}>
      <div className={`tv-screen ${screenClassName}`}>{children}</div>
      {!small && <span className="tv-led" aria-hidden="true" />}
    </div>
  );
}
