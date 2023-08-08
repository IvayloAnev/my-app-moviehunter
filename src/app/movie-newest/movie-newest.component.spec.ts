import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNewestComponent } from './movie-newest.component';

describe('MovieNewestComponent', () => {
  let component: MovieNewestComponent;
  let fixture: ComponentFixture<MovieNewestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieNewestComponent]
    });
    fixture = TestBed.createComponent(MovieNewestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
