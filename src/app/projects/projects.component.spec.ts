import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { ProjectsModule } from './projects.module';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ProjectsModule],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' },
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
