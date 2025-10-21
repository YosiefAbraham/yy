interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="relative mb-16">
      <div className="text-9xl font-bold opacity-5 absolute -top-8 left-0 select-none pointer-events-none" data-testid={`text-section-number-${number}`}>
        {number}
      </div>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-testid={`text-section-title-${number}`}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl" data-testid={`text-section-subtitle-${number}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
