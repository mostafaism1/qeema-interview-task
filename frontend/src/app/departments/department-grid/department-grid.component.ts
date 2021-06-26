import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Department } from 'src/app/shared/models/department.model';

@Component({
  selector: 'pm-department-grid',
  templateUrl: './department-grid.component.html',
  styleUrls: ['./department-grid.component.scss'],
})
export class DepartmentGridComponent implements OnInit {
  @Input() departments: Department[] | null;
  @Output() show: EventEmitter<number> = new EventEmitter<number>();
  readonly columns$: Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([
    ['xs', 1],
    ['sm', 2],
    ['md', 3],
    ['lg', 4],
    ['xl', 5],
  ]);

  constructor(private media: MediaObserver) {
    this.columns$ = this.media.media$.pipe(
      map((mc) => <number>this.breakpointsToColumnsNumber.get(mc.mqAlias))
    );
  }

  ngOnInit(): void {}

  showPerformance(departmentId: number) {
    this.show.emit(departmentId);
  }
}
