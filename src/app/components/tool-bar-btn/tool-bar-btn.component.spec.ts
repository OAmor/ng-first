import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarBtnComponent } from './tool-bar-btn.component';

describe('ToolBarBtnComponent', () => {
  let component: ToolBarBtnComponent;
  let fixture: ComponentFixture<ToolBarBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolBarBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
