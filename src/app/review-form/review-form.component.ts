import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {

  @Output() addReview = new EventEmitter<{title: string, description: string}>();


  onAdd(title, description){
    this.addReview.emit({
      title: title.value,
      description: description.value
    });
  }
}
