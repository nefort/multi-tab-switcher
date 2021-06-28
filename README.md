# Multi Tab Switcher

`Multi Tab Switcher` is a JavaScript library that allows you to easily add the function of switching panels by clicking tabs.

It can be applied to `multiple` components and also supports `TypeScript` typing.

![sample-gif](/umd-example/sample.gif)

## Getting Started(npm)

```bash
npm install multi-tab-switcher
```

### A Simple Example(npm)

1. Add any class to tags including tabs and panels.
2. Assign `role = "tab"` to tabs.
3. Assign `role="tabpanel"` to panels.
4. Add `hidden` to the panel that is not initially displayed.
5. In js file, import `tabSwitcher` and pass the class selector given to the component as an argument

```html
<div class="tab-component">
  <div>
    <button role="tab">Tab A-1</button>
    <button role="tab">Tab A-2</button>
    <button role="tab">Tab A-3</button>
  </div>
  <div role="tabpanel">Panel A-1</div>
  <div role="tabpanel" hidden>Panel A-2</div>
  <div role="tabpanel" hidden>Panel A-3</div>
</div>

<div class="tab-component">
  <ul>
    <li role="tab">Tab B-1</li>
    <li role="tab">Tab B-2</li>
    <li role="tab">Tab B-3</li>
  </ul>
  <div role="tabpanel" hidden>
    <p>Title B-1</p>
    <p>Content B-1</p>
  </div>
  <div role="tabpanel">
    <p>Title B-2</p>
    <p>Content B-2</p>
  </div>
  <div role="tabpanel" hidden>
    <p>Title B-3</p>
    <p>Content B-3</p>    
  </div>
</div>
```

```js
import { tabSwitcher } from 'multi-tab-switcher';

tabSwitcher('.tab-component');
```

## Getting Started(CDN)

Add the following above the body closing tag.

```html
<script
  src="https://cdn.jsdelivr.net/gh/next-comfort/multi-tab-switcher@1.0.0/dist/tab-switcher-umd.min.js"
  integrity="sha384-BS+8V+94+OOWMlwF5b+XCkcIJ0hDmZxS/TRX4S6reg3VxnvoqhymNBcLOs8w6s8W"
  crossorigin="anonymous"
></script>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    tabSwitcher('.tab-component');
  });
</script>
```

Sample code can be found in [umd-example](https://github.com/next-comfort/multi-tab-switcher/blob/main/umd-example/).

## License

MIT License