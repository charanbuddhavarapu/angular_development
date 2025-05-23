import { Component, Input } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-employee-modal',
  standalone: true,
  imports: [],
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.css']
})
export class EmployeeModalComponent {
  @Input() employee: any;

  openModal() {
    const modalElement = document.getElementById('viewModal');
    if (modalElement) {
      const bootstrapModal = new bootstrap.Modal(modalElement);
      bootstrapModal.show();
    }
  }
}
