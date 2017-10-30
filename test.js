const mobilePhonesPage = 'https://rozetka.com.ua/mobile-phones/c80003/';
const text = 'Мобильные телефоны';
const testCase = 'Is header h1 with the text "'+ text + '" is present';
const testsPlanned = 3;

casper.test.begin(testCase, testsPlanned, function suite(test) {
    casper.start(mobilePhonesPage, function() {
        test.assertExists('h1', 'Header h1 is present on a page');
        test.assertElementCount('h1', 1, 'Only one h1 is present on the page');
        test.assertSelectorHasText('h1', text, 'The text inside the element is correct')
    });

    casper.run(function() {
        test.done();
    });
});
