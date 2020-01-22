import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../firebase.service';
import { User } from '../user';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AuthService]
})
export class HomeComponent implements OnInit {
  data: any;
  errorMessage: string;
  searchText:any;
  model: User;
  param: any;
  title: string;
  person: string;
  item: any;
  @ViewChild("modalTemplate", { static: true }) modalTemplate: TemplateRef<any>;
  @ViewChild("returnTemplate", { static: true }) returnTemplate: TemplateRef<any>;
  dialogRef: any;
  userForm: FormGroup;
  users: any = [];
  userdata: any;
  Number: any;
  Name: any;
  user: any;
  userList: any;
  value: any;
  

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, 
    private firestore: AngularFirestore, private firebaseService: FirebaseService,
    public  authService:  AuthService) { 
      this.getuserList();
    }

  ngOnInit() {
    this.title = "CONTACT LIST";
    this.person = "person";
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required, Validators.minLength(10)],
    });
  }

  getuserList = () =>
    this.firebaseService
      .getUsers()
      .subscribe((res: any) => (this.userList = res));

  openDialog() {
    this.dialogRef = this.dialog.open(this.modalTemplate, {
      width: '450px',
      height: '280px'
    });
  }

  createModel() {
    this.model = this.data.data;
    // this.model.name = this.data.data.name;
    // this.model.number = this.data.data.number;
  }

  get diagnostic() { return JSON.stringify(this.model); }

  openupdateDialog(param) {
    this.data = param;
    this.createModel();
    this.dialogRef = this.dialog.open(this.returnTemplate, {
      width: '450px',
      height: '280px'
    });

  }

  onSubmit(): void {
    var useritem = new User();
    useritem.name = this.userForm.get('name').value;
    useritem.number = this.userForm.get('number').value;
    this.firebaseService.createUser(useritem);
    this.userForm.patchValue({
      name: ' ',
      number: ' '
    });
  }

  onDel(val) {
    this.firebaseService.deleteUser(val);
  }
  onUpdate() {
    this.value = this.data.data;
    if (this.userForm.get('name').value != "") { this.value.name = this.userForm.get('name').value; }
    if (this.userForm.get('number').value != "") { this.value.number = this.userForm.get('number').value; }
    this.firebaseService.updateUser(this.data.id, this.value);
  }

}

