"use client";

interface OwnProps {
  variant?: 'dark' | 'light'
}

export default function Navbar({ variant = 'light' }: OwnProps) {
  return (
    <div className="w-full flex top-0 justify-center fixed z-50">
      <nav className={`w-full ${variant === 'dark' ? 'bg-brown-100' : 'bg-primary'}`}>
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={variant === 'dark' ? "/logo_white.png" : '/logo_black.png'}
              className="h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          </a>
          <div className={`md:block w-auto font-zodiak-regular ${variant === 'dark' ? 'text-primary' : 'text-black'}`}>
            Est. 2024
          </div>
        </div>
      </nav>
    </div>
  );
}
