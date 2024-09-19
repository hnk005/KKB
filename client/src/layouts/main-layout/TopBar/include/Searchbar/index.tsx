import { memo, useState} from 'react'
import IconifyIcon from "@/components/base/IconifyIcon"
import { Box, IconButton, Stack, TextField } from "@mui/material"
import SearchInput from './include/SearchInput'
import SearchListItem from './include/SearchListItem'
import useSearchbarStore from './store'




const Searchbar = () => {
    const {
        text, 
        showListItem,
        enter,
        showList,
        hiddenList,
    } = useSearchbarStore();
    
    return (
        <Stack
            gap={2}
            flexDirection={'row'}
            alignItems={'center'}
            sx={{position: 'relative', width: '100%'}}
        >
            <SearchInput 
                searchText= {text} 
                setSearchText= {enter}
                showList= {showList}
                hiddenList= {hiddenList}
            />
            <SearchListItem 
                text= {text}
                show= {showListItem}
            />
        </Stack>
    )
}

export default memo(Searchbar);