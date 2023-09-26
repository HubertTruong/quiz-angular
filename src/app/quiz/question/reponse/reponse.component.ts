import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Reponse } from '../../../question.model';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {
  @Input() reponse!: Reponse;
  @Output() reponseSelected = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onSelect() {
    this.reponseSelected.emit(this.reponse.isCorrect);
  }
}
