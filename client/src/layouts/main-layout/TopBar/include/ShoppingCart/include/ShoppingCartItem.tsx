
import { memo, ReactElement } from "react"
import { 
    Avatar,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack
} from "@mui/material"
import IconifyIcon from "@components/base/IconifyIcon";
import Image from "@components/base/Image";
import Keyboard from '@assets/images/product/keyboard.png';

const ShoppingCartItem = ({item} : {item: {name: string}}) : ReactElement => {
    return (
        <ListItemButton 
            component="a" 
            href="#" 
            sx={{m: 3, borderRadius: 2}}
        >
            <ListItemAvatar>
                <Image src = {Keyboard} height={50}/>
            </ListItemAvatar>
            <ListItemText sx= {{m: 0, mr: 5, width: '100%', textOverflow: 'ellipsis', whiteSpace: 'nowrap',overflow: 'hidden'}} primary= {item.name}/>
            <ListItemText sx= {{m: 0, pr: 5, color: 'error.main'}} primary= "₫500.000"/>
        </ListItemButton>
    )
}

export default memo(ShoppingCartItem);