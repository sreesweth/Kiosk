import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Tenant } from '../models/tenant.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) {

  }
  private _darkTheme: Subject<boolean> = new Subject<boolean>();
  private _themeName: Subject<string> = new Subject<string>();
  private _tenantInfo: Subject<Tenant> = new Subject<Tenant>();
  isDarkTheme = this._darkTheme.asObservable();
  themeName = this._themeName.asObservable();
  tenantInfo = this._tenantInfo.asObservable();

  setDarkTheme(isDarkTheme: boolean) {
    this._darkTheme.next(isDarkTheme);
  }

  setAppTheme(theme: string) {
    this._themeName.next(theme);
  }

  getTenantInfo(tenant: string): Observable<Tenant> {
    let headers = new HttpHeaders().set('Content-Type', 'applicaiotn/json');
    return this.http.get<Tenant>(`/api/client/${tenant? tenant : ''}`, {headers: headers})
    .pipe(map(res => {
      this._darkTheme.next(res.IsDarkTheme);
      this._themeName.next(res.Theme);
      this._tenantInfo.next(res);
      return res;
    }));
  }
}
