import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastoralComponent } from './pastoral.component';

describe('PastoralComponent', () => {
  let component: PastoralComponent;
  let fixture: ComponentFixture<PastoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastoralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
