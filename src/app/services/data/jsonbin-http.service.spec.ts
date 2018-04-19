import { inject, TestBed } from '@angular/core/testing';
import { JsonbinHttpService } from './jsonbin-http.service';
import { HttpClientTestingBackend } from '@angular/common/http/testing/src/backend';

xdescribe('JsonbinHttpService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                JsonbinHttpService,
            ],
            imports: [
                HttpClientTestingBackend,
            ],
        });
    });

    it('should be created', inject([JsonbinHttpService], (service: JsonbinHttpService) => {
        service.getRubric('5ad54f770f8cf5632c4a9497').subscribe(result => {
            // Coming soon
        });
    }));
});
