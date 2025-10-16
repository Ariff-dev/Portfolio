import type { AppContentNav } from "./ui.interface"

export const Navbar = () => {
    const appcontent:AppContentNav[] = [
        { name: 'Hero', tag: '#hero', },
        { name: 'About', tag: '#about' },
        { name: 'Stack', tag: '#stack' },
        { name: 'Experience', tag: '#exp' },
        { name: 'Contact', tag: '#contact' },
    ]
  return (
   <nav
  className="fixed top-1 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[var(--primary)] rounded-xl shadow-md"
>
  {appcontent.map(({ tag, name }, idx) => (
    <a
      key={idx}
      href={tag}
      className="text-[var(--secondary)] font-medium hover:opacity-80 transition"
    >
      {name}
      {idx < appcontent.length - 1 && (
        <span className="mx-1 text-[var(--secondary)]">{'>'}</span>
      )}
    </a>
  ))}
</nav>
  )
}
