import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeReadAllComponent } from './filme-read-all.component';

describe('FilmeReadAllComponent', () => {
  let component: FilmeReadAllComponent;
  let fixture: ComponentFixture<FilmeReadAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmeReadAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
