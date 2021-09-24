import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Box } from 'src/app/services/layout/model';
import { calc, Calc, Op } from '../css';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input()
  model: Box | null = null;

  @Input()
  color: string = "rgba(220, 220, 220, 0.5)";

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  /**
   * CALCULATIONS
   */

  // DIMENSIONS  & SCALE
  private get size(): number { return this.model?.size?.factor || 0; }
  private get width(): Calc { return calc("100%", Op.MUL, this.size); }
  private get height(): Calc { return calc("100%", Op.MUL, this.size); }

  // CROPPING
  private cropPerc(value: number | undefined): Calc { return calc(value != null ? value : 0, Op.DIV, 32); }
  
  public get cropTop(): Calc { return calc("100%", Op.MUL, this.cropPerc(this.model?.crop?.top)); }
  public get cropRight(): Calc { return calc("100%", Op.MUL, this.cropPerc(this.model?.crop?.right)); }
  public get cropBottom(): Calc { return calc("100%", Op.MUL, this.cropPerc(this.model?.crop?.bottom)); }
  public get cropLeft(): Calc { return calc("100%", Op.MUL, this.cropPerc(this.model?.crop?.left)); }

  // POSITION
  private get left(): Calc { return this.origPos(this.model?.position.x); }
  private get top(): Calc { return this.origPos(this.model?.position.y); }

  private origPos(value: number | undefined): Calc {
    if (value == null) value = 0;
    let centerOffset: Calc = calc(calc("100%", Op.MUL, this.size), Op.DIV, 2);
    let valDiv32: Calc = calc(value, Op.DIV, 32);
    let positionOffset: Calc = calc("100%", Op.MUL, valDiv32)
    return calc(calc("50%", Op.ADD, positionOffset), Op.SUB, centerOffset);
  }

  /**
   * STYLE BINDINGS
   */

   @HostBinding('style.clip-path')
   private get clip(): SafeStyle {
     if (this.model?.enableCrop === false) return this.sanitizeStyle("none");
     let clip: string = "inset(" + 
      this.cropTop + " " + 
      this.cropRight + " " + 
      this.cropBottom + " " + 
      this.cropLeft + " round 0px)";
     return this.sanitizeStyle(clip);
   }

   @HostBinding('style.visibility')
   private get visibility(): SafeStyle {
     return this.sanitizeStyle(this.model?.enabled === false || this.size === 0 ? "hidden" : "");
   }

  @HostBinding('style.background-color')
  private get styleColor(): SafeStyle {
    return this.sanitizeStyle(this.color);
  }

  @HostBinding('style.width')
  private get styleWidth(): SafeStyle {
    return this.sanitizeStyle(this.width.toString());
  }

  @HostBinding('style.height')
  private get styleHeight(): SafeStyle {
    return this.sanitizeStyle(this.width.toString());
  }

  @HostBinding('style.left')
  private get stylePosX(): SafeStyle {
    return this.sanitizeStyle(this.left.toString());
  }

  @HostBinding('style.top')
  private get stylePosY(): SafeStyle {
    return this.sanitizeStyle(this.top.toString());
  }
 
  private sanitizeStyle(expr: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(expr);
  }

}
