import { Component, OnInit } from '@angular/core';
import { QuoteMe } from '../quote-me';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  upVotes = 0;
  downVotes = 0;

  UpVote() {
    this.upVotes = this.upVotes + 1;
  }
  DownVote() {
    this.downVotes = this.downVotes + 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
