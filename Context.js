import React, { useContext, useState } from 'react'
import sublinks from './Data'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
const [subLinks,setSubLinks]=useState(sublinks)
const [showMenu,setShowMenu]=useState(false)
const [showSubmenu,setSubmenu]=useState(false)
const [location,setLocation]=useState({})
  const [submenuLinks, setSubmenuLinks]=useState({page: '', links:[]})
//Functions
const openMenu = () => {
  setShowMenu(true)
}
const closeMenu = () => {
  setShowMenu(false)
}
  const openSubMenu = (text, coordinates) => {
  const page = sublinks.find((item)=> item.page === text)
    setLocation(coordinates)
    setSubmenuLinks(page)
  setSubmenu(true)
}
const closeSubMenu = () => {
  setSubmenu(false)
}


  return (
    <AppContext.Provider
      value={{
        submenuLinks,
        location,
        showSubmenu,
        showMenu,
        subLinks,
        openMenu,
        closeMenu,
        closeSubMenu,
        openSubMenu
      }}
    >
      {children}
    </AppContext.Provider>
  )

}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppProvider, AppContext }
