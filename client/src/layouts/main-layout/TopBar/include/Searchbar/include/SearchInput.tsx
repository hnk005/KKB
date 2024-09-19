import { memo, ReactElement, useEffect, useRef, useState} from 'react'
import IconifyIcon from "@/components/base/IconifyIcon"
import { IconButton, TextField } from "@mui/material"
import { useTopbar } from '@/providers/Topbar.provider';
import { ElementProps } from '@/core/type';

interface SearchInputProps {
    searchText: string;
    setSearchText: (text: string) => void;
    showList: () => void;
    hiddenList: () => void;
}

const SearchInput : ElementProps<SearchInputProps> = ({
    searchText,
    setSearchText,
    showList,
    hiddenList
}) : ReactElement => {
    const {showSearchMobile, toggleSearhMobile} = useTopbar();
    return (
        <>
            <IconButton
                  color="inherit"
                  sx={{
                    display: { xs: 'flex', sm: 'none'},
                    width: 40,
                    height: 40,
                  }}
                  onClick={toggleSearhMobile}
              >
                  <IconifyIcon icon= {showSearchMobile ? 'basil:arrow-left-outline' : "mdi:search" } />
            </IconButton>
            <TextField
                value= {searchText}
                onChange= {(e) => setSearchText(e.target.value)}
                variant= 'outlined'
                fullWidth
                placeholder= "Nhập từ khóa"
                sx={{
                    visibility: {xs: showSearchMobile ? 'visible' : 'hidden', sm: 'visible'},
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: 'text.primary',
                            borderWidth: 1,
                        }
                    }
                }}
                slotProps={
                    {
                        input: {
                            endAdornment: (
                                <IconButton
                                    sx={{
                                        padding: 5,
                                        cursor: 'pointer',
                                        borderRadius: 10,
                                        color: 'text.secondary',
                                        height: 40,
                                        ':hover': {
                                            backgroundColor: 'action.hover'
                                        }
                                    }}
                                    onClick={() => console.log('search')}
                                >
                                <IconifyIcon icon="akar-icons:search" width={13} height={13}/>
                                </IconButton>
                            ),
                            style: {
                                borderRadius: 10,
                            }
                        }
                    }
                }
                onClick= {showList}
                onFocus= {showList}
                onBlur= {hiddenList}
            />
        </>
       
    )
}

export default memo(SearchInput);