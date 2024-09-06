"use client";

export default function Navbar() {
  const onHomeClick = () => {};

  return (
    <div className="w-full flex top-0 justify-center fixed z-10">
      <nav className="w-full bg-primary">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo_black.png"
              className="h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          </a>
          <div className="md:block w-auto font-zodiak-regular">
            Est. 2024
          </div>
        </div>
      </nav>
    </div>
  );
}
