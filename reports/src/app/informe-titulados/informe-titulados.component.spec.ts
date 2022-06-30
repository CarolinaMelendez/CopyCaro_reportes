import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeTituladosComponent } from './informe-titulados.component';

describe('InformeTituladosComponent', () => {
  let component: InformeTituladosComponent;
  let fixture: ComponentFixture<InformeTituladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeTituladosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeTituladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
