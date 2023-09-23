import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from './Context'
import { Link } from 'react-router-dom'

const Submenu = () => {
    const { subLinks, showSubmenu, location,
        submenuLinks: { page, links } } = useGlobalContext()
    const [columns, setColumns] = useState('col-1')

    const container = useRef(null)
    const { center, bottom } = location
    useEffect(() => {
        setColumns('col-1')
        const submenu = container.current
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
        if (links.length > 2) {
            setColumns('col-2')
        }
    }, [location,columns])
    return (
        <aside className={`white-submenu ${showSubmenu ? 'show-submenu' : ''}`}
            ref={container}
        >
            <h4>{page}</h4>
            <div className={`white-submenu-sublinks ${columns} `}>
                {links.map(({ url, icon, label }, index) => {
                    return (
                        <Link className='white-submenu-sublinks-link'
                            key={index}
                            to={url} >
                            <span>{icon}</span>
                            {label}
                        </Link>
                    )
                })}
            </div>
        </aside>
    )
}

export default Submenu