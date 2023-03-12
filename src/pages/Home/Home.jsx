import React from 'react'
import AppFooter from '../../components/AppFooter/AppFooter'
import AppHeader from '../../components/AppHeader/AppHeader'
import { PageContent } from '../../components/PageContent/PageContent'
import SideMenu from '../../components/SideMenu/SideMenu'
import './Home.css'


export const Home = () => {
    return (
        <div className="AppContent">
            <AppHeader />
            <div className="SideMenuAndPageContent">
                <SideMenu></SideMenu>
                <PageContent></PageContent>
            </div>
            <AppFooter />
        </div>
    )
}
