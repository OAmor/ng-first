import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBareComponent } from './tool-bare.component';

describe('ToolBareComponent', () => {
  let component: ToolBareComponent;
  let fixture: ComponentFixture<ToolBareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolBareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
