import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../main-page/main-page.module').then((module) => module.MainPageModule),
      }
    ],
  },
];


@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainLayoutModule { }
