import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sample';
  public videos : any[];
  constructor(){
    this.videos = [];
  }
  handleResponse($eventResult : any):void{
    const {success, data, message} = $eventResult;
    if (success) {
      if (data) {
        this.videos = data;
        }
      } else {
        this.videos = [];
        console.log(message);
      }
  }

}
