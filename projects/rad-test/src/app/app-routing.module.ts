import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AlternateComponent} from './pagina-alternativa.component';
import { QuotepageComponent } from './pagina-quote.component';
import { QuotebarComponent } from './quotebar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'alternate',component: AlternateComponent},
  {path:'quote',component: QuotepageComponent},
  {path:'quotebar',component: QuotebarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
