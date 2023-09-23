import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './Context'

const Nav = () => {
    const { subLinks, openMenu, openSubMenu, closeSubMenu } = useGlobalContext()
    const displaySubmenu = (e) => {
        const page = e.target.textContent
        const tempBtn = e.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right) / 2
        const bottom = tempBtn.bottom + 5
        openSubMenu(page, { center, bottom })
    }
    const tempF = (e) => {
        if (!e.target.classList.contains('nav-links')) {
            closeSubMenu()
        }
    }
    return (
        <nav
            onMouseEnter={tempF}
        >
            <h3 className='margin-remove' >strapi</h3>
            <ul className='nav-links'
            >
                {subLinks.map((item, index) => {
                    const { page } = item
                    return <li key={index}>
                        <button
                            onMouseOver={displaySubmenu}
                        >
                            {page}
                        </button>
                    </li>
                })}
            </ul>
            <button className='toggle-btn'
                onClick={openMenu}
            >
                <FaBars />
            </button>
        </nav>
    )
}

export default Nav