import React from 'react'
import Menu from './Menu'
import Nav from './Nav'
import { useGlobalContext } from './Context'
import Submenu from './Submenu'
function App() {
    const { closeSubMenu } = useGlobalContext()
    return <main>
        <Nav />
        <Submenu />
        <article className='hero-container'
        onMouseEnter={closeSubMenu}
        >
                <div className="hero-content">
                    <h1>Manage Any Content Anywhere</h1>
                    <p>Strapi is the leading open-source headless CMS. It's 100% JavaScript and fully customizable</p>
                </div>
            </article>
            <Menu />
        </main>

}
export default App