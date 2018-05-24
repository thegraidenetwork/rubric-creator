import { Injectable } from '@angular/core';

function _window(): Window {
    return window;
}

@Injectable()
export class WindowRef {
    public get nativeWindow(): Window {
        return _window();
    }
}
