export class Question {
    id!: number;
    text!: string;
    reponses!: Reponse[];
}
  
export class Reponse {
    id!: number;
    text!: string;
    isCorrect!: boolean;
}