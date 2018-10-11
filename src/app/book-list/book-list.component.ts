import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';

import { Book } from '../shared/book.model';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList : AngularFireList<Book>;
  constructor(private bookService : BookService) { }

  ngOnInit() {
    this.bookService.getData();
  }

}
