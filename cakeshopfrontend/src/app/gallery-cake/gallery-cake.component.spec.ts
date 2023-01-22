import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCakeComponent } from './gallery-cake.component';

describe('GalleryCakeComponent', () => {
  let component: GalleryCakeComponent;
  let fixture: ComponentFixture<GalleryCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryCakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
