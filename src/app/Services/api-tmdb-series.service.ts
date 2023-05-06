import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorDialogComponent } from '../Components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ApiTmdbSeriesService {
  private apiURL = 'https://api.themoviedb.org/3'
  private apiKey = '9347162b69469bd73796e4b1c24c5472'

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  /** 
  * Consultas series
  * las cuales van a consistir en: 
  * proximos estrenos, ultimos lanzamientos, más populares y más votadas.
  */

  // Proximos estrenos
  getSeriesProximosEstrenos(pageNumber: number): Observable<any> {
    return this.http.get(`${this.apiURL}/tv/on_the_air?api_key=${this.apiKey}&language=es&page=${pageNumber}`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener los próximos estrenos de series', err);
          return throwError(() => err);
        })
      );
  }

  // Ultimos lanzamientos
  getSeriesUltimosLanzamientos(pageNumber: number): Observable<any> {
    return this.http.get(`${this.apiURL}/tv/airing_today?api_key=${this.apiKey}&language=es&page=${pageNumber}`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener los últimos lanzamientos de series', err);
          return throwError(() => err);
        })
      );
  }

  // Mas populares
  getSeriesPopulares(pageNumber: number): Observable<any> {
    return this.http.get(`${this.apiURL}/tv/popular?api_key=${this.apiKey}&language=es&page=${pageNumber}`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener las series más populares', err);
          return throwError(() => err);
        })
      );
  }

  // Mejor votadas
  getSeriesTopRated(pageNumber: number): Observable<any> {
    return this.http.get(`${this.apiURL}/tv/top_rated?api_key=${this.apiKey}&language=es&page=${pageNumber}`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener las series mejor votadas', err);
          return throwError(() => err);
        })
      );
  }

  // Detalles de una serie
  getGenerosSerie(): Observable<any> {
    return this.http.get(`${this.apiURL}/genre/tv/list?api_key=${this.apiKey}&language=es`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener los géneros de series', err);
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
