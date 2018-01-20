import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  name: string;
  surname: string;
  email: string;
}

@Component({
  selector: 'app-events-component',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  usersCol: AngularFirestoreCollection<Post>;
  users: Observable<Post[]>;
  pinkCol: AngularFirestoreCollection<Post>;
  pinks: Observable<Post[]>;
  sabbCol: AngularFirestoreCollection<Post>;
  sabbs: Observable<Post[]>;

  name: string;
  surname: string;
  email: string;
  name1: string;
  surname1: string;
  email1: string;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.valueChanges();
    this.pinkCol = this.afs.collection('pinks');
    this.pinks = this.pinkCol.valueChanges();
    this.sabbCol = this.afs.collection('sabbs');
    this.sabbs = this.sabbCol.valueChanges();
  }

  regUser() {
    this.afs.collection('users').add({
      'name': this.name,
      'surname': this.surname,
      'email': this.email
    });
  }

  regUser1() {
    this.afs.collection('pinks').add({
      'name': this.name,
      'surname': this.surname,
      'email': this.email
    });
  }

  regUser2() {
    this.afs.collection('sabbs').add({
      'name': this.name1,
      'surname': this.surname1,
      'email': this.email1
    });
  }

}
