import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../../models/Link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() links: Link[];

  constructor() { }

  ngOnInit() {
  }

}
