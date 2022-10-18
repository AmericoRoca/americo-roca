import { Component, OnInit } from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faGithub= faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faHeart = faHeart;
  faCopyright = faCopyright;
  
  constructor() { }

  ngOnInit(): void {
  }

}
