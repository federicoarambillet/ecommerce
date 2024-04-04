import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('@shared/components/layout/layout.component').then(c => c.LayoutComponent),
        children: [
            {
                path: "",
                loadComponent: () => import('@domains/products/pages/list/list.component')
            },
            {
                path: "about",
                loadComponent: () => import('@domains/info/pages/about/about.component').then(c => c.AboutComponent)
            },
            {
                path: "products/:id",
                loadComponent: () => import('@domains/products/pages/product-detail/product-detail.component').then(c => c.ProductDetailComponent)
            }
        ]
    },
    {
        path: "**",
        loadComponent: () => import('@domains/info/pages/not-found/not-found.component').then(c => c.NotFoundComponent)
    }
];