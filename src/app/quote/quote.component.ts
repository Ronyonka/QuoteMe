import { Component, OnInit } from '@angular/core';
import{QuoteMe} from '../quote-me';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   quotes = [
    new QuoteMe("Any dog under 50 pounds is a cat and cats are pointless.", "Ron Swanson"),
    new QuoteMe("Presents are the best way to show someone how much you care. It's like this tangible thing that you can point to and say, ‘Hey, man, I love you this many dollars worth.’","Michael Scott" ),
    new QuoteMe("A lie is just a great story that someone ruined with the truth.", "Barney Stinsen"),
    new QuoteMe("Anyone can be a lawyer. You can even represent yourself. You can't do surgery on yourself. It's illegal. You'd get arrested, and then you'd get a free lawyer.", "Abed Nadir"),
    new QuoteMe("It's not easy being drunk all the time. If it were easy, everyone would do it.", "Tyrion Lannister"),

  ]
  addNewQuoteMe(quote){
    let quoteLength = this.quotes.length;
    this.quotes.push(quote)
  }
  deleteQuoteMe(isComplete,index){
     if (isComplete){
         let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].author}`)

         if(toDelete){
             this.quotes.splice(index,1)
         }
     }
 }
  constructor() { }

  ngOnInit() {
  }
}
