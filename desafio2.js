async addProduct(
    title,
    description,
    price,
    thumbnail,
    code,
    stock
)
{
    let newProduct ={
        title:title,
        description:description,
        price:price,
        thumbnail: thumbnail,
        code: code,
        stock: stock
    }
    //Se verifica si el producto tiene todos su campos llenos
const verification =this.verificationProducts(newProduct);
//Lee el archivo text.json
const readFile =await fs.promises. readFile(this.Path2D, 'utf-8');
console.log(readFile)
if(!verification){
    if(readFile==""){
        //agrega id=0 al objeto creado
        newProduct={...newProduct,id:0}
        //Agrega el nuevo producto al archivo text.json
        await fs.promises. appendFile(this.Path2D,)
    }
    else{
        //transforma los datos JSON en un objeto de JS
        let newArray=(JSON.parse(readFile));
        let id = newArray.length;
        newProduct=(...newProduct, id:id);
        newArray.push(newProduct);
        await fs.promises.writeFile(this.path, JSON.stringify(newArray))
    }
}
}
//Método que busca el producto en base al ID del archivo text.json

async getPrductById (id){
    let readFile=await fs.promises.readFile(this.path, 'utf-8');
    readFile=JSON.parse(readFile);
    const searchProduct=readFile.find((value=>{
        if (value.id==id){
            return value

        }
    }));
    if (searchProduct==undefined){return console.log("Not Found")}
    else{
        console.log(searchProduct);
        return searchProduct
    }
}
a
