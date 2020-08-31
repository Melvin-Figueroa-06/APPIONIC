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
    path: 'admin-dashboard',
    loadChildren: () => import('./pages/admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
 
  
  
 
 
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }