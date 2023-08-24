import { Component ,OnInit } from '@angular/core';
import { ApiDataService } from './Services/api-data.service';
import { ToggleStaticsData, ToggleStaticsData1 } from './static/data.static';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Currency-exchange';

}
