import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeReadComponent } from './filme-read.component';

describe('FilmeReadComponent', () => {
  let component: FilmeReadComponent;
  let fixture: ComponentFixture<FilmeReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmeReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
