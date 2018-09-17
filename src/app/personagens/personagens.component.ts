import { Component, OnInit } from '@angular/core';
import { Personagem } from './personagem/personagem.model';
import { PersonagensService } from './personagens.service';


@Component({
  selector: 'mt-personagens',
  templateUrl: './personagens.component.html'
})
export class PersonagensComponent implements OnInit {

  personagens: Personagem[]

  constructor(private personagensService: PersonagensService) { }

  ngOnInit() {
    this.personagensService.personagens()
    .subscribe(personagens => this.personagens = personagens)
  }

}
