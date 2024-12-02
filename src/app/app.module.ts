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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPersonFormComponent } from './shared/components/add-person-form/add-person-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PeopleItemComponent,
    DetailComponent,
    DetailItemComponent,
    AddPersonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
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
