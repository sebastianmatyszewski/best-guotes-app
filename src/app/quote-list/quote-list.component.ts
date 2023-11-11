import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quotation } from 'src/models/quotation';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent {
  @Input() quotes: Quotation[] = [];

  @Output() addVoteHandler = new EventEmitter<QuotationEvent>()

  onVote(quotation: Quotation, value: number) {
    // Tutaj wartości są przekazywane jako obiekt
    this.addVoteHandler.emit({quotation, value});
  }
}

export interface QuotationEvent {
  quotation: Quotation;
  value: number
}
