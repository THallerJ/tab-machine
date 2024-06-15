import { type Page } from '@playwright/test';
import { PageNavMobile } from '../page_base/page_nav_mobile';
import { TabPanel } from './tab_panel';

export class MyTabsMobile extends PageNavMobile {
  readonly panel: TabPanel;

  constructor(page: Page) {
    super(page, 'http://localhost:3000/my_tabs');
    this.panel = new TabPanel(page);
  }
}
