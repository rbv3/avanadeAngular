import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatImagesComponent } from '../cat-images/cat-images.component';

describe('ShibeImagesComponent', () => {
  let component: CatImagesComponent;
  let fixture: ComponentFixture<CatImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
