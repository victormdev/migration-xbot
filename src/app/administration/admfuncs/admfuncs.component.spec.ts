import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmFuncsComponent } from './admfuncs.component';

describe('FuncsComponent', () => {
  let component: AdmFuncsComponent;
  let fixture: ComponentFixture<AdmFuncsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmFuncsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmFuncsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
