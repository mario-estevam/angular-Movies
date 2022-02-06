import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeCreateComponent } from './filme-create.component';

describe('FilmeCreateComponent', () => {
  let component: FilmeCreateComponent;
  let fixture: ComponentFixture<FilmeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
