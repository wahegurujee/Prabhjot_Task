import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'output';
  setValue = 19;
  getVal: any;


  reset() {
    this.getVal = document.getElementById('reset');
    this.setValue = this.getVal.value;
    console.log(this.setValue);
    this.setValue = 20;
    console.log(this.setValue);
  }

}
