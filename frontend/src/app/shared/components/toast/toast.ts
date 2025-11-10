import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ToastService, ToastMessage } from '../../services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrls: ['./toast.scss'],
})
export class ToastComponent implements OnInit, OnDestroy {
  message: ToastMessage | null = null;
  private subscription!: Subscription;
  private timeoutSub!: Subscription;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
  console.log('✅ ToastComponent iniciado');
  this.subscription = this.toastService.toast$.subscribe((msg) => {
    this.message = msg;

    if (this.timeoutSub) this.timeoutSub.unsubscribe();
    this.timeoutSub = timer(3000).subscribe(() => (this.message = null));
  });
}

  ngOnDestroy() {
    this.subscription.unsubscribe();
    if (this.timeoutSub) this.timeoutSub.unsubscribe();
  }

  close() {
    this.message = null;
  }
}
