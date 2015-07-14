# Simple CartoDB Wrapper para Chequeado.

## Uso

1. Crear mapa en carto DB.

2. Una vez terminado el mapa, cargar en: 

3. Publicar y obtener el ID. Para https://chequeado.cartodb.com/api/v2/viz/66236e4c-29c9-11e5-8e3c-0e0c41326911/viz.json el id será: 66236e4c-29c9-11e5-8e3c-0e0c41326911

4. Generar la url para embeber:

	http://chequeadocom.github.io/simple-cartodb-wrapper/index.html?mapID=66236e4c-29c9-11e5-8e3c-0e0c41326911

5. Generar iframe:

```html
    <iframe style="overflow:hidden;" src="http://chequeadocom.github.io/simple-cartodb-wrapper/index.html?mapID=66236e4c-29c9-11e5-8e3c-0e0c41326911" width="100%" height="550" frameBorder="0"></iframe>
```


