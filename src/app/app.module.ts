import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InfoPannelComponent } from './info-pannel/info-pannel.component';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user.routing.module';
import { MovieModule } from './movie/movie.module';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MainComponent,
    HomeComponent,
    NotFoundComponent,
    InfoPannelComponent,
    AboutComponent,
    ContactsComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    UserModule,
    MovieModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
