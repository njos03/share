import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  array: number[]=[];
  result: string='';
  @ViewChild("val", { static: false })
  _el!: ElementRef;
  errorMsg:string='';
  constructor() { }

  ngOnInit(): void { 
    this.array=[21, 19, 24, 32, 30, 31, 34, 31, 31, 26, 29];
    this.result=this.maxPriceDrop(this.array);
  }
  addToArray(value: string) {   
    if(!isNaN(Number(value)) && value!='')
    {
      this.array.push(Number(value));
      this.result=this.maxPriceDrop(this.array);
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
    this.result=this.maxPriceDrop(this.array);
    this._el.nativeElement.value='';
    this._el.nativeElement.focus();
  }
  maxPriceDrop(arr:number[]) {
    if(arr.length<1)
    {
      return 'Please add elements to Array';
    }
    var max=0,min=-1,maxPos=0,minPos=0;
    for (let index = 0; index < arr.length; index++) {
      if(min==-1)
      {
        min=arr[index];
      }
      if(max<arr[index])
      {
        max=arr[index];
        maxPos=index;
        if(minPos<maxPos)
        {
          min=arr[index];
          minPos=index;
        }
      }
      if(min>arr[index])
      {
        min=arr[index];
        minPos=index;
      }
    }
    return 'the max price drop was from $'+max+' to $'+min+' a price drop of $'+(max-min);
  }
}
