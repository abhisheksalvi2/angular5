import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAlbumImagesComponent } from './user-album-images.component';

describe('UserAlbumImagesComponent', () => {
  let component: UserAlbumImagesComponent;
  let fixture: ComponentFixture<UserAlbumImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAlbumImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAlbumImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
