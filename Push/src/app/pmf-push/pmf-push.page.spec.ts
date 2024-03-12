import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmfPushPage } from './pmf-push.page';

describe('PmfPushPage', () => {
  let component: PmfPushPage;
  let fixture: ComponentFixture<PmfPushPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PmfPushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
