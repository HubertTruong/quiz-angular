import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question!: Question;
  @Output() questionAnswered = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onReponseSelected(isCorrect: boolean) {
    this.questionAnswered.emit(isCorrect);
  }
}
