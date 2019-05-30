/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtThematicMap"],function(e,t,a,r,o){var n={properties:{animationDuration:{type:"number"},animationOnDisplay:{type:"string",enumValues:["auto","none"],value:"none"},areaData:{type:"oj.DataProvider"},areas:{type:"Array<Object>|Promise"},as:{type:"string",value:""},focusRenderer:{type:"function",properties:{color:{type:"string"},componentElement:{type:"Element"},data:{type:"object"},id:{type:"any"},itemData:{type:"object"},label:{type:"string"},location:{type:"string"},parentElement:{type:"Element"},previousState:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},renderDefaultFocus:{type:"function"},renderDefaultHover:{type:"function"},renderDefaultSelection:{type:"function"},root:{type:"Element"},state:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},x:{type:"number"},y:{type:"number"}}},hiddenCategories:{type:"Array<string>",writeback:!0,value:[]},highlightMatch:{type:"string",enumValues:["all","any"],value:"all"},highlightedCategories:{type:"Array<string>",writeback:!0,value:[]},hoverBehavior:{type:"string",enumValues:["dim","none"],value:"none"},hoverRenderer:{type:"function",properties:{color:{type:"string"},componentElement:{type:"Element"},data:{type:"object"},id:{type:"any"},itemData:{type:"object"},label:{type:"string"},location:{type:"string"},parentElement:{type:"Element"},previousState:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},renderDefaultFocus:{type:"function"},renderDefaultHover:{type:"function"},renderDefaultSelection:{type:"function"},root:{type:"Element"},state:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},x:{type:"number"},y:{type:"number"}}},initialZooming:{type:"string",enumValues:["auto","none"],value:"none"},isolatedItem:{type:"any",value:'""'},labelDisplay:{type:"string",enumValues:["auto","off","on"],value:"off"},labelType:{type:"string",enumValues:["long","short"],value:"short"},linkData:{type:"oj.DataProvider"},links:{type:"Array<Object>|Promise"},mapProvider:{type:"object",properties:{geo:{type:"object",value:{}},propertiesKeys:{type:"object",properties:{id:{type:"string",value:""},longLabel:{type:"string",value:""},shortLabel:{type:"string",value:""}}}}},markerData:{type:"oj.DataProvider"},markerZoomBehavior:{type:"string",enumValues:["fixed","zoom"],value:"fixed"},markers:{type:"Array<Object>|Promise"},maxZoom:{type:"number",value:6},panning:{type:"string",enumValues:["auto","none"],value:"none"},renderer:{type:"function",properties:{color:{type:"string"},componentElement:{type:"Element"},data:{type:"object"},id:{type:"any"},itemData:{type:"object"},label:{type:"string"},location:{type:"string"},parentElement:{type:"Element"},previousState:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},renderDefaultFocus:{type:"function"},renderDefaultHover:{type:"function"},renderDefaultSelection:{type:"function"},root:{type:"Element"},state:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},x:{type:"number"},y:{type:"number"}}},selection:{type:"Array<any>",writeback:!0,value:[]},selectionMode:{type:"string",enumValues:["multiple","none","single"],value:"none"},selectionRenderer:{type:"function",properties:{color:{type:"string"},componentElement:{type:"Element"},data:{type:"object"},id:{type:"any"},itemData:{type:"object"},label:{type:"string"},location:{type:"string"},parentElement:{type:"Element"},previousState:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},renderDefaultFocus:{type:"function"},renderDefaultHover:{type:"function"},renderDefaultSelection:{type:"function"},root:{type:"Element"},state:{type:"object",properties:{hovered:{type:"boolean"},selected:{type:"boolean"},focused:{type:"boolean"}}},x:{type:"number"},y:{type:"number"}}},styleDefaults:{type:"object",properties:{areaSvgStyle:{type:"object"},dataAreaDefaults:{type:"object",value:{},properties:{borderColor:{type:"string"},hoverColor:{type:"string"},selectedInnerColor:{type:"string"},selectedOuterColor:{type:"string"}}},dataMarkerDefaults:{type:"object",properties:{borderColor:{type:"string"},borderStyle:{type:"string",enumValues:["none","solid"],value:"solid"},borderWidth:{type:"number",value:.5},color:{type:"string"},height:{type:"number",value:8},labelStyle:{type:"object",value:{}},opacity:{type:"number",value:1},shape:{type:"string",value:"circle"},width:{type:"number",value:8}}},hoverBehaviorDelay:{type:"number",value:200},labelStyle:{type:"object",value:{}},linkDefaults:{type:"object",properties:{color:{type:"string"},width:{type:"number",value:2}}}}},tooltip:{type:"object",properties:{renderer:{type:"function",properties:{color:{type:"string"},componentElement:{type:"Element"},data:{type:"object"},id:{type:"any"},itemData:{type:"object"},label:{type:"string"},location:{type:"string"},locationName:{type:"string"},parentElement:{type:"Element"},tooltip:{type:"string"},x:{type:"number"},y:{type:"number"}}}}},tooltipDisplay:{type:"string",enumValues:["auto","labelAndShortDesc","none","shortDesc"],value:"auto"},touchResponse:{type:"string",enumValues:["auto","touchStart"],value:"auto"},trackResize:{type:"string",enumValues:["off","on"],value:"on"},translations:{type:"object",value:{},properties:{componentName:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"}}},zooming:{type:"string",enumValues:["auto","none"],value:"none"}},methods:{getArea:{},getMarker:{},getLink:{},getContextByNode:{},refresh:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}},i={properties:{categories:{type:"Array<string>",value:[]},color:{type:"string"},label:{type:"string",value:""},labelStyle:{type:"object"},location:{type:"string",value:""},opacity:{type:"number",value:1},selectable:{type:"string",enumValues:["auto","off"],value:"auto"},shortDesc:{type:"string",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}},extension:{}},s={properties:{categories:{type:"Array<string>",value:[]},color:{type:"string",value:""},endLocation:{type:"object",value:{},properties:{id:{type:"any"},location:{type:"string"},x:{type:"number"},y:{type:"number"}}},selectable:{type:"string",enumValues:["auto","off"],value:"auto"},shortDesc:{type:"string",value:""},startLocation:{type:"object",value:{},properties:{id:{type:"any"},location:{type:"string"},x:{type:"number"},y:{type:"number"}}},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},width:{type:"number",value:2}},extension:{}},l={properties:{borderColor:{type:"string",value:""},borderStyle:{type:"string",enumValues:["none","solid"],value:"solid"},borderWidth:{type:"number",value:.5},categories:{type:"Array<string>",value:[]},color:{type:"string"},height:{type:"number",value:8},label:{type:"string",value:""},labelPosition:{type:"string",enumValues:["bottom","center","top"],value:"center"},labelStyle:{type:"object"},location:{type:"string",value:""},opacity:{type:"number",value:1},rotation:{type:"number",value:0},selectable:{type:"string",enumValues:["auto","off"],value:"auto"},shape:{type:"string",value:"circle"},shortDesc:{type:"string",value:""},source:{type:"string",value:""},sourceHover:{type:"string",value:""},sourceHoverSelected:{type:"string",value:""},sourceSelected:{type:"string",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},value:{type:"number",value:2},width:{type:"number",value:8},x:{type:"number"},y:{type:"number"}},extension:{}};e.__registerWidget("oj.ojThematicMap",t.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{animationDuration:void 0,animationOnDisplay:"none",areaData:null,areas:null,as:"",focusRenderer:null,hiddenCategories:[],highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",hoverRenderer:null,initialZooming:"none",isolatedItem:"",labelDisplay:"off",labelType:"short",linkData:null,links:null,mapProvider:{geo:{},propertiesKeys:{id:"",shortLabel:"",longLabel:""}},markerData:null,markers:null,markerZoomBehavior:"fixed",maxZoom:6,panning:"none",renderer:null,selection:[],selectionMode:"none",selectionRenderer:null,styleDefaults:{dataAreaDefaults:{borderColor:void 0,hoverColor:void 0,selectedInnerColor:void 0,selectedOuterColor:void 0},dataMarkerDefaults:{borderColor:void 0,borderWidth:.5,borderStyle:"solid",color:void 0,height:8,labelStyle:{},opacity:1,shape:"circle",width:8},hoverBehaviorDelay:200,labelStyle:{},linkDefaults:{color:void 0,width:2}},tooltip:{renderer:null},tooltipDisplay:"auto",touchResponse:"auto",zooming:"none"},_currentLocale:"",_loadedBasemaps:[],_basemapPath:"resources/internal-deps/dvt/thematicMap/basemaps/",_supportedLocales:{ar:"ar",cs:"cs",da:"da",de:"de",el:"el",es:"es",fi:"fi",fr:"fr","fr-ca":"fr_CA",he:"iw",hu:"hu",it:"it",ja:"ja",ko:"ko",nl:"nl",no:"no",pl:"pl",pt:"pt_BR","pt-pt":"pt",ro:"ro",ru:"ru",sk:"sk",sv:"sv",th:"th",tr:"tr","zh-hans":"zh_CN","zh-hant":"zh_TW"},_ComponentCreate:function(){this._super(),this._checkBasemaps=[],this._initiallyRendered=!1,this._dataLayersToUpdate=[]},_CreateDvtComponent:function(e,t,a){return o.ThematicMap.newInstance(e,t,a)},_ConvertLocatorToSubId:function(e){var t=e.subId;return"oj-thematicmap-area"==t?t=this._getDataLayerId(e.dataLayer,e.index,"area")+":area["+e.index+"]":"oj-thematicmap-marker"==t?t=this._getDataLayerId(e.dataLayer,e.index,"marker")+":marker["+e.index+"]":"oj-thematicmap-link"==t?t=this._getDataLayerId(e.dataLayer,e.index,"link")+":link["+e.index+"]":"oj-thematicmap-tooltip"==t&&(t="tooltip"),t},_ConvertSubIdToLocator:function(e){var t={};return e.indexOf(":area")>0?(t.subId="oj-thematicmap-area",this._IsCustomElement()||(t.dataLayer=e.substring(0,e.indexOf(":"))),t.index=this._GetFirstIndex(e)):e.indexOf(":marker")>0?(t.subId="oj-thematicmap-marker",this._IsCustomElement()||(t.dataLayer=e.substring(0,e.indexOf(":"))),t.index=this._GetFirstIndex(e)):e.indexOf(":link")>0?(t.subId="oj-thematicmap-link",this._IsCustomElement()||(t.dataLayer=e.substring(0,e.indexOf(":"))),t.index=this._GetFirstIndex(e)):"tooltip"==e&&(t.subId="oj-thematicmap-tooltip"),t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-thematicmap"),e},_GetChildStyleClasses:function(){var e=this._super();return e["oj-dvtbase oj-thematicmap"]={path:"animationDuration",property:"ANIM_DUR"},e["oj-thematicmap-arealayer"]=[{path:"styleDefaults/areaSvgStyle",property:"BACKGROUND"},{path:"styleDefaults/labelStyle",property:"TEXT"}],e["oj-thematicmap-area"]={path:"styleDefaults/dataAreaDefaults/borderColor",property:"border-top-color"},e["oj-thematicmap-area oj-hover"]={path:"styleDefaults/dataAreaDefaults/hoverColor",property:"border-top-color"},e["oj-thematicmap-area oj-selected"]=[{path:"styleDefaults/dataAreaDefaults/selectedInnerColor",property:"border-top-color"},{path:"styleDefaults/dataAreaDefaults/selectedOuterColor",property:"border-bottom-color"}],e["oj-thematicmap-marker"]=[{path:"styleDefaults/dataMarkerDefaults/labelStyle",property:"TEXT"},{path:"styleDefaults/dataMarkerDefaults/color",property:"background-color"},{path:"styleDefaults/dataMarkerDefaults/opacity",property:"opacity"},{path:"styleDefaults/dataMarkerDefaults/borderColor",property:"border-top-color"}],e["oj-thematicmap-link"]={path:"styleDefaults/linkDefaults/color",property:"color"},e["oj-thematicmap-link oj-hover"]={path:"styleDefaults/linkDefaults/_hoverColor",property:"color"},e["oj-thematicmap-link oj-selected"]={path:"styleDefaults/linkDefaults/_selectedColor",property:"border-color"},e},_GetEventTypes:function(){return["optionChange"]},_InitOptions:function(e,t){this._super(e,t);var a=this.options.styleDefaults;this.options.styleDefaults=a},_setOptions:function(t,a){var r=Object.keys(t).length,o=t.areaLayers,n=this.options.areaLayers,i=t.pointDataLayers;if(1==r&&o&&n&&n.length>0)for(var s=0;s<o.length;s++){var l=o[s],p=n[s],u=!0;for(var y in l)"areaDataLayer"!=y&&l[y]!=p[y]&&(u=u&&!1);u&&!e.Object.compareValues(p.areaDataLayer,l.areaDataLayer)&&this._dataLayersToUpdate.push({options:l.areaDataLayer,parentLayer:l.layer,isADL:!0})}else if(1==r&&i&&this.options.pointDataLayers&&this.options.pointDataLayers.length>0)for(s=0;s<i.length;s++)e.Object.compareValues(this.options.pointDataLayers[s],i[s])||this._dataLayersToUpdate.push({options:i[s],parentLayer:i[s].id,isADL:!1});this._super(t,a)},_GetComponentRendererOptions:function(){return["tooltip/renderer","_tooltip/renderer","renderer","focusRenderer","hoverRenderer","selectionRenderer"]},_ProcessOptions:function(){this._super();var t=this.options.tooltip,a=t?t.renderer:null;if(a){var r=this;this.options._tooltip={renderer:function(t){var o=r._IsCustomElement()?{insert:t.tooltip}:t.tooltip;try{return a(t)||o}catch(t){return e.Logger.warn("Showing default tooltip. "+t),o}}}}var o=this.options.areaLayers;if(o)for(var n=0;n<o.length;n++){var i=o[n].areaDataLayer;if(i)(l=i._templateRenderer)&&(i.renderer=this._GetTemplateDataRenderer(l,"area"))}var s=this.options.pointDataLayers;if(s)for(n=0;n<s.length;n++){var l,p=s[n];if(p)(l=p._templateRenderer)&&(p.renderer=this._GetTemplateDataRenderer(l,"point"))}this.options._contextHandler=this._getContextHandler()},_Render:function(){this._NotReady();var e=this.options.areaLayers;if(this._IsCustomElement()){if(!this.options.mapProvider.geo.type)return void this._MakeReady()}else{if(!this.options.basemap||!e||e.length<1)return void this._MakeReady();this._loadBasemap();for(var t=0;t<this._checkBasemaps.length;t++)if(!this._loadedBasemaps[this._checkBasemaps[t]])return;this._checkBasemaps=[]}if(this._initiallyRendered&&this._dataLayersToUpdate.length>0){if(this._context.isReadyToRender()){for(t=0;t<this._dataLayersToUpdate.length;t++){var a=this._dataLayersToUpdate[t],r=a.isADL;r?this._CleanTemplate("area"):this._CleanTemplate("point"),this._component.updateLayer(a.options,a.parentLayer,r)}this._dataLayersToUpdate=[]}this._MakeReady()}else this._super(),this._initiallyRendered=!0},_RenderComponent:function(e,t){this._IsCustomElement()&&this._mapCustomElementOptions(e),this._updateDataLayerSelection(e),this._super(e,t)},_getContextHandler:function(){var t=this;return function(a,r,o,n,i,s){var l={component:e.Components.__GetWidgetConstructor(t.element),parentElement:a,rootElement:r,data:o,itemData:n,state:i,previousState:s,id:o.id,label:o.label,color:o.color,location:o.location,x:o.x,y:o.y};return t._IsCustomElement()&&(l.renderDefaultHover=t.renderDefaultHover.bind(t,l),l.renderDefaultSelection=t.renderDefaultSelection.bind(t,l),l.renderDefaultFocus=t.renderDefaultFocus.bind(t,l)),t._FixRendererContext(l)}},renderDefaultHover:function(e){e.previousState&&e.state.hovered==e.previousState.hovered||this._component.processDefaultHoverEffect(e.id,e.state.hovered)},renderDefaultSelection:function(e){e.previousState&&e.state.selected==e.previousState.selected||this._component.processDefaultSelectionEffect(e.id,e.state.selected)},renderDefaultFocus:function(e){e.previousState&&e.state.focused==e.previousState.focused||this._component.processDefaultFocusEffect(e.id,e.state.focused)},_loadBasemap:function(){var t=this.options.basemap;if(t){var a=e.Config.getLocale();a!==this._currentLocale&&(this._currentLocale=a,this._loadedBasemaps=[]);var r=this.options.areaLayers;if(r)for(var o=0;o<r.length;o++){var n=r[o].layer;n&&this._loadBasemapHelper(t,n,a)}var i=this.options.pointDataLayers;!this.options.mapProvider.geo.type&&i&&i.length>0&&this._loadBasemapHelper(t,"cities",a)}},_loadResourceByUrl:function(a,r){if(!this._loadedBasemaps[a]){var o=this,n=function(){o._loadedBasemaps[a]=!0,o._Render()},i=t.getScript(e.Config.getResourceUrl(a),function(e,t){n()});r&&i.fail(function(e,t,a){n()})}},_loadBasemapHelper:function(e,t,a){var r=!0;try{r=Object.keys(o.DvtBaseMapManager.getLayerIds(e,t)).length>0}catch(e){r=!1}if(!r&&!this.options.mapProvider.geo.type){var n=this._basemapPath+"ojthematicmap-"+e+"-"+t+".js";-1==this._checkBasemaps.indexOf(n)&&(this._checkBasemaps.push(n),this._loadResourceByUrl(n,!1))}if(-1===a.indexOf("en")){var i=a.toLowerCase().split("-"),s=[i[0]];i.length>1&&s.unshift(i[0]+"-"+i[1]),i.length>2&&s.unshift(i[0]+"-"+i[2],i[0]+"-"+i[1]+"-"+i[2]),e=e.charAt(0).toUpperCase()+e.slice(1),t=t.charAt(0).toUpperCase()+t.slice(1);for(var l=this._basemapPath+"resourceBundles/"+e+t+"Bundle_",p=0;p<s.length;p++)if(this._supportedLocales[s[p]]){var u=l+this._supportedLocales[s[p]]+".js";-1==this._checkBasemaps.indexOf(u)&&(this._checkBasemaps.push(u),this._loadResourceByUrl(u,!0));break}}},_HandleEvent:function(e){var t=e.type;if(this._IsCustomElement()||"selection"!==t)this._super(e);else{var a={},r=e.clientId;if(a[r]=e.selection,this.options.selection)for(var o in this.options.selection)r!==o&&(a[o]=this.options.selection[o]);this._UserOptionChange("selection",a)}},_GetTranslationMap:function(){var e=this.options.translations,t=this._super();return t["DvtUtilBundle.THEMATIC_MAP"]=e.componentName,t},_updateDataLayerSelection:function(e){var t=e.selection;if(t){var a=e.pointDataLayers;if(a)if(this._IsCustomElement()&&a[0])a[0].selection=t;else for(var r=0;r<a.length;r++)t[a[r].id]&&(a[r].selection=t[a[r].id]);var o=e.areaLayers;if(o&&o[0]){var n=o[0].areaDataLayer;this._IsCustomElement()&&n?n.selection=t:n&&t[n.id]&&(n.selection=t[n.id])}}},getArea:function(e){return this._IsCustomElement()?this._component.getAutomation().getData(this._getDataLayerId(null,e,"area"),"area",e):this._component.getAutomation().getData(arguments[0],"area",arguments[1])},getMarker:function(e){return this._IsCustomElement()?this._component.getAutomation().getData(this._getDataLayerId(null,e,"marker"),"marker",e):this._component.getAutomation().getData(arguments[0],"marker",arguments[1])},getLink:function(e){return this._IsCustomElement()?this._component.getAutomation().getData(this._getDataLayerId(null,e,"link"),"link",e):this._component.getAutomation().getData(arguments[0],"link",arguments[1])},getContextByNode:function(e){var t=this.getSubIdByNode(e);return t&&(this._IsCustomElement()&&delete t.dataLayer,"oj-thematicmap-tooltip"!==t.subId)?t:null},_GetComponentDeferredDataPaths:function(){return this._IsCustomElement()?{root:["areas","markers","links","areaData","markerData","linkData"]}:{areaLayers:["areaDataLayer/areas","areaDataLayer/markers","areaDataLayer/links"],pointDataLayers:["markers","links"]}},_GetComponentNoClonePaths:function(){return this._IsCustomElement()?{areas:!0,markers:!0,links:!0,mapProvider:!0}:{mapProvider:!0,areaLayers:{areaDataLayer:{areas:!0,markers:!0,links:!0}},pointDataLayers:{markers:!0,links:!0}}},_GetDataContext:function(e){if(this._IsCustomElement())return this._super();var t=this.options.basemap,a=e.layer?e.layer:"cities";return{basemap:t,layer:a,ids:o.DvtBaseMapManager.getLayerIds(t,a)}},_mapCustomElementOptions:function(e){var t=e.animationOnDisplay;t&&(e.animationOnMapChange=t);var a=[{}];e.areaLayers=a;var r=a[0],o={id:"adl1"};r.areaDataLayer=o;var n=[{id:"pdl1"}];e.pointDataLayers=n;var i=n[0],s=["labelDisplay","labelType"];this._mapOptionHelper(e,s,[r]),s=["animationOnDataChange","focusRenderer","hoverRenderer","renderer","selectionMode","selectionRenderer"],this._mapOptionHelper(e,s,[o,i]),s=["areas","isolatedItem"],this._mapOptionHelper(e,s,[o]),this._idToDataLayerMap={};var l=e.areas;if(l)for(var p=0;p<l.length;p++){var u=l[p];this._idToDataLayerMap[u.id]="adl1"}var y=e.markers;if(y){this._markerToDataLayerMap=[];var m=[],d=[];for(p=0;p<y.length;p++){var c=y[p];c.location?(m.push(c),this._markerToDataLayerMap[p]="adl1",this._idToDataLayerMap[c.id]="adl1"):c.x&&c.y&&(d.push(c),this._markerToDataLayerMap[p]="pdl1",this._idToDataLayerMap[c.id]="pdl1")}m.length>0&&(o.markers=m),d.length>0&&(i.markers=d)}var h=e.links;if(h){this._linkToDataLayerMap=[];var g=[],v=[];for(p=0;p<h.length;p++){var f=h[p],b=f.startLocation;if(b&&b.location)g.push(f),this._linkToDataLayerMap[p]="adl1";else if(b&&b.x&&b.y)v.push(f),this._linkToDataLayerMap[p]="pdl1";else if(b&&b.id){var D=this._idToDataLayerMap[b.id];"adl1"===D?g.push(f):v.push(f),this._linkToDataLayerMap[p]=D}}g.length>0&&(o.links=g),v.length>0&&(i.links=v)}},_mapOptionHelper:function(e,t,a){for(var r=0;r<t.length;r++){var o=t[r],n=e[o];if(n)for(var i=0;i<a.length;i++)a[i][o]=n}},_getDataLayerId:function(e,t,a){if(!this._IsCustomElement())return e;switch(a){case"area":return"adl1";case"marker":return this._markerToDataLayerMap[t];case"link":return this._linkToDataLayerMap[t];default:return""}},_GetSimpleDataProviderConfigs:function(){return{areaData:{templateName:"areaTemplate",templateElementName:"oj-thematic-map-area",resultPath:"areas"},linkData:{templateName:"linkTemplate",templateElementName:"oj-thematic-map-link",resultPath:"links"},markerData:{templateName:"markerTemplate",templateElementName:"oj-thematic-map-marker",resultPath:"markers"}}}}),e.Components.setDefaultOptions({ojThematicMap:{styleDefaults:e.Components.createDynamicPropertyGetter(function(e){return e.isCustomElement?{areaSvgStyle:{}}:{}})}}),function(){n.extension._WIDGET_NAME="ojThematicMap",e.CustomElementBridge.registerMetadata("oj-thematic-map","dvtBaseComponent",n);var t=e.CustomElementBridge.getMetadata("oj-thematic-map");e.CustomElementBridge.register("oj-thematic-map",{metadata:t,parseFunction:t.extension._DVT_PARSE_FUNC({"style-defaults.data-marker-defaults.shape":!0})})}(),i.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.registerMetadata("oj-thematic-map-area",null,i),e.CustomElementBridge.register("oj-thematic-map-area",{metadata:e.CustomElementBridge.getMetadata("oj-thematic-map-area")}),s.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.registerMetadata("oj-thematic-map-link",null,s),e.CustomElementBridge.register("oj-thematic-map-link",{metadata:e.CustomElementBridge.getMetadata("oj-thematic-map-link")}),function(){l.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.registerMetadata("oj-thematic-map-marker",null,l);var t=e.CustomElementBridge.getMetadata("dvtBaseComponent");e.CustomElementBridge.register("oj-thematic-map-marker",{metadata:e.CustomElementBridge.getMetadata("oj-thematic-map-marker"),parseFunction:t.extension._DVT_PARSE_FUNC({shape:!0},{circle:!0,diamond:!0,ellipse:!0,human:!0,plus:!0,rectangle:!0,square:!0,star:!0,triangleDown:!0,triangleUp:!0})})}()});