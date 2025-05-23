import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import {EMPLOYEE_ADDED_MESSAGE} from '../../constants/message_constants'

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {
  openAlert() {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }

  openSnackBar() {
    new Snackbar(EMPLOYEE_ADDED_MESSAGE,
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }

  openConfirmation() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
}