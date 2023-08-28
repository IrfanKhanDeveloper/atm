import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

@NgModule({
  declarations: [AppComponent,  DepositComponent, WithdrawComponent],
  imports: [BrowserModule, FormsModule , ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
