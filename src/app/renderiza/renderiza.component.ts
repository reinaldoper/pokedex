import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../utils/service.service';
import { Ability, AbilitySprites } from '../utils/TTypes/TTypes';

@Component({
  selector: 'app-renderiza',
  templateUrl: './renderiza.component.html',
  styleUrls: ['./renderiza.component.css']
})
export class RenderizaComponent implements OnInit {
  ability:Ability[] = [];
  pokemon: AbilitySprites[] = [];

  constructor(private service: ServiceService){}
  ngOnInit(): void {
    this.ability = this.service.ability;
    this.pokemon = this.service.pokemon;
  }

}
