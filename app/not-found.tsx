import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-accent">404</h1>
          <h2 className="text-3xl font-bold text-foreground">Page Not Found</h2>
        </div>

        <p className="text-foreground-secondary">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-background font-semibold rounded-lg transition-all duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
