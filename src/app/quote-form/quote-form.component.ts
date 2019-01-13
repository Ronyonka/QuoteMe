import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{QuoteMe} from '../quote-me';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  new QuoteMe = new quote("", "");
  @Output() addQuoteMe = new EventEmitter<QuoteMe>();
  submitQuoteMe(){
    this.addQuoteMe.emit(this.newQuoteMe)
  }
  constructor() { }

  ngOnInit() {
  }

}
