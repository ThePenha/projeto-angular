import { Component, OnInit } from '@angular/core';
import { PersonagensService } from "../../personagens/personagens.service";
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private personagensService: PersonagensService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.personagensService
    .reviewsOfPersonagem(this.route.parent.snapshot.params['id'])
  }

}
