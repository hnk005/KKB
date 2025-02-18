import { ReactElement } from "react"
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import Page from "./page"
import CartIcon from "./components/Cart"

const Layout = () : ReactElement => {
    return (
        <>
            <Header />
            <Page/>
            <CartIcon/>
            <Footer />
        </>
    )
}

export default Layout;