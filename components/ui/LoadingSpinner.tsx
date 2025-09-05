// components/ui/LoadingSpinner.tsx
interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function LoadingSpinner({
  size = "md",
  className = "",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-32 w-32",
    lg: "h-48 w-48",
  };

  return (
    <div
      className={`animate-spin rounded-full border-t-2 border-b-2 border-purple-800 ${sizeClasses[size]} ${className}`}
    />
  );
}
