var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_CastellbisbalPositiusAmbReferenciaCadastral_1 = new ol.format.GeoJSON();
var features_CastellbisbalPositiusAmbReferenciaCadastral_1 = format_CastellbisbalPositiusAmbReferenciaCadastral_1.readFeatures(json_CastellbisbalPositiusAmbReferenciaCadastral_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CastellbisbalPositiusAmbReferenciaCadastral_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CastellbisbalPositiusAmbReferenciaCadastral_1.addFeatures(features_CastellbisbalPositiusAmbReferenciaCadastral_1);
var lyr_CastellbisbalPositiusAmbReferenciaCadastral_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CastellbisbalPositiusAmbReferenciaCadastral_1, 
                style: style_CastellbisbalPositiusAmbReferenciaCadastral_1,
                interactive: true,
                title: '<img src="styles/legend/CastellbisbalPositiusAmbReferenciaCadastral_1.png" /> Castellbisbal Positius Amb Referencia Cadastral'
            });
var format_CastellbisbalSenseReferenciaCadastral_2 = new ol.format.GeoJSON();
var features_CastellbisbalSenseReferenciaCadastral_2 = format_CastellbisbalSenseReferenciaCadastral_2.readFeatures(json_CastellbisbalSenseReferenciaCadastral_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CastellbisbalSenseReferenciaCadastral_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CastellbisbalSenseReferenciaCadastral_2.addFeatures(features_CastellbisbalSenseReferenciaCadastral_2);
var lyr_CastellbisbalSenseReferenciaCadastral_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CastellbisbalSenseReferenciaCadastral_2, 
                style: style_CastellbisbalSenseReferenciaCadastral_2,
                interactive: true,
                title: '<img src="styles/legend/CastellbisbalSenseReferenciaCadastral_2.png" /> Castellbisbal Sense Referencia Cadastral'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_CastellbisbalPositiusAmbReferenciaCadastral_1.setVisible(true);lyr_CastellbisbalSenseReferenciaCadastral_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_CastellbisbalPositiusAmbReferenciaCadastral_1,lyr_CastellbisbalSenseReferenciaCadastral_2];
lyr_CastellbisbalPositiusAmbReferenciaCadastral_1.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifes': 'beginLifes', 'informatio': 'informatio', 'localId': 'localId', 'currentUse': 'currentUse', 'numberOfBu': 'numberOfBu', 'documentLi': 'documentLi', 'value': 'value', 'value_uom': 'value_uom', });
lyr_CastellbisbalSenseReferenciaCadastral_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Coordenade': 'Coordenade', });
lyr_CastellbisbalPositiusAmbReferenciaCadastral_1.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'beginLifes': 'TextEdit', 'informatio': 'TextEdit', 'localId': 'TextEdit', 'currentUse': 'TextEdit', 'numberOfBu': 'TextEdit', 'documentLi': 'TextEdit', 'value': 'TextEdit', 'value_uom': 'TextEdit', });
lyr_CastellbisbalSenseReferenciaCadastral_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Coordenade': '', });
lyr_CastellbisbalPositiusAmbReferenciaCadastral_1.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifes': 'no label', 'informatio': 'no label', 'localId': 'no label', 'currentUse': 'no label', 'numberOfBu': 'no label', 'documentLi': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_CastellbisbalSenseReferenciaCadastral_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Coordenade': 'no label', });
lyr_CastellbisbalSenseReferenciaCadastral_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});