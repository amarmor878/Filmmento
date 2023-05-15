import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError, map } from 'rxjs';
import { ErrorDialogComponent } from '../Components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ApiTmdbBusquedaService {
  private apiURL = 'https://api.themoviedb.org/3';
  private apiKey = '9347162b69469bd73796e4b1c24c5472';

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  /**
   * Consultas de busqueda
   * las cuales van a consistir en:
   * peliculas, series y personas.
   * 
   */
  // Busqueda global
  getBusquedaGlobal(query: string): Observable<any> {
    return this.http.get(`${this.apiURL}/search/multi?api_key=${this.apiKey}&language=es&query=${query}&include_adult=false&region=es&year=2020&media_type=movie,tv`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener los resultados de la busqueda', err);
          return throwError(() => err);
        })
      );
  }

  getBusquedaGlobalPorTipo(tipo: string, id: string): Observable<any> {
    return this.http.get(`${this.apiURL}/${tipo}/${id}?api_key=${this.apiKey}&language=es-ES`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener los resultados de la busqueda', err);
          return throwError(() => err);
        })
      );
  }

  // Busqueda de peliculas
  getBusquedaPeliculas(query: string): Observable<any> {
    return this.http.get(`${this.apiURL}/search/movie?api_key=${this.apiKey}&language=es&query=${query}`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener los resultados de la busqueda', err);
          return throwError(() => err);
        })
      );
  }

  // Busqueda de series
  getBusquedaSeries(query: string): Observable<any> {
    return this.http.get(`${this.apiURL}/search/tv?api_key=${this.apiKey}&language=es&query=${query}`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener los resultados de la busqueda', err);
          return throwError(() => err);
        })
      );
  }

  //Busqueda por trailer
  getBusquedaPorTrailer(tipo: string, id: string): Observable<any> {
    return this.http.get(`${this.apiURL}/${tipo}/${id}/videos?api_key=${this.apiKey}`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener los resultados de la busqueda', err);
          return throwError(() => err);
        })
      );
  }

  //Listar imagenes
  getImagenes(tipo: string, id: string): Observable<any> {
    return this.http.get(`${this.apiURL}/${tipo}/${id}/images?api_key=${this.apiKey}&language=es&include_image_language=es`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener los resultados de la busqueda', err);
          return throwError(() => err);
        })
      );
  }

  //Busqueda similares
  getBusquedaSimilares(tipo: string, id: string): Observable<any> {
    return this.http.get(`${this.apiURL}/${tipo}/${id}/similar?api_key=${this.apiKey}&language=es&page=1`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener los resultados de la busqueda', err);
          return throwError(() => err);
        })
      );
  }

  //Busqueda creditos:
  getBusquedaCreditos(tipo: string, id: string): Observable<any> {
    return this.http.get(`${this.apiURL}/${tipo}/${id}/credits?api_key=${this.apiKey}&language=es`)
      .pipe(
        catchError(err => {
          this.handleError('Error al obtener los resultados de la busqueda', err);
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
