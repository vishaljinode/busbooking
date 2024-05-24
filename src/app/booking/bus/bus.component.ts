import {Component} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bus',
  standalone: false, 
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent {
  selectedDate: Date = new Date();
  today: Date = new Date();
  selectedSeat : number = 0
  conformSeat : number = 0


  constructor( private modalService: NgbModal){

  }



  seatClicked(seatNumber: number,content: any) {
    this.selectedSeat = seatNumber;     
    this.modalService.open(content, { centered: true, backdrop: 'static', keyboard: false }); 
  }

  bookSeat(){
  alert(`You clicked on Seat ${this.selectedSeat}`);
  }

  closemodal(){
    this.selectedSeat =0 
    this.modalService.dismissAll();
  }
 
}
