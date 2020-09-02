import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomechatPage } from './homechat.page';

describe('HomechatPage', () => {
  let component: HomechatPage;
  let fixture: ComponentFixture<HomechatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomechatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomechatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
