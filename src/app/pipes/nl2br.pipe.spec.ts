import { Nl2brPipe } from './nl2br.pipe';
import * as faker from 'faker';

describe('Pipe: Nl2br', () => {
    let nl2br: Nl2brPipe;

    beforeEach(() => {
        nl2br = new Nl2brPipe();
    });

    it('should convert newline to br HTML', () => {
        const line1 = faker.lorem.words();
        const line2 = faker.lorem.words();
        const text = `${line1}\n${line2}`;
        expect(nl2br.transform(text)).toBe(`${line1}<br/>${line2}`);
    });

    it('should not add <br/> to single line', () => {
        const text = faker.lorem.words();
        expect(nl2br.transform(text)).toBe(text);
    });

});
