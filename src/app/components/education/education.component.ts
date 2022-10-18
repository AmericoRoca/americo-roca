import { Component, OnInit } from '@angular/core';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  faSchool = faSchool;

  constructor() { }

  ngOnInit(): void {
  }

}
