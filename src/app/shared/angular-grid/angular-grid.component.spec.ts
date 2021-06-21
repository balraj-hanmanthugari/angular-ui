import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularGridComponent } from './angular-grid.component';
import { AppModule } from 'src/app/app.module';
import { SharedModule } from '../shared.module';

describe('AngularGridComponent', () => {
  let component: AngularGridComponent;
  let fixture: ComponentFixture<AngularGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, SharedModule],
      declarations: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
