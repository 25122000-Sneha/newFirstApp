import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArrayComponentComponent } from './array-component/array-component.component';
import { SumitraComponentComponent } from './sumitra-component/sumitra-component.component';
import { RamuComponentComponent } from './ramu-component/ramu-component.component';
import { RoutingcomponentComponent } from './routingcomponent/routingcomponent.component';
import { ArrayDetailsComponent } from './array-details/array-details.component';
import { JackReacherComponent } from './jack-reacher/jack-reacher.component';
import { QueryCallerComponent } from './query-caller/query-caller.component';
import { QueryReceiverComponent } from './query-receiver/query-receiver.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    ReactiveformComponent,
    ArrayComponentComponent,
    SumitraComponentComponent,
    RamuComponentComponent,
    RoutingcomponentComponent,
    ArrayDetailsComponent,
    JackReacherComponent,
    QueryCallerComponent,
    QueryReceiverComponent,
    FournotfourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule/*forRoot(
      [
        {
          path: "form",
          component: FormComponent, 
        },
        {
          path: "moviebutton",
          component: ArrayComponentComponent
        },
        {
          path : "moviebutton/:id",
          component : ArrayDetailsComponent
        },
        {
          path: "moviebutton/:id/:moviegenre",
          component : ArrayDetailsComponent
        },
        {
          path : "query",
          component: QueryReceiverComponent
        }
       
      ]
    )*/
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
