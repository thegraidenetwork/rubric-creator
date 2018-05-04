import { ComponentInterface } from '../object-interfaces/component.interface';

export function cloneComponentObject(component: ComponentInterface): ComponentInterface {
    return {
        ...component,
        levels: [...component.levels],
    };
}
