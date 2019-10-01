import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../../models/Link';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})
export class FooterNavComponent implements OnInit {
  @Input() links: Link[];

  constructor() { }

  ngOnInit() {
  }

}
