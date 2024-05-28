import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus',
  standalone: false,
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css'],
})
export class BusComponent {
  selectedDate: Date = new Date();
  today: Date = new Date();
  selectedSeat: number | undefined;
  conformSeat: number | undefined;
  totalSeats: number = 24;
  availableSeats: number = 0;
  bookedSeats: any = [];

  name: string = '';
  mobileNo: String | undefined;

  needName: boolean = false;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.availableSeats = this.totalSeats - this.bookedSeats.length;
  }

  seatClicked(seatNumber: number, content: any) {

    console.log("content--->",content)
    
    this.resetModalFields();
    this.needName = false;

    if (this.bookedSeats.includes(seatNumber)) {
      alert('Sorry ! This seat is already booked..');
      return;
    } else {
      this.modalService.open(content, {
        centered: true, 
        backdrop: 'static',
        keyboard: false,
      });
      this.selectedSeat = seatNumber;
    }
  }

  bookSeat() {
    if (this.conformSeat == this.selectedSeat) {
      alert(`You clicked on Seat ${this.selectedSeat}`);

      this.bookedSeats.push(this.selectedSeat);
      this.availableSeats = this.totalSeats - this.bookedSeats.length;

      this.conformSeat = 0;
      this.selectedSeat = 0;
      this.resetModalFields();
      return;
    } else {
      this.conformSeat = 0;
      this.selectedSeat = 0;
      this.resetModalFields();

      alert(`Please Select Valid Seat`);

      return;
    }
  }

  closemodal() {
    this.modalService.dismissAll();
    this.selectedSeat = undefined;
    this.conformSeat = undefined;
    this.resetModalFields();
  }

  isSeatBooked(seatNumber: number): boolean {
    return this.bookedSeats.includes(seatNumber);
  }

  nametoggle() {
    this.needName = !this.needName;
    this.resetModalFields();
 
  }

  isBookingValid = () => {
    if (
      this.needName &&
      this.name != '' &&
      this.mobileNo != '' &&
      this.mobileNo != undefined &&
      this.mobileNo != null &&
      this.mobileNo.length == 10 &&
      this.selectedSeat != 0 &&
      this.selectedSeat != undefined &&
      this.selectedSeat != null &&
      this.selectedSeat == this.conformSeat
    ) {
      return false;
    } else if (
      !this.needName &&
      this.selectedSeat == this.conformSeat &&
      this.selectedSeat != 0 &&
      this.selectedSeat != undefined &&
      this.selectedSeat != null
    ) {
      return false;
    } else {
      return true;
    }
  };

  resetModalFields() {  
    this.name = '';
    this.mobileNo = '';
  }
}
