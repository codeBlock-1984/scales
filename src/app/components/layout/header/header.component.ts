import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../../models/Link';
import { Social } from '../../../models/Social';
import { homeLinks } from '../../../data/links';
import { socials } from '../../../data/socials';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: String;
  links: Link[];
  faBars: any;
  faTimes: any;
  show: String;
  socials: Social[];

  constructor() { }

  ngOnInit() {
    this.title = 'Scales';
    this.links = homeLinks;
    this.faBars = faBars;
    this.faTimes = faTimes;
    this.show = '';
    this.socials = socials;
  }

  showMobileNav() {
    this.show = 'show';
  }

  hideMobileNav() {
    this.show = '';
  }
}
