class View {

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(){
        throw new Error('O metodo templete deve ser implementado');
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}