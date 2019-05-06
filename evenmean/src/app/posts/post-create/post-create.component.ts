import { Component } from "@angular/core";

import { NgForm } from "@angular/forms";
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle = "";
  enteredContent = "";

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = (today.getMinutes() > 9) ? today.getHours() + ":" + today.getMinutes() : today.getHours() + ":0" + today.getMinutes();
    const dateTime = String(date+' at '+time);

    this.postsService.addPost(form.value.title, form.value.content, dateTime);
    form.resetForm();
  }
}
