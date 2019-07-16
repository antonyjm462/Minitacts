import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  person: string;
  item: any;
  @ViewChild("modalTemplate", { static: true }) modalTemplate: TemplateRef<any>;
  @ViewChild("returnTemplate", { static: true }) returnTemplate: TemplateRef<any>;
  dialogRef: any;
  userForm: FormGroup;
  user: any = [];
  userdata: any;
  count: any = -1;
  search: FormGroup;
  Number: any;
  Name: any;
  

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.title = "Contacts";
    this.person = "person";
    this.search = this.formBuilder.group({
      item: ['', Validators.required],
    });
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
    });
  }

  openDialog() {
    this.dialogRef = this.dialog.open(this.modalTemplate, {
      width: '850px',
      height: '380px'
    });
  }

  onSubmit(): void {
    this.count = this.count + 1;
    this.userdata = {
      "name": this.userForm.get('name').value,
      "number": this.userForm.get('number').value,
      "count": this.count
    }
    this.user.push(this.userdata);
    console.log(this.user);
    this.userForm.patchValue({
      name:' ',
      number:' '
    });
  }

  onDel(no) {
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].count == no) {
        this.user.splice(i, 1);
      }
    }
    console.log(no)
  }

  onSearch() {
    this.item = this.search.get('item').value;
    console.log(this.item);
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].name == this.item) {
        this.Name = this.user[i].name;
        this.Number = this.user[i].number;
        this.dialogRef = this.dialog.open(this.returnTemplate, {
          width: '850px',
          height: '300px'
        })
      }
    }
    this.search.patchValue({
      item:' ',
    });
  }
}
