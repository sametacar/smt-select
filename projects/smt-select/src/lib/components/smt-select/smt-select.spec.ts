import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtSelectComponent } from './smt-select.component';

describe('SmtSelectComponent', () => {
  let component: SmtSelectComponent;
  let fixture: ComponentFixture<SmtSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmtSelectComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SmtSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
