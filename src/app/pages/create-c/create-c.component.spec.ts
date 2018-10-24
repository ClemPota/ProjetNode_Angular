import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCComponent } from './create-c.component';

describe('CreateCComponent', () => {
  let component: CreateCComponent;
  let fixture: ComponentFixture<CreateCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
