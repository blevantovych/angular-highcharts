import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { ChartModule } from 'angular-highcharts'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ChartModule]
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  // it(`should have as title 'angular-with-highcharts-testing'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('angular-with-highcharts-testing');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-with-highcharts-testing!');
  // });
})
