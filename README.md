# prevent_translation_of_code_block
DeepLを使ってるとき、コードブロックも翻訳されてしまうのを防ぐChrome拡張機能

- 対象
  - `<code>`, `<pre>`
- 追加する属性
  - `translate=no`, `class=notranslate`

## refs

- [Disable Translation of Elements](https://www.deepl.com/ja/docs-api/html/disabling/)
- [動的なページの読み込みが完了してからChrome拡張機能を実行する方法 - Qiita](https://qiita.com/3mc/items/c3c580ca5de4a2d3990d)
