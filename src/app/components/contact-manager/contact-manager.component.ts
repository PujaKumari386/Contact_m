import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit{
  public loading: boolean = false;
  public contacts:IContact[] = [];
  public errorMessage: string | null = null;

  constructor(private contactservice: ContactService) {
   }

  ngOnInit(): void {
    this.loading = true;
    this.contactservice.getAllContacts().subscribe((data :|IContact[]) => {
      this.contacts = data;
      this.loading = false;
    }, (error) => {
      this.errorMessage = error;
      this.loading = false;
    });
    
  }
}
