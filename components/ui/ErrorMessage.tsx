// components/ui/ErrorMessage.tsx
interface ErrorMessageProps {
  title?: string;
  message: string;
  showRetry?: boolean;
  onRetry?: () => void;
}

export default function ErrorMessage({
  title = "Something went wrong",
  message,
  showRetry = false,
  onRetry,
}: ErrorMessageProps) {
  return (
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold text-red-600 mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{message}</p>
      {showRetry && onRetry && (
        <button onClick={onRetry} className="btn-primary">
          Try Again
        </button>
      )}
    </div>
  );
}
