import { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-card border border-graphite-100 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover ${className}`}
    >
      {children}
    </div>
  );
}
