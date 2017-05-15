import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastawayDetailComponent } from './castaway-detail.component';

describe('CastawayDetailComponent', () => {
  let component: CastawayDetailComponent;
  let fixture: ComponentFixture<CastawayDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastawayDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastawayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
