import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficsComponetComponent } from './graphics-componet.component';

describe('GraficsComponetComponent', () => {
  let component: GraficsComponetComponent;
  let fixture: ComponentFixture<GraficsComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficsComponetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficsComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
