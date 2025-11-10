import { Component } from '@angular/core';
import { ApiService } from './services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
})
export class App {
  serverMessage = 'Loading...';

  constructor(private apiService: ApiService) {
    this.apiService.testConnection().subscribe({
      next: (response) => {
        this.serverMessage = response.message;
      },
      error: (error) => {
        this.serverMessage = 'Backend connection failed!';
        console.error(error);
      }
    });
  }
}