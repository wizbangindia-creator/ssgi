import React from "react";
import { ImageIcon } from "lucide-react";

// Reusable image placeholder for the site. Shows a subtle striped background with an icon and optional label.
// Accepts className to control size/aspect ratio.
const Placeholder = ({
  icon: Icon = ImageIcon,
  label = "Image",
  className = "",
  variant = "light",
  rounded = "rounded-lg",
  showLabel = true,
}) => {
  const isDark = variant === "dark";
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${rounded} ${
        isDark
          ? "bg-slate-800 text-slate-400 border border-white/10"
          : "bg-slate-100 text-slate-400 border border-slate-200"
      } ${className}`}
      aria-label={label}
    >
      {/* Subtle diagonal-stripe pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: isDark
            ? "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 10px, transparent 10px 20px)"
            : "repeating-linear-gradient(45deg, rgba(15,23,42,0.04) 0 10px, transparent 10px 20px)",
        }}
      />
      <div className="relative flex flex-col items-center justify-center gap-2 text-center px-3">
        <Icon className="w-8 h-8 md:w-10 md:h-10 opacity-70" strokeWidth={1.5} />
        {showLabel && (
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest opacity-80">
            {label}
          </span>
        )}
      </div>
    </div>
  );
};

export default Placeholder;
