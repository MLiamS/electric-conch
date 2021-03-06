import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { CastawaysComponent } from './castaways/castaways.component';
import { masterFirebaseConfig } from './api-keys';
import { AdminComponent } from './admin/admin.component';
import { CastawayDetailComponent } from './castaway-detail/castaway-detail.component';
import { EditCastawayComponent } from './edit-castaway/edit-castaway.component';
import { AllyPipe } from './ally.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    AboutComponent,
    CastawaysComponent,
    AdminComponent,
    CastawayDetailComponent,
    EditCastawayComponent,
    AllyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
