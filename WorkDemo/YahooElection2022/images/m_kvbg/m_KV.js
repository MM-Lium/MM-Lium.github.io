(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,990);


(lib.bgtree1 = function() {
	this.initialize(img.bgtree1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,338);


(lib.bgtree2 = function() {
	this.initialize(img.bgtree2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,259);


(lib.cloud1 = function() {
	this.initialize(img.cloud1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,115);


(lib.cloud2 = function() {
	this.initialize(img.cloud2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,72);


(lib.dialog = function() {
	this.initialize(img.dialog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,110);


(lib.title = function() {
	this.initialize(img.title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,316);


(lib.wave = function() {
	this.initialize(img.wave);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,627);// helper functions:

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


(lib.wave1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wave();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wave1, new cjs.Rectangle(0,0,1500,627), null);


(lib.title1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.title();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.title1, new cjs.Rectangle(0,0,750,316), null);


(lib.dialog1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.dialog();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dialog1, new cjs.Rectangle(0,0,500,110), null);


(lib.cloud21 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cloud2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud21, new cjs.Rectangle(0,0,126,72), null);


(lib.cloud11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cloud1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud11, new cjs.Rectangle(0,0,224,115), null);


(lib.bgtree2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bgtree2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgtree2_1, new cjs.Rectangle(0,0,186,259), null);


(lib.bgtree1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bgtree1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgtree1_1, new cjs.Rectangle(0,0,333,338), null);


(lib.wave_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1___複製_2
	this.instance = new lib.wave1();
	this.instance.setTransform(-4920,313.5,1,1,0,0,0,1920,313.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1918.4},360).wait(1));

	// 圖層_1_複製
	this.instance_1 = new lib.wave1();
	this.instance_1.setTransform(-3420,313.5,1,1,0,0,0,1920,313.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-418.4},360).wait(1));

	// 圖層_1
	this.instance_2 = new lib.wave1();
	this.instance_2.setTransform(-1920,313.5,1,1,0,0,0,1920,313.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:1081.6},360).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6840,0,7501.6,627);


(lib.title_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.title1();
	this.instance.setTransform(609.5,88.5,1,1,0,0,0,609.5,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:73.5},29,cjs.Ease.quadInOut).to({y:88.5},30,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-15,750,331);


(lib.dialog_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.dialog1();
	this.instance.setTransform(55.5,221.5,1,1,0,0,0,47.5,221.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:233.5},4,cjs.Ease.quadInOut).to({y:221.5},4,cjs.Ease.quadInOut).to({y:233.5},4,cjs.Ease.quadInOut).to({y:221.5},4,cjs.Ease.quadInOut).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,0,500,122);


(lib.cloud2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cloud21();
	this.instance.setTransform(63,36,1,1,0,0,0,63,36);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(125).to({_off:false},0).to({x:2194.2},172).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2257.2,72);


(lib.cloud1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cloud11();
	this.instance.setTransform(-1830.4,57.5,1,1,0,0,0,112,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-743.5},174).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1942.4,0,1310.9,115);


// stage content:
(lib.m_KV = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// dialog
	this.instance = new lib.dialog_1();
	this.instance.setTransform(164.5,565.5,1,1,0,0,0,47.5,221.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124));

	// title
	this.instance_1 = new lib.title_1();
	this.instance_1.setTransform(609.5,117.5,1,1,0,0,0,609.5,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124));

	// 圖層_1___複製_2___複製_2
	this.instance_2 = new lib.bgtree1_1();
	this.instance_2.setTransform(867.65,702.8,1,1,0,0,0,237,222);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:1276.35,y:702.1},14).to({_off:true},1).wait(75).to({_off:false,x:-124.35,y:702.8},0).to({x:867.65},33).wait(1));

	// 圖層_2___複製_2___複製_2
	this.instance_3 = new lib.bgtree2_1();
	this.instance_3.setTransform(502.3,675.6,1,1,0,0,0,93,129.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:903,y:675},14).to({_off:true},1).wait(75).to({_off:false,x:-478.4,y:675.6},0).to({x:502.3},33).wait(1));

	// 圖層_2___複製_2_複製
	this.instance_4 = new lib.bgtree2_1();
	this.instance_4.setTransform(-141.15,675.6,1,1,0,0,0,93,129.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:873.1,y:670.5},41).to({_off:true},1).wait(82));

	// 圖層_2
	this.instance_5 = new lib.bgtree2_1();
	this.instance_5.setTransform(-623.2,686.5,1,1,0,0,0,93,129.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45).to({_off:false},0).to({x:1537.25,y:698.5},78).wait(1));

	// 圖層_1_複製
	this.instance_6 = new lib.bgtree1_1();
	this.instance_6.setTransform(-117.1,713,1,1,0,0,0,237,222);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).to({x:2062.35,y:725},78).wait(1));

	// 圖層_1
	this.instance_7 = new lib.bgtree1_1();
	this.instance_7.setTransform(-766.15,713,1,1,0,0,0,237,222);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45).to({_off:false},0).to({x:1391.25,y:725},78).wait(1));

	// cloud2
	this.instance_8 = new lib.cloud2_1();
	this.instance_8.setTransform(-102,134,1,1,0,0,0,63,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(124));

	// cloud1
	this.instance_9 = new lib.cloud1_1();
	this.instance_9.setTransform(1769,327.5,1,1,0,0,0,112,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(124));

	// wave
	this.instance_10 = new lib.wave_1();
	this.instance_10.setTransform(5760,518.5,1,1,0,0,0,1920,313.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(124));

	// bg
	this.instance_11 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(124));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-2625,495,4783.4,495);
// library properties:
lib.properties = {
	id: 'ED6E8E9C41848E4BAC31EEB9E31019D3',
	width: 750,
	height: 990,
	fps: 18,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/bg.png?1649845329160", id:"bg"},
		{src:"images/bgtree1.png?1649845329160", id:"bgtree1"},
		{src:"images/bgtree2.png?1649845329160", id:"bgtree2"},
		{src:"images/cloud1.png?1649845329160", id:"cloud1"},
		{src:"images/cloud2.png?1649845329160", id:"cloud2"},
		{src:"images/dialog.png?1649845329160", id:"dialog"},
		{src:"images/title.png?1649845329160", id:"title"},
		{src:"images/wave.png?1649845329160", id:"wave"}
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
an.compositions['ED6E8E9C41848E4BAC31EEB9E31019D3'] = {
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