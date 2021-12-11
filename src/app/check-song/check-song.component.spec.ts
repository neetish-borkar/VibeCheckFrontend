import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSongComponent } from './check-song.component';

describe('CheckSongComponent', () => {
  let component: CheckSongComponent;
  let fixture: ComponentFixture<CheckSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
