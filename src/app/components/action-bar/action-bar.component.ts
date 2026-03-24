import {Component, Input, EventEmitter, Output} from '@angular/core';
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
  @Output() commentClicked = new EventEmitter<void>();
  @Output() shareClicked = new EventEmitter<void>();

  onLikeChange(newValue: boolean): void {
    this.likedChange.emit(newValue);
  }

  onCommentClick(): void {
    this.commentClicked.emit();
  }

  onShareClick(): void {
    this.shareClicked.emit();
  }
}
