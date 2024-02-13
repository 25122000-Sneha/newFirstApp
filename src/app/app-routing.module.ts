import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArrayComponentComponent } from './array-component/array-component.component';
import { ArrayDetailsComponent } from './array-details/array-details.component';
import { FormComponent } from './form/form.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';
import { QueryReceiverComponent } from './query-receiver/query-receiver.component';

const routes: Routes = [
 
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
  },
  {
    path : '**',
    component : FournotfourComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
