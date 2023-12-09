import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.css'],
})
export class NoteInputComponent implements OnInit {
  @Input() inputValue = '';
  textSizeProperty = '0';
  sourceCode: string;
  dev: string;
  constructor() {
    this.textSizeProperty = '13';
    this.sourceCode = 'View Source Code';
    this.dev = 'developer profile';
  }
  ngOnInit() {}
  textAreaInput(event: Event) {
    const _inputData = (<HTMLInputElement>event.target)?.value
      ? (<HTMLInputElement>event.target)?.value
      : '';
    const _scrollLength = (<HTMLInputElement>event.target).scrollHeight;
  }
  openProjectCode() {
    window.open('https://github.com/hariomgola/notepad', '_self');
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
}
