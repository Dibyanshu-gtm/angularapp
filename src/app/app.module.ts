import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule  } from '@angular/common/http';
import { UserService } from'./Services/user.service';
import { PostService} from './Services/post.service';
import { AppComponent } from './app.component';
import { UserComponent } from './Components/user/user.component';
import { UsersComponent } from './Components/users/users.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PostsComponent } from './Components/posts/posts.component';
import { PostFormComponent } from './Components/post-form/post-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { PostComponent } from './Components/post/post.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent,
    PostFormComponent,
    HomeComponent,
    PostComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
