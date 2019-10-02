import { Component, OnInit, Input } from '@angular/core';
import { Social } from '../../../models/Social';

@Component({
  selector: 'app-social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.css']
})
export class SocialBarComponent implements OnInit {
  @Input() socials: Social[];

  constructor() { }

  ngOnInit() {
  }

}
