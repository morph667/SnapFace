import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
      {
        id: 1,
        title: 'Archi',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date("2021-08-22T12:09:32"),
        snaps: 27,
        location: 'Dijon'
      },
      {
        id: 2,
        title: 'Savoie Mont Blanc',
        description: 'Un endroit magnifique pour les randonnées.',
        imageUrl: 'https://static.savoie-mont-blanc.com/wp-content/uploads/external/7d9e8d19f05cef4b03c6bd6ff7c6d43f-8292095-904x602.jpg',
        createdDate: new Date("2021-02-12T14:37:12"),
        snaps: 910,
        location: "La Chapelle-d'Abondance"
      },
      {
        id: 3,
        title: 'Un bon repas',
        description: 'Mmmh que c\'est bon !',
        imageUrl: '../assets/meal1.webp',
        createdDate: new Date(),
        snaps: 350
      }
  ]

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}


