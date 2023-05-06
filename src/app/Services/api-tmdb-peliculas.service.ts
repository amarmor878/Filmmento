import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError, map } from 'rxjs';
import { ErrorDialogComponent } from '../Components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ApiTmdbPeliculasService {
  private apiURL = 'https://api.themoviedb.org/3';
  private apiKey = '9347162b69469bd73796e4b1c24c5472';

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  /**
  * Consultas peliculas.
  * las cuales van a consistir en:
  * proximos estrenos, utlimos lanzamientos, ultima peliculas, mas populares y mejor votadas.
  */

  // Proximos estrenos
  getPeliculasProximosEstrenos(pageNumber: number): Observable<any> {
    return this.http.get(`${this.apiURL}/movie/upcoming?api_key=${this.apiKey}&language=es&page=${pageNumber}`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener los proximos estrenos', err);
          return throwError(() => err);
        })
      );
  }

  // Generos de las peliculas
  getGenerosPeliculas(): Observable<GenerosResponse> {
    return this.http.get<GenerosResponse>(`${this.apiURL}/genre/movie/list?api_key=${this.apiKey}&language=es`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener los generos de las peliculas', err);
          return throwError(() => err);
        })
      );
  }

  // Ultimos lanzamientos
  getPeliculasUltimosLanzamientos(pageNumber: number): Observable<any> {
    return this.http.get(`${this.apiURL}/movie/now_playing?api_key=${this.apiKey}&language=es&page=${pageNumber}`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener los últimos lanzamientos', err);
          return throwError(() => err);
        })
      );
  }

  // Ultima pelicula
  getPeliculasUltima(): Observable<any> {
    return this.http.get(`${this.apiURL}/movie/latest?api_key=${this.apiKey}&language=es`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener la última película', err);
          return throwError(() => err);
        })
      );
  }

  // Mas populares
  getPeliculasPopulares(pageNumber: number): Observable<any> {
    return this.http.get(`${this.apiURL}/movie/popular?api_key=${this.apiKey}&language=es&page=${pageNumber}`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener las películas más populares', err);
          return throwError(() => err);
        })
      );
  }

  // Mejor votadas
  getPeliculasTopRated(pageNumber: number): Observable<any> {
    return this.http.get(`${this.apiURL}/movie/top_rated?api_key=${this.apiKey}&language=es&page=${pageNumber}`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener las películas mejor votadas', err);
          return throwError(() => err);
        })
      );
  }

  // Trailer de la película
  getPeliculasTrailer(movieId: number) {
    return this.http.get(`${this.apiURL}/movie/${movieId}/videos?api_key=${this.apiKey}&language=es&page=1`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener el trailer de la película', err);
          return throwError(() => err);
        })
      );
  }

  private handleError(errorMessage: string, err: any) {
    console.log(err);
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '400px',
      data: { message: errorMessage }
    })
  }
}

interface GenerosResponse {
  genres: any[];
}