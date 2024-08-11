import { Component } from '@angular/core';
import { APP_NAME } from 'src/app/commons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  appName : string = APP_NAME;

}
