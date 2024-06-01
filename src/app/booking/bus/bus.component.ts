import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-bus',
  standalone: false,
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css'],
})
export class BusComponent {
  @ViewChild('confirmModal') confirmModal: TemplateRef<any> | undefined;
  @ViewChild('cancelModal') cancelModal: TemplateRef<any> | undefined;
  selectedDate: Date = new Date();
  today: Date = new Date();
  selectedSeat: number | undefined;
  conformSeat: number | undefined;
  conformCancelSeat: number | undefined;
  totalSeats: number = 24;
  availableSeats: number = 0;
  bookedSeats: any = [];
  editSeat : boolean = false;

  name: string = '';
  mobileNo: String | undefined;

  needName: boolean = false;

  constructor(private modalService: NgbModal,
   
  ) {}

  ngOnInit(): void {
    this.availableSeats = this.totalSeats - this.bookedSeats.length;
  }

  seatClicked(seatNumber: number) {   
    
    this.resetModalFields();
    this.needName = false;

    if (this.bookedSeats.includes(seatNumber)) {    
      this.modalService.open(this.cancelModal, {
        centered: true, 
        backdrop: 'static',
        keyboard: false,
      });
      this.selectedSeat = seatNumber;
      return;
    } else {
      this.modalService.open(this.confirmModal, {
        centered: true, 
        backdrop: 'static',
        keyboard: false,
      });
      this.selectedSeat = seatNumber;
    }
  }

  bookSeat() {
    if (this.conformSeat == this.selectedSeat) {
      this.bookedSeats.push(this.selectedSeat);
      this.availableSeats = this.totalSeats - this.bookedSeats.length;

     
      this.conformCancelSeat = undefined
      this.conformSeat = undefined;
      this.selectedSeat = undefined;
      this.resetModalFields();
      return;
    } else {
      
      this.conformCancelSeat = undefined
      this.conformSeat = undefined;
      this.selectedSeat = undefined;
      this.resetModalFields();
      alert(`Please Select Valid Seat`);
      return;
    }
  }



  
  cancelBooking() {
    if (this.conformCancelSeat == this.selectedSeat) { 
      let index = this.bookedSeats.indexOf(this.conformCancelSeat)
      this.bookedSeats.splice(index,1)      
      this.availableSeats = this.totalSeats - this.bookedSeats.length;

      this.conformCancelSeat = undefined
      this.conformSeat = undefined;
      this.selectedSeat = undefined;
      this.resetModalFields();
      return;
    } else {
      this.conformCancelSeat = undefined
      this.conformSeat = undefined;
      this.selectedSeat = undefined
      this.resetModalFields();
      alert(`Please Select Valid Seat`);
      return;
    }
  }

  closemodal() {
    this.modalService.dismissAll();
    this.selectedSeat = undefined;
    this.conformSeat = undefined;
    this.conformCancelSeat = undefined
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


  iscancelBookingValid = () => {
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
      this.selectedSeat == this.conformCancelSeat
    ) {
      return false;
    } else if (
      !this.needName &&
      this.selectedSeat == this.conformCancelSeat &&
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
    this.conformCancelSeat = undefined
    this.conformSeat = undefined;
    this.selectedSeat = undefined;
  }
}
