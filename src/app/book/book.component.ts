import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private bookService : BookService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form : NgForm) {
    if (form.value.$key == null)  
      this.bookService.insertBook(form.value);
    else
      this.bookService.updateBook(form.value);
    this.resetForm(form);
  }

  resetForm(form? : NgForm) {
    if (form != null)
      form.reset();
    this.bookService.selectedBook = {
      $key: null,
      author: '',
      avrRat: 0,
      cover: '',
      title: '',
    }
  }

  onDelete(form : NgForm){
    if(confirm('Are you sure to delete this book?') === true){
      this.bookService.deleteBook(form.value.$key);
      this.resetForm(form);
    }
  }

}
