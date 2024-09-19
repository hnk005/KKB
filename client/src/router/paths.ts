export const rootPaths = {
    homeRoot: '/',
    errorRoot: 'error',
};

export default { 
    home: `${rootPaths.homeRoot}`,
    login: `/${rootPaths.homeRoot}/login`,
    register: `/${rootPaths.homeRoot}/register`,
    404: `/${rootPaths.errorRoot}/404`,
}

