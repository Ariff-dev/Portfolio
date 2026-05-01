import { useState, useEffect } from "react";

const START_DATE = new Date(2024, 2, 1); // 1 de marzo 2024

interface Experience {
  years: number;
  months: number;
  /** Label estilo LinkedIn: "2 yrs 3 mo" */
  label: string;
}

const calculate = (): Experience => {
  const now = new Date();
  let years = now.getFullYear() - START_DATE.getFullYear();
  let months = now.getMonth() - START_DATE.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const label =
    years > 0
      ? `${years} yr${years !== 1 ? "s" : ""} ${months} mo`
      : `${months} mo`;

  return { years, months, label };
};

/**
 * Calcula la experiencia laboral desde el 1 de marzo 2024
 * y la actualiza automáticamente cada día (como LinkedIn).
 */
export const useExperience = (): Experience => {
  const [experience, setExperience] = useState<Experience>(calculate);

  useEffect(() => {
    // Re-calcular cada 24 h para que siempre esté actualizado
    const interval = setInterval(() => setExperience(calculate()), 86_400_000);
    return () => clearInterval(interval);
  }, []);

  return experience;
};
