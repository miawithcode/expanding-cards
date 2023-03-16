# Expanding Cards
![](images/expanding-cards.png)
[Live Demo](https://mia-expanding-cards.netlify.app/)

---

[50projects50days](https://github.com/bradtraversy/50projects50days)第一天的练习：Expading Cards(拓展卡片)。

Taylor Swift的[官网](https://tstheerastour.taylorswift.com/)正好有一个Expanding Cards的应用，所以仿照她的网站做了练习。

在Expanding Cars的基础上练习了点击一张图片，Header的背景颜色也跟着改变。

## What I Learned

1. CSS: Flexbox的`flex`属性是一个简写属性，值分别是`flex-grow flex-shrink flex-basis`，设置了flex-items如何增大或缩小以适应其弹性容器中可用的空间。

    设置`flex`可以让所有flex-items无视其内容，拥有同样的长度。

    在设置拓展卡片时，只需要让未拓展的卡片的大小为`flex: 1`，拓展的卡片比未拓展的卡片更大`flex: 5`。

    ```CSS
    .panel{
        flex: 1;
    }
    .active{
        flex: 5;
    }
    ```

2. JavaScript: 首选通过CSS Class的方式来添加样式，添加或删除单个类，可以用`element.classList`。`classList`有`add/remove/toggle`方法用于添加或删除类。

    在拓展卡片的应用中，给每个图片添加监听事件，当某张图片被点击时，先移除其他图片中的`active`类，再为被点击的图片添加`active`类。
    ```JavaScript
    panels.forEach(panel => {
        panel.addEventListener("click", () => {
            removeActiveClass();
            panel.classList.add("active");
        })
    })

    function removeActiveClass(){
        panels.forEach(panel => {
            panel.classList.remove("active");
        })
    }
    ```

3. JavaScript: `element.getComputedStyle()`返回一个对象(Object)，这个对象中包含这个元素的所有CSS属性。
    所以可以用这个方法获得被点击的图片的属性，并将Header换成对应的背景颜色。
    ```JavaScript
    function changeColor(panel){
        let panelStyle = getComputedStyle(panel);
        let BgColor = panelStyle.backgroundColor;
        header.style.backgroundColor = BgColor;
    } 
    ```

## Reference
- [MDN - flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
- [JavaScript Info - Styles and classes](https://javascript.info/styles-and-classes)
- [MDN - Window.getComputedStyle()](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
- [Change Background Color onclick using JavaScript](https://youtu.be/UUJXTsNdDAE)