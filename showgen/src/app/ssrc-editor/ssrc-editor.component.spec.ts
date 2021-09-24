import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrcEditorComponent } from './ssrc-editor.component';

describe('SsrcEditorComponent', () => {
  let component: SsrcEditorComponent;
  let fixture: ComponentFixture<SsrcEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsrcEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsrcEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
