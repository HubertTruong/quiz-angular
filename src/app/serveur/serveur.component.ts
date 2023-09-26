import { Component, OnInit } from '@angular/core';
import { Question, Reponse } from '../question.model';

@Component({
  selector: 'app-serveur',
  templateUrl: './serveur.component.html',
  styleUrls: ['./serveur.component.css']
})
export class ServeurComponent implements OnInit {
  questions: Question[] = [
    {
      "id": 1,
      "text": "Quel est le premier jutsu du Mangekyou Sharingan que Sasuke utilise?",
      "reponses": [
        { "id": 1, "text": "Kamui", "isCorrect": false },
        { "id": 2, "text": "Amaterasu", "isCorrect": true },
        { "id": 3, "text": "Tsukuyomi", "isCorrect": false },
        { "id": 4, "text": "Susanoo", "isCorrect": false }
      ]
    },
    {
      "id": 2,
      "text": "Qui est responsable de la mort des parents de Sasuke?",
      "reponses": [
        { "id": 1, "text": "Danzo", "isCorrect": false },
        { "id": 2, "text": "Kakashi", "isCorrect": false },
        { "id": 3, "text": "Orochimaru", "isCorrect": false },
        { "id": 4, "text": "Itachi", "isCorrect": true }
      ]
    },
    {
      "id": 3,
      "text": "Quelle est la signification du nom 'Sarada'?",
      "reponses": [
        { "id": 1, "text": "Fleur", "isCorrect": false },
        { "id": 2, "text": "Espoir", "isCorrect": false },
        { "id": 3, "text": "Salade", "isCorrect": true },
        { "id": 4, "text": "Lumière", "isCorrect": false }
      ]
    },
    {
      "id": 4,
      "text": "Qui n'a PAS possédé le Mangekyou Sharingan?",
      "reponses": [
        { "id": 1, "text": "Shisui", "isCorrect": false },
        { "id": 2, "text": "Izuna", "isCorrect": false },
        { "id": 3, "text": "Madara", "isCorrect": false },
        { "id": 4, "text": "Fugaku", "isCorrect": true }
      ]
    },
    {
      "id": 5,
      "text": "Comment Sasuke obtient-il le Rinnegan?",
      "reponses": [
        { "id": 1, "text": "Il l'a volé", "isCorrect": false },
        { "id": 2, "text": "Il est né avec", "isCorrect": false },
        { "id": 3, "text": "Grâce au chakra d'Indra", "isCorrect": false },
        { "id": 4, "text": "Grâce au chakra de Hagoromo", "isCorrect": true }
      ]
    },
    {
      "id": 6,
      "text": "Qui a offert son œil à Kakashi pour remplacer son Sharingan perdu?",
      "reponses": [
        { "id": 1, "text": "Madara", "isCorrect": false },
        { "id": 2, "text": "Obito", "isCorrect": true },
        { "id": 3, "text": "Itachi", "isCorrect": false },
        { "id": 4, "text": "Sasuke", "isCorrect": false }
      ]
    },
    {
      "id": 7,
      "text": "Contre qui Itachi utilise-t-il Izanami pour la première fois?",
      "reponses": [
        { "id": 1, "text": "Sasuke", "isCorrect": false },
        { "id": 2, "text": "Kabuto", "isCorrect": true },
        { "id": 3, "text": "Orochimaru", "isCorrect": false },
        { "id": 4, "text": "Nagato", "isCorrect": false }
      ]
    },
    {
      "id": 8,
      "text": "Qui est le créateur du clan Uchiha?",
      "reponses": [
        { "id": 1, "text": "Indra", "isCorrect": true },
        { "id": 2, "text": "Ashura", "isCorrect": false },
        { "id": 3, "text": "Hagoromo", "isCorrect": false },
        { "id": 4, "text": "Hamura", "isCorrect": false }
      ]
    },
    {
      "id": 9,
      "text": "Quel jutsu Itachi utilise-t-il pour éliminer les clones de Naruto?",
      "reponses": [
        { "id": 1, "text": "Amaterasu", "isCorrect": false },
        { "id": 2, "text": "Tsukuyomi", "isCorrect": false },
        { "id": 3, "text": "Izanagi", "isCorrect": false },
        { "id": 4, "text": "Magen: Kyouten Chiten", "isCorrect": true }
      ]
    },
    {
      "id": 10,
      "text": "Comment Madara a-t-il obtenu le Rinnegan?",
      "reponses": [
        { "id": 1, "text": "En combinant son chakra avec celui de Hashirama", "isCorrect": true },
        { "id": 2, "text": "En prenant les yeux de son frère Izuna", "isCorrect": false },
        { "id": 3, "text": "En s'entraînant avec Hagoromo", "isCorrect": false },
        { "id": 4, "text": "En utilisant le sceau de la renaissance", "isCorrect": false }
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
