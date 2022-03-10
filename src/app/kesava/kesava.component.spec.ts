import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KesavaComponent } from './kesava.component';

describe('KesavaComponent', () => {
  let component: KesavaComponent;
  let fixture: ComponentFixture<KesavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KesavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KesavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
