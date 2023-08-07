import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileData } from 'src/app/modules/shared/types/types';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LOCAL_STORAGE_USER_DETAILS } from 'src/app/util/constants';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent {
  profileData!: ProfileData;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.profileData = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_USER_DETAILS)!
    );
  }
}
