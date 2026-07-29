import Link from "next/link";

export default function About() {
  return (
    <div className="relative flex-1 flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Gradient Ornaments */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-500 to-violet-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <div className="max-w-3xl text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">About Us</h2>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
          Our Philosophy & Mission
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          We believe in constructing beautiful, performant software. By utilizing the best engineering
          standards and cutting-edge libraries, we help developers launch concepts rapidly, securely,
          and elegantly.
        </p>
      </div>

      {/* Grid of Values */}
      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Security & Privacy</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              100% Secure
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Vercel Edge-Optimized</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Ultra Fast
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Developer Satisfaction</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              99.9% Rating
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-16 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-900 transition-all active:scale-95"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
