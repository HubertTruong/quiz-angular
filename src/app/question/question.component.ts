import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {
    @Input() questionText!: string;
    @Input() reponses!: string[];
    @Output() answerSelected = new EventEmitter<number>();
    @Input() correctReponse!: string;
    @Input() isConfirmed: boolean = false;

    selectedReponse!: string;

    updateSelection(selected: string) {
        this.selectedReponse = selected;
        const selectedIndex = this.reponses.indexOf(selected);
        this.answerSelected.emit(selectedIndex);
    }

}