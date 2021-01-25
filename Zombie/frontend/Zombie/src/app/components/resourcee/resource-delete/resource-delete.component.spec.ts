import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDeleteComponent } from './resource-delete.component';

describe('ResourceDeleteComponent', () => {
  let component: ResourceDeleteComponent;
  let fixture: ComponentFixture<ResourceDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
