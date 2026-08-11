import { ReactNode } from "react";

type Align = "left" | "center";

export function SectionHeading({
  eyebrow,
  number,
  title,
  description,
  note,
  align = "center",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  number?: string;
  title: ReactNode;
  description?: string;
  note?: ReactNode;
  align?: Align;
  as?: "h1" | "h2";
}) {
  const heading = (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue-600">
          {number ? <span className="text-graphite-400">{number} / </span> : null}
          {eyebrow}
        </p>
      ) : null}
      <Tag className="text-3xl font-semibold tracking-tight text-graphite-900 sm:text-4xl">
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-graphite-600">{description}</p>
      ) : null}
    </div>
  );

  if (note) {
    return (
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        {heading}
        <p className="max-w-xs text-sm leading-relaxed text-graphite-500 lg:pt-1">{note}</p>
      </div>
    );
  }

  return heading;
}
