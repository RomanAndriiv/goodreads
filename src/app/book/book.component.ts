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
    this.bookService.insertBook(form.value);
    this.resetForm(form);
  }

  resetForm(form? : NgForm) {
    if (form != null)
      form.reset();
    this.bookService.selectedBook = {
      $key: '',
      author: '',
      avr_rat: 0,
      cover: '',
      title: '',
    }
  }

}
