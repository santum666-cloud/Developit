import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          style={{ position: 'fixed', bottom: '104px', right: '24px', zIndex: 9998 }}
          className="h-12 w-12 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          data-testid="button-scroll-to-top"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </>
  );
}
