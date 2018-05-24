import { Injectable } from '@angular/core';

function _navigator(): Navigator {
    return navigator;
}

@Injectable()
export class NavigatorRef {
    public get nativeNavigator(): Navigator {
        return _navigator();
    }
}
