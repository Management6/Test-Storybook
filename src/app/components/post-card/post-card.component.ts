import { Component, Input } from '@angular/core';
import { ActionBarComponent } from '../action-bar/action-bar.component';

@Component({
    selector: 'app-post-card',
    standalone: true,
    imports: [ActionBarComponent],
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
    @Input() username = 'lachlan_dev';
    @Input() profileImage = 'https://via.placeholder.com/40';
    @Input() postImage = 'https://via.placeholder.com/500x500';
    @Input() likes = 24;
    @Input() caption = 'Building an Instagram clone with Angular and Storybook!';
    @Input() location = '';
}