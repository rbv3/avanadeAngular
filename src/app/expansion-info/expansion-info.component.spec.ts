import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionInfoComponent } from './expansion-info.component';

describe('ExpansionInfoComponent', () => {
  let component: ExpansionInfoComponent;
  let fixture: ComponentFixture<ExpansionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
