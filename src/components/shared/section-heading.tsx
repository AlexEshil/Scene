import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-head text-[clamp(2rem,3vw,3.4rem)] font-medium leading-[0.94] tracking-[-0.04em] text-foreground">
        {title}
      </h2>
      {description ? <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{description}</p> : null}
    </div>
  );
}
