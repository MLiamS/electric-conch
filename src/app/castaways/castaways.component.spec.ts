import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastawaysComponent } from './castaways.component';

describe('CastawaysComponent', () => {
  let component: CastawaysComponent;
  let fixture: ComponentFixture<CastawaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastawaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastawaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
