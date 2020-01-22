import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm:FormGroup;
  user: any=[];
  userdata:any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['',Validators.required],
    });
  }
  
  onSubmit(): void {
    this.userdata = {
      "name": this.userForm.get('name').value,
      "number": this.userForm.get('number').value
    }
    this.user.push(this.userdata);
    console.log(this.user)
  }
 

}
