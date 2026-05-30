import { Home } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="primary-button flex items-center gap-2"
      >
        <Home size={16} />
        Back to Home
      </a>
    </div>
  );
};