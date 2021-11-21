import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactService, Message } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  allMessages: any;
  message: any;
  success: boolean = true;

  constructor(private contactService: ContactService, private formBuilder: FormBuilder) {
    this.allMessages = contactService.getData().subscribe((res: any) => {
      res.pop() // Remove the last item which is the last updated value
      this.message = []
      res.forEach((r: any) => {
        let item = r
        this.message.push(item as Message)
      });
    })
  }

  ngOnInit(): void {
    // console.log(this.allMessages)
  }

  // Form initialization and validation
  contactForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    message: ['', Validators.required]
  })


  // async
  submit() {
    // If form is invalid don't submit
    if (this.contactForm.invalid) {
      return
    }

    let data = {
      name: this.contactForm.value.name,
      emailAddress: this.contactForm.value.email,
      message: this.contactForm.value.message,
    }

    // Post
    this.contactService.sendMessage(data.name, data.emailAddress, data.message)

    // Show Success message
    this.success = false

    // Hide success message after 3secs
    setTimeout(() => {
      this.success = true
    }, 3000);

    // Reset Form
    this.contactForm.reset();
  }

}
