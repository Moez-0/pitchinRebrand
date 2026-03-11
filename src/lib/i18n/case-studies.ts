import type { CaseStudy } from "@/types";
import type { Locale } from "@/lib/i18n/config";

type CaseStudyTranslation = NonNullable<CaseStudy["translations"]>["fr"];

export function localizeCaseStudy(study: CaseStudy, locale: Locale): CaseStudy {
  if (locale !== "fr" || !study.translations?.fr) {
    return study;
  }

  const fr: CaseStudyTranslation = study.translations.fr;

  return {
    ...study,
    tagline: fr.tagline ?? study.tagline,
    category: fr.category ?? study.category,
    title: fr.title ?? study.title,
    challenge: fr.challenge ?? study.challenge,
    solution: fr.solution ?? study.solution,
    results: fr.results ?? study.results,
    metrics: study.metrics.map((metric, index) => ({
      ...metric,
      label: fr.metricLabels?.[index] ?? metric.label,
    })),
    testimonial: study.testimonial
      ? {
          ...study.testimonial,
          quote: fr.testimonial?.quote ?? study.testimonial.quote,
          role: fr.testimonial?.role ?? study.testimonial.role,
        }
      : study.testimonial,
  };
}
