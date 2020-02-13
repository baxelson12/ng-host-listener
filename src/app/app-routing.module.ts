import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ScrollComponent } from './scroll/scroll.component';
import { ScrollAfterClickComponent } from './scroll-after-click/scroll-after-click.component';


const routes: Routes = [
  {path: 'scroll', component: ScrollComponent},
  {path: 'click', component: ScrollAfterClickComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
