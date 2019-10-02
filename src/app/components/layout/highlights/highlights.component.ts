import { Component, OnInit } from '@angular/core';
import { highlightsCard } from '../../../data/highlightsCard';
import { HighlightsCard } from '../../../models/HighlightsCard';


@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
  cards: HighlightsCard[];
  highlightsTitle: String;

  constructor() { }

  ngOnInit() {
    this.cards = highlightsCard;
    this.highlightsTitle = 'Our Practice Areas';
  }

}
