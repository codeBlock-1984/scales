import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../../models/Link';
import { homeLinks } from '../../../data/links';

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

  constructor() { }

  ngOnInit() {
    this.title = 'Scales';
    this.links = homeLinks;
    this.faBars = faBars;
    this.faTimes = faTimes;
    this.show = '';
  }

  showMobileNav() {
    this.show = 'show';
  }

  hideMobileNav() {
    this.show = '';
  }
}
