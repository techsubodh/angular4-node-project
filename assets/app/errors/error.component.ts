import { Component, OnInit } from "@angular/core";
import { Error } from "./error.model";
import { ErrorService } from "./error.service";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styles: [
    `
      .backdrop {
        background-color: rgba(0,0,0,0.6);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
      }
    `
  ]
})
export class ErrorComponent implements OnInit {

  constructor(private errorService: ErrorService) {}

  ngOnInit() {
    this.errorService.errorOcurred.subscribe(
      (error: Error) => {
        this.error = error;
        this.display = 'block';
      }
    );
  }
  error: Error;
  display = 'none';

  onErrorHandled() {
    this.display = 'none';
  }
}