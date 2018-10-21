import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  public selectedBook;
  constructor(private route : ActivatedRoute, private bookService : BookService) {
    this.route.params.subscribe( params => this.selectedBook = params.id );  
  }

  ngOnInit() {
    let key = parseInt(this.route.snapshot.paramMap.get('id'));
    let book = this.bookService.selectedBook;
    this.selectedBook = book;
  }

}
