import { Component, OnInit, ViewChild } from '@angular/core';
import { User} from '../../Models/User';
import { UserService} from '../../Services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName:'',
    email: ''
  }
  users! : User[];
  showExtended: boolean =true;
  loaded: boolean =false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form:any;
  data:any;
  constructor( private dataService: UserService) { }

  ngOnInit(){
      this.dataService.getData().subscribe(data =>{
        console.log(data);
      })
      this.dataService.getUsers().subscribe(users=>{
        this.users=users;
        this.loaded=true;
      });
      
    
  }
//   addUser(){
//     this.user.isActive=true;
//     this.users.unshift(this.user);
//     this.user= {
//       firstName: '',
//       lastName:'',
//       email:''
//   }
// }
  onSubmit({value}:{value: User})
  {
      value.isActive=true;
      value.registered=new Date();
      value.hide=true;
      this.dataService.addUser(value);
      this.form.reset();
    
  }
  // toggleHide(user:User){
  //   user.hide = !user.hide;
  // }
  
}
