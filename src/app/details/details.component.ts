import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{QuoteMe} from '../quote-me';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() quote:QuoteMe;
  @Output() isComplete= new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}
  constructor() { }

  ngOnInit() {
  }

}
