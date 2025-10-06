import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#696FC7] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left section: Website name */}
        <div>
          <h2 className="text-2xl font-bold">Open Shelf</h2>
          <p className="text-gray-300 text-sm">© 2025 Open Shelf. All rights reserved.</p>
        </div>

        {/* Links section */}
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-yellow-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
          <a
            href="https://github.com/rashiya795/OnlineBooks_Platform#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            README
          </a>
        </div>
      </div>
    </footer>
  );
}
