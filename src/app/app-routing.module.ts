import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'splash-screen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'daily-recipe',
    loadChildren: () => import('./pages/daily-recipe/daily-recipe.module').then( m => m.DailyRecipePageModule)
  },
  {
    path: 'cookie-prep',
    loadChildren: () => import('./pages/cookie-prep/cookie-prep.module').then( m => m.CookiePrepPageModule)
  },
  {
    path: 'shop-policy',
    loadChildren: () => import('./pages/shop-policy/shop-policy.module').then( m => m.ShopPolicyPageModule)
  },
  {
    path: 'about-the-app',
    loadChildren: () => import('./pages/about-the-app/about-the-app.module').then( m => m.AboutTheAppPageModule)
  },
  {
    path: 'developers',
    loadChildren: () => import('./pages/developers/developers.module').then( m => m.DevelopersPageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'know-your-cookies',
    loadChildren: () => import('./pages/know-your-cookies/know-your-cookies.module').then( m => m.KnowYourCookiesPageModule)
  },
  {
    path: 'receipt',
    loadChildren: () => import('./pages/receipt/receipt.module').then( m => m.ReceiptPageModule)
  },
  {
    path: 'company-history',
    loadChildren: () => import('./pages/company-history/company-history.module').then( m => m.CompanyHistoryPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
