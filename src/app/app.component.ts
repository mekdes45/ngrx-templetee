import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { loginAuth } from './store/actions/auth/auth.actions';
import { loggedInUserSelector } from './store/selectors/auth/auth.selectors';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean-tutorial';
  loggedInUser$: Observable<User | null>;
  constructor(private store: Store<AppState>) {
    this.store.dispatch(loginAuth({
      data: { username: 'Mesi', password: 'Password' }
      
    }));
    this.loggedInUser$=this.store.select(loggedInUserSelector)
  }
}
