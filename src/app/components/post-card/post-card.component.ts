import { Component, Input } from '@angular/core';
import { ActionBarComponent } from '../action-bar/action-bar.component';
import { CommonModule } from '@angular/common';
import { LikeButtonComponent } from '../like-button/like-button.component';

@Component({
    selector: 'app-post-card',
    standalone: true,
    imports: [ActionBarComponent, CommonModule, LikeButtonComponent],
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
    @Input() username = 'lachlan_dev';
    @Input() profileImage = './imgs/Profile-pic.jpg';
    @Input() postImage = './imgs/Post.jpg';
    @Input() likes = 24;
    @Input() caption = 'Building an Instagram clone with Angular and Storybook!';
    @Input() location = '';
    isCommentsOpen = false;
    comments = [
    {
        username: 'Geordie',
        text: 'Great post!',
        profileImage: 'https://i.pravatar.cc/40?img=1',
        liked: false
      },
    {
        username: 'Harvey',
        text: 'Love this!',
        profileImage: 'https://i.pravatar.cc/40?img=2',
        liked: false
      },
    {
        username: 'Sam',
        text: 'Amazing work!',
        profileImage: 'https://i.pravatar.cc/40?img=3',
        liked: false
      },
    {
        username: 'Patrick',
        text: "Can't wait to see more!",
        profileImage: 'https://i.pravatar.cc/40?img=4',
        liked: false
      }
    ];
    openComments(): void {
        this.isCommentsOpen = true;
        this.isShareOpen = false; // Ensure share options are closed when opening comments
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

    isShareOpen = false;
    shareSearch = '';
    shareOptions = [
        { label: 'Share to Story', icon: '📖' },
        { label: 'Close Friends', icon: '⭐' },
        { label: 'Copy Link', icon: '🔗' },
        { label: 'WhatsApp', icon: '🟢' }
    ];
    shareRecipients = [
        {
            username: 'alex.design',
            fullName: 'Alex Parker',
            profileImage: 'https://i.pravatar.cc/40?img=11'
        },
        {
            username: 'maria.codes',
            fullName: 'Maria Gomez',
            profileImage: 'https://i.pravatar.cc/40?img=12'
        },
        {
            username: 'sam.creates',
            fullName: 'Sam Lee',
            profileImage: 'https://i.pravatar.cc/40?img=13'
        },
        {
            username: 'jess.studio',
            fullName: 'Jessica Brown',
            profileImage: 'https://i.pravatar.cc/40?img=14'
        },
        {
            username: 'noah.visuals',
            fullName: 'Noah Smith',
            profileImage: 'https://i.pravatar.cc/40?img=15'
        }
    ];

    get filteredShareRecipients() {
        const search = this.shareSearch.trim().toLowerCase();

        if (!search) {
            return this.shareRecipients;
        }

        return this.shareRecipients.filter((recipient) =>
            recipient.username.toLowerCase().includes(search) ||
            recipient.fullName.toLowerCase().includes(search)
        );
    }

    onShareSearch(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.shareSearch = target.value;
    }

    openShare(): void {
        this.isShareOpen = true;
        this.isCommentsOpen = false; // Ensure comments are closed when sharing
    }
    closeShare(): void {
        this.isShareOpen = false;
        this.shareSearch = '';
    }
}
