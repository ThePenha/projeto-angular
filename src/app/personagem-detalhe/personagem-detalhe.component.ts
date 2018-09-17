import { Component, OnInit } from '@angular/core';
import { PersonagensService } from '../personagens/personagens.service';
import { Personagem } from '../personagens/personagem/personagem.model';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'mt-personagem-detalhe',
  templateUrl: './personagem-detalhe.component.html'
})
export class PersonagemDetalheComponent implements OnInit {

  personagem: Personagem

  constructor(private personagensService: PersonagensService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.personagensService.personagemById(this.route.snapshot.params['id'])
    .subscribe(personagem => this.personagem = personagem)
  }

}
