"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-white font-bold text-2xl">
          Emaan Imran
        </h1>

        <div className="space-x-6 text-white">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}