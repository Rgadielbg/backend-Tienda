const categoriacontroller = require('../controllers/controller_categorias');
module.exports = (app) => {
   

   
    app.get('api/categorias/list', categoriacontroller.list);
    app.get('api/categorias/:nombre', categoriacontroller.find);
    app.post('api/categorias/nombre/:nombre', categoriacontroller.create);
    app.put('/api/categorias/:id', categoriacontroller.update);
    app.delete('/api/categorias/:id', categoriacontroller.delete);
    

}