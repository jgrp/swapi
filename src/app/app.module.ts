import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListComponent } from './list/list.component';
import { provideHttpClient } from '@angular/common/http';
import { PeopleItemComponent } from './list/components/people-item/people-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { DetailComponent } from './detail/detail.component';
import { provideRouter } from '@angular/router';
import { DetailItemComponent } from './detail/components/detail-item/detail-item.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PeopleItemComponent,
    DetailComponent,
    DetailItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatListModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
