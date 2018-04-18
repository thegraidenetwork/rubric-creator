import { inject, TestBed } from '@angular/core/testing';
import { JsonbinHttpService } from './jsonbin-http.service';
import { HttpClientTestingBackend } from '@angular/common/http/testing/src/backend';
import { HttpClient, HttpClientModule } from '@angular/common/http';

xdescribe('JsonbinHttpService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                JsonbinHttpService,
                HttpClient,
            ],
            imports: [
                // HttpClientTestingBackend,
                HttpClientModule,
            ],
        });
    });

    it('should be created', inject([JsonbinHttpService], (service: JsonbinHttpService) => {
        service.getRubric('5ad54f770f8cf5632c4a9497').subscribe(result => {
            console.log(result);
            console.log("TEST");
        });
    }));
});
