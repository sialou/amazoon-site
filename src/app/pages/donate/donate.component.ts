import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {

  donationType: string = 'cash';
  frequency: string = 'once';
  selectedAmount: number | null = null;
  paymentMethod: string | null = null;
  isOrganization: boolean = false;

  amounts: number[] = [5000, 10000, 20000, 50000];

  setDonationType(type: string) {
    this.donationType = type;
  }

  setFrequency(type: string) {
    this.frequency = type;
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount;
  }

  selectPayment(method: string) {
    this.paymentMethod = method;
  }
}