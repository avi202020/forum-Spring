import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {PostsComponent} from './posts/posts.component';
import {HeaderComponent} from './header/header.component';
import {PostsListComponent} from './posts/posts-list/posts-list.component';
import {PostsAddComponent} from './posts/posts-add/posts-add.component';
import {PostService} from "./service/post.service";
import {ShorterContentPipe} from "./shorter-content.pipe";
import {CategoriesFormatPipe} from "./categories-format.pipe";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PostDetailsComponent} from './posts/post-details/post-details.component';
import {AuthServiceImitation} from "./auth/auth.service";
import {PostEditComponent} from './posts/post-edit/post-edit.component';
import {MaterialModule} from "../shared/material.module";
import {CommentsComponent} from './comments/comments.component';
import {CommentAddComponent} from './comments/comment-add/comment-add.component';
import {CommentsListComponent} from './comments/comments-list/comments-list.component';
import {CommentService} from "./service/comment.service";
import {TimeAgoPipe} from "time-ago-pipe";
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';


@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        HeaderComponent,
        PostsListComponent,
        PostsAddComponent,
        ShorterContentPipe,
        CategoriesFormatPipe,
        PostDetailsComponent,
        PostEditComponent,
        CommentsComponent,
        CommentAddComponent,
        CommentsListComponent,
        TimeAgoPipe,
        SignupComponent,
        SigninComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        MaterialModule
    ],
    providers: [PostService, CommentService, AuthServiceImitation],
    bootstrap: [AppComponent]
})
export class AppModule {

}
