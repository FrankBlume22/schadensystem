import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  // Neu mit Iteration 3
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TokenInterceptor } from './shared/token-interceptor';
import { FormsModule } from '@angular/forms';                               // Neu mit Iteration 4
import { DateValueAccessorModule } from 'angular-date-value-accessor';      // Neu mit Iteration 4
import { BookFormComponent } from './book-form/book-form.component';        // Neu mit Iteration 4
import { CreateBookComponent } from './create-book/create-book.component';  // Neu mit Iteration 4

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    HomeComponent,
    SearchComponent,
    BookFormComponent,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,        // Neu mit Iteration 3
    FormsModule,             // Neu mit Iteration 4
    DateValueAccessorModule, // Neu mit Iteration 4
    AppRoutingModule         // Wird automatisch angelegt bei der Anlage der Datei: app-routing.module.ts
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
