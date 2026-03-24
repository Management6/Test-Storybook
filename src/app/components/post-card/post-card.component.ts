import { Component, Input } from '@angular/core';
import { ActionBarComponent } from '../action-bar/action-bar.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-post-card',
    standalone: true,
    imports: [ActionBarComponent, CommonModule],
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
    isCommentsOpen = false;
    comments = [
            {
        username: 'alex',
        text: 'Great post!',
        profileImage: 'https://i.pravatar.cc/40?img=1',
        liked: false
    },
    {
        username: 'maria',
        text: 'Love this!',
        profileImage: 'https://i.pravatar.cc/40?img=2',
        liked: false
    },
    {
        username: 'sam',
        text: 'Amazing work!',
        profileImage: 'https://i.pravatar.cc/40?img=3',
        liked: false
    },
    {
        username: 'jess',
        text: "Can't wait to see more!",
        profileImage: 'https://i.pravatar.cc/40?img=4',
        liked: false
    }
    ];
    openComments(): void {
        this.isCommentsOpen = true;
    }
    closeComments(): void {
        this.isCommentsOpen = false;
    }
    //toggleComments(): void {
    //    this.isCommentsOpen = !this.isCommentsOpen;
    //}


    liked = false;
    onLikedChange(newValue: boolean) {
        if (newValue && !this.liked) {
            this.likes++;
        } else if (!newValue && this.liked) {
            this.likes--;
        }
        this.liked = newValue;
    }
}