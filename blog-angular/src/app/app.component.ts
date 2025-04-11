import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  data=['anil','peter','sam','bruce'];
  data1=[
    {
      name:'anil',
      age:30
    },
    {
      name:'peter',
      age:31
    },
    {
      name:'sam',
      age:32
    },
    {
      name:'bruce',
      age:33
    }
  ]

}
