"use client";

export default function Error({ reset }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-[#262626] text-center">
      <h1 className="text-2xl sm:text-3xl font-semibold text-[#2a2a2a] dark:text-white mb-3">
        Something went wrong
      </h1>
      <p className="text-[#4a4a4a] dark:text-[#9C9C9C] max-w-md mb-8">
        Please try again, or go back to the homepage.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded bg-[#83c3de] hover:bg-[#61b1d6] text-white px-8 py-3 font-medium transition-colors"
      >
        Try again
      </button>
    </main>
  );
}
