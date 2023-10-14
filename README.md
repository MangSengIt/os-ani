# os-ani
user&lt;XYL789890>开屏动画

## 使用示例
```html
<!-- 定义一个ID为os-container的容器，该容器具有特定属性，如下：
options: 
    -- data-text: the text to be shown (default: HELLO OS-ANI)
    -- data-delay: the delay of animation (default: 2000ms), It is recommended that the delay be at least 1000ms
    -- data-duration: the duration of animation (default: 3000ms)
    -- data-stroke: the color of stroke and fill (default: #fff)
    -- data-font-size: the font size of text (default: 120px)
    -- data-background: the animation background color (default: #000)
    -- remover: delete the node when the animation ends -->
<div
    id="os-container"
    data-text="Archcase 大屋集"
    data-duration="2600"
    data-delay="2400"
    data-font-size="120px"
    data-stroke="#fff"
    data-background="#000"
    remover
></div>
<!-- 引入echarts -->
<script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js" defer></script>
<!-- 引入动画工具，需要在元素之后引用，或者使用异步引入 -->
<script src="https://cdn.jsdelivr.net/gh/MangSengIt/os-ani@main/os-ani.js" defer></script>
```
## Logs
1. 2023-10-14: 新增动画退出延时、退出动画、结束动画移出元素、动画背景颜色的配置
