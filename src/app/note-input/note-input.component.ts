import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.css'],
})
export class NoteInputComponent implements OnInit {
  textAreaRowsProperty: number;
  previousValue: number;
  constructor() {
    this.textAreaRowsProperty = 2;
    this.previousValue = 0;
  }
  ngOnInit() {}
  textAreaInput(event: Event) {
    const _inputData = (<HTMLInputElement>event.target)?.value
      ? (<HTMLInputElement>event.target)?.value
      : '';
    const _scrollLength = (<HTMLInputElement>event.target).scrollHeight;
    // code logic for the expension fo row in textArea
    const scrollBarRowLengthValue = _scrollLength - this.previousValue;
    if (scrollBarRowLengthValue == 15 || scrollBarRowLengthValue == 16) {
      this.textAreaRowsProperty += 1;
    }
    this.previousValue = _scrollLength;
  }
}
