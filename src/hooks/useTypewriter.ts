import { useState, useEffect, useRef } from "react";

/**
 * Typewriter hook: cicla por un array de textos
 * escribiendo y borrando cada uno con velocidades configurables.
 */
export const useTypewriter = (
  texts: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2200
): string => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);
  // Referencia estable al array para evitar re-renders innecesarios
  const textsRef = useRef(texts);

  useEffect(() => {
    if (isPausing) return;

    const current = textsRef.current[textIndex];

    // Escribiendo
    if (!isDeleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(t);
    }

    // Pausa al terminar de escribir
    if (!isDeleting && charIndex === current.length) {
      setIsPausing(true);
      const t = setTimeout(() => {
        setIsPausing(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(t);
    }

    // Borrando
    if (isDeleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, deletingSpeed);
      return () => clearTimeout(t);
    }

    // Cambiar al siguiente texto
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % textsRef.current.length);
    }
  }, [charIndex, isDeleting, isPausing, textIndex, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
};
