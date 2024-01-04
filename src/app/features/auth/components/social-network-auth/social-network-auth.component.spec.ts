import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkAuthComponent } from './social-network-auth.component';

describe('SocialNetworkComponent', () => {
  let component: SocialNetworkAuthComponent;
  let fixture: ComponentFixture<SocialNetworkAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialNetworkAuthComponent]
    });
    fixture = TestBed.createComponent(SocialNetworkAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
