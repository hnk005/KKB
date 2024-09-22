import { memo, ReactElement, useEffect} from 'react'
import IconifyIcon from "@/components/base/IconifyIcon"
import { IconButton, TextField } from "@mui/material"
import { useTopbar } from '@/layouts/main-layout/TopBar/provider';
import { useSearchbar } from '../provider';

const SearchInput = () : ReactElement => {
    const { isMobile, showSearchMobile, toggleSearchMobile} = useTopbar();
    const { text, enterText, visibleList, hiddenList} = useSearchbar();
    
    return (
        <>
            <IconButton
                  color="inherit"
                  sx={{
                    display: { xs: 'flex', sm: 'none'},
                    width: 40,
                    height: 40,
                  }}
                  onClick={toggleSearchMobile}
              >
                  <IconifyIcon icon= {showSearchMobile ? 'basil:arrow-left-outline' : "mdi:search" } />
            </IconButton>
            <TextField
                value= {text}
                onChange= {(e) => enterText(e.target.value)}
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
                                <>
                                    <IconButton
                                        sx={{
                                            cursor: 'pointer',
                                            borderRadius: 10,
                                            color: 'text.secondary',
                                            visibility: 
                                                isMobile ? (text !== '' && showSearchMobile ? 'visible' : 'hidden') 
                                                : (text !== '' ? 'visible' : 'hidden'),
                                            height: 40,
                                            width: 40,
                                            ':hover': {
                                                backgroundColor: 'action.hover'
                                            }
                                        }}
                                        onClick={() => enterText('')}
                                    >
                                        <IconifyIcon icon="bi:x" width={30} height={30}/>
                                    </IconButton>
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
                                        <IconifyIcon icon="akar-icons:search" width={20} height={20}/>
                                    </IconButton>
                                </>
                                
                            ),
                            style: {
                                borderRadius: 10,
                            }
                        }
                    }
                }
                onFocus= {visibleList}
                onBlur= {hiddenList}
            />
        </>
       
    )
}

export default memo(SearchInput);