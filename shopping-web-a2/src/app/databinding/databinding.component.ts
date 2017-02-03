import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  stringInterpolation = 'This is string interpolation';
  numberInterpolation = 2;

  constructor() { }

  onCustomClicked(value: string){
    alert(value);
  }
  onTest(){
    return true;
  }
  textColor(){
    return 'blue';
  }


}
