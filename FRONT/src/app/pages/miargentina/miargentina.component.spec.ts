import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiargentinaComponent } from './miargentina.component';

describe('MiargentinaComponent', () => {
  let component: MiargentinaComponent;
  let fixture: ComponentFixture<MiargentinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiargentinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiargentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
