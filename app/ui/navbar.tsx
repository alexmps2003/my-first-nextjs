import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-900 border-b border-slate-800 text-white">
      <div className="font-bold text-xl text-blue-500">MyDevApp</div>
      <div className="flex gap-6">
        <Link href="/" className="hover:text-blue-400 transition-colors">
          Home
        </Link>
        <Link
          href="/dashboard"
          className="hover:text-blue-400 transition-colors"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
