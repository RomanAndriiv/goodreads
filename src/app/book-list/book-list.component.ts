import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book.model';
import { BookService } from '../shared/book.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList : Book[];
  constructor(private bookService : BookService) { }

  ngOnInit() {
    let x = this.bookService.getData();
    x.snapshotChanges().subscribe(item => {
      this.bookList = [];
      item.forEach(el => {
        let y = el.payload.toJSON();
        y["$key"] = el.key;
        this.bookList.push(y as Book);
      })
    });
  }

  onItemClick(book : Book) {
    this.bookService.selectedBook = Object.assign({}, book);
  }

}
