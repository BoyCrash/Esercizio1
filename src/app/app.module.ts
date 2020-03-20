import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';​

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'gameList', component: GameListComponent},
  { path: 'gameDetail', component: GameDetailComponent},
  { path: 'editGame', component: EditGameComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameListComponent,
    GameDetailComponent,
    EditGameComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(​appRoutes​)​
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
