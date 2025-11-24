import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "tertiary";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  label: string;
  isLoading?: boolean;
  onClick?: () => void; // FIXED TYPE
}

export default function Button({
  label,
  variant = "primary",
  size = "md",
  icon,
  fullWidth = false,
  className = "",
  isLoading = false,
  onClick,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "inline-flex cursor-pointer items-center justify-center font-semibold rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed gap-2";

  const variantStyles: Record<string, string> = {
    primary: "bg-orange-600 text-white hover:bg-orange-700 shadow-sm",
    outline: "border border-orange-600 text-orange-600 hover:bg-orange-50",
    tertiary: "text-gray-700 hover:text-orange-600 hover:bg-gray-100",
  };

  const sizeStyles: Record<string, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const finalClasses = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Spinner color should match variant
  const spinnerColor =
    variant === "primary" ? "border-white" : "border-orange-600";

  return (
    <button
      className={finalClasses}
      disabled={isLoading}
      onClick={() => !isLoading && onClick?.()}
      {...rest}
    >
      {/* Fixed space for icon/loader */}

      {isLoading ? (
        <div className="flex items-center justify-center w-5">
          <span
            className={`w-5 h-5 border-2 ${spinnerColor} border-t-transparent rounded-full animate-spin`}
          ></span>
        </div>
      ) : (
        icon && (
          <div className="flex items-center justify-center w-5">
            <span>{icon}</span>
          </div>
        )
      )}

      {/* Label */}
      <span className={isLoading ? "opacity-70" : ""}>{label}</span>
    </button>
  );
}
