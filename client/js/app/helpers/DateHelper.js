class DateHelper{

    constructor(){
        throw new Error('DateHelper cannot be instantiated!!');
    }

    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Invalid format for Date');
       return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
        // return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
    }    

}