import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PechesComponent } from './peches.component';

describe('PechesComponent', () => {
  let component: PechesComponent;
  let fixture: ComponentFixture<PechesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PechesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PechesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
