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
    <nav className="flex gap-2">
        {appcontent.map(( {tag,name},idx ) => {
            return (
                <p>
                    <a href={tag}>
                        {name}<span className="">{idx < appcontent.length - 1 && ' >'}</span>
                    </a>
                </p>
            )
        })}
    </nav>
  )
}
