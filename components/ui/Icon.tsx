import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";

type IconName = keyof typeof LucideIcons;

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
} & Omit<LucideProps, "name">) {
  const Component = LucideIcons[name as IconName] as React.ComponentType<LucideProps> | undefined;

  if (!Component) return null;

  return <Component className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
