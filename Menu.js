import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'
import {Link} from 'react-router-dom'

const Menu = () => {
    const { subLinks, showMenu, closeMenu } = useGlobalContext()
    return (
        <section className={`menu ${showMenu ? 'show-menu' : ''} `}>
            <div className="list-container">
                <div className="close-btn-container">
                    <button className='close-btn'
                        onClick={closeMenu}
                    >
                        <FaTimes />
                    </button>
                </div>
                <div>
                    {subLinks.map((item, index) => {
                        const { page, links } = item
                        return (
                            <article className="sub-links" key={index}>
                                <h3>
                                    {page}
                                </h3>
                                <div className="sub-menu">
                                    {links.map((subItem, index) => {
                                        const { label, url, icon } = subItem
                                        return (
                                            <div key={index} className="mini-sub-menu">
                                                <h4 className='margin-remove margin-right'>{icon}</h4>
                                                    <Link className='link' to={url}>
                                                        {label}
                                                    </Link>
                                            </div>)
                                    })}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}

export default Menu