import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
    '<h1 (click)="clickHandler($event)"> Hello World</h1><input type="text" (keydown)="inputHandler($event)">',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  clickHandler(event: MouseEvent) {
    console.log('click');
  }
  inputHandler(event: KeyboardEvent) {
    console.log('press');
  }
  fun(){
    alert("ciao io sono il click");
  }
  dblFun(){
    alert("ciao io sono il doppio click");
  }
}
