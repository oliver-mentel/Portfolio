import { Component, HostListener, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
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

  @Input()
  numberOfCharacters1 = 0;
  maxNumberOfCharacters = 1000;
  counter = true;

  constructor(private builder: FormBuilder, private contact: ContactService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth >= 992) {
      this.isBiggerThan992px = true;
      console.log(this.isBiggerThan992px);
    } else {
      this.isBiggerThan992px = false;
    }
    console.log(window.innerWidth);
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
      console.log(this.isBiggerThan992px);
    } else {
      this.isBiggerThan992px = false;
    }
  }

  get registerFormControl() {
    return this.FormData.controls;
  }

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

  zoomInOnFocus() {
    this.isZoomed = !this.isZoomed;
    console.log('You hit the text area.');
    document.getElementById('text-area').style.height = '200px';
  }

  zoomInOnClick() {
    this.isZoomed = !this.isZoomed;
    console.log(this.isZoomed);
    if (this.isZoomed) {
      document.getElementById('text-area').style.height = '200px';
      document.getElementById('contact-text').style.font = '20px';
    } else {
      document.getElementById('text-area').style.height = null;
    }
  }
}
