import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditContainerComponent } from './reddit-container.component';

describe('RedditContainerComponent', () => {
  let component: RedditContainerComponent;
  let fixture: ComponentFixture<RedditContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
