import { ReactElement, useState, memo } from "react"
import IconifyIcon from "@components/base/IconifyIcon"
import { Badge, IconButton} from "@mui/material"


const ShoppingcartIcon = () : ReactElement => {
    const [count] = useState(100);
    return (
        <Badge
            color="error"
            badgeContent= {count.toString()}
            sx={{
                padding: 1,
                '& .MuiBadge-badge': {
                top: 11,
                right: 11,
                },
            }}
        >
                <IconButton
                    sx={{
                        padding: 1,
                        color: 'text.primary',
                    }}
                >
                    <IconifyIcon icon="ic:outline-shopping-cart" width={29} height={32} />
                </IconButton>
        </Badge>
    )
}

export default memo(ShoppingcartIcon);