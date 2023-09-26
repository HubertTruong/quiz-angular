import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input() questions!: Question[];
  currentQuestionIndex: number = 0;
  score: number = 0;
  finished: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.playMusic();
    if (this.questions && this.questions.length > 0) {
      this.currentQuestionIndex = 0;
    }
  }
  
  playMusic(): void {
    const audio = new Audio('/assets/itachi.mp3');
    audio.play();
  }

  onReponseClick(isCorrect: boolean): void {
    this.playMusic();
    if (isCorrect) this.score++;
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.questions.length) {
      alert(`Votre score est de ${this.score}/${this.questions.length}`);
    }
  }

  get currentQuestion(): Question | null {
    return this.questions ? this.questions[this.currentQuestionIndex] : null;
  }

  onQuestionAnswered(isCorrect: boolean): void {
    if (isCorrect) {
      this.score++;
    }
    
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.finished = true;
    }
  }

  resetQuiz(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.finished = false;
  }
}