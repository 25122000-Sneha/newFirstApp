import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingcomponentComponent } from './routingcomponent.component';

describe('RoutingcomponentComponent', () => {
  let component: RoutingcomponentComponent;
  let fixture: ComponentFixture<RoutingcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
