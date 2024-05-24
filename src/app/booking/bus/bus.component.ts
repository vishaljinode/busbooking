import {Component} from '@angular/core';


@Component({
  selector: 'app-bus',
  standalone: false, 
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent {
  selectedDate: Date = new Date();

  seatClicked(seatNumber: number) {
    alert(`You clicked on Seat ${seatNumber}`);
  }
}
