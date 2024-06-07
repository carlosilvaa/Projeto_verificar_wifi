
import { Component, enableProdMode } from '@angular/core';
import { DxChartTypes } from 'devextreme-angular/ui/chart';
import { ChartsService, ComplaintsWithPercent } from '../../_componets/_service/charts.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;
interface Point {
  seriesName: string;
  valueText: string;
}

interface TooltipParams {
  points: Point[];
  argumentText: string;
}

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.css'
})
export class GraphsComponent {
  dataSource: ComplaintsWithPercent[];

  constructor(service: ChartsService) {
    this.dataSource = service.getComplaintsData();
  }

  customizeTooltip = ({ points, argumentText }: TooltipParams) => ({
    html: `<div><div class='tooltip-header'>${argumentText}</div>`
          + '<div class=\'tooltip-body\'><div class=\'series-name\'>'
          + `<span class='top-series-name'>${points[0].seriesName}</span>`
          + ': </div><div class=\'value-text\'>'
          + `<span class='top-series-value'>${points[0].valueText}</span>`
          + '</div><div class=\'series-name\'>'
          + `<span class='bottom-series-name'>${points[1].seriesName}</span>`
          + ': </div><div class=\'value-text\'>'
          + `<span class='bottom-series-value'>${points[1].valueText}</span>`
          + '% </div></div></div>',
  });
  

  customizeLabelText: DxChartTypes.ValueAxisLabel['customizeText'] = ({ valueText }) => `${valueText}%`;
}

