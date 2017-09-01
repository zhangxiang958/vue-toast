# vue-toast

> this component is attend to offer a easy way to cue user with message but not by bowser's way.

## Why vue-toast
Sometime, we need to tell the user when something is broken such as notwork crash or this website is loading, so, vue-toast can offer you a easy way to 
do this.
## Live Demo

https://zhangxiang958.github.io/vue-toast/
## Installation
```
npm install --save vue-toast-addon

or

<script src="www.exampleCDN.com/vue-toast.min.js"></script>
```
## Usage
### Options of messageBox
Here list options on messageBox

| Option | Description |
| ----- | ----- |
| cssClass | optional, set className for toast |
| style | optional, set style for toast |
| position | Object, set the position of toast |
| duration | optional, Number, default 3000, toast will dispear after 300ms, if you don't want toast dispear automatically please set 0 |
| mask | optional, default false, to set mask show or not |
| dismiss | Object, here you can set the closeBtn's outlook |


### MessageBox
```
this.$Toast(`数据出错, 请稍候重试`, {
    cssClass: 'test',
    style: {
        background: 'red'
    },
    duration: 4000,
    // mask is not valid here
});
setTimeout(() => {
    this.$Toast(`数据出错, 请稍候重试`);
}, 2000);
setTimeout(() => {
    this.$Toast(`数据出错, 请稍候重试`);
}, 4000);
// this.$Toast.success();
// this.$Toast.loading();
// this.$Toast.fail();
this.$Toast.offline();
// this.$Toast.offline('network is broken', {
//       mask: true  // mask is vaild here
// });
setTimeout(() => {
    this.$Toast.Dismiss();
}, 4000);
```

## Licence
MIT License

Copyright (c) 2017 Shawn Cheung

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Concat
Mail [958033967@qq.com]

Blog zhangxiang958.github.io
