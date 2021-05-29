import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { BooksService } from "../../services/books.service";

@Injectable()
export class SingleBookResolver implements Resolve<any>{

    constructor(

        private booksService: BooksService,

    ) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.booksService.getBookById(parseInt(route.paramMap.get('id')));
    }
}

// "https://olcovers2.blob.core.windows.net/**",
//         "https://olcovers2.blob.core.windows.net/coverswp/2018/12/**"