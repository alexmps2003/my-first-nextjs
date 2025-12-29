import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">This is the Home Page</h1>
      <Link href="/dashboard" className="text-blue-500 underline mt-4">
        Go to Dashboard
      </Link>
    </div>
  );
}
