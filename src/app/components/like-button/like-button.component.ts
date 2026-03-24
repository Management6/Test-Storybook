import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-like-button',
    standalone: true,
    templateUrl: './like-button.component.html',
    styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {
    @Input() liked = false;
    @Output() likedChange = new EventEmitter<boolean>();

    toggleLike() {
        const newValue = !this.liked;
        this.likedChange.emit(newValue);
    }
}