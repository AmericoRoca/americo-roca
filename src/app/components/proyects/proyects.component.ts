import { Component, OnInit } from '@angular/core';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  faSadTear = faFaceSadTear;

  constructor() { }

  ngOnInit(): void {
  }

}
