import { Component, HostListener, Input, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  FormData: UntypedFormGroup;
  isBiggerThan992px = true;
  isSubmitted: boolean = false;
  hasError: boolean = false;

  @Input()
  numberOfCharacters1 = 0;
  maxNumberOfCharacters = 500;
  counter = true;

  constructor(private builder: UntypedFormBuilder, private contact: ContactService) {}

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
      name: new UntypedFormControl('', [Validators.required]),
      email: new UntypedFormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      message: new UntypedFormControl('', [
        Validators.compose([Validators.required, Validators.maxLength(500)]),
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
    // console.log(FormData);
    this.contact.PostMessage(FormData).subscribe(
      (response) => {
        console.log(response);

        this.isSubmitted = true;
        this.hasError = false;
        this.FormData.reset()
        setTimeout(() => {
          this.isSubmitted = false;
        }, 3000);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
        this.hasError = true;
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
}
