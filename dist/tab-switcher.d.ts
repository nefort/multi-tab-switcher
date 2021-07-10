/*!
 * multi-tab-switcher TypeScript Library v1.1.0
 *
 * Copyright Takehisa Tsujii
 * Released under the MIT license
 */
declare class TabSwitcher {
    #private;
    component: HTMLElement;
    tabs: NodeListOf<HTMLElement>;
    panels: NodeListOf<HTMLElement>;
    constructor(component: HTMLElement);
}
declare const tabSwitcher: (selector: string) => TabSwitcher[];
export { tabSwitcher, TabSwitcher };
