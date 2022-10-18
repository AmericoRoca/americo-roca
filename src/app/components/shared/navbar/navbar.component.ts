import { Component, OnInit } from '@angular/core';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import {faBook} from '@fortawesome/free-solid-svg-icons'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {faDiagramProject} from '@fortawesome/free-solid-svg-icons'
import {faAddressCard} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faUser= faUser;
  faBook = faBook;
  faBriefcase = faBriefcase;
  faDiagramProject = faDiagramProject;
  faAddressCard = faAddressCard;

  constructor() { }

  ngOnInit(): void {
  }

}
