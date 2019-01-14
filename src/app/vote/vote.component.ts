import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import{QuoteMe} from '../quote-me';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() quote:QuoteMe;
  @Output() isComplete = EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

}
