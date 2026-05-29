import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Scribblr Logo" width={48} height={48} />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-gray-600 transition hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 transition hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 transition hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" href="#">
                    History
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 transition hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 transition hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" href="#">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 transition hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 dark:hover:bg-indigo-500"
                  href="#"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-indigo-50 px-5 py-2.5 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-400 dark:hover:bg-indigo-900"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
