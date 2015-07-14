var Chequeado;

;(function(global, document, $, L, cartodb){

    "use strict";

    //Fix strange bug using jquery2 and bootstra3
    HTMLDivElement.prototype.remove = function(){};

    Chequeado = global.Chequeado = global.Chequeado || {};

    Chequeado.map;

    Chequeado.mainLayer;

    Chequeado.init = function(cartoId){

        var cartoUrl = 'https://chequeado.cartodb.com/api/v2/viz/'+cartoId+'/viz.json';

		cartodb.createVis('chequeado-map', cartoUrl)
		  .done(function(vis, layers) {
		    
		});

    };

    Chequeado.getParam = function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

})(window, document,jQuery, L, cartodb);
