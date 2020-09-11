import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  {
    path: 'homeuser',
    loadChildren: () => import('./pages/user/homeuser/homeuser.module').then( m => m.HomeuserPageModule)
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/user/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/user/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'homeuser',
    loadChildren: () => import('./pages/user/homeuser/homeuser.module').then( m => m.HomeuserPageModule)
  },
  {
    path: 'homeproduct',
    loadChildren: () => import('./pages/products/homeproduct/homeproduct.module').then( m => m.HomeproductPageModule)
  },
  {
    path: 'addproduct',
    loadChildren: () => import('./pages/products/addproduct/addproduct.module').then( m => m.AddproductPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'miperfil',
    loadChildren: () => import('./pages/miperfil/miperfil.module').then( m => m.MiperfilPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'preview',
    loadChildren: () => import('./pages/pro-products/preview/preview.module').then( m => m.PreviewPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/pro-products/form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/pro-products/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'homechat',
    loadChildren: () => import('./pages/chat/homechat/homechat.module').then( m => m.HomechatPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/chat/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'chat/:id',
    loadChildren: () => import('./pages/chat/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/orders/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/user/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./pages_admin/admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
