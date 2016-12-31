/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailSiteComponent } from './detail-site.component';

describe('DetailSiteComponent', () => {
  let component: DetailSiteComponent;
  let fixture: ComponentFixture<DetailSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
