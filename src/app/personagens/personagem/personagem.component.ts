import { Component, OnInit, Input } from '@angular/core';
import { Personagem } from "./personagem.model";

@Component({
  selector: 'mt-personagem',
  templateUrl: './personagem.component.html'
})
export class PersonagemComponent implements OnInit {

  @Input() personagem: Personagem

  constructor() { }

  ngOnInit() {
  }

}
