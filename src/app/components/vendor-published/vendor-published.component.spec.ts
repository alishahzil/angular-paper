import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPublishedComponent } from './vendor-published.component';

describe('VendorPublishedComponent', () => {
  let component: VendorPublishedComponent;
  let fixture: ComponentFixture<VendorPublishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPublishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
