import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
//import { TableComponent } from './components/table/table.component';
import { TblComponent } from './tbl/tbl.component';
import { ApiComponent } from './components/api/api.component';


const routes: Routes = [
  {path:  '', pathMatch:  'full',redirectTo:  'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  //{path: 'table', component: TableComponent},
  {path: 'table', component: TblComponent},
  {path: 'api', component: ApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
