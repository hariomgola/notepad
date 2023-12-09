import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.css'],
})
export class NoteInputComponent implements OnInit, OnDestroy {
  @Input() inputValue = '';
  textSizeProperty = '0';
  sourceCode: string;
  dev: string;
  storageType: boolean;
  textAreaValue = new Subject();

  constructor() {
    this.textSizeProperty = '13';
    this.sourceCode = 'View Source Code';
    this.dev = 'developer profile';
    this.storageType = true;
  }

  ngOnInit() {
    // logic for retriving the stored notes
    if (sessionStorage.getItem('notes')) {
      const _inputValue = sessionStorage.getItem('notes')
        ? `${sessionStorage.getItem('notes')}`
        : '';
      this.inputValue = _inputValue ? JSON.parse(_inputValue) : '';
      this.storageType = false;
    } else {
      const _inputValue = localStorage.getItem('notes')
        ? `${localStorage.getItem('notes')}`
        : '';
      this.inputValue = _inputValue ? JSON.parse(_inputValue) : '';
    }
  }

  textAreaInput(event: Event) {
    const _inputData = (<HTMLInputElement>event.target)?.value
      ? (<HTMLInputElement>event.target)?.value
      : '';
    this.textAreaValue.next(_inputData);
    this.textAreaValue.pipe(debounceTime(1000)).subscribe((data) => {
      if (this.storageType) {
        localStorage.setItem('notes', JSON.stringify(data));
      } else {
        sessionStorage.setItem('notes', JSON.stringify(data));
      }
    });
  }

  openPortfolioCode() {
    window.open('https://github.com/hariomgola', '_self');
  }

  changeTextSize(event: Event) {
    const _textSizeValue = (<HTMLInputElement>event.target)?.value
      ? (<HTMLInputElement>event.target)?.value
      : 10;
    this.textSizeProperty = `${_textSizeValue}`;
  }

  ngOnDestroy() {
    if (this.storageType) sessionStorage.removeItem('notes');
    this.textAreaValue.complete();
  }
}
