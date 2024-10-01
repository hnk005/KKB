import { Container } from "@mui/material";
import { ReactElement } from "react"
import ProductListCart from "@/components/secsions/product/ProductListCard";


const HomePage = () : ReactElement => {
    return (
        <Container sx= {{backgroundColor: 'common.black'}}>
           <ProductListCart/>
        </Container>
    )
}

export default HomePage;