import { memo, ReactElement } from "react";
import productItems from "@data/product-item";
import { Box } from "@mui/material";
import SearchItem from "./SearchItem";
import { useSearchbar } from "../provider";

const SearchListItem = () : ReactElement => {
    const {text, showList} = useSearchbar();
    return (
        <Box 
            sx={{
                width: '100%',
                backgroundColor: 'background.paper',
                ml: {sm: 0, xs: 10},
                borderRadius: 2,
                visibility: showList ? 'visible' : 'hidden',
                position: 'absolute',
                top: 60,
            }}
        >
            {productItems.map((item : any, i) => 
                i < 5 && item.name.toLowerCase().includes(text.toLowerCase()) &&
                <SearchItem key={i} item= {item}/>
            )}
        </Box>
    )
}

export default memo(SearchListItem);