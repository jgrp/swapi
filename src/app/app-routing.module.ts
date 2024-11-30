import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { DetailResolver } from './detail/resolver/detail.resolver';

const routes: Routes = [
  {
    path: 'detail/:id',
    component: DetailComponent,
    resolve: {
      data: DetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [
  //   provideRouter(routes, withComponentInputBinding())
  // ]
})
export class AppRoutingModule {
}
