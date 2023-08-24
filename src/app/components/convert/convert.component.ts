import { Component } from '@angular/core';
import { ApiDataService } from '../../Services/api-data.service';
import { ToggleStaticsData, ToggleStaticsData1 } from '../../static/data.static';
@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent {
  toggleData = ToggleStaticsData;
  toggleData1 = ToggleStaticsData1;
  activeTab = ToggleStaticsData[0].status;
}
