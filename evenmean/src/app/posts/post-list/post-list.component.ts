import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() posts = [
    // {title: 'First Post', content: 'First Content.'},
    // {title: 'Second Post', content: 'Second Content.'},
    // {title: 'Third Post', content: 'Third Content.'}
  ];
}
