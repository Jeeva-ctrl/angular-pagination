import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  photosLists = [];
}
