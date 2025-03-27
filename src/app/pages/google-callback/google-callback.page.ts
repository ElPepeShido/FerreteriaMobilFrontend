import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  standalone: false,
  selector: 'app-google-callback',
  templateUrl: './google-callback.page.html',
  styleUrls: ['./google-callback.page.scss'],
})
export class GoogleCallbackPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const response = JSON.parse(params['data']);
      if (response) {
        this.authService.handleGoogleResponse(response);
        this.router.navigate(['/catalog']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
