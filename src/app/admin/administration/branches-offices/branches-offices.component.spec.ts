import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesOfficesComponent } from './branches-offices.component';

describe('BranchesOfficesComponent', () => {
  let component: BranchesOfficesComponent;
  let fixture: ComponentFixture<BranchesOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchesOfficesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchesOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
