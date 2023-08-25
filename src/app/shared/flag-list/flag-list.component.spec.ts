import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagListComponent } from './flag-list.component';

describe('FlagListComponent', () => {
  let component: FlagListComponent;
  let fixture: ComponentFixture<FlagListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlagListComponent]
    });
    fixture = TestBed.createComponent(FlagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
