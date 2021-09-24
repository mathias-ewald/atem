import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxEditorComponent } from './box-editor.component';

describe('BoxEditorComponent', () => {
  let component: BoxEditorComponent;
  let fixture: ComponentFixture<BoxEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
