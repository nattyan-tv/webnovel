# webnovel
Web (HTML, JS) based novel game engine

# 概要
HTMLやJavaScript、CSSなどのWebページ技術をベースとして、ブラウザ上で実行することが出来るノベルゲームエンジンとなります。  
例えば、Ren'PyにはHTML5(Emscripten)版がありますが、WebAssembly非対応ブラウザや、一部のブラウザでは正常に動作しないことがあります。  
それの代替策として「簡単な」ノベルゲームであればこれで公開することができます。

# 使用方法
GitHub Pagesなどの静的ホスティングサービスまたは、VPSなどの動的ホスティングサービスで、ストーリーを記述したファイルを公開(`GET`出来る状態)しておきます。  
あとは、それを読み込むだけです。

一応、[`webnovel.js`](webnovel.js)がメインです。
