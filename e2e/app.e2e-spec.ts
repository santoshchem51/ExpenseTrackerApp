import { ExpenseTrackerAppPage } from './app.po';

describe('expense-tracker-app App', function() {
  let page: ExpenseTrackerAppPage;

  beforeEach(() => {
    page = new ExpenseTrackerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
