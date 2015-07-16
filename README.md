# Simple CartoDB Wrapper para Chequeado.

1. Crear mapa en carto DB.

2. Una vez terminado el mapa, publicar y obtener el ID. Para https://chequeado.cartodb.com/api/v2/viz/66236e4c-29c9-11e5-8e3c-0e0c41326911/viz.json el id será: 66236e4c-29c9-11e5-8e3c-0e0c41326911

3. Crear y publicar Google Spreadsheet con la siguiente estructura y completar con los datos correspondientes (cada registro es un mapa):

	https://docs.google.com/spreadsheets/d/1LvD5AdQaO2EcsNelWJY3T7q7gyaHTwJjaZmKcaDD9yQ/pubhtml

4. Generar iframe para embeber utilizando:

	http://chequeadocom.github.io/simple-cartodb-wrapper/

5. Un ejempplo de iframe generado:

```html
	<iframe src="http://chequeadocom.github.io/simple-cartodb-wrapper/viz.html?key=1LvD5AdQaO2EcsNelWJY3T7q7gyaHTwJjaZmKcaDD9yQ&ID=1" frameborder="0" height="500" width="100%"></iframe>
```


