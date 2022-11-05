import { AngularFirestore } from "@angular/fire/compat/firestore";

import { BaseStorage } from "./base";

export class BookStorage<T> extends BaseStorage<T> {
  constructor(
    protected firestore: AngularFirestore,
    private bookMaxLength = 1048576 / 64
  ) {
    super(firestore, "user-books");
  }

  updateWords(id: string, words: string) {
    return this.firestore
      .collection(this.collectionName)
      .doc(id)
      .set({ wordsString: words }, { merge: true });
  }

  public checkBookSize(wordsString: string) {
    return wordsString.length <= this.bookMaxLength;
  }
}
