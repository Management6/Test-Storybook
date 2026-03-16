import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-comment-button',
    standalone: true,
    templateUrl: './comment-button.component.html',
    styleUrls: ['./comment-button.component.css']
})
export class CommentButtonComponent {
    @Output() commentClicked = new EventEmitter<void>();

    onCommentClick(): void {
        this.commentClicked.emit();
        console.log('Comment button clicked');
    }
}