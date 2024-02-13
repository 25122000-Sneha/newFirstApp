import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryReceiverComponent } from './query-receiver.component';

describe('QueryReceiverComponent', () => {
  let component: QueryReceiverComponent;
  let fixture: ComponentFixture<QueryReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryReceiverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
