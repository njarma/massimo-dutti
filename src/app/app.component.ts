import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'massimo-dutti';
  toasterConfig: any;
  toasterconfig: ToasterConfig = new ToasterConfig({
      positionClass: 'toast-bottom-right',
      showCloseButton: true
  });
}
