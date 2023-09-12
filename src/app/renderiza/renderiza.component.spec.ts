import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderizaComponent } from './renderiza.component';

describe('RenderizaComponent', () => {
  let component: RenderizaComponent;
  let fixture: ComponentFixture<RenderizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderizaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
