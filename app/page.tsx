import Link from "next/link";
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import AcmeLogo from "@/app/ui/acme-logo";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-600 p-4 md:h-24">
        <div className="w-32 text-white md:w-36">
          <AcmeLogo />
        </div>
      </div>

      {/* Hero Section */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <h1
            className={`${lusitana.className} text-4xl font-bold leading-tight md:text-5xl lg:text-6xl`}
          >
            Welcome to Acme.
          </h1>
          <p className="text-lg text-gray-800 md:text-xl">
            Your all-in-one solution for managing invoices, customers, and
            revenue tracking.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 md:text-base"
          >
            <span>Go to Dashboard</span>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Desktop Image */}
          <Image
            src="/hero-desktop.jpg"
            width={1000}
            height={760}
            className="hidden md:block rounded-lg shadow-xl"
            alt="Screenshots of the dashboard project showing desktop version"
            priority
          />
          {/* Mobile Image */}
          <Image
            src="/hero-mobile.jpg"
            width={560}
            height={620}
            className="block md:hidden rounded-lg shadow-xl"
            alt="Screenshot of the dashboard project showing mobile version"
            priority
          />
        </div>
      </div>
    </main>
  );
}
