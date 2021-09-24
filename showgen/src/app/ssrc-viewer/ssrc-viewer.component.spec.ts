import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrcViewerComponent } from './ssrc-viewer.component';

describe('SsrcViewerComponent', () => {
  let component: SsrcViewerComponent;
  let fixture: ComponentFixture<SsrcViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsrcViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsrcViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
