# Multi Tab Switcher

`Multi Tab Switcher` はタブのクリックにより表示するパネルを切り替える機能を簡単に実装できる JavaScript ライブラリです。

複数コンポーネントに対して適用することができ， `TypeScript` の型付けにも対応しております。

![sample-gif](/umd-example/sample.gif)

## インストール方法(npm)

```bash
npm install multi-tab-switcher
```

### 例(npm)

1. タブとパネルを含むタグ(コンポーネント)に任意のクラスを付与
2. タブに `role="tab"` を付与
3. パネルに `role="tabpanel"` を付与
4. 初期表示しないパネルに `hidden` を付与
5. jsファイルで `tabSwitcher` をインポートし，コンポーネントに付与したクラスセレクタを引数に渡す

```html
<div class="tab-component">
  <div>
    <button role="tab">タブ A-1</button>
    <button role="tab">タブ A-2</button>
    <button role="tab">タブ A-3</button>
  </div>
  <div role="tabpanel">パネル A-1</div>
  <div role="tabpanel" hidden>パネル A-2</div>
  <div role="tabpanel" hidden>パネル A-3</div>
</div>

<div class="tab-component">
  <ul>
    <li role="tab">タブ B-1</li>
    <li role="tab">タブ B-2</li>
    <li role="tab">タブ B-3</li>
  </ul>
  <div role="tabpanel" hidden>
    <p>タイトル B-1</p>
    <p>内容 B-1</p>
  </div>
  <div role="tabpanel">
    <p>タイトル B-2</p>
    <p>内容 B-2</p>
  </div>
  <div role="tabpanel" hidden>
    <p>タイトル B-3</p>
    <p>内容 B-3</p>    
  </div>
</div>
```

```js
import { tabSwitcher } from 'multi-tab-switcher';

tabSwitcher('.tab-component');
```

## インストール方法(CDN)

`<body>` 閉じタグの上に以下を追加して下さい。

```html
<script
  src="https://cdn.jsdelivr.net/gh/next-comfort/multi-tab-switcher@1.0.1/dist/tab-switcher-umd.min.js"
  integrity="sha384-BS+8V+94+OOWMlwF5b+XCkcIJ0hDmZxS/TRX4S6reg3VxnvoqhymNBcLOs8w6s8W"
  crossorigin="anonymous"
></script>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    tabSwitcher('.tab-component');
  });
</script>
```

サンプルコードは [umd-example](/umd-example/) に掲載しております。

## License

MIT License