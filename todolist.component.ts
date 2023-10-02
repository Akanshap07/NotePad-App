import { Component,NgZone,ViewChild } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';

import{MatDialog} from '@angular/material/dialog';
import { CalenderComponent } from '../calender/calender.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  task:any[]=[]
  constructor(private _ngZone: NgZone,private dialog:MatDialog) {}

  @ViewChild('autosize') autosize:any;
 

  getInputText(val:String){
    this.task.push({id:this.task.length,name:val});
    this.autosize.nativeElement.value='';
   }
  removeTask(id:number){
   console.warn(id);
   
   this.task=this.task.filter(item=>item.id!=id);
  }

  
  openForm(){
  this.dialog.open(CalculatorComponent);
 };
 openForm1(){
  this.dialog.open(CalenderComponent);
 };
 }

