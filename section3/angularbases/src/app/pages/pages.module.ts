import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ]
})
export class PagesModule { }
