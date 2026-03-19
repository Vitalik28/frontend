import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggles isShowSidebar when toggle button is clicked', () => {
    fixture.detectChanges();
    expect(component.isShowSidebar).toBe(false);

    const toggleBtn = fixture.nativeElement.querySelector('button.toggle');
    toggleBtn?.click();
    fixture.detectChanges();
    expect(component.isShowSidebar).toBe(true);

    toggleBtn?.click();
    fixture.detectChanges();
    expect(component.isShowSidebar).toBe(false);
  });

  it('renders sidebar with open class when isShowSidebar is true', () => {
    component.isShowSidebar = true;
    fixture.detectChanges();
    const aside = fixture.nativeElement.querySelector('aside');
    expect(aside?.classList.contains('open')).toBe(true);
  });

  it('renders theme switcher and nav links', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-theme-switcher')).toBeTruthy();
    const links = fixture.nativeElement.querySelectorAll('a[routerLink]');
    expect(links.length).toBeGreaterThanOrEqual(2);
  });
});
