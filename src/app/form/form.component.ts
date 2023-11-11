import { Component, EventEmitter, Output } from '@angular/core';
import { Quotation } from 'src/models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() newQuotation = new EventEmitter<Quotation>()
  quotation: Quotation = { author: '', sentence: '', votes: 0 }
  showForm = false;

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuotation() {
    this.newQuotation.emit(this.quotation);
    this.quotation = { author: '', sentence: '', votes: 0 }
  }

}
