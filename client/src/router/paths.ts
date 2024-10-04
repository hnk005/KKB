export const rootPaths = {
    homeRoot: '/',
    product: 'product',
    errorRoot: 'error',
};

export default { 
    home: `${rootPaths.homeRoot}`,
    login: `login`,
    register: `register`,
    product_detail: `${rootPaths.product}/:id`,
    shopping_cart: 'shopping_cart',
    404: `404`,
}

