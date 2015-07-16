var Chequeado;

;(function(global, document, $, L, cartodb){

    "use strict";

    //Fix strange bug using jquery2 and bootstra3
    HTMLDivElement.prototype.remove = function(){};

    Chequeado = global.Chequeado = global.Chequeado || {};

    Chequeado.map;

    Chequeado.mainLayer;

    Chequeado.ID;

    Chequeado.init = function(){

        var key = Chequeado.getParam('key');
        Chequeado.ID = Chequeado.getParam('ID');
        if(key){
            try {
                Tabletop.init( { key: key,
                        callback: Chequeado.dataLoaded,
                        parseNumbers: true,
                        simpleSheet: true 
                    });
            }
            catch(err) {
                alert('Error al leer la planilla: '+err.message);
            }
        }else{
            alert('Falta el parámetro "key" o en parámetro "ID" en la url.');
        }

    };

    Chequeado.dataLoaded = function(data,tabletop) {
        Chequeado.data = data.filter(function(e){
            return (e.identificador == Chequeado.ID);
        });
        Chequeado.data = Chequeado.data[0];
        Chequeado.startMap(Chequeado.data.mapID);
        $('.modal').render(Chequeado.data);
    }

    Chequeado.startMap = function(cartoId){
        var cartoUrl = 'https://chequeado.cartodb.com/api/v2/viz/'+cartoId+'/viz.json';

        cartodb.createVis('chequeado-map', cartoUrl)
          .done(function(vis, layers) {
            
        });

    }

    Chequeado.initGenerador = function(){
        $('#test').on('click',function(){
            var sheet = $('#sheet').val();
            var id = $('#id').val();

            if(sheet && id){
                var url = location.origin + location.pathname + 'viz.html?key='+sheet+'&ID='+id;
                $('iframe').attr('src',url);
                $('textarea').html('<iframe src="'+url+'" frameborder="0" height="500" width="100%"></iframe>');
            }
        });
    };

    Chequeado.getParam = function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

})(window, document,jQuery, L, cartodb);
