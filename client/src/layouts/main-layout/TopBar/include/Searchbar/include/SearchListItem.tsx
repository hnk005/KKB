import IconifyIcon from "@components/base/IconifyIcon";
import productItems from "@data/product-item";
import { ElementProps } from "@core/type";
import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { ReactElement } from "react"
import SearchItem from "./SearchItem";

interface SearchListItemProps {
    text: string;
    show: boolean;
}

const SearchListItem : ElementProps<SearchListItemProps> = ({
    text,
    show,
}) : ReactElement => {
    return (
        <Box 
            sx={{
                width: '100%',
                backgroundColor: 'background.paper',
                ml: {sm: 0, xs: 10},
                borderRadius: 2,
                visibility: show ? 'visible' : 'hidden',
                position: 'absolute',
                top: 60,
            }}
        >
            {productItems.map((item : any, i) => 
                i < 5 && item.name.toLowerCase().includes(text) &&
                <SearchItem item= {item}/>
            )}
        </Box>
    )
}

export default SearchListItem;