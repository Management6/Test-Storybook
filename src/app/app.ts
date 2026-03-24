import { Component } from '@angular/core';
import { PostCardComponent } from './components/post-card/post-card.component';

@Component({
  selector: 'app-root',
  imports: [PostCardComponent],
  template: `
    <app-post-card />
  `,
  styles: [],
})
export class App {}
