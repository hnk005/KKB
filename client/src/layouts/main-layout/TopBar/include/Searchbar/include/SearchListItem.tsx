import { memo, ReactElement, useMemo } from "react";
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
                display: showList ? 'block' : 'none',
                position: 'absolute',
                top: 60,
            }}
        >
            {productItems.map((item : any, i) => 
                item.name.toLowerCase().includes(text.toLowerCase()) && text !== '' &&
                <SearchItem key={i} item= {item}/>
            )}
        </Box>
    )
}

export default memo(SearchListItem);