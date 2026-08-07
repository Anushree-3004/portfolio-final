import React from 'react';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div data-testid="section-header" className={`my-8 border-b border-portfolio-sand pb-4 ${className}`}>
      <h2 data-testid="section-title" className="text-2xl md:text-3xl font-fell uppercase tracking-wider text-portfolio-dark">
        ({title})
      </h2>
      {subtitle && (
        <p data-testid="section-subtitle" className="text-sm font-sans tracking-widest text-portfolio-muted uppercase mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export interface TagPillProps {
  label: string;
  variant?: 'default' | 'outline';
  className?: string;
}

export function TagPill({ label, variant = 'default', className = '' }: TagPillProps) {
  const baseStyles = "px-3 py-1.5 text-xs font-sans tracking-wider uppercase transition-colors";
  const variantStyles = variant === 'outline' 
    ? "border border-portfolio-sand bg-transparent text-portfolio-dark" 
    : "bg-portfolio-sand text-portfolio-dark";

  return (
    <span data-testid={`tag-pill-${label.toLowerCase().replace(/\s+/g, '-')}`} className={`${baseStyles} ${variantStyles} ${className}`}>
      {label}
    </span>
  );
}
