import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Gradient Ornaments */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-500 to-violet-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
          Welcome to the Next-Generation{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            NextApp Template
          </span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          A beautifully designed, fast, and feature-rich foundation. Powered by React, Next.js,
          and NextAuth for seamless authentication with Google. Customize it to fit your brand and deploy
          in seconds.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/about"
            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Learn About Us
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white flex items-center gap-1 group"
          >
            GitHub Repository{" "}
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="mt-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 p-8 bg-white dark:bg-gray-900 shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white mb-4">
                💡
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Next.js 15+</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Built using the latest framework standards, with React Server Components and Turbopack support.
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 p-8 bg-white dark:bg-gray-900 shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white mb-4">
                🔑
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">OAuth Auth.js</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Integrated Google Login using secure JSON Web Tokens. Beautifully responsive authentication states.
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 p-8 bg-white dark:bg-gray-900 shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white mb-4">
                🎨
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tailwind CSS v4</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Fully functional with Tailwind&apos;s new styling engine to achieve ultra-fast, modern UI development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
