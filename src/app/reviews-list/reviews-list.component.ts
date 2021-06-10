import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent {
  
  @Input() review: {title: string, description: string};
  @Input() reviews;
  

  onDelete(review){
    let index = this.reviews.indexOf(review);
    this.reviews.splice(index,1);
  }
  

}
