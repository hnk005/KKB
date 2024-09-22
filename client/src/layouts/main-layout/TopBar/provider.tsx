import { 
    createContext, 
    PropsWithChildren, 
    useContext, 
    useEffect, 
} from "react";
import { useBreakpoints } from "@providers/Breakpoints.provider";
import { create } from "zustand";

interface TopbarContextInteface {
    isMobile: boolean;
    showSearchMobile: boolean;
    setIsMobile: (mobile: boolean) => void;
    toggleSearchMobile: () => void;
}

const topbarStore = create<TopbarContextInteface>((set) => ({
    isMobile: false,
    showSearchMobile: false,
    setIsMobile: (mobile) => set({isMobile: mobile}),
    toggleSearchMobile: () => set((state) => ({showSearchMobile: !state.showSearchMobile}))
}))

const TopbarContext = createContext({} as TopbarContextInteface);

const TopbarProvider = ({ children }: PropsWithChildren) => {
    const { down } = useBreakpoints();

    const mobile = down('sm');

    const isMobile = topbarStore((state) => state.isMobile);
    const showSearchMobile = topbarStore((state) => state.showSearchMobile);
    const setIsMobile = topbarStore((state) => state.setIsMobile);
    const toggleSearchMobile = topbarStore((state) => state.toggleSearchMobile);

    useEffect(() => {
        if(!isMobile && showSearchMobile) {
            toggleSearchMobile()
        }
    },[isMobile])
    
    useEffect(() => {
        setIsMobile( mobile)
    }, [mobile])

    return (
        <TopbarContext.Provider 
            value={{
                isMobile,
                showSearchMobile, 
                setIsMobile,
                toggleSearchMobile
            }}
        >
            {children}
        </TopbarContext.Provider>
    )
}

export const useTopbar = () => useContext(TopbarContext);

export default TopbarProvider;