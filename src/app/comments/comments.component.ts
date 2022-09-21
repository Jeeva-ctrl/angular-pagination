import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../services/api.services';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  commentsLists = [];
  totalLists = [];
  isLoading = true;
  itemsPerPage = 0;
  initialPage = 0;
  currentPage = 0;
  showPagesAtOneTime = 0;
  constructor(
    private apiService: ApiService,
    private cdRef: ChangeDetectorRef
  ) {
    this.itemsPerPage = 20;
    this.initialPage = 1;
    this.currentPage = 1;
    this.showPagesAtOneTime = 5;
    this.getCommentsList();
  }
  ngOnInit(): void {}
  getCommentsList() {
    try {
      this.apiService.getComments().subscribe(
        (data) => {
          console.log({data})
          this.totalLists = data;
          this.isLoading = false;
        },
        (err) => {
          this.isLoading = false;
          console.log('Error => ', err);
        }
      );
    } catch (error) {
      this.isLoading = false;
      console.log('error => ', error);
    }
  }
}
