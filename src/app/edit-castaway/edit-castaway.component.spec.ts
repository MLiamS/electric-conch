import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCastawayComponent } from './edit-castaway.component';

describe('EditCastawayComponent', () => {
  let component: EditCastawayComponent;
  let fixture: ComponentFixture<EditCastawayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCastawayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCastawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
