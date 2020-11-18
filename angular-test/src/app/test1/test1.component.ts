import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  array: number[]=[];
  result: number=-1;
  errorMsg:string='';
  @ViewChild("val", { static: false })
  _el!: ElementRef;
  
  constructor() { }

  ngOnInit(): void { 
    this.array=[1, 2, 3, 4, 5, 5, 2, 4, 4];
    this.result=this.inflectionPoint(this.array);
  }
  addToArray(value: string) {   
    if(!isNaN(Number(value)) && value!='')
    {
      this.array.push(Number(value));
      this.result=this.inflectionPoint(this.array);
      this.errorMsg='';
    }
    else{
      this.errorMsg='Enter Numbers only.'
    }
    this._el.nativeElement.value='';
    this._el.nativeElement.focus();
  }
  clearArray(){
    this.array=[];
    this.result=this.inflectionPoint(this.array);
    this._el.nativeElement.value='';
    this._el.nativeElement.focus();
  }
  inflectionPoint(arr:number[]) {
    var sum = 0; 
    var leftsum = 0; 
    for (let index = 0; index < arr.length; index++) {
      sum += arr[index]; 
    }
    for (let index = 0; index < arr.length; index++) { 
      sum -= arr[index]; 
      leftsum += arr[index]; 
      if (leftsum == sum) 
      {
        return index; 
      }
    }
    return -1;
  }
}
