import { lazy, Suspense} from 'react';
import { Outlet, RouteObject, createBrowserRouter } from 'react-router-dom';
import paths, { rootPaths } from './paths';
import Splash from '@components/loading/Slash';
import PageLoader from '@components/loading/PageLoader';

const MainLayout = lazy(() => import('@layouts/main-layout'));

const App = lazy(() => import('@/App'));

const LoginPage = lazy(() => import('@pages/login-page/LoginPage'));
const RegisterPage = lazy(() => import('@pages/register-page/RegisterPage'));
const HomePage = lazy(() => import('@pages/home-page/HomePage'));
const ProductPage = lazy(() => import('@pages/product-page/ProductPage'));
const ErrorPage = lazy(() => import('@pages/error-page/ErrorPage'));

const routes: RouteObject[] = [
    {
        path: '/',
        element:  (
            <Suspense fallback = {<Splash/>}> 
                <App />
            </Suspense>
        ),
        children: [
            {
                path: rootPaths.homeRoot,
                element: (
                    <MainLayout>
                        <Suspense fallback = {<PageLoader/>}> 
                            <Outlet/>
                        </Suspense>
                    </MainLayout>
                ),
                children: [
                    {
                        index: true,
                        element: (
                            <HomePage/>
                        )
                    },
                    {
                        path: paths.login,
                        element: (
                            <LoginPage/>
                        )
                    },
                    {
                        path: paths.register,
                        element: (
                            <RegisterPage/>
                        )
                    },
                    {
                        path: paths.product,
                        element: (
                            <ProductPage/>
                        )
                    },
                ]
            }
        ]
    },
    {
        path: '*',
        element: (
            <ErrorPage/>
        )
    }
];

const options: { basename: string } = {
    basename: '/kkb',// thêm tên web trên địa chỉ url
};
  
const router  = createBrowserRouter(routes, options);

export default router;