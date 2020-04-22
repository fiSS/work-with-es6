# работа с es6

```javascript
Создал class Options, который содержит свойства параметры по умолчанию.

class Options {
    constructor(height = "200", width = "400", bg="blue", fontSize = "25", textAlign = "center", pad = "20", marg = "10")
    
Он содержит метод создающий новый div на странице.

  addDiw(text) {
        let newDiv = document.createElement('div');
        
        Записывающий в него любой текст используя интерполяцию:
        newDiv.textContent = `${text}`;
        
        и при пощи cssText изменяет стили из переданных параметров
        newDiv.style.cssText = properties;
         }   
         

```

