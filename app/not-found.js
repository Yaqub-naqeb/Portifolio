import Link from "next/link";
import { PROFILE } from "@/data/profile";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-[#262626] text-center">
      <p className="text-[#ADD6E8] text-6xl font-semibold mb-4">404</p>
      <h1 className="text-2xl sm:text-3xl font-semibold text-[#2a2a2a] dark:text-white mb-3">
        Page not found
      </h1>
      <p className="text-[#4a4a4a] dark:text-[#9C9C9C] max-w-md mb-8">
        {PROFILE.name} is a {PROFILE.role.toLowerCase()} in {PROFILE.location}.
        The page you requested is not part of this portfolio.
      </p>
      <Link
        href="/"
        className="rounded bg-[#83c3de] hover:bg-[#61b1d6] text-white px-8 py-3 font-medium transition-colors"
      >
        Back to homepage
      </Link>
    </main>
  );
}
