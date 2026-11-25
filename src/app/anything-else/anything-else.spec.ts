import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnythingElse } from './anything-else';

describe('AnythingElse', () => {
  let component: AnythingElse;
  let fixture: ComponentFixture<AnythingElse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnythingElse],
    }).compileComponents();

    fixture = TestBed.createComponent(AnythingElse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
