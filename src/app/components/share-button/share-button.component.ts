import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-share-button',
  standalone: true,
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.css']
})
export class ShareButtonComponent {
    @Output() shareClicked = new EventEmitter<void>();

    onShareClick() {
        this.shareClicked.emit();
    }
}