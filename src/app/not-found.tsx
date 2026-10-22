import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-28 text-center">
      <p className="label">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">That page doesn&apos;t exist.</p>
      <Link href="/" className="btn mt-8">
        Go home
      </Link>
    </div>
  );
}
