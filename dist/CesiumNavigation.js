import"./styles/cesium-navigation.less";import{defined,Event,knockout,DeveloperError}from"cesium";import registerKnockoutBindings from"./core/registerKnockoutBindings";import DistanceLegendViewModel from"./viewModels/DistanceLegendViewModel";import NavigationViewModel from"./viewModels/NavigationViewModel";var CesiumEvent=Event,Knockout=knockout,CesiumNavigation=function(i){initialize.apply(this,arguments),this._onDestroyListeners=[]};function initialize(i,e){if(!defined(i))throw new DeveloperError("CesiumWidget or Viewer is required.");var t=defined(i.cesiumWidget)?i.cesiumWidget:i,n=document.createElement("div");n.className="cesium-widget-cesiumNavigationContainer",t.container.appendChild(n),this.terria=i,this.terria.options=defined(e)?e:{},this.terria.afterWidgetChanged=new CesiumEvent,this.terria.beforeWidgetChanged=new CesiumEvent,this.container=n,registerKnockoutBindings(),defined(this.terria.options.enableDistanceLegend)&&!this.terria.options.enableDistanceLegend||(this.distanceLegendDiv=document.createElement("div"),n.appendChild(this.distanceLegendDiv),this.distanceLegendDiv.setAttribute("id","distanceLegendDiv"),this.distanceLegendViewModel=DistanceLegendViewModel.create({container:this.distanceLegendDiv,terria:this.terria,mapElement:n,enableDistanceLegend:!0})),defined(this.terria.options.enableZoomControls)&&!this.terria.options.enableZoomControls||defined(this.terria.options.enableCompass)&&!this.terria.options.enableCompass?!defined(this.terria.options.enableZoomControls)||this.terria.options.enableZoomControls||defined(this.terria.options.enableCompass)&&!this.terria.options.enableCompass?defined(this.terria.options.enableZoomControls)&&!this.terria.options.enableZoomControls||!defined(this.terria.options.enableCompass)||this.terria.options.enableCompass?defined(this.terria.options.enableZoomControls)&&!this.terria.options.enableZoomControls&&defined(this.terria.options.enableCompass)&&this.terria.options.enableCompass:(this.navigationDiv=document.createElement("div"),this.navigationDiv.setAttribute("id","navigationDiv"),n.appendChild(this.navigationDiv),this.navigationViewModel=NavigationViewModel.create({container:this.navigationDiv,terria:this.terria,enableZoomControls:!0,enableCompass:!1})):(this.navigationDiv=document.createElement("div"),this.navigationDiv.setAttribute("id","navigationDiv"),n.appendChild(this.navigationDiv),this.navigationViewModel=NavigationViewModel.create({container:this.navigationDiv,terria:this.terria,enableZoomControls:!1,enableCompass:!0})):(this.navigationDiv=document.createElement("div"),this.navigationDiv.setAttribute("id","navigationDiv"),n.appendChild(this.navigationDiv),this.navigationViewModel=NavigationViewModel.create({container:this.navigationDiv,terria:this.terria,enableZoomControls:!0,enableCompass:!0}))}CesiumNavigation.prototype.distanceLegendViewModel=void 0,CesiumNavigation.prototype.navigationViewModel=void 0,CesiumNavigation.prototype.navigationDiv=void 0,CesiumNavigation.prototype.distanceLegendDiv=void 0,CesiumNavigation.prototype.terria=void 0,CesiumNavigation.prototype.container=void 0,CesiumNavigation.prototype._onDestroyListeners=void 0,CesiumNavigation.prototype._navigationLocked=!1,CesiumNavigation.prototype.setNavigationLocked=function(i){this._navigationLocked=i,this.navigationViewModel.setNavigationLocked(this._navigationLocked)},CesiumNavigation.prototype.getNavigationLocked=function(){return this._navigationLocked},CesiumNavigation.prototype.destroy=function(){defined(this.navigationViewModel)&&this.navigationViewModel.destroy(),defined(this.distanceLegendViewModel)&&this.distanceLegendViewModel.destroy(),defined(this.navigationDiv)&&this.navigationDiv.parentNode.removeChild(this.navigationDiv),delete this.navigationDiv,defined(this.distanceLegendDiv)&&this.distanceLegendDiv.parentNode.removeChild(this.distanceLegendDiv),delete this.distanceLegendDiv,defined(this.container)&&this.container.parentNode.removeChild(this.container),delete this.container;for(var i=0;i<this._onDestroyListeners.length;i++)this._onDestroyListeners[i]()},CesiumNavigation.prototype.addOnDestroyListener=function(i){"function"==typeof i&&this._onDestroyListeners.push(i)};export default CesiumNavigation;