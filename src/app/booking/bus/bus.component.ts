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
  selectedSeat : number | undefined ;
  conformSeat : number | undefined ;
  totalSeats : number = 24
  bookedSeats : [] = []




  constructor( private modalService: NgbModal){

  }



  seatClicked(seatNumber: number,content: any) {
    this.selectedSeat = seatNumber;   

    
    this.modalService.open(content, { centered: true, backdrop: 'static', keyboard: false }); 
  }

  bookSeat(){
    if(this.conformSeat ==  this.selectedSeat){     

      alert(`You clicked on Seat ${this.selectedSeat}`);
      this.conformSeat = undefined
      this.selectedSeat = undefined
      return
    }else{
      this.conformSeat = undefined
      this.selectedSeat = undefined
      alert(`Please Select Valid Seat`);
      return
      
    }
 
  }

  closemodal(){
    this.selectedSeat =0 
    this.modalService.dismissAll();
  }
 
}
