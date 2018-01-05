import { Component } from '@angular/core';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService:DataService){
    

  }
  sendTheLink(number){
    console.log("Input: "+number.value);
    this.dataService.getUsers().subscribe((users) => {
      console.log(users)
    });
  }
  // fontSize: number = 100;
  // myradius: number = 10;

  // myStyle(){
  //   let style = {
  //     'font-size.px': this.fontSize,
  //     'border-radius.px': this.myradius
  //   };
  //   return style;
  // }
  
}
