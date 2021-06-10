import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-user-reviews';
  reviews = [{title: "Review1", description:"desc1"},
            {title: "Review2", description: "desc2"}];
  
  onReviewAdded(data:{title: string, description: string}){
    this.reviews.push({
      title: data.title,
      description: data.description
    })
  }           
}
