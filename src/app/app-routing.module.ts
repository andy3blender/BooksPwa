import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';
import { SingleBookResolver } from './components/book/book.resolver';

const routes: Routes = [
  { path: '', component: BooksComponent },
  {
    path: 'book/:id', component: BookComponent,
    resolve: {
      singleBook: SingleBookResolver
    }
  },
  { path: '**', component: BooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
