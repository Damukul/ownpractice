import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App2cComponent } from './app2c.component';

describe('App2cComponent', () => {
  let component: App2cComponent;
  let fixture: ComponentFixture<App2cComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [App2cComponent]
    });
    fixture = TestBed.createComponent(App2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
