import { NgModule } from '@angular/core';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './components/aside/aside.component';
import { MainContentComponent } from './components/main-content/main-content.component';



@NgModule({
  declarations: [MainPageComponent, AsideComponent, MainContentComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainPageComponent,
      },
    ]),
  ],
})
export class MainPageModule { }
