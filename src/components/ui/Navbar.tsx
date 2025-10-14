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
    <nav className="flex gap-2 justify-center bg-(--primary) p-2">
        {appcontent.map(( {tag,name},idx ) => {
            return (
                <a href={tag} className="text-(--secondary) flex flex-row items-center gap-1">
                    {name}<span className="text-(--complementary)">{idx < appcontent.length - 1 ?'>' : ''}</span>
                </a>
            )
        })}
    </nav>
  )
}
