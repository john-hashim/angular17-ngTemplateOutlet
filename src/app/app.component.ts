import { Component } from '@angular/core';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';
import { WidgetsCustomActionComponent } from './widgets/widgets-custom-action/widgets-custom-action.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherWidgetComponent, WidgetsCustomActionComponent],
  template: `
    <weather-widget
      [headerTemplate]="altWidgetHeader"
      [contentTemplate]="altWidgetHeader"
      [actionTemplate]="altAction"
    >
    </weather-widget>
    <ng-template #altWidgetHeader>
      <div class="alt-header">Todays Weather</div>
    </ng-template>
    <ng-template #altWidgetContent let-state>
      <div class="alt-header">{{ state.data.temparature }}</div>
    </ng-template>
    <ng-template #altAction>
      <app-widgets-custom-action></app-widgets-custom-action>
    </ng-template>
  `,
  styles: [
    `
      :host {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
})
export class AppComponent {}
