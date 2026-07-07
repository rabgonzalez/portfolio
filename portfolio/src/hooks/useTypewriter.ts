import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
}

export function useTypewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1500,
}: UseTypewriterOptions) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const isWordComplete = text === current;
    const isWordEmpty = text === "";

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (!isWordComplete) {
            setText(current.slice(0, text.length + 1));
          } else {
            setTimeout(() => setDeleting(true), pauseTime);
          }
        } else if (!isWordEmpty) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      deleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    deleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return text;
}
