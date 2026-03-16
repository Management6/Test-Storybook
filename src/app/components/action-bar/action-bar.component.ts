import {Component, Input} from '@angular/core';
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
  @Input() likes: number = 0;
}