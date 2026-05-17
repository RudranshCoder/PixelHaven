import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const variantStyles = {
  primary:
    "bg-gradient-to-r from-[#5B7CFF] to-[#4A6AEF] text-white hover:from-[#4A6AEF] hover:to-[#3B5ADF] shadow-[0_0_16px_rgba(91,124,255,0.35)] hover:shadow-[0_0_24px_rgba(91,124,255,0.5)]",
  secondary:
    "bg-[#182033] text-[#F5F7FB] border border-[#273244] hover:bg-[#1E2A40] hover:border-[#5B7CFF]/40",
  ghost:
    "text-[#A7B0C0] hover:text-[#F5F7FB] hover:bg-[#182033]",
  danger:
    "bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30 hover:bg-[#EF4444]/25",
  success:
    "bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white hover:from-[#16A34A] hover:to-[#15803D] shadow-[0_0_16px_rgba(34,197,94,0.3)]",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs rounded-[8px]",
  md: "px-4 py-2.5 text-sm rounded-[10px]",
  lg: "px-6 py-3 text-base rounded-[12px]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading, className, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B7CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F17]",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {loading && (
          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
