import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { PersonagemComponent } from './personagens/personagem/personagem.component';
import { PersonagemDetalheComponent } from './personagem-detalhe/personagem-detalhe.component';
import { MenuComponent } from './personagem-detalhe/menu/menu.component';
import { ShoppingCartComponent } from './personagem-detalhe/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './personagem-detalhe/menu-item/menu-item.component';
import { ReviewsComponent } from './personagem-detalhe/reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItensComponent } from './order/order-itens/order-itens.component';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component'

import { ShoppingCartService } from "./personagem-detalhe/shopping-cart/shopping-cart.service";
import { PersonagensService } from "./personagens/personagens.service";
import { OrderService } from "./order/order.service";
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RatingComponent } from './shared/rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PersonagensComponent,
    PersonagemComponent,
    PersonagemDetalheComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItensComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PersonagensService, OrderService, ShoppingCartService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
