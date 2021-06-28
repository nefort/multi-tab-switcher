/*!
 * multi-tab-switcher TypeScript Library v1.0.0
 *
 * Copyright Takehisa Tsujii
 * Released under the MIT license
 */
declare class TabSwitcher {
    #private;
    component: Element;
    tabs: NodeListOf<Element>;
    panels: NodeListOf<Element>;
    constructor(component: Element);
}
declare const tabSwitcher: (component: string) => void;
export { tabSwitcher, TabSwitcher };
