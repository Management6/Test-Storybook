import {Component, Input, EventEmitter, Output, output} from '@angular/core';
import { LikeButtonComponent } from '../like-button/like-button.component';
import { CommentButtonComponent } from '../comment-button/comment-button.component';
import { ShareButtonComponent } from '../share-button/share-button.component';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [LikeButtonComponent, CommentButtonComponent, ShareButtonComponent],
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent {
  @Input() liked = false;
  @Output() likedChange = new EventEmitter<boolean>();

  onLikeChange(newValue: boolean) {
    this.likedChange.emit(newValue);
  }

  @Output() commentClicked = new EventEmitter<void>();
  onCommentClick(event: Event) : void {
    event.stopPropagation(); // Prevents parent click issues
    this.commentClicked.emit();
  }
}