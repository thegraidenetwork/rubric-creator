import { browser, by, element } from 'protractor';
import { defaultRubricsArray } from '../src/app/data-services/data/default-rubrics.array';
import * as faker from 'faker';

describe('rubric-creator App', () => {
    it('should display welcome message on home page', () => {
        void browser.get('/');

        const header = element(by.css('rc-root h1'));
        void expect(header.getText()).toEqual('Rubric Creator');
    });

    it('should display default rubrics on rubrics page', () => {
        void browser.get('/rubrics');

        const header = element(by.css('rc-root h1'));
        const rubricTitles = element.all(by.css('rc-root rc-rubric-list-item h5'));
        void expect(header.getText()).toEqual('Available Rubrics');
        void expect(rubricTitles.count()).toBe(defaultRubricsArray.length);
    });

    it('should be able to view single rubric', () => {
        void browser.get('/rubrics');

        void element.all(by.css('rc-root rc-rubric-list-item h5')).first().click();

        const header = element(by.css('rc-root h1'));
        void expect(header.getText()).toContain(defaultRubricsArray[0].name);
        void expect(browser.getCurrentUrl()).toContain(`/rubrics/${defaultRubricsArray[0].uuid}`);
    });

    it('should allow rubric creation', () => {
        void browser.get('/');
        const title = faker.lorem.sentence();

        void element(by.css('rc-create-rubric-button a')).click();
        void expect(browser.getCurrentUrl()).toContain('/rubrics/create');

        void element(by.css('input#rubric-name')).sendKeys(title);
        void element(by.css('input#component-1-name')).sendKeys(faker.lorem.word());
        void element(by.css('rc-edit-rubric-save-button button')).click();
        void browser.waitForAngular();

        const header = element(by.css('rc-rubric-header h1'));
        void expect(header.getText()).toContain(title);
    });

    xit('should allow rubric removal for custom rubrics', () => {
        // TODO: Implement test
    });

    xit('should allow rubric duplication', () => {
        // TODO: Implement test
    });
});
