import { ReactElement, useState, memo } from "react"
import IconifyIcon from "@components/base/IconifyIcon"
import { Badge, Box, IconButton, Tooltip} from "@mui/material"
import ShoppingCartIcon from "./include/ShoppingCartIcon";
import ShoppingCartListItem from "./include/ShoppingCartListItem";


const ShoppingCart = () : ReactElement => {
    return (
        <Box
            sx={{position: 'relative'}}
        >
            <ShoppingCartIcon/>
            <ShoppingCartListItem/>
        </Box>
       
    )
}

export default memo(ShoppingCart);