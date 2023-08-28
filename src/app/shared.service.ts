import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  depositTotal: number = 0;
  withdrawnTotal: number = 0;
  withdrawals: { amount: number, timestamp: Date }[] = []; 
  constructor() {}

  updateDepositTotal(amount: number) {
    this.depositTotal += amount;
  }

  updateWithdrawnTotal(amount: number) {
    this.withdrawnTotal += amount;
    this.withdrawals.push({ amount, timestamp: new Date() }); 
  }
}
