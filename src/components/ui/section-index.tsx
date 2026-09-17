export function SectionIndex({
  number,
  label,
  className,
}: {
  number: string;
  label: string;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-2 font-mono text-xs tracking-[0.28em] text-foreground-muted ${className ?? ""}`}
    >
      <span>{number}</span>
      <span aria-hidden="true" className="text-border">
        /
      </span>
      <span>{label}</span>
    </p>
  );
}
