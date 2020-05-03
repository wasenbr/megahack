import { Component } from '@angular/core';
import { RegisterIconsService } from './service/registerIcons/register-icons.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'frontend';

  constructor (public registerIcons: RegisterIconsService) {
    let icons = ['skip-forward', 'skip-next', 'play', 'pause', 'clock'];
    registerIcons.registerIcons(icons);
  }

}
