import { Component, Input, OnInit } from '@angular/core';
import { SuperSource } from '../services/layout/model';

@Component({
  selector: 'app-ssrc-viewer',
  templateUrl: './ssrc-viewer.component.html',
  styleUrls: ['./ssrc-viewer.component.scss']
})
export class SsrcViewerComponent implements OnInit {

  @Input()
  public layout: SuperSource | null = null;

  public colors: string[] = [
    "rgba(255, 50, 50, 1)",
    "rgba(50, 100, 50, 1)",
    "rgba(50, 50, 255, 1)",
    "rgba(255, 165, 0, 1)",
    "rgba(0, 255, 0, 1)",
  ];

  ngOnInit(): void {

  }

}
