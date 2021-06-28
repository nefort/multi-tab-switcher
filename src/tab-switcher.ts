/*!
 * multi-tab-switcher TypeScript Library v1.0.0
 *
 * Copyright Takehisa Tsujii
 * Released under the MIT license
 */

class TabSwitcher {
  component: Element;
  tabs: NodeListOf<Element>;
  panels: NodeListOf<Element>;

  constructor(component: Element) {
    this.component = component;
    this.tabs = component.querySelectorAll('[role="tab"]');
    this.panels = component.querySelectorAll('[role="tabpanel"]');

    this.#errorHandling();
    this.tabs.forEach((tab, index): void => {
      this.#initializeState(tab, this.panels[index], index);
      tab.addEventListener('click', () => this.#changeState(tab, index));
    });
  }

  #errorHandling(): void {
    const hiddenPanels = this.component.querySelectorAll('[role="tabpanel"][hidden]');

    if (this.tabs.length !== this.panels.length) {
      throw new Error('The number of tabs and panels is different.');
    } else if (this.panels.length - hiddenPanels.length > 1) {
      throw new Error('There are multiple panels that are not set to hidden.');
    }
  }

  #initializeState(tab: Element, panel: Element, index: number) {
    tab.setAttribute('aria-selected', String(!panel.hasAttribute('hidden')));
    tab.setAttribute('aria-id', `tab-${index + 1}`);
    panel.setAttribute('aria-labelledby', `tab-${index + 1}`);
  }

  #changeState(targetTab: Element, targetIndex: number): void {
    if (targetTab.getAttribute('aria-selected') === 'true') return;

    this.tabs.forEach((tab, index): void => {
      const isClicked = index === targetIndex;
      tab.setAttribute('aria-selected', String(isClicked));
    });

    this.panels.forEach((panel, index) => {
      const isHidden = index !== targetIndex;
      isHidden ? panel.setAttribute('hidden', '') : panel.removeAttribute('hidden');
    });
  }
}

const tabSwitcher = (component: string): void => {
  document.querySelectorAll(component).forEach((element) => new TabSwitcher(element));
};

export { tabSwitcher, TabSwitcher };
