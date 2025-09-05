interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  fullScreen?: boolean;
}

export default function LoadingSpinner({
  size = "md",
  className = "",
  fullScreen = false,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-16 w-16",
    lg: "h-32 w-32",
    xl: "h-48 w-48",
  };

  const spinner = (
    <div
      className={`animate-spin rounded-full border-t-2 border-b-2 border-purple-800 ${sizeClasses[size]} ${className}`}
    />
  );

  if (fullScreen) {
    return (
      <div className="flex items-center justify-center h-screen">{spinner}</div>
    );
  }

  return spinner;
}
