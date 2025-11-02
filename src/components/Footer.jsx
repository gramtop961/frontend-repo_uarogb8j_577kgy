import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-emerald-900">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#" className="text-lg font-semibold text-emerald-50">
            GreenBox
          </a>
          <nav aria-label="Social" className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-100 transition hover:text-white"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.9-2.7 1.1A4.1 4.1 0 0 0 12 8.9a11.6 11.6 0 0 1-8.4-4.2 4.1 4.1 0 0 0 1.3 5.5c-.6 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.7 3.3 4.1-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2 2.7 3.8 2.8A8.3 8.3 0 0 1 2 19.6a11.7 11.7 0 0 0 6.3 1.8c7.6 0 11.8-6.3 11.8-11.8v-.5c.8-.5 1.5-1.2 2-1.9z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-100 transition hover:text-white"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm6-2.75a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18 6.75z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-100 transition hover:text-white"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.5-1.5 1.6-1.5H17V2.1C16.3 2 15.5 2 14.6 2 12.3 2 11 3.3 11 5.8V10H8v4h3v8h2z" />
              </svg>
            </a>
          </nav>
        </div>
        <p className="mt-6 text-center text-sm text-emerald-200">© {new Date().getFullYear()} GreenBox. All rights reserved.</p>
      </div>
    </footer>
  );
}
