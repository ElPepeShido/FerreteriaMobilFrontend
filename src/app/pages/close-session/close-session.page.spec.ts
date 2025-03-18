import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloseSessionPage } from './close-session.page';

describe('CloseSessionPage', () => {
  let component: CloseSessionPage;
  let fixture: ComponentFixture<CloseSessionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseSessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
