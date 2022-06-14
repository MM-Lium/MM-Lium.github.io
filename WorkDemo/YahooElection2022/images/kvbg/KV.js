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



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,281);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,382);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,366);


(lib._4 = function() {
	this.initialize(img._4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,426);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,800);


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
p.nominalBounds = new cjs.Rectangle(0,0,95,443);


(lib.title = function() {
	this.initialize(img.title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1208,213);


(lib.wave = function() {
	this.initialize(img.wave);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,627);// helper functions:

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

}).prototype = getMCSymbolPrototype(lib.wave1, new cjs.Rectangle(0,0,3840,627), null);


(lib.tree = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tree, new cjs.Rectangle(0,0,262,382), null);


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

}).prototype = getMCSymbolPrototype(lib.title1, new cjs.Rectangle(0,0,1208,213), null);


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

}).prototype = getMCSymbolPrototype(lib.dialog1, new cjs.Rectangle(0,0,95,443), null);


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


(lib._4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkYgOIDUAjIgYiCIF1CSIkXgvIAhB4g");
	this.shape.setTransform(29.4038,181.5152,0.5369,0.5369);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnEA3IFKgcIiChqILBgJInXA4IBWB6g");
	this.shape_1.setTransform(4.7341,195.9439,0.5369,0.5369);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA5AQIgmBiIkKlCIDfCgIAYhcID3Fdg");
	this.shape_2.setTransform(22.4109,160.6842,0.5369,0.5369);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},5).wait(10));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkYgOIDUAjIgYiCIF1CSIkWgvIAfB4g");
	this.shape_3.setTransform(-9.3425,175.4028,0.7099,0.7099);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AqZCAIHjg+Ii1iAIQFhFIqyBwIBzCXg");
	this.shape_4.setTransform(-3.7697,201.226,0.7099,0.7099);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABIATIgwB8IlOmVIEYDKIAehzIE3G1g");
	this.shape_5.setTransform(23.2959,156.7853,0.7099,0.7099);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[]},5).wait(5));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIgBIgEB8IkIjTIDABfIAPiDIE6D5g");
	this.shape_6.setTransform(-14.9526,155.3579,0.5995,0.5995);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AoJAtIF+gTIiciKIMxAVIofAxIBpCbg");
	this.shape_7.setTransform(15.1582,196.1101,0.5995,0.5995);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABwAeIhKDAIoIp1IGyE5IAwizIHjKpg");
	this.shape_8.setTransform(17.4963,152.3753,0.5995,0.5995);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},10).wait(5));

	// 圖層_1
	this.instance = new lib._4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,0,379,426);


(lib._3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._3_1, new cjs.Rectangle(0,0,342,366), null);


(lib._1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._1_1, new cjs.Rectangle(0,0,340,281), null);


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
	this.instance.setTransform(-9600,313.5,1,1,0,0,0,1920,313.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1918.4},499).wait(1));

	// 圖層_1_複製
	this.instance_1 = new lib.wave1();
	this.instance_1.setTransform(-5760,313.5,1,1,0,0,0,1920,313.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:1921.6},499).wait(1));

	// 圖層_1
	this.instance_2 = new lib.wave1();
	this.instance_2.setTransform(-1920,313.5,1,1,0,0,0,1920,313.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:5761.6},499).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11520,0,19201.6,627);


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
p.nominalBounds = new cjs.Rectangle(0,-15,1208,228);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:63.5},4,cjs.Ease.quadInOut).to({x:55.5},4,cjs.Ease.quadInOut).to({x:63.5},4,cjs.Ease.quadInOut).to({x:55.5},4,cjs.Ease.quadInOut).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,0,103,443);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(219).to({_off:false},0).to({x:2194.2},399).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:412.8},345).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1942.4,0,2467.2,115);


// stage content:
(lib.KV = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(417.5,501.5,1,1,0,0,0,47.5,221.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(326));

	// title
	this.instance_1 = new lib.title_1();
	this.instance_1.setTransform(965.5,152.5,1,1,0,0,0,609.5,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(326));

	// object4
	this.instance_2 = new lib._4_1();
	this.instance_2.setTransform(-226.6,509,1,1,0,0,0,203.5,239);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(221).to({_off:false},0).to({x:2172},87).to({_off:true},1).wait(17));

	// object3
	this.instance_3 = new lib._3_1();
	this.instance_3.setTransform(-153.5,487,1,1,0,0,0,153.5,147);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(145).to({_off:false},0).to({x:2111.95},85).to({_off:true},1).wait(95));

	// object2
	this.instance_4 = new lib.tree();
	this.instance_4.setTransform(-369.15,558.5,1,1,0,0,0,166,243.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).to({x:2117.4,y:548.5},78).to({_off:true},1).wait(187));

	// object1
	this.instance_5 = new lib._1_1();
	this.instance_5.setTransform(-195.1,550.3,1,1,0,0,0,182,163.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({x:2141.5},86).to({_off:true},1).wait(233));

	// 圖層_2___複製_2___複製_2
	this.instance_6 = new lib.bgtree2_1();
	this.instance_6.setTransform(762.3,511.6,1,1,0,0,0,93,129.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:2083,y:511},58).to({_off:true},1).wait(220).to({_off:false,x:-355.25,y:506.5},0).to({x:762.3,y:511.6},46).wait(1));

	// 圖層_1___複製_2___複製_2
	this.instance_7 = new lib.bgtree1_1();
	this.instance_7.setTransform(1127.65,538.8,1,1,0,0,0,237,222);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:2216.35,y:538.1},47).to({_off:true},1).wait(225).to({_off:false,x:-124.05,y:533},0).to({x:1127.65,y:538.8},52).wait(1));

	// 圖層_2___複製_2_複製
	this.instance_8 = new lib.bgtree2_1();
	this.instance_8.setTransform(1864.75,515.15,1,1,0,0,0,93,129.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:2067.45,y:514.5},11).to({_off:true},1).wait(235).to({_off:false,x:-103.2,y:506.5},0).to({x:1864.75,y:515.15},78).wait(1));

	// 圖層_1___複製_2_複製
	this.instance_9 = new lib.bgtree1_1();
	this.instance_9.setTransform(-526.15,533,1,1,0,0,0,237,222);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(191).to({_off:false},0).to({x:2475.6,y:545},108).to({_off:true},1).wait(26));

	// 圖層_1___複製_2
	this.instance_10 = new lib.bgtree1_1();
	this.instance_10.setTransform(-526.15,533,1,1,0,0,0,237,222);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(161).to({_off:false},0).to({x:2475.6,y:545},108).to({_off:true},1).wait(56));

	// 圖層_2___複製_2
	this.instance_11 = new lib.bgtree2_1();
	this.instance_11.setTransform(-103.2,506.5,1,1,0,0,0,93,129.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(161).to({_off:false},0).to({x:2621.6,y:518.5},108).to({_off:true},1).wait(56));

	// 圖層_1_複製
	this.instance_12 = new lib.bgtree1_1();
	this.instance_12.setTransform(-766.15,533,1,1,0,0,0,237,222);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(85).to({_off:false},0).to({x:2475.6,y:545},94).to({_off:true},1).wait(146));

	// 圖層_2_複製
	this.instance_13 = new lib.bgtree2_1();
	this.instance_13.setTransform(-623.2,506.5,1,1,0,0,0,93,129.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(75).to({_off:false},0).to({x:2621.6,y:518.5},94).to({_off:true},1).wait(156));

	// 圖層_2
	this.instance_14 = new lib.bgtree2_1();
	this.instance_14.setTransform(-623.2,506.5,1,1,0,0,0,93,129.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(42).to({_off:false},0).to({x:2621.6,y:518.5},94).to({_off:true},1).wait(189));

	// 圖層_1_複製
	this.instance_15 = new lib.bgtree1_1();
	this.instance_15.setTransform(-117.1,533,1,1,0,0,0,237,222);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(42).to({_off:false},0).to({x:3146.7,y:545},94).to({_off:true},1).wait(189));

	// 圖層_1
	this.instance_16 = new lib.bgtree1_1();
	this.instance_16.setTransform(-766.15,533,1,1,0,0,0,237,222);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(42).to({_off:false},0).to({x:2475.6,y:545},94).to({_off:true},1).wait(189));

	// cloud2
	this.instance_17 = new lib.cloud2_1();
	this.instance_17.setTransform(-102,74,1,1,0,0,0,63,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(326));

	// cloud1
	this.instance_18 = new lib.cloud1_1();
	this.instance_18.setTransform(1769,253.5,1,1,0,0,0,112,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(326));

	// wave
	this.instance_19 = new lib.wave_1();
	this.instance_19.setTransform(5760,390.5,1,1,0,0,0,1920,313.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(326));

	// bg
	this.instance_20 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(326));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-6720,400,10560,400);
// library properties:
lib.properties = {
	id: 'ED6E8E9C41848E4BAC31EEB9E31019D3',
	width: 1920,
	height: 800,
	fps: 18,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/_1.png?1649839665493", id:"_1"},
		{src:"images/_2.png?1649839665493", id:"_2"},
		{src:"images/_3.png?1649839665493", id:"_3"},
		{src:"images/_4.png?1649839665493", id:"_4"},
		{src:"images/bg.png?1649839665493", id:"bg"},
		{src:"images/bgtree1.png?1649839665493", id:"bgtree1"},
		{src:"images/bgtree2.png?1649839665493", id:"bgtree2"},
		{src:"images/cloud1.png?1649839665493", id:"cloud1"},
		{src:"images/cloud2.png?1649839665493", id:"cloud2"},
		{src:"images/dialog.png?1649839665493", id:"dialog"},
		{src:"images/title.png?1649839665493", id:"title"},
		{src:"images/wave.png?1649839665493", id:"wave"}
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