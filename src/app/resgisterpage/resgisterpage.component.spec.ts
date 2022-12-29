import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgisterpageComponent } from './resgisterpage.component';

describe('ResgisterpageComponent', () => {
  let component: ResgisterpageComponent;
  let fixture: ComponentFixture<ResgisterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgisterpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResgisterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
