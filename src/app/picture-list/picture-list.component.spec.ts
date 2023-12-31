import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureListComponent } from './picture-list.component';

describe('PictureListComponent', () => {
  let component: PictureListComponent;
  let fixture: ComponentFixture<PictureListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureListComponent]
    });
    fixture = TestBed.createComponent(PictureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
