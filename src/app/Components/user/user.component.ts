import { Component, OnInit} from '@angular/core';
import {User} from '../../Models/User'
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
    user!: User;
    //Methods
    constructor(){
       
    }

    ngOnInit() {
        this.user= {
            firstName: 'John',
            lastName: 'Doe',
            email: 'John@gmail.com'
        }
    }
    
}

