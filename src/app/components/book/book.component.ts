import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: any;

  constructor(private booksService: BooksService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe((data) => {
      this.book = data.singleBook[0];
    });
  }

  // getBookById() {
  //   const identifier = this.activatedRoute.snapshot.paramMap.get('id');

  //   console.log('Id ->', identifier);

  //   this.booksService.getBookById(parseInt(identifier)).subscribe((book) => {
  //     if (!book) {
  //       return this.router.navigateByUrl("/");
  //     }
  //     this.book = book;
  //     this.loaded = true;
  //     console.log('book ->', this.book);
  //   });

  //   console.log('Fin')
  // }

}
