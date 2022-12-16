import { Component } from '@angular/core';
import { AuthService } from '../../modules/security/services/auth.service';
import { SessionService } from '../../modules/security/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user: { label: string } | null = null;

  constructor(
      private $session: SessionService<{ id: number, label: string }>
      ) {
          $session.subscribe((user) => this.user = user);
      }



  handleLogoutAction() {
      this.$session.close();
  }

  ngOnInit(){

  }
}
