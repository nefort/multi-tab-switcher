"use strict";
/*!
 * multi-tab-switcher TypeScript Library v1.0.0
 *
 * Copyright Takehisa Tsujii
 * Released under the MIT license
 */
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TabSwitcher_instances, _TabSwitcher_errorHandling, _TabSwitcher_initializeState, _TabSwitcher_changeState;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabSwitcher = exports.tabSwitcher = void 0;
class TabSwitcher {
    constructor(component) {
        _TabSwitcher_instances.add(this);
        this.component = component;
        this.tabs = component.querySelectorAll('[role="tab"]');
        this.panels = component.querySelectorAll('[role="tabpanel"]');
        __classPrivateFieldGet(this, _TabSwitcher_instances, "m", _TabSwitcher_errorHandling).call(this);
        this.tabs.forEach((tab, index) => {
            __classPrivateFieldGet(this, _TabSwitcher_instances, "m", _TabSwitcher_initializeState).call(this, tab, this.panels[index], index);
            tab.addEventListener('click', () => __classPrivateFieldGet(this, _TabSwitcher_instances, "m", _TabSwitcher_changeState).call(this, tab, index));
        });
    }
}
exports.TabSwitcher = TabSwitcher;
_TabSwitcher_instances = new WeakSet(), _TabSwitcher_errorHandling = function _TabSwitcher_errorHandling() {
    const hiddenPanels = this.component.querySelectorAll('[role="tabpanel"][hidden]');
    if (this.tabs.length !== this.panels.length) {
        throw new Error('The number of tabs and panels is different.');
    }
    else if (this.panels.length - hiddenPanels.length > 1) {
        throw new Error('There are multiple panels that are not set to hidden.');
    }
}, _TabSwitcher_initializeState = function _TabSwitcher_initializeState(tab, panel, index) {
    tab.setAttribute('aria-selected', String(!panel.hasAttribute('hidden')));
    tab.setAttribute('aria-id', `tab-${index + 1}`);
    panel.setAttribute('aria-labelledby', `tab-${index + 1}`);
}, _TabSwitcher_changeState = function _TabSwitcher_changeState(targetTab, targetIndex) {
    if (targetTab.getAttribute('aria-selected') === 'true')
        return;
    this.tabs.forEach((tab, index) => {
        const isClicked = index === targetIndex;
        tab.setAttribute('aria-selected', String(isClicked));
    });
    this.panels.forEach((panel, index) => {
        const isHidden = index !== targetIndex;
        isHidden ? panel.setAttribute('hidden', '') : panel.removeAttribute('hidden');
    });
};
const tabSwitcher = (selector) => {
    let tabSwitchers = [];
    document.querySelectorAll(selector).forEach((component) => {
        if (component instanceof HTMLElement) {
            tabSwitchers.push(new TabSwitcher(component));
        }
    });
    return tabSwitchers;
};
exports.tabSwitcher = tabSwitcher;
