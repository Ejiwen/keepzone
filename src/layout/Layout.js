import React from "react"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="container">{children}</div>
    </div>
  )
}

export default Layout
