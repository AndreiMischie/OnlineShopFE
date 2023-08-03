import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ProfileData } from 'src/app/modules/shared/types/types';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent {
  profileData!: Observable<ProfileData>;

  constructor(private authService: AuthService) {}
}
