import { Component } from '@angular/core';

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.scss']
})
export class GoogleSigninComponent {

  private clientId = '76791249741-a2gjue6gevnnvtsu5fv35o4rccsjbnf0.apps.googleusercontent.com';
  private plusMeUrl = 'https://www.googleapis.com/auth/plus.me';
  private contactsUrl = 'https://www.googleapis.com/auth/contacts.readonly';
  private adminUrl = 'https://www.googleapis.com/auth/admin.directory.user.readonly';

  private scope = `profile email ${this.plusMeUrl} ${this.contactsUrl} ${this.adminUrl}`;

  googleInit() {

  }

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
}
