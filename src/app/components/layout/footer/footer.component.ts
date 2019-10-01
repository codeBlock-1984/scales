import { Component, OnInit } from '@angular/core';
import { Link } from '../../../models/Link';
import { firmLinks, practiceAreasLinks, mediaLinks } from '../../../data/links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  firmLinks: Link[];
  practiceAreasLinks: Link[];
  mediaLinks: Link[];

  constructor() { }

  ngOnInit() {
    this.firmLinks = firmLinks;
    this.practiceAreasLinks = practiceAreasLinks;
    this.mediaLinks = mediaLinks;
  }

}
