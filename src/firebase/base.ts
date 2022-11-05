import { AngularFirestore } from "@angular/fire/compat/firestore";

export class BaseStorage<T> {
  constructor(
    protected firestore: AngularFirestore,
    protected collectionName: string
  ) {}

  add(data: T) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection(this.collectionName)
        .add(data)
        .then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  remove(id: string) {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }

  get(uid: string) {
    return this.firestore
      .collection(this.collectionName, (ref) => ref.where("uid", "==", uid))
      .snapshotChanges();
  }
}
