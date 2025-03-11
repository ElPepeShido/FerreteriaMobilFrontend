import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPerfilPage } from './my-perfil.page';

describe('MyPerfilPage', () => {
  let component: MyPerfilPage;
  let fixture: ComponentFixture<MyPerfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
