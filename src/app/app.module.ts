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
import { DetailItemComponent } from './detail/components/detail-item/detail-item.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PeopleEffects } from './shared/state/people.effects';
import { peopleReducer } from './shared/state/people.reducer';
import { AddModalComponent } from './shared/components/add-modal/add-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PeopleItemComponent,
    DetailComponent,
    DetailItemComponent,
    AddModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot({}),
    StoreModule.forFeature('people', peopleReducer),
    EffectsModule.forFeature([PeopleEffects]),
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
