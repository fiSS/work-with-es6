# работа с es6


### Создал class Options, который содержит свойства параметры по умолчанию.
```javascript
class Options {
    constructor(height = "200", width = "400", bg="blue", fontSize = "25", textAlign = "center", pad = "20", marg = "10")
            newBlock.addDiw('good');
```    
### Он содержит метод (addDiv) создающий новый div на странице.
```javascript
  addDiw(text) {
        let newDiv = document.createElement('div');
 ```
 ### Записывающий в него любой текст используя интерполяцию.
 ```javascript
        newDiv.textContent = `${text}`;
 ```
### и при пощи cssText изменяет стили.
```javascript
        newDiv.style.cssText = properties;
         } 
 ```         
### из переданных параметров.
```javascript
        let properties = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px;
         text-align:${this.textAlign}; padding:${this.pad}px; margin:${this.marg}px`;
```
### далее можно вызывать его методы и получать элементы на странице.
```javascript
         let block = new Options();
            block.addDiw('все ок');
```
### либо можно передать со своими параметрами.
```javascript
        let newBlock = new Options(100, 200, "red");
```


