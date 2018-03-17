import { SampleSchool1AppPage } from './app.po';

describe('sample-school1-app App', () => {
  let page: SampleSchool1AppPage;

  beforeEach(() => {
    page = new SampleSchool1AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
