import { memo } from 'react';
import { Stack} from "@mui/material";
import SearchInput from './include/SearchInput';
import SearchListItem from './include/SearchListItem';
import SearchbarProvider from './provider';

const Searchbar = () => {
    return (
        <SearchbarProvider>
            <Stack
                gap={2}
                flexDirection={'row'}
                alignItems={'center'}
                sx={{position: 'relative', width: '100%'}}
            >
                <SearchInput />
                <SearchListItem />
            </Stack>
        </SearchbarProvider>
        
    )
}

export default memo(Searchbar);