/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/tab-switcher.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabSwitcher": () => (/* binding */ tabSwitcher),
/* harmony export */   "TabSwitcher": () => (/* binding */ TabSwitcher)
/* harmony export */ });
/*!
 * multi-tab-switcher TypeScript Library v1.1.0
 *
 * Copyright Takehisa Tsujii
 * Released under the MIT license
 */
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TabSwitcher_instances, _TabSwitcher_errorHandling, _TabSwitcher_initializeState, _TabSwitcher_changeState;
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


var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdWx0aS10YWItc3dpdGNoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXVsdGktdGFiLXN3aXRjaGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tdWx0aS10YWItc3dpdGNoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tdWx0aS10YWItc3dpdGNoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tdWx0aS10YWItc3dpdGNoZXIvLi9zcmMvdGFiLXN3aXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsU0FBSSxJQUFJLFNBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsdUNBQXVDLFVBQVU7QUFDakQsaURBQWlELFVBQVU7QUFDM0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDb0MiLCJmaWxlIjoidGFiLXN3aXRjaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiFcbiAqIG11bHRpLXRhYi1zd2l0Y2hlciBUeXBlU2NyaXB0IExpYnJhcnkgdjEuMS4wXG4gKlxuICogQ29weXJpZ2h0IFRha2VoaXNhIFRzdWppaVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9UYWJTd2l0Y2hlcl9pbnN0YW5jZXMsIF9UYWJTd2l0Y2hlcl9lcnJvckhhbmRsaW5nLCBfVGFiU3dpdGNoZXJfaW5pdGlhbGl6ZVN0YXRlLCBfVGFiU3dpdGNoZXJfY2hhbmdlU3RhdGU7XG5jbGFzcyBUYWJTd2l0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50KSB7XG4gICAgICAgIF9UYWJTd2l0Y2hlcl9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy50YWJzID0gY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFiXCJdJyk7XG4gICAgICAgIHRoaXMucGFuZWxzID0gY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFicGFuZWxcIl0nKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVGFiU3dpdGNoZXJfaW5zdGFuY2VzLCBcIm1cIiwgX1RhYlN3aXRjaGVyX2Vycm9ySGFuZGxpbmcpLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9UYWJTd2l0Y2hlcl9pbnN0YW5jZXMsIFwibVwiLCBfVGFiU3dpdGNoZXJfaW5pdGlhbGl6ZVN0YXRlKS5jYWxsKHRoaXMsIHRhYiwgdGhpcy5wYW5lbHNbaW5kZXhdLCBpbmRleCk7XG4gICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9UYWJTd2l0Y2hlcl9pbnN0YW5jZXMsIFwibVwiLCBfVGFiU3dpdGNoZXJfY2hhbmdlU3RhdGUpLmNhbGwodGhpcywgdGFiLCBpbmRleCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5fVGFiU3dpdGNoZXJfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX1RhYlN3aXRjaGVyX2Vycm9ySGFuZGxpbmcgPSBmdW5jdGlvbiBfVGFiU3dpdGNoZXJfZXJyb3JIYW5kbGluZygpIHtcbiAgICBjb25zdCBoaWRkZW5QYW5lbHMgPSB0aGlzLmNvbXBvbmVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYnBhbmVsXCJdW2hpZGRlbl0nKTtcbiAgICBpZiAodGhpcy50YWJzLmxlbmd0aCAhPT0gdGhpcy5wYW5lbHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIG51bWJlciBvZiB0YWJzIGFuZCBwYW5lbHMgaXMgZGlmZmVyZW50LicpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnBhbmVscy5sZW5ndGggLSBoaWRkZW5QYW5lbHMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGFyZSBtdWx0aXBsZSBwYW5lbHMgdGhhdCBhcmUgbm90IHNldCB0byBoaWRkZW4uJyk7XG4gICAgfVxufSwgX1RhYlN3aXRjaGVyX2luaXRpYWxpemVTdGF0ZSA9IGZ1bmN0aW9uIF9UYWJTd2l0Y2hlcl9pbml0aWFsaXplU3RhdGUodGFiLCBwYW5lbCwgaW5kZXgpIHtcbiAgICB0YWIuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgU3RyaW5nKCFwYW5lbC5oYXNBdHRyaWJ1dGUoJ2hpZGRlbicpKSk7XG4gICAgdGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1pZCcsIGB0YWItJHtpbmRleCArIDF9YCk7XG4gICAgcGFuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBgdGFiLSR7aW5kZXggKyAxfWApO1xufSwgX1RhYlN3aXRjaGVyX2NoYW5nZVN0YXRlID0gZnVuY3Rpb24gX1RhYlN3aXRjaGVyX2NoYW5nZVN0YXRlKHRhcmdldFRhYiwgdGFyZ2V0SW5kZXgpIHtcbiAgICBpZiAodGFyZ2V0VGFiLmdldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpID09PSAndHJ1ZScpXG4gICAgICAgIHJldHVybjtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpc0NsaWNrZWQgPSBpbmRleCA9PT0gdGFyZ2V0SW5kZXg7XG4gICAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBTdHJpbmcoaXNDbGlja2VkKSk7XG4gICAgfSk7XG4gICAgdGhpcy5wYW5lbHMuZm9yRWFjaCgocGFuZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzSGlkZGVuID0gaW5kZXggIT09IHRhcmdldEluZGV4O1xuICAgICAgICBpc0hpZGRlbiA/IHBhbmVsLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpIDogcGFuZWwucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICB9KTtcbn07XG5jb25zdCB0YWJTd2l0Y2hlciA9IChzZWxlY3RvcikgPT4ge1xuICAgIGxldCB0YWJTd2l0Y2hlcnMgPSBbXTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICB0YWJTd2l0Y2hlcnMucHVzaChuZXcgVGFiU3dpdGNoZXIoY29tcG9uZW50KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGFiU3dpdGNoZXJzO1xufTtcbmV4cG9ydCB7IHRhYlN3aXRjaGVyLCBUYWJTd2l0Y2hlciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==