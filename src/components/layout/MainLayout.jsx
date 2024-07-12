import React from 'react'
import { NavbarComponent } from './NavbarComponent'
import { FooterComponent } from './FooterComponent'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
        <header>
          <NavbarComponent/>
        </header>

        <main>
            <Outlet/>
        </main>

        <footer>
          <FooterComponent/>
        </footer>
    </>
  )
}
