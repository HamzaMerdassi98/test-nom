import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { AuthentificationComponent } from './authentification/authentification.component';

const routes: Routes = [
  { path: 'post-item', component: PostItemComponent },
  { path: 'authentification', component: AuthentificationComponent},
  { path: 'post-list', component: PostListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostItemComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
