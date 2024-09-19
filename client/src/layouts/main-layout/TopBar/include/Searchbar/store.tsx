import {create} from 'zustand';

interface SearchbarState {
    text: string;
    showListItem: boolean;
    enter: (text: string) => void;
    showList: () => void;
    hiddenList: () => void;
}

const useSearchbarStore = create<SearchbarState>((set) => ({
    text: '',
    showListItem: false,
    enter: (text) => set(() => ({text: text})),
    showList: () => set({showListItem: true}),
    hiddenList: () => set({showListItem: false}),
}))

export default useSearchbarStore;