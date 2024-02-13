import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackReacherComponent } from './jack-reacher.component';

describe('JackReacherComponent', () => {
  let component: JackReacherComponent;
  let fixture: ComponentFixture<JackReacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackReacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JackReacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
