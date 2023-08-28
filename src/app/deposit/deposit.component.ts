import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  depositAmount100: number = 0;
  depositAmount200: number = 0;
  depositAmount500: number = 0;
  depositAmount2000: number = 0;
  depositMessage: string = '';

  constructor(private sharedService: SharedService) {}

  deposit() {
    const validDenominations = [100, 200, 500, 2000];
    const amounts = [
      this.depositAmount100 * 100,
      this.depositAmount200 * 200,
      this.depositAmount500 * 500,
      this.depositAmount2000 * 2000
    ];

    for (let i = 0; i < validDenominations.length; i++) {
      if (amounts[i] % validDenominations[i] !== 0) {
        this.depositMessage = 'Deposit amount must be in multiples of 100, 200, 500, or 2000.';
        return;
      }
    }

    const totalDeposit = amounts.reduce((acc, val) => acc + val, 0);
    this.sharedService.updateDepositTotal(totalDeposit);
    this.clearDepositInputs();
    this.depositMessage = '';
  }

  private clearDepositInputs() {
    this.depositAmount100 = this.depositAmount200 = this.depositAmount500 = this.depositAmount2000 = 0;
  }

  get depositTotal() {
    return this.sharedService.depositTotal;
  }
}
