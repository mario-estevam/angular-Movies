import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeDeleteComponent } from './filme-delete.component';

describe('FilmeDeleteComponent', () => {
  let component: FilmeDeleteComponent;
  let fixture: ComponentFixture<FilmeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmeDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
