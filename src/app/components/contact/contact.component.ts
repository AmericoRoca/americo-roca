import { Component, OnInit } from '@angular/core';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {  faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapPin= faMapPin;

  constructor() { }

  ngOnInit(): void {
  }

}
