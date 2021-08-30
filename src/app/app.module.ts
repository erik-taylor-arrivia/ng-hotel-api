import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchLoaderComponent } from './components/search-loader/search-loader.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchListComponent,
    SearchResultsComponent,
    SearchLoaderComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
