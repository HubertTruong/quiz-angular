import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  questions = [
    { text: `Qui est le professeur de Naruto à l'académie ninja?`, reponses: ['Jiraiya', 'Tsunade', 'Kakashi', 'Iruka'] },
    { text: `Qui sont les trois membres de l'équipe 7?`, reponses: ['Naruto, Sakura, Sasuke', 'Shikamaru, Choji, Ino', 'Neji, Tenten, Rock Lee', 'Kiba, Hinata, Shino'] },
    { text: `Comment s'appelle le jutsu signature de Naruto?`, reponses: ['Amaterasu', 'Byakugan', 'Chidori', 'Rasengan'] },
    { text: `Qui est le père de Naruto?`, reponses: ['Jiraiya', 'Minato Namikaze', 'Fugaku Uchiha', 'Hiruzen Sarutobi'] },
    { text: `Quel membre de l'Akatsuki est responsable de l'enlèvement de Gaara?`, reponses: ['Itachi', 'Deidara', 'Kisame', 'Pain'] },
    { text: `Qui est le jinchuriki de l'Hachibi (huit queues)?`, reponses: ['Naruto Uzumaki', 'Gaara', 'Killer B', 'Yugito Nii'] },
    { text: `Comment s'appelle le jutsu d'oeil du clan Uchiha?`, reponses: ['Rinnegan', 'Tenseigan', 'Sharingan', 'Byakugan'] },
    { text: `Quel personnage est connu comme "l'éclair jaune de Konoha"?`, reponses: ['A', 'Kakashi Hatake', 'Minato Namikaze', 'Jiraiya'] },
    { text: `Qui a tué Rin Nohara?`, reponses: ['Madara Uchiha', 'Obito Uchiha', 'Kakashi Hatake', 'Itachi Uchiha'] },
    { text: `Quelle est la principale raison pour laquelle Sasuke veut tuer Itachi?`, reponses: ['Pour protéger Naruto', 'Pour obtenir le Rinnegan', 'Pour venger son clan', 'Pour rejoindre Akatsuki'] },
  ];
  correctAnswers = [3, 0, 3, 1, 1, 2, 2, 2, 2, 2];
  correctAnswersCount = 0;
  userAnswers: number[] = [];
  score: number | null = null;
  errorMessage: string | null = null;
  showResults: boolean = false;
  audio = new Audio();

  ngOnInit(): void {
    this.playAudio();
  }

  playAudio(): void {
    this.audio.src = "assets/BlueBird.mp3";
    this.audio.load();
    this.audio.play();
  }

  captureAnswer(questionIndex: number, answerIndex: number) {
      this.userAnswers[questionIndex] = answerIndex;
  }

  submitAnswers() {
    this.errorMessage = null;
    this.correctAnswersCount = 0;
  
    let unansweredCount = 0;
    
    for (let i = 0; i < this.questions.length; i++) {
      if (this.userAnswers[i] === undefined || this.userAnswers[i] === null) {
        unansweredCount++;
        continue;
      }
  
      if (this.correctAnswers[i] === this.userAnswers[i]) { 
        this.correctAnswersCount++;
      }
    }
  
    if (unansweredCount > 0) {
      this.errorMessage = `Vous n'avez pas coché ${unansweredCount} réponses. Veuillez compléter pour avoir votre résultat.`;
    } else {
      this.showResults = true;
    }
  }
}
