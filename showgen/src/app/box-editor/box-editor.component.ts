import { Component, Input, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Box } from '../services/layout/model';

@Component({
  selector: 'app-box-editor',
  templateUrl: './box-editor.component.html',
  styleUrls: ['./box-editor.component.scss']
})
export class BoxEditorComponent implements OnInit {

  @Input()
  public model!: Box;

  public readonly posMin: number = -48;
  public readonly posMax: number = 48;
  public readonly posStep: number = 0.1;

  public readonly sizeMin: number = 0;
  public readonly sizeMax: number = 1;
  public readonly sizeStep: number = 0.05;

  public readonly cropMin: number = 0;
  public readonly cropMax: number = 32;
  public readonly cropStep: number = 0.1;

  constructor() { }

  ngOnInit(): void {
  }

  posXChange($event: MatSliderChange) {
    if ($event.value == null) return;
    this.model.position.x = $event.value;
  }

  posYChange($event: MatSliderChange) {
    if ($event.value == null) return;
    this.model.position.y = $event.value;
  }

  sizeChange($event: MatSliderChange) {
    if ($event.value == null) return;
    this.model.size.factor = $event.value;
  }

  cropTopChange($event: MatSliderChange) {
    if ($event.value == null) return;
    if (this.model.crop == null) return;
    this.model.crop.top = $event.value;
  }

  cropRightChange($event: MatSliderChange) {
    if ($event.value == null) return;
    if (this.model.crop == null) return;
    this.model.crop.right = $event.value;
  }

  cropBottomChange($event: MatSliderChange) {
    if ($event.value == null) return;
    if (this.model.crop == null) return;
    this.model.crop.bottom = $event.value;
  }

  cropLeftChange($event: MatSliderChange) {
    if ($event.value == null) return;
    if (this.model.crop == null) return;
    this.model.crop.left = $event.value;
  }


}
