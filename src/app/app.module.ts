import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { SelectorComponent } from './shared/selector/selector.component';
import { ConvertComponent } from './components/convert/convert.component';
import { CompareComponent } from './components/compare/compare.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleBtnsComponent } from './shared/toggle-btns/toggle-btns.component';
import { BtnComponent } from './shared/btn/btn.component';
import { InputComponent } from './shared/input/input.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { FlagListComponent } from './shared/flag-list/flag-list.component';
import { SpinnerLoadingComponent } from './shared/spinner-loading/spinner-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    ConvertComponent,
    CompareComponent,
    ToggleBtnsComponent,
    BtnComponent,
    InputComponent,
    FavouriteComponent,
    FlagListComponent,
    SpinnerLoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
