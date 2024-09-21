import { memo, ReactElement } from "react"
import { 
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material"
import IconifyIcon from "@components/base/IconifyIcon";
import { useSearchbar } from "../provider";

const SearchItem = ({item} : {item: {name: string}}) : ReactElement => {
    const { enterText } = useSearchbar();
    return (
        <ListItemButton 
            component="a" 
            href="#" 
            sx={{m: 3, borderRadius: 2}}
            onMouseDown={() => enterText(item.name)}
        >
            <ListItemIcon
                sx={{
                    minWidth: `0 !important`,
                    mr: 5,
                }}
            >
                <IconifyIcon
                    icon= "basil:search-solid"
                />
            </ListItemIcon>
            <ListItemText sx= {{m: 0}} primary= {item.name}/>
        </ListItemButton>
    )
}

export default memo(SearchItem);