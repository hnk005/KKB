import { createContext, PropsWithChildren, useContext, useEffect } from 'react';
import {create} from 'zustand';
import { useTopbar } from '../../provider';

interface SearchbarContextInterface {
    text: string;
    showList: boolean;
    enterText: (text: string) => void;
    visibleList: () => void;
    hiddenList: () => void;
}

const searchbarStore = create<SearchbarContextInterface>((set) => ({
    text: '',
    showList: false,
    enterText: (text) => set(() => ({text: text})),
    visibleList: () => set({showList: true}),
    hiddenList: () => set({showList: false}),
}))

const SearchbarContext = createContext({} as SearchbarContextInterface);

const SearchbarProvider = ({ children }: PropsWithChildren)  => {
    const {
        text,
        showList,
        enterText,
        visibleList,
        hiddenList
    } = searchbarStore();

    const {isMobile} = useTopbar();

    useEffect(() => {
        if(isMobile && showList) {
            hiddenList();
        }
    },[isMobile])

    return (
        <SearchbarContext.Provider
            value={{
                text,
                showList,
                enterText,
                visibleList,
                hiddenList
            }}
        >
            {children}
        </SearchbarContext.Provider>
    )
}

export const useSearchbar = () => useContext(SearchbarContext);

export default SearchbarProvider;