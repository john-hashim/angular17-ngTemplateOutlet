import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { WidgetActions } from '../widget-actions.service';
import { WidgetState } from '../widget-state.service';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'weather-widget',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <div class="widget-header">
      <ng-container
        [ngTemplateOutlet]="headerTemplate || defaultHeader"
      ></ng-container>
      <ng-template #defaultHeader>
        <div class="widget-title">Weather Forecast</div>
        <div class="widget-sub-title">Current weather in your location</div>
      </ng-template>
    </div>
    <div class="widget-content">
      <ng-container
        [ngTemplateOutlet]="contentTemplate || defaultWidgetContent"
        [ngTemplateOutletContext]="{ $implicit: state }"
      ></ng-container>
      <ng-template #defaultWidgetContent let-state>
        <div class="sky-condition">
          {{ state.data.skyCondition === 'sunny' ? '☀️' : '☁️' }}
        </div>
      </ng-template>
      <div class="temperature">{{ state.data.temperature }}°C</div>
    </div>
    <div class="widget-actions">
      <ng-container
        [ngTemplateOutlet]="actionTemplate || defaultWidgetAction"
      ></ng-container>
      <ng-template #defaultWidgetAction>
        <button (click)="actions.reload()">Reload</button>
        <button (click)="actions.copyData()">Copy Info</button>
      </ng-template>
    </div>
  `,
  styleUrls: ['./weather-widget.component.scss'],
  providers: [WidgetActions, WidgetState],
})
export class WeatherWidgetComponent {
  state = inject(WidgetState);
  actions = inject(WidgetActions);

  @Input() headerTemplate!: TemplateRef<any>;

  @Input() actionTemplate!: TemplateRef<any>;

  @Input() contentTemplate!: TemplateRef<any>;
}
