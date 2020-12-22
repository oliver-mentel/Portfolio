import { Component, HostListener, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { timeout } from 'rxjs/operators';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;
  isBiggerThan992px = true;
  submitted = false;
  isZoomed = false;
  showMessage = false;
  active = false;

  @Input()
  numberOfCharacters1 = 0;
  maxNumberOfCharacters = 1000;
  counter = true;

  constructor(private builder: FormBuilder, private contact: ContactService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth >= 992) {
      this.isBiggerThan992px = true;
    } else {
      this.isBiggerThan992px = false;
    }
  }

  ngOnInit() {
    this.FormData = this.builder.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      comment: new FormControl('', [
        Validators.compose([Validators.required, Validators.maxLength(1000)]),
      ]),
    });

    if (window.innerWidth >= 992) {
      this.isBiggerThan992px = true;
    } else {
      this.isBiggerThan992px = false;
    }
  }

  get registerFormControl() {
    return this.FormData.controls;
  }

  // Email Service Call to contact.service.ts
  onSubmit(FormData) {
    this.submitted = true;
    console.log(FormData);
    this.contact.PostMessage(FormData).subscribe(
      (response) => {
        location.href = 'https://mailthis.to/confirm';
        console.log(response);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }

  // Character Counter
  onKeyUp(event: any): void {
    this.numberOfCharacters1 = event.target.value.length;

    if (this.numberOfCharacters1 > this.maxNumberOfCharacters) {
      event.target.value = event.target.value.slice(
        0,
        this.maxNumberOfCharacters
      );
      this.numberOfCharacters1 = this.maxNumberOfCharacters;
    }
  }

  // Enlarges Message box on Focus for better usability
  // zoomInOnFocus() {
  //   this.isZoomed = !this.isZoomed;
  //   console.log('You hit the text area.');
  //   document.getElementById('text-area').style.height = '200px';
  // }

  // Enlarges Message box on click for better usability
  // zoomInOnClick() {
  //   this.isZoomed = !this.isZoomed;
  //   console.log(this.isZoomed);
  //   if (this.isZoomed) {
  //     document.getElementById('text-area').style.height = '200px';
  //   } else {
  //     document.getElementById('text-area').style.height = null;
  //   }
  // }

  // Displays Success Msg on submit.
  onSend($event) {
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }
}
