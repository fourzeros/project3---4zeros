import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';
import { SessionService } from '../../../services/session.service';
import { ConfirmationService } from '../../../services/confirmation.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  order= [];

  constructor(
    private router: Router,
    private selection: SelectionService,
    private session: SessionService,
    private confirmation: ConfirmationService,
  ) { }

  ngOnInit() {
  }



}
