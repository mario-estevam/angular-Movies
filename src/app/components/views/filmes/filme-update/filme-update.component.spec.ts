import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeUpdateComponent } from './filme-update.component';

describe('FilmeUpdateComponent', () => {
  let component: FilmeUpdateComponent;
  let fixture: ComponentFixture<FilmeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
