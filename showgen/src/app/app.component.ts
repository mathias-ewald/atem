import { Component } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import { LayoutService } from './services/layout/layout.service';
import { SuperSource } from './services/layout/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'showgen';
}
