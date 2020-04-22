class Options {
    constructor(height = "200", width = "400", bg="blue", fontSize = "25", textAlign = "center", pad = "20", marg = "10") {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.pad = pad;
        this.marg = marg;
        
    }

    addDiw(text) {
        let newDiv = document.createElement('div');
        let properties = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px;
         text-align:${this.textAlign}; padding:${this.pad}px; margin:${this.marg}px`;
        newDiv.classList.add('newDiv');
        document.body.appendChild(newDiv);
        newDiv.textContent = `${text}`;
        newDiv.style.cssText = properties;
    }
}

let block = new Options();
block.addDiw();
block.addDiw('все ок');
let newBlock = new Options(100, 200, bg="red");
newBlock.addDiw();