import { PersonagensComponent } from './personagens/personagens.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";
import { PersonagemDetalheComponent } from './personagem-detalhe/personagem-detalhe.component';
import { MenuComponent } from './personagem-detalhe/menu/menu.component';
import { ReviewsComponent } from './personagem-detalhe/reviews/reviews.component';
import { OrderComponent } from "./order/order.component";
import { OrderSummaryComponent } from './order-summary/order-summary.component';



export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personagens', component: PersonagensComponent },
    { path: 'about', component: AboutComponent },
    {path: 'order', component: OrderComponent},
    {path: 'order-summary', component: OrderSummaryComponent},
    { path: 'personagens/:id', component: PersonagemDetalheComponent, 
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent},
        ]},
]

