import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  xCordinate: number;
  yCordinate: number;
  width: string;
  height: string;
  change: Function;
  constructor() {
    
  }
  ngOnInit(){
  
    this.change = () => {
      let outerBbox = document.getElementById('outer-box');
      let innerBox = document.getElementById('inner-box');
      
      innerBox.style.width = this.width + 'px';
      innerBox.style.height = this.height + 'px';
      innerBox.style.left = this.xCordinate +'px';
      innerBox.style.top = this.yCordinate+'px';
    }
  }
}
