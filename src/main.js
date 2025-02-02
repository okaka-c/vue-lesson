import { createApp } from 'vue' // vueディレクトリからcreateAppを読み込む
import App from './App.vue' // App.vueを読み込みJSに変換し、Appという名前をつける
// createApp関数の引数に渡されたAPPをもとに、ユーザーインターフェイスを作る！
// createAppで作られたUIを表示するためにmountメソッドを使う
// mountの引数にintex.htmlのdiv要素のid値を指定
// intex.htmlのid=APPをもつdiv要素にUIを表示する
createApp(App).mount('#app')
