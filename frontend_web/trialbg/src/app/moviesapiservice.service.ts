import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoviesapiserviceService {
  private baseURL = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  private token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjcxNTY2YWEyZTAzYjA1ZjNlNDI2YTgyMmYxOWY0YSIsInN1YiI6IjYwMDgzZjU2MTc2YTk0MDA1MTBhYTExYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B8KndRWMLR8kfD9J6pLfs24cUubJd3kt5kzqwCTd9dk';
  constructor(private httpClient:HttpClient) { }

  public getMovies():Observable<Movie[]>{
    const headers = new HttpHeaders().set('Authorization', this.token);
    console.log()
    return this.httpClient.get<Movie[]>(`${this.baseURL}`,{headers}).pipe(

      map((response: any) => response.results as Movie[])

    );

  }

  public getMoviebyID(id: String|null = '0'):Observable<Movie>{
    const byIDURL = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const headers = new HttpHeaders().set('Authorization', this.token);
    console.log()
    return this.httpClient.get<Movie>(`${byIDURL}`,{headers}).pipe(

      map((response: any) => response.results as Movie)

    );

  }


}
