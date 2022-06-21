import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtileComponent } from './listtile.component';

describe('ListtileComponent', () => {
  let component: ListtileComponent;
  let fixture: ComponentFixture<ListtileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
