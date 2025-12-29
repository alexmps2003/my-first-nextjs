import Link from "next/link";
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* 1. Desktop Image: visible on desktop, hidden on mobile*/}
      <Image
        src="/hero-desktop.jpg"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />

      {/* 2. Mobile Image: visible on mobile, hidden on desktop*/}
      <Image
        src="/hero-mobile.jpg"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />

      <h1 className={`${lusitana.className} text-3xl font-bold`}>
        This is the Home Page
      </h1>
      <Link href="/dashboard" className="text-blue-500 underline mt-4">
        Go to Dashboard
      </Link>
    </div>
  );
}
