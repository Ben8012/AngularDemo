import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject, switchMap } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
    private add$ = new Subject<any>();
    private remove$ = new Subject<any>();
    private update$ = new Subject<any>();
    private updated$ = new Subject<{id: number, product: any}>();

    get AddEvent():Observable<any>{ return this.add$.asObservable()}
    get RemoveEvent():Observable<any>{ return this.remove$.asObservable()}
    get UpdateEvent():Observable<any>{ return this.update$.asObservable()}

    get UpdatedEvent():Observable<any>{ return this.updated$.asObservable()}
    set UpdatedEvent(v: any){this.updated$.next(v) }

    constructor(private $http: HttpClient) { }

    addProduct(product: any)
    {
        this.$http.post('http://localhost:3000/products', product).subscribe(v => {
            this.add$.next(v)
        })
    }

    removeProduct(id: number)
    {
        this.$http.delete('http://localhost:3000/products/'+ id).subscribe(v => {
        this.remove$.next(v);
       })

    }

    getPage()
    {
        return this.$http.get<any[]>("http://localhost:3000/products")
    }

    updateProduct(product: any, id: number | null = null){
        if (!id)
        {
            this.update$.next(product);
            return of(product);
        }
        else
        {
            return this.$http.put<any>(`http://localhost:3000/products/${id}`, product)
        }
    };

}
