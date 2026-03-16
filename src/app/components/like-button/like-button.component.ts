import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-like-button',
    standalone: true,
    templateUrl: './like-button.component.html',
    styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {
    @Input() likes = 0;
    liked = false;
    toggleLike() {
        this.liked = !this.liked;
        if (this.liked) {
            this.likes++;
        } else {
            this.likes--;
        }
    }
}