import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Toast = ({ title, description, variant = "default", onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger enter animation
    requestAnimationFrame(() => setIsVisible(true));

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose?.(), 300);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 max-w-sm w-full pointer-events-auto",
        "rounded-lg border p-4 pr-8 shadow-lg transition-all duration-300",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0",
        variant === "destructive"
          ? "border-red-500/50 bg-red-950 text-red-100"
          : "border-border bg-card text-foreground"
      )}
    >
      {title && <p className="text-sm font-semibold">{title}</p>}
      {description && (
        <p className="text-sm opacity-90 mt-1">{description}</p>
      )}
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(() => onClose?.(), 300);
        }}
        className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 hover:text-foreground transition-opacity"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};