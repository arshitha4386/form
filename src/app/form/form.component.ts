import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  userForm: FormGroup;
  listData:any;
  constructor(private fb:FormBuilder) { 

    this.listData = [];

    this.userForm = this.fb.group({
      name : ['',Validators.required],
      email : ['',Validators.required],
      phone : ['',Validators.required],
      address : ['',Validators.required],
      
    })
  }

  public addItem() : void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }

  Reset(){
    this.userForm.reset();

  }
  RemoveItem(element:any){
    this.listData.forEach((value:any, index:any) => {
      if(value == element){
        this.listData.splice(index, 1);
      }
    });
  }

  ngOnInit(): void {
    
  }

}