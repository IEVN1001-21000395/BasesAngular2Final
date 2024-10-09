import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoodiacoComponent } from './zoodiaco.component';

describe('ZoodiacoComponent', () => {
  let component: ZoodiacoComponent;
  let fixture: ComponentFixture<ZoodiacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoodiacoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoodiacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
