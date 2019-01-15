import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class SnippetHttpService {
  constructor(private httpClient: HttpClient) { }

}
