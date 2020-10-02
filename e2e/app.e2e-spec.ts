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

    function createCustomRubric(): string {
        const title = faker.lorem.sentence();
        void element(by.css('input#rubric-name')).sendKeys(title);
        void element(by.css('input#component-1-name')).sendKeys(faker.lorem.word());
        void element(by.css('rc-edit-rubric-save-button button')).click();
        void browser.waitForAngular();

        return title;
    }

    xit('should allow rubric creation', () => {
        void browser.get('/');

        void element(by.css('rc-create-rubric-button a')).click();
        void expect(browser.getCurrentUrl()).toContain('/rubrics/create');

        const title = createCustomRubric();

        const header = element(by.css('rc-rubric-header h1'));
        void expect(header.getText()).toContain(title);
    });

    xit('should allow rubric removal for custom rubrics', () => {
        void browser.get('/rubrics/create');

        createCustomRubric();

        void element.all(by.css('rc-rubric-action-button-group div button')).last().click();
        void element.all(by.css('rc-delete-rubric-modal div button')).get(1).click();
        void browser.waitForAngular();

        void expect(browser.getCurrentUrl()).toContain('/rubrics');
        const rubricTitles = element.all(by.css('rc-root rc-rubric-list-item h5'));
        void expect(rubricTitles.count()).toBe(defaultRubricsArray.length);
    });

    xit('should allow rubric duplication', () => {
        void browser.get('/rubrics');

        void element.all(by.css('rc-rubric-action-button-group div button')).get(1).click();
        void element(by.css('rc-edit-rubric-save-button button')).click();
        void browser.waitForAngular();

        const header = element(by.css('rc-rubric-header h1'));
        void expect(header.getText()).toContain(defaultRubricsArray[0].name);

        void browser.get('/rubrics');
        const rubricTitles = element.all(by.css('rc-root rc-rubric-list-item h5'));
        void expect(rubricTitles.count()).toBe(defaultRubricsArray.length + 1);
    });

    xit('should show message when trying to create a rubric offline', () => {
        // TODO: Implement test
    });
});
