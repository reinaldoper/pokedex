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
    this.getPoke();
  }

  getPoke(){
    this.ability = this.service.ability;
    this.pokemon = this.service.pokemon;
  }
  
  back(){
    this.route.navigate(['']);
  }

}
