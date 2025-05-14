import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostatusFilterbyDropdownComponent } from './postatus-filterby-dropdown.component';

describe('PostatusFilterbyDropdownComponent', () => {
  let component: PostatusFilterbyDropdownComponent;
  let fixture: ComponentFixture<PostatusFilterbyDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostatusFilterbyDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostatusFilterbyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
