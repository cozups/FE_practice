import { useErrorBoundary } from "react-error-boundary";

export default function ErrorFallback({ message = "Something went wrong" }: { message: string }) {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div>
      <h2 style={{ color: "red" }}>{message}</h2>
      <button onClick={resetBoundary}>Try again</button>
    </div>
  );
}
