
import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;
  isBiggerThan992px = true;
  submitted = false;



  message: string;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth >= 992){
      this.isBiggerThan992px = true;
      console.log(this.isBiggerThan992px);
    } else {
      this.isBiggerThan992px = false;
    }
    console.log(window.innerWidth)
  }

  ngOnInit() {
    this.FormData = this.builder.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      comment: new FormControl('', [Validators.compose([Validators.required, Validators.maxLength(1000)])])
    });



    if(window.innerWidth >= 992){
      this.isBiggerThan992px = true;
      console.log(this.isBiggerThan992px);
    } else {
      this.isBiggerThan992px = false;
    }
    console.log(window.innerWidth)
  }

  get registerFormControl() {
    return this.FormData.controls;
  }

  onSubmit(FormData) {
    this.submitted = true;
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }


}
