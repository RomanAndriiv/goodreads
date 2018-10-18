import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookList : AngularFireList<any>;
  selectedBook : Book = new Book();
  constructor(private firebase : AngularFireDatabase) { }

  getData(){
    this.bookList = this.firebase.list('book');
    return this.bookList;
  }

  insertBook(book:Book){
    this.bookList.push({
      author : book.author,
      avrRat : book.avrRat,
      cover : book.cover,
      title : book.title
    });
  }

  updateBook(book : Book){
    this.bookList.update(book.$key, {
      author : book.author,
      avrRat : book.avrRat,
      title : book.title,
      cover : book.cover
    })
  }

  deleteBook(key : string){
    this.bookList.remove(key);
  }
}
