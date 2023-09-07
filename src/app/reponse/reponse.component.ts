import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-reponse',
    templateUrl: './reponse.component.html',
    styleUrls: ['./reponse.component.css']
})
export class ReponseComponent {
    @Input() reponseText!: string;
    @Input() isSelected!: boolean;
    @Input() isCorrect: boolean = false;
    @Input() isWrong: boolean = false;
    @Output() selectionChanged = new EventEmitter<void>();

    onSelectionChange() {
        this.selectionChanged.emit();
    }
}