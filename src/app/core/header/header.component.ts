import { Component } from '@angular/core';
import { APP_NAME } from 'src/app/commons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  appName: string = APP_NAME ;

}
