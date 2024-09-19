import { createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import { useBreakpoints } from "./Breakpoints.provider";

interface TopbarContextInteface {
    isMobile: boolean;
    showSearchMobile: boolean;
    toggleSearhMobile: () => void; 
}

const TopbarContext = createContext({} as TopbarContextInteface);

const TopbarProvider = ({ children }: PropsWithChildren) => {
    const { down } = useBreakpoints();
    const isMobile = down('sm');

    const [showSearchMobile, setShowSearchMobile] = useState(false);

    const toggleSearhMobile = () => {
        setShowSearchMobile(!showSearchMobile);
    }

    useEffect(() => {
        if(!isMobile && showSearchMobile) {
            setShowSearchMobile(false);
        }
    },[isMobile])

    return (
        <TopbarContext.Provider value={{isMobile, showSearchMobile, toggleSearhMobile}}>
            {children}
        </TopbarContext.Provider>
    )
}

export const useTopbar = () => useContext(TopbarContext);

export default TopbarProvider;