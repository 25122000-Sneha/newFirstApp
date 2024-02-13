import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryCallerComponent } from './query-caller.component';

describe('QueryCallerComponent', () => {
  let component: QueryCallerComponent;
  let fixture: ComponentFixture<QueryCallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryCallerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryCallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
