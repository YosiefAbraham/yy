import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function Navigation() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-background/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold hover-elevate active-elevate-2 px-4 py-2 rounded-md"
            data-testid="link-home"
          >
            Portfolio
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-experience"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-about"
            >
              About
            </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
}
