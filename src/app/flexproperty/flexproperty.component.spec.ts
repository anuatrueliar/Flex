import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexpropertyComponent } from './flexproperty.component';

describe('FlexpropertyComponent', () => {
  let component: FlexpropertyComponent;
  let fixture: ComponentFixture<FlexpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
