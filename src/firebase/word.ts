import { AngularFirestore } from "@angular/fire/compat/firestore";

import { BaseStorage } from "./base";

export class WordStorage<T> extends BaseStorage<T> {
  constructor(protected firestore: AngularFirestore) {
    super(firestore, "known-words");
  }
}
