const storagePath = require('path').join(__dirname , '/../../../Data/Products.json');//not needed after mongo
const fs = require('fs');//not needed after mongo

class Product
{
    constructor(name, url, price, description)
    {
        this.name = name;
        this.url = 'https://source.unsplash.com/600x600/?'+url;
        this.price = price;
        this.description = description;
    }

    Save(savedCallBack)
    {
        const data =  require('../../../app').get('products');
        data.push(this);
        fs.writeFile(storagePath, JSON.stringify(data), ()=>{savedCallBack();});
    }

    Edit(editId,editedCallBack)
    {
        const data =  require('../../../app').get('products');
        data[editId] = this;
        fs.writeFile(storagePath, JSON.stringify(data), ()=>{editedCallBack();});
    }

    static Delete(id)
    {
        const data =  require('../../../app').get('products');
        data.splice(id,1);
        fs.writeFileSync(storagePath, JSON.stringify(data));
    }

    static GetAllProducts(callBack)
    {
       
    }

    static GetProduct(id)
    {
        //return require('../../../app'.get('products'))[id];
    }
}

module.exports = Product;