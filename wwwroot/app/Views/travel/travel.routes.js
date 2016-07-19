"use strict";
var travel_document_component_1 = require('./travel-document/travel-document.component');
var travel_list_component_1 = require('./travel-list/travel-list.component');
exports.TravelRoutes = [
    { path: 'traveldocument/:id', component: travel_document_component_1.traveldocumentComponent },
    { path: 'travellist', component: travel_list_component_1.travellistComponent }
];
