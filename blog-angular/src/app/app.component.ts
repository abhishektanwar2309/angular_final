import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-angular';
  appName = 'Blog App';
  name='Abhishek Tanwar';
  getName(){
    return this.name;
  };
  obj={
    name:'peter',
    age:30
  };
  arr=['one','two','three'];
  a=100;
  b=200;
  siteUrl=window.location.href;

}
