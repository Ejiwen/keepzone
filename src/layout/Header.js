import React from "react"
import MenuBar from "./MenuBar"

const Header = () => {
  return (
    <header className="header">
      {/* <ul>
        <li>HOME</li>
        <li>TO-DO LIST</li>
        <li>NOTES</li>
        <li>Bookmarks</li>
        <li>Contact Keeper</li>
      </ul> */}

      <MenuBar />
    </header>
  )
}

export default Header
