(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"peo_atlas_1", frames: [[344,0,85,112],[0,0,342,368]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["peo_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(ss["peo_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-0.05,-0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(0,0,42.5,56), null);


(lib.hand2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1B287").s().p("AjPBsQgKgMAAgOQgBglBAgYIBigfQA7gTAigXQANgIAbgVQAXgTAEgBQA2gSAHAAIARAAIAeABQAJAAgEAFQgDADgEACQgFADgLABIgVADQgPACgQAIIAfgEIAiAIQALACAAAGQAAAFgIABQgGAAgPgCIgVgDIgPAGIgQAHIAggCIAsAIQgCANgOgBIgcgDIgjAGIAYADIAJABQAJABAFACQAIACABADQAAADgJABIgaADQgOAAgLADQgLAFgHABIgdAFQgTADgJAEQgSAGhaA9QhLAygzAHIgFAAQgOAAgJgMg");
	this.shape.setTransform(30.6406,41.9718,1.9902,1.9902,-29.9991);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hand2, new cjs.Rectangle(0,0,61.7,81.9), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4CDB3").s().p("AhhBJQAWgVgFgHIAggVQArgUAYgOQAUgNAOgMIAQgPIAOgNQATgNAEgKQACgFADAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQATAbglAhQgqAkhbAoIgMAFQgwAjgXAFQAMgJALgKg");
	this.shape.setTransform(12.0723,9.2479);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0.1,24.2,18.4), null);


(lib.hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.Path();
	this.instance.setTransform(37.45,17,1.6781,1.6781,0,0,0,12.2,9.4);
	this.instance.alpha = 0.3711;
	this.instance.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2C4AC").s().p("AhVBMQgLgGgFgMIgHgSIAugaQA1ggAegfIADgDQAEgEAEgIQAEgGAPgFQAUgHARAIQAJAEAGAJQAHAJgCAJQgEAQgWAUQgfAbhBAhIg8AaQgFAAgGgDg");
	this.shape.setTransform(39.8268,13.1822,1.6781,1.6781);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2C4AC").s().p("AgUA1QgwgCgOgJIgFgIIAkgPQAngRANgJQAGgEACgEQABgBABgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQgPgDgUgIQgQgHACgIIAFgHIARAGQAUAGAQAAQAWgBALAGIAkAhQhTA3gYAAIgBAAg");
	this.shape_1.setTransform(14.5579,26.1998,1.6781,1.6781);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(-0.1,-0.1,58.2,35.2), null);


// stage content:
(lib.peo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hand
	this.instance = new lib.hand();
	this.instance.setTransform(337.4,136.95,1,1,0,0,0,53.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:53.6,rotation:37.4529,x:337.5,y:137},12,cjs.Ease.quadOut).wait(6).to({regX:53.5,rotation:0,x:337.4,y:136.95},10,cjs.Ease.quadOut).wait(8).to({regX:53.6,rotation:37.4529,x:337.5,y:137},13,cjs.Ease.quadOut).to({regX:53.5,rotation:0,x:337.4,y:136.95},7,cjs.Ease.quadOut).wait(9));

	// head
	this.instance_1 = new lib.head();
	this.instance_1.setTransform(81.05,42.55,1,1,0,0,0,16.1,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({regX:16.2,rotation:-14.9992,x:81.2},9,cjs.Ease.quadOut).wait(10).to({regX:16.1,rotation:0,x:81.05},12).wait(25));

	// bg
	this.instance_2 = new lib.bg();
	this.instance_2.setTransform(0,6.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(65));

	// hand2
	this.instance_3 = new lib.hand2();
	this.instance_3.setTransform(118.15,122.3,1,1,0,0,0,10.8,67.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({regY:67.5,rotation:-18.1917,y:122.4},11,cjs.Ease.quadOut).to({regY:67.4,rotation:0,y:122.3},8,cjs.Ease.quadOut).wait(16).to({regY:67.5,rotation:-18.1917,y:122.4},10,cjs.Ease.quadOut).to({regY:67.4,rotation:0,y:122.3},8,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(172,187,172.2,187.10000000000002);
// library properties:
lib.properties = {
	id: '6AE211B85B6CAF4CA4D83C2D4BB2EB27',
	width: 344,
	height: 374,
	fps: 18,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/peo_atlas_1.png?1643185930016", id:"peo_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6AE211B85B6CAF4CA4D83C2D4BB2EB27'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = "100%";				
			container.style.height = "100%";		
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;