import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../utils/service.service';
import { Ability, AbilitySprites } from '../utils/TTypes/TTypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renderiza',
  templateUrl: './renderiza.component.html',
  styleUrls: ['./renderiza.component.css']
})
export class RenderizaComponent implements OnInit {
  ability:Ability[] = [];
  pokemon: AbilitySprites | any;

  constructor(private service: ServiceService, private route: Router){}
  ngOnInit(): void {
    this.getText();
  }

  getText(){
    this.service.getAbility(this.service.getName()).subscribe(ability => {
      this.ability = ability.abilities;
      this.pokemon = ability.sprites;
    });
  }
  
  back(){
    this.route.navigate(['']);
  }

}
