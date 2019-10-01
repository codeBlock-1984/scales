import { Component, OnInit, Input } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../../models/Link';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent implements OnInit {
  @Input() links: Link[];
  faChevronRight: any;

  constructor() { }

  ngOnInit() {
    this.faChevronRight = faChevronRight;
  }

  toggleSubmenu(link: Link) {
    link.isActive = !link.isActive;
  }
}
