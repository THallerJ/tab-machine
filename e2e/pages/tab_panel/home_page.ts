import { type Page } from '@playwright/test';
import { PageNavDesktop } from '../page_base/page_nav_desktop';
import { TabPanel } from './tab_panel';

export class Home extends PageNavDesktop {
  readonly panel: TabPanel;

  constructor(page: Page) {
    super(page, 'http://localhost:3000');
    this.panel = new TabPanel(page);
  }
}
