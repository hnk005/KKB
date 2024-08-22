interface SubCategoryItem {
    label: string,
    href: string,
}

interface SubCategory {
    title: string,
    item: SubCategoryItem[],
}

interface Category {
    visable: boolean,
    label: string,
    icon: string,
    href: string,
    subCategory: SubCategory[],
}

export default Category;