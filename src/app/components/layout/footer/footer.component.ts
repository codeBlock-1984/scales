import { Component, OnInit } from '@angular/core';
import { Link } from '../../../models/Link';
import { Social } from '../../../models/Social';
import { firmLinks, practiceAreasLinks, mediaLinks } from '../../../data/links';
import { socials } from '../../../data/socials';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  firmLinks: Link[];
  practiceAreasLinks: Link[];
  mediaLinks: Link[];
  socials: Social[];

  constructor() { }

  ngOnInit() {
    this.firmLinks = firmLinks;
    this.practiceAreasLinks = practiceAreasLinks;
    this.mediaLinks = mediaLinks;
    this.socials = socials;
  }

}
