import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeproductPage } from './homeproduct.page';

describe('HomeproductPage', () => {
  let component: HomeproductPage;
  let fixture: ComponentFixture<HomeproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeproductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
