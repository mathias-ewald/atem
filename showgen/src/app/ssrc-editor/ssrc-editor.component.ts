import { Component, OnInit } from '@angular/core';
import { filter, map, take } from 'rxjs/operators';
import { LayoutService } from '../services/layout/layout.service';
import { SuperSource } from '../services/layout/model';

@Component({
  selector: 'app-ssrc-editor',
  templateUrl: './ssrc-editor.component.html',
  styleUrls: ['./ssrc-editor.component.scss']
})
export class SsrcEditorComponent implements OnInit {

  public layout: SuperSource | null = null;

  public name: string = "foo"

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit(): void {
    this.layoutService.getSsrcById("1").pipe(
      filter(l => l instanceof SuperSource),
      take(1),
      map(l => l as SuperSource)
    ).subscribe(l => this.layout = l);
  }

}
