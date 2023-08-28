import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  withdrawAmount: number = 0;
  withdrawnMessage: string = '';
  withdrawnTimestamp: Date | null = null;

  constructor(private sharedService: SharedService) {}

  withdraw() {
    const validDenominations = [100, 200, 500, 2000];
    const amount = this.withdrawAmount;

    if (validDenominations.some(denomination => amount % denomination === 0)) {
      if (amount > this.sharedService.depositTotal - this.sharedService.withdrawnTotal) {
        this.withdrawnMessage = 'Insufficient balance for withdrawal.';
      } else {
        this.sharedService.updateDepositTotal(-amount);
        this.sharedService.updateWithdrawnTotal(amount);
        this.withdrawnMessage = '';
        this.withdrawnTimestamp = new Date();
      }
    } else {
      this.withdrawnMessage = 'Withdrawal amount must be a multiple of 100, 200, 500, or 2000.';
    }
  }

  get withdrawnTotal() {
    return this.sharedService.withdrawnTotal;
  }

  get depositTotal() {
    return this.sharedService.depositTotal;
  }

  get allWithdrawals() {
    return this.sharedService.withdrawals;
  }
}
