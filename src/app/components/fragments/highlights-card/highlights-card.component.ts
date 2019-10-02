import { Component, OnInit, Input } from '@angular/core';
import { HighlightsCard } from '../../../models/HighlightsCard';

@Component({
  selector: 'app-highlights-card',
  templateUrl: './highlights-card.component.html',
  styleUrls: ['./highlights-card.component.css']
})
export class HighlightsCardComponent implements OnInit {
  @Input() cards: HighlightsCard[];

  constructor() { }

  ngOnInit() {
  }

}
