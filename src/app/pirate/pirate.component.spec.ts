import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PirateComponent } from './pirate.component';

describe('PirateComponent', () => {
  let component: PirateComponent;
  let fixture: ComponentFixture<PirateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PirateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PirateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
