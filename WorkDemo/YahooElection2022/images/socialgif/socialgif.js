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



(lib.APP = function() {
	this.initialize(img.APP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,148);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.FB = function() {
	this.initialize(img.FB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,148);


(lib.IG = function() {
	this.initialize(img.IG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,148);


(lib.LINE = function() {
	this.initialize(img.LINE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,148);// helper functions:

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


(lib.txt42 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AARBeQgOAAgHgDQgJgDgDgJQgEgJABgPIAAiUIBuAAIAAB3IgaAAIAAgMIg8AAIAAApIABAKQABADAEABIAJABIApAAQAGAAADgCQADgCABgGQACgGAAgMQAFAEAHADIAMAEQgCAPgDAJQgEAJgIAEQgHAEgNAAgAAugJIATAAIAAg8IgTAAgAAFgJIASAAIAAg8IgSAAgAhjA8IAAiTIBBAAIAACAIgpAAIAAATgAhLARIASAAIAAhQIgSAAg");
	this.shape.setTransform(189.575,19.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBBeIgIgJIgvAFIgoAEIgDgWIAUgBIAYgCIAAgNIgnAAIAAgTIAnAAIAAgIIgmAAIAAhDIAmAAIAAgJIgrAAIAAgTIArAAIAAgIIgTABIgSAAIgCgJIgEgJIAigDIAhgDIAcgFIALAUIgSADIgVADIAAAKIApAAIAAAMIAVAAIAAgWIAAgYIAZAAIAAAYIAAAWIAsAAIAAADIAAAFIAAAEIgBA4IgCAnQgBAPgCAJQgCAIgDAEQgDAFgEADQgFACgFABIgMABIgPAAIgDgNQgCgHgDgFIANABIAJAAIAEgBIAEgDQACgCACgMIACggIACg5IgUAAQgBAegFAYQgFAZgKATQgLAUgSAPIgGgJgAgfBDIATgBIASgCQANgSAFgXQAFgXABgeIgUAAIAAgRIgpAAIAAAJIAmAAIAABDIgmAAIAAAIIAnAAIAAATIgnAAgAgfAMIARAAIAAgJIgRAAgAhIAMIARAAIAAgJIgRAAgAgfgMIARAAIAAgKIgRAAgAhIgMIARAAIAAgKIgRAAg");
	this.shape_1.setTransform(166.875,19.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhjBgIAAgaIB4AAIADgOIACgOIhhAAIAJgiIAJgnIAHgnIguAAIAAgZIC5AAIAAAZIhuAAIgDAPIgCAOIA+AAIAEgBIAUACIgEAjIgFAmIgGAlIAzAAIAAAagAggABIgDARIBBAAIACgSIACgRIg+AAIgEASg");
	this.shape_2.setTransform(145.175,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhHBnIAAhGICQAAIAABGIgbAAIAAgHIhbAAIAAAHgAgtBKIBbAAIAAgUIhbAAgAhEARIAAgTICLAAIAAATgAhEgQIAAgUICLAAIAAAUgAhjgxIAAgWIBbAAIgHgNIgIgMIAagGQAGAHAFAIIAIAQIBOAAIAAAWg");
	this.shape_3.setTransform(123.125,19.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhKBnIAAhfICZAAIAABeIgcAAIAAgGIhiAAIAAAHgAAOBLIAlAAIAAgPIglAAgAgvBLIAlAAIAAgPIglAAgAAOAqIAlAAIAAgOIglAAgAgvAqIAlAAIAAgOIglAAgAgDgEIgGgHIgQAGIgBgEIgBgGIgZAHIgPAEIgJADIgFACIgDgGIgGgHIgEgFQADgDADgGQADgGABgIIAAgsIAVgFIAWgHIASgHIARAUIgZAHQgOAFgOACIAAAmIAXgFIgEgKIgGgKIAVgIIANAWQAFAMAEAKQAIgFAEgIQAGgHACgKQADgJABgKIgVAAIAAgWIBfAAIAAACIAAAEIAAAEIgCAmIgEAXQgBAIgDAEQgDAEgEABQgEACgEABIgLAAIgPAAIgCgMIgFgLIAMABIAIAAIADAAIADgCIADgHIACgOIACgYIgZAAQgBAQgEAOQgFAOgKALQgIALgRAGIgDgHg");
	this.shape_4.setTransform(101.05,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAFBnIAAhCQgCASgDAQQgCARgGAOIgFgFIgIgEIgHgEIADgJIADgJIgNAFIgCgMIgDgNIgFgMIARgFIAFAMIADANQAEgRABgSQACgSAAgPIABgeIAAgwIAggEIAfgEQAQgDAKgDIATARQgMAEgPACIgdAFIgeADIAAAIIBVAAIAAA2IhWAAIgBAJIBdAAIAABRQAAAGgCAEQgBADgDADQgEADgEAAIgKABIgCgJIgEgJIAFAAIADAAIABAAIAAgCIAAgWIgJAAIAAAmIgOAAIAAgmIgJAAIAAAoIgPAAIAAgoIgJAAIAAArgABHAnIAJAAIAAgQIgJAAgAAwAnIAJAAIAAgQIgJAAgAAYAnIAJAAIAAgQIgJAAgAAKgnIAAALIA+AAIAAgOIg+AAgAhWBgIgHgCIgHgCIAFgPIACgRIACgSIATACIgCAUIgDASQgCAJgCAHIgFgCgAhABMIgBgQIgCgQIASgEIACAPIACAQIABAPIgTAEIgBgOgAhcAcIgCgHIgDgHQADgBAEgFQAEgDAFgGIAGgHIAJgMIgOABIgHACIgFABIAAABIgBgGIgDgIIgDgHQADAAADgDIAGgIIAHgMIAJgUIAJgWIAWAJQgGANgIAOQgHANgHANIAOgBIAJgPIAHgQIATANIgUAjQgMARgNAOIAZgCIgEgJIgEgJIARgHIAHAPIAEANIAEANIgSAIIAAgEIgCgCIgaADIgPAEIgJACIgFABIgCgGg");
	this.shape_5.setTransform(78.65,19.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvBcIgEgKIgEgIIAOAAIANAAIAIAAIAFgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAipIAbAAIAACpQAAALgDAHQgDAGgHADQgHADgLABIgcABIgCgJgABFAaIgOgiIgRgjIAagJIARAhQAJARAGAQQAGARADAOIgcALQgDgNgFgRgAhXAvIgJgFIgIgEQAJgLAGgPQAHgPAEgQIAHgfIAeAFIgJAjQgFARgHAQQgHARgJAMIgJgFg");
	this.shape_6.setTransform(57.175,19.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJBcIgEgHIgEgHIAHgHQADgEAAgHIAAieIBjAAIAABlIgnAAIAEAMIAEAMIAOgLIALgLIARASIgQAMIgPAKQAGAKAIAHQAIAIAKAFIgIALIgIALQgXgOgNgYQgOgYgHggIgOAAIAAA9IAggGIAAAMIABALIgbAHIgQAFIgIADIgFADIgDgHgAARgTIAzAAIAAgSIgzAAgAARg6IAzAAIAAgRIgzAAgAhnBDIAKgDIAAhKIAVAAIAABGIALgDIAAhTIgfAAIAAhIIBOAAIAABIIgYAAIAAAYIAXAAIAAAVIgXAAIAAAgIALgCIALgDIADAXIgdAIIgdAHIgaAHgAhGgvIAgAAIAAgdIggAAg");
	this.shape_7.setTransform(35.025,19.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBnIAAg/QgPASgRANQgTAOgTAJIgGgHIgGgIIgGgHQASgHAQgLQARgLAOgNQAOgOAJgPIAAgyIhPAAIAAgZIBPAAIAAgbIAbAAIAAAbIBTAAIAAAZIhTAAIAAAxIACACIACADQAKgJAHgOQAHgNADgQIAaAEIgEAMIgDAMIAMAKIANAJIAKAIIgSATIgMgMIgQgOIgIALIgIAIIgHgFIgKgGQAKANAOAMQANALAQAKQAPAJARAGIgHAIIgHAIIgGAIQgUgJgSgPQgSgOgPgRIAABAgAhSAbIgIgGIgHgGQAOgKALgPQAKgRAEgUIAZAEQgCAMgGAMIANAKIAJAJIgRASIgHgIIgJgHIgLAQIgOAOIgFgGg");
	this.shape_8.setTransform(13.1,19.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt42, new cjs.Rectangle(0,0,202.2,36.6), null);


(lib.txt41 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAJBgIgIgGIAAAMIgUAAIAAhbIgEAGIgFAFIgCgEIgCgFIAAAOIgSAAIAAAdIAUgFIADAWIgmAKIgjAIIgEgYIAIgBIAAhHIATAAIAABDIAHgCIAAhRIgZAAIAAhIIA+AAIAAAhQAIgKAGgKQAHgMADgKIAVAHIgLAUIgMAUIgOARIgEgFIgEgFIAAAbIgRAAIAAAaIALAAQAHgHAGgLQAHgKAFgKIAIgVIATAHIgGAMIgGANIAABvQAGgIADgKQAEgLABgMIACgYIAAgWIAVABIAAAPIgBARQACAMADAIQADAIAEAEIAAhSIAMAAIgEgFIgGgFIgFgFQALgMAFgSQAFgTABgWIAVABIgCATIgDARIAMASIAJAQIgPAQIgGgMIgIgOIgGAOIgJALIAKAAIAAAgIAbAAIAAAWIgbAAIAAAnIACAAIACAAIAIAAIALAAIAJAAIgCAHIgCAIIgCAHIgYAAQgJAAgIgCQgIgCgHgGQgGgFgFgLIgGAQQgDAHgFAGIgHgHgAhLgrIAUAAIAAgcIgUAAgAAQgTIgJgHQAKgOAEgTQAFgUACgWIAVACIgCAQIgCAPIAHAIIAFAGIgMAWIgDgGIgDgHIgHATQgEAIgFAHIgHgIg");
	this.shape.setTransform(123.225,19.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhoBOQAHgIAHgGQAHgGAGgDIAHgSIAGgTIgdAAIAIgVIAJgYIgYAAIAAgYIA2AAIgIAYIgIAXIANAAIAEgBIALAFQgEAPgFAQQgFAPgHANIAFADIAFAEQAMAGAPACQAQACARAAIAWAAIAXgBIAYgCIAVgDIgDAJIgEAKIgBAIIgRABIgVABIgYABIgUAAQgVAAgPgDQgPgCgMgHIgIgFIgIgFIgFgCQgDAAgDAEIgGALIgFAMgAgZA+IAAiPIAiAAIAEgLIACgKIAfADIgEAKIgEAIIAqAAIAAA+IhQAAIAAAOIBYAAIAABDgAAAAoIA/AAIAAgZIg/AAgAAAgoIA3AAIAAgTIg3AAgAhPhDIgEgNIgFgNIAYgHIAFAMIAEANIAEALIgYAIIgEgLg");
	this.shape_1.setTransform(101.05,19.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJBcIgEgHIgEgHIAHgHQADgEAAgHIAAieIBjAAIAABlIgnAAIAEAMIAEAMIAOgLIALgLIARASIgQAMIgPAKQAGAKAIAHQAIAIAKAFIgIALIgIALQgXgOgNgYQgOgYgHggIgOAAIAAA9IAggGIAAAMIABALIgbAHIgQAFIgIADIgFADIgDgHgAARgTIAzAAIAAgSIgzAAgAARg6IAzAAIAAgRIgzAAgAhnBDIAKgDIAAhKIAVAAIAABGIALgDIAAhTIgfAAIAAhIIBOAAIAABIIgYAAIAAAYIAXAAIAAAVIgXAAIAAAgIALgCIALgDIADAXIgdAIIgdAHIgaAHgAhGgvIAgAAIAAgdIggAAg");
	this.shape_2.setTransform(79.025,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBjQgOAAgIgEQgIgDgDgIQgDgIgBgNIAAhmIAcAAIAABmQAAAHACADQACACAIgBIAeAAQAGABADgDQADgEABgJQABgJABgRIAIAFIAJADIAIADQgCAVgDAMQgEAMgHAFQgIAFgNAAgAhmA7IAHgaIAGgeIAEgcIAaAEIgFAeIgEAgIgIAcgABHAhIgKgdIgLgbIAZgKIALAcIAKAbQAFAOACAMIgbALQgBgMgEgOgAAEgvIgUgSIgWgPIASgSIAVAOIAVAQIASAQIgTAUIgRgPg");
	this.shape_3.setTransform(57.25,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhaBgIgFgIIgFgHQATgBARgCQARgCAQgEIgLgHIgLgHIgMAGIgLAFIgGgGIgGgGIgGgGIAMgEIAMgFIgHgHIgHgJIASgHIgSgOQAIgFAGgHQAFgIAEgJIATAJQgDAJgGAJQgFAJgKAHIADgBIAGAHIAHAHIAMgIIAKgJQgGgDgEgFQgCgFAAgIIAAgQIAYAAIAAAQQAAABAAAAQAAABAAABQABAAAAABQAAAAABAAQACABAFAAIAWAAQAEAAACgCQABgCAAgGQAEACAGACIAKADQgBALgFAFQgGAEgMAAIgUAAIACABIgEAFIgEAEIA4AAIAFAAIAQAKQgHALgIAIQgKAIgLAHIAhAFIAjADIgGAIIgFAIIgEAIQgZgCgVgEQgWgEgSgGQgTAGgWAFQgXAEgXACIgDgHgAgPA2IARAHIAPgHIANgJIg9AAIgBAAIARAJgAA6AKIgLgMIgNgLIARgNIAIAGIAIAHIAAgSIg8AAIAJAFIAGAEIgMAPIgJgHIgLgGIgLgGIAFgFIg1AAIAAAUIgZAAIAAgoIAkAAIgEgIIgFgIIALgFIgNABIgOAAIgCgKIgDgJIAqgBIAqgDIAlgDIAhgFIARARIgOADIgOACIAUAGIgJAMIgIALIAjAAIAAArIgUAAIAIAIIAFAHIgTAOIgJgLgAAZhNIgXACIAGAKQACAFABAEIgMAFIAhAAIAIgOIAHgOIgWACgAgLgzIgDgJIgGgJIAOgFIgSABIgTABIAFAJIAFAIIgKAEIAgAAIAAAAg");
	this.shape_4.setTransform(35.2,19.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBgIgFgJIgEgIQARgDAOgFQANgEAKgHIgTgKIgSgKIAIgPIAHgRIgWAAIACANIgMADIgMADIAAAwQAAAKgDAEQgCAGgFADQgGADgIABIgTABIgDgNIgEgLIAMAAIAIAAIADAAIABgEIAAgoIgYAHIgFgZIAOgDIAPgFIAAgtIgaAAIAAgZIAaAAIAAgoIAaAAIAAAoIAUAAIAAAZIgUAAIAAAnIARgEIAAgNIAkAAIAGgRIAEgQIAbAEIgJAdIAXAAIAAgHIABgIIAdABIgBAHIgBAHIAUAAIAAAWIgYAAQgDAOgFAMQgFALgHAKIAXAOIASAMIgRAVIgSgNIgXgPQgNAKgQAHQgQAHgWAGIgDgIgAATAUIgFALIALAGIAMAFQAFgHAEgIQAEgJACgKIgcAAIgFAMgAgXgdIAAgvIAuAAIgCgMIgDgLIAbgDIADAMIADAOIAxAAIAAAuIgZAAIAAgYIhLAAIAAAZg");
	this.shape_5.setTransform(13.025,19.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt41, new cjs.Rectangle(0,0,136.2,36.6), null);


(lib.txt32 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAyBXIgFgLIALAAIAHAAIADgBIABgCIAAhiIg9AAIAAhJIBWAAIAACrQABAJgDAEQgCAGgFACQgFADgIABIgRABIgDgMgAAfgqIAkAAIAAgLIgkAAgAAfhGIAkAAIAAgLIgkAAgAhcBjIAAjFIBVAAIAABJIg7AAIAAB8gAhCgqIAiAAIAAgLIgiAAgAhChGIAiAAIAAgLIgiAAgAAQBdIAAgXIhLAAIAAgSIASAAIAAg0IgMAAIAAgSIBpAAIAAASIgNAAIAAA0IAQAAIAAASIgQAAIAAAXgAgSA0IAiAAIAAgIIgiAAgAgSAeIAiAAIAAgIIgiAAgAgSAHIAiAAIAAgHIgiAAg");
	this.shape.setTransform(145.1542,19.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5BnIAAhrIgUAAIAAADIgBAZQgBAOgDAOQgCAOgEAOQgEANgHAKIgGgFIgHgFIgHgFIAFgKIAEgMIgOAKIgEgKIgHgLIgGgMIARgJIAJAPIAGAOQAFgQABgRQACgRgBgOIAAhOIAZgGIAWgGIAUgHIAUATQgOAFgQAFIggAHIAAAiIBCAAIAAAYIgUAAIAABrgAg6BnIAAhJIgoAAIAAgXIAoAAIAAgPIgpAAIAAgWIAVAAIgDgLIgEgMIASgEIgdAAIAAgVIAlAAIgDgJIgDgJIAagHIAGAMIAEANIAfAAIAAAVIgbAAIASAEIgFAMIgFALIAVAAIAAAWIgkAAIAAAPIAhAAIAAAXIghAAIAABJgAg7guIACAMIgPAEIAfAAIAGgNIAEgOIggAAIAEALgAhdBSIgJgHIAKgRIAJgVIAVAFIgHAQIgIARIgIAMIgIgFg");
	this.shape_1.setTransform(123.05,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBaIgGgMIALAAIAKAAIAFAAIAEAAIABgDIAAgwIhMAAIAAgWIBMAAIAAgRIhFAAIAAgWIApAAIAAgVIgwAAIAAgXIAwAAIAAgYIAaAAIAAAYIAyAAIAAAXIgyAAIAAAVIAsAAIAAAWIgQAAIAAARIAVAAIAAAWIgVAAIAAAwQAAAKgDAFQgCAFgHADQgGADgJABIgVABIgDgNgAhiBQIAAioIBFAAIAACUIgtAAIAAAUgAhKAlIAVAAIAAgoIgVAAgAhKgaIAVAAIAAgnIgVAAgAABBEIgIgNIgJgNIAUgMIAKAMIAKAMIAHALIgXAOIgHgLg");
	this.shape_2.setTransform(101.425,19.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASBhIAAjAIBPAAIAAB+QAAAJgCAFQgCAGgFADQgGADgHABQgIABgLgBIgDgMQgBgHgDgFIALAAIAHAAIADgBIABgDIAAhlIgaAAIAACogAhYBUIgEgKIgEgIIAHgFQADgEAAgGIAAiTIBcAAIAABsIhBAAIAAArIAdgIIgFgKIgFgJIAXgLIALAUIAKAUIAIASIgXAMIgEgIIgEgKIgfAKIgUAGIgKAEIgGAEIgCgJgAg7gLIAoAAIAAgUIgoAAgAg7g2IAoAAIAAgTIgoAAg");
	this.shape_3.setTransform(78.83,19.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLBfIAAi9ICXAAIAAC8IgbAAIAAgNIhhAAIAAAOgAgwA2IBhAAIAAgxIhhAAgAgwgUIBhAAIAAgvIhhAAg");
	this.shape_4.setTransform(57.15,19.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMBnQAAgFgCgFQgBgFgDgFIANABIAKAAIAFgBIADgDIABgCIABgEIh1AAIAEgVIAEgZIgeAAIAAgYIAhAAIADgTIACgTIgIAKIgIAJIgHgGIgJgFIgIgFQAKgJAKgLQAJgLAIgOQAIgNAGgOIAaAIIgEAHIgDAHIB+AAIAAAXIiLAAIgGAIIgGAJICBAAIAAACIAAAFIAAAEIAAASIgBAQIAgAAIAAAYIghAAIgBAMIgBALIAZAAIAAAXIgbAAIgDALIgDAHQgEAGgEACIgKACIgNABIgRAAgAANAjIALAJIgHAHIAaAAIAAgLIABgNIgsAAIANAIgAAAAzIgMgJQgHgEgHgDIAJgIIgbAAIgCAMIgCAMIAwAAIAAAAgAAPgKIALAIIgHAHIAaAAIABgLIAAgMIgtAAIAOAIgAACAFIgMgIIgNgGIAJgJIgYAAIgBAMIgCALIArAAIAAAAg");
	this.shape_5.setTransform(35.075,19.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA2BnIAAgIIhPAAIAAAIIgZAAIAAhJIgQAOIgSANIgIgLIgIgLQARgJANgNQAOgNAJgPIgvAAIAAgVIA6AAIADgEIACgFIgvAAIAAgUIA2AAIABgEIABgFIgbAAIgbAAIgBgKIgEgJIAqgBIApgBIAngDIAggEIAPATIgmAFIgsADIgCAFIgBAFIBWAAIAAAUIhcAAIgCAFIgCAEIBsAAIAAAVIh2AAIgCAFIgDAEIBmAAIAABtgAgZBLIBPAAIAAgKIhPAAgAgZAwIBPAAIAAgJIhPAAgAgZAWIBPAAIAAgJIhPAAg");
	this.shape_6.setTransform(12.775,19.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt32, new cjs.Rectangle(0,0,158.2,36.6), null);


(lib.txt31 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAJBgIgIgGIAAAMIgUAAIAAhbIgEAGIgFAFIgCgEIgCgFIAAAOIgSAAIAAAdIAUgFIADAWIgmAKIgjAIIgEgYIAIgBIAAhHIATAAIAABDIAHgCIAAhRIgZAAIAAhIIA+AAIAAAhQAIgKAGgKQAHgMADgKIAVAHIgLAUIgMAUIgOARIgEgFIgEgFIAAAbIgRAAIAAAaIALAAQAHgHAGgLQAHgKAFgKIAIgVIATAHIgGAMIgGANIAABvQAGgIADgKQAEgLABgMIACgYIAAgWIAVABIAAAPIgBARQACAMADAIQADAIAEAEIAAhSIAMAAIgEgFIgGgFIgFgFQALgMAFgSQAFgTABgWIAVABIgCATIgDARIAMASIAJAQIgPAQIgGgMIgIgOIgGAOIgJALIAKAAIAAAgIAbAAIAAAWIgbAAIAAAnIACAAIACAAIAIAAIALAAIAJAAIgCAHIgCAIIgCAHIgYAAQgJAAgIgCQgIgCgHgGQgGgFgFgLIgGAQQgDAHgFAGIgHgHgAhLgrIAUAAIAAgcIgUAAgAAQgTIgJgHQAKgOAEgTQAFgUACgWIAVACIgCAQIgCAPIAHAIIAFAGIgMAWIgDgGIgDgHIgHATQgEAIgFAHIgHgIg");
	this.shape.setTransform(79.225,19.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhoBOQAHgIAHgGQAHgGAGgDIAIgSIAFgTIgdAAIAIgVIAJgYIgYAAIAAgYIA2AAIgIAYIgIAXIANAAIAEgBIALAFQgEAPgFAQQgFAPgHANIAFADIAFAEQAMAGAPACQAQACARAAIAWAAIAXgBIAYgCIAVgDIgDAJIgEAKIgBAIIgRABIgVABIgYABIgUAAQgVAAgPgDQgPgCgMgHIgJgFIgHgFIgFgCQgDAAgDAEIgGALIgFAMgAgYA+IAAiPIAhAAIAEgLIACgKIAfADIgEAKIgEAIIAqAAIAAA+IhQAAIAAAOIBYAAIAABDgAAAAoIA/AAIAAgZIg/AAgAAAgoIA3AAIAAgTIg3AAgAhPhDIgFgNIgDgNIAXgHIAFAMIAEANIAEALIgYAIIgEgLg");
	this.shape_1.setTransform(57.05,19.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbBfIgIgHQAKgDALgEQAKgEAHgFIgRAAIAAhRIAUAAIgDgHIgEgFQACgCACgEQADgEgBgHIAAgGIgGAAQgBANgFAKQgGAKgLAHIgFgHIgGgHQAJgEADgHQAEgHACgIIgNAAIAAgQIAaAAIAAgKIgKAAIgCAFIgDAEIgGgFIgGgEIAFgNIADgPIAQADIgBAFIgCAEIAGAAIAAgPIARAAIAAAPIAPAAIAAAQIgPAAIAAAKIARAAIAAAQIgJAAIAAAMIAJgDIABAGIACAGQAFgEADgFQADgGAAgGIgLAAIAAgQIAJAAIgGgFIgHgEQAEgGACgHIADgQIAPAEIgBAEIgBAEIAHAAIAAgPIARAAIAAAPIAUAAIAAAQIgUAAIAAAKIAZAAIAAAQIgQAAIAAANIAAADIAAACIACAAIACAAIACAAIABAAIABgBIAAgBIABgDIAAgEIAFADIAFACIAAAHIgBAFIgDADIgDACIgDABIgFABIgHAAIgGgBIgFgDQgCgCgBgEIAAgKIAAgNIgGAAQgBALgEAIQgEAJgIAHIApAAIAABRIgSAAIATAJIARAJIgWANIgLgHIgNgIIgPgIIAKgIIglAAIANAIQgGAFgIAEIgRAIIgRAGIgHgIgAAIA3IA1AAIAAgIIg1AAgAAIAiIA1AAIAAgHIg1AAgAAIAOIA1AAIAAgHIg1AAgAAdgUIgOAGIgGAFIAdAAIgFgGIgEgFIABgBIgBABIAAAAgAAthBIgDAFIAQAAIAAgKIgLAAIgCAFgAheBkIAAhMIA7AAIAABAIAAADIgkAAIAAAJgAhHBGIAOAAIAAgZIgOAAgAgjBYIAAAAgAhdANIAAgSIA4AAIAAASgAhdgPIAAgUIA5AAIAAAUgAhngtIAAgUIAhAAIgHgOIgHgOIAUgJQAFAGAEAIIAHAPIgOAIIAeAAIAAAUg");
	this.shape_2.setTransform(35.2,19.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbBgIgFgJIgEgIQARgDAOgFQANgEAKgHIgTgKIgSgKIAIgPIAHgRIgWAAIACANIgMADIgMADIAAAwQAAAKgDAEQgCAGgFADQgGADgIABIgTABIgDgNIgEgLIAMAAIAIAAIADAAIABgEIAAgoIgYAHIgFgZIAOgDIAPgFIAAgtIgaAAIAAgZIAaAAIAAgoIAaAAIAAAoIAUAAIAAAZIgUAAIAAAnIARgEIAAgNIAkAAIAGgRIAEgQIAbAEIgJAdIAXAAIAAgHIABgIIAdABIgBAHIgBAHIAUAAIAAAWIgYAAQgDAOgFAMQgFALgHAKIAXAOIASAMIgRAVIgSgNIgXgPQgNAKgQAHQgQAHgWAGIgDgIgAATAUIgFALIALAGIAMAFQAFgHAEgIQAEgJACgKIgcAAIgFAMgAgXgdIAAgvIAuAAIgCgMIgDgLIAbgDIADAMIADAOIAxAAIAAAuIgZAAIAAgYIhLAAIAAAZg");
	this.shape_3.setTransform(13.025,19.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt31, new cjs.Rectangle(0,0,92.2,36.6), null);


(lib.txt22 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhKBnIAAhOIgJAJIgJAIIgDgKIgEgKIgDgHQAOgKAMgOQANgPAIgRIgqAAIAAgYIAdAAIgHgMIgIgMIATgMIALAOIAIAOIgMAIIAPAAIAEgBIANAKQgEAMgFAMQgGAMgHALIAKAJIAKALIAHAIIgQAVIgHgKIgIgLIAABUgAgdBjIAAgTIAiAAIgDgIIgDgIIANgFIgYAAIAAgsIBjAAIAAAsIgaAAIASAFIgGAIIgFAIIAjAAIAAATgAAXBGIAEAKIAUAAIAEgLIAEgKIgkAAIAEALgAAIAsIA5AAIAAgOIg5AAgAgaAHIAAgRIB/AAIAAARgAgTgSIAAhCIAdAAIAAgSIAUAAIAAASIANAAIAAgSIAUAAIAAASIAfAAIAABCgAA7giIANAAIAAgKIgNAAgAAegiIANAAIAAgKIgNAAgAABgiIANAAIAAgKIgNAAgAA7g7IANAAIAAgKIgNAAgAAeg7IANAAIAAgKIgNAAgAABg7IANAAIAAgKIgNAAg");
	this.shape.setTransform(145.025,19.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhcBdIgKgJQAMgIAJgKQAKgKAGgKIgRgQIgQgOIAGgVIAEgaIgMABIgCgZIAJAAIAKAAIACgYIACgXIAaACIgCAVIgDAWIAPgBIAAgNIAZAAIAAAMIALgBIAAAYIgLABQAAARgDATQgEATgJAUIAPAOIAMANIgRAWIgKgMIgNgNQgGAKgKAKQgIAKgNAIIgIgJgAg+ggIgEAWIgEASIAIAHIAJAHQAFgOACgOQADgPAAgMgAAIBmIgDgMQgDgIgCgFIAKAAIALAAIAFAAIAFgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAgBIAAg9IgtAAIAAgYIAtAAIAAgVIANgPIAOgRIhAAAIAAgYIBRAAIAFgBIASAMQgHANgLANQgLANgLALIAAAQIAsAAIAAAYIgsAAIAAA+QAAAJgDAHQgCAFgIADQgGACgJABIgPABIgIAAg");
	this.shape_1.setTransform(123.1,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABLBbIgSgOIgRgNIANgLIgOAAQgEAMgIAJQgIAJgOAIQgNAGgWAFQgCgFgEgFIgHgKQAQgDALgEQALgFAGgFQAHgGAEgGIgwAAIAAgVIAQAAIAAg7IgBABIgGgIIgHgIIAAAGIgTAAIAAAfIAJgDIAJgCIAEAWIgLAEIgLADIAAA0QAAAJgCAGQgCAFgFAEQgFADgHACIgRABIgDgNIgEgOIAKABIAHAAIACgBIABgDIAAgsIgUAGIgGgZIAMgEIAOgDIAAglIgWAAIAAgYIAWAAIAAgrIAZAAIAAArIATAAIAAAOQAPgMAKgPQAJgPAFgOIAYAEIgDAHIgDAGIAcAAIADgBIAQAKIgIAOIgJANIAkAAIAABRIAOAAIAAAVIgrAAIAQALIAQAMIANALIgRAQIgNgMgAAuAOIgBAJIgBAJIAXAAIAAgbIgHAJIgMgKIgPgJIgKALIgKAKIgGgFIgHgGIAAAbIATAAIABgJIABgJgAAAABQAIgFAGgIQAHgHAFgJIgaAAgAAtgXIgDAFIAOAIIALAIIAAgaIgUAAIgCAFgAAGg5IgGAIIAcAAIAFgIIAFgIIgaAAIgGAIg");
	this.shape_2.setTransform(101.125,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHBnIAAgWIAAhRIAcAAIAAhlIAaAAIAAAtIArAAIAAAYIgrAAIAAAgIAkAAIAABmIgaAAIAAgIIgoAAIAAAJgAAfBGIAoAAIAAgtIgoAAgAhmBeQAFgHAEgKQAEgLABgLIASAFQgCAMgDAMQgEALgHAIgAhBBTIgBgNIgCgOIAPgCIAEAUIABATIgRACIAAgMgAgnBQIgEgMIgEgNIAQgDIAGATIAEASIgQADIgCgMgAgQBHIgKgSIAQgFQAGAHAEAKIAHAQIgQAHIgHgRgAhiAcIASgBIAWAAIAAgLIgiAAIAAgSIAiAAIAAgKIgjAAIAAhTIBdAAIAABTIgkAAIAAAKIAjAAIAAASIgjAAIAAAKIATgBIATAAIgBATIgiACIgiADIgfABgAgngeIATAAIAAgfIgGAOIgEALIgJgDgAhKgeIATAAIAAgvIgTAAIAAAJIALgEIAFARIACAPIgLAEIgDgPIgEgQgAgngpIAEgPIAEgQIALAEIAAgJIgTAAg");
	this.shape_3.setTransform(79,19.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkBmIAAg8IgOAAIAAA8IgVAAIAAgjIgKARIgLAOIgGgIIgHgIIgKAFIgHgNIgIgOIAQgJIAHALIAHAKQAGgGAFgIIAKgQIgRAAIAAgTIAZAAIAAgMIgdAAIAAgSIAdAAIAAgLIgYAAIAAgTIAYAAIAAgMIgaAAIAAgUIAaAAIgFgLIgGgNIAVgJIAIAPIAGAMIgOAGIAcAAIALgQIAIgRIAZAKIgKANIgJAKIAhAAIAAAUIgoAAIAAAMIAiAAIAAAeIAMAAIAAASIgMAAIAAAfIgZAAQAIAMAKAKQAKAJAKAHIgIAIIgHAJQgIgGgIgJQgJgJgHgKIAAAngAA5AXIANAAIAAgMIgNAAgAAWAXIAOAAIAAgMIgOAAgAA5gHIANAAIAAgLIgNAAgAAWgHIAOAAIAAgLIgOAAgAAWglIAOAAIAAgMIgOAAgAheBfIgJgFIALgSIAKgVIAUAGIgHAQIgIAPIgIANIgJgGgAhcAwIAAiMIA9AAIAACMgAhIAbIAUAAIAAgUIgUAAgAhIgMIAUAAIAAgUIgUAAgAhIgzIAUAAIAAgUIgUAAg");
	this.shape_4.setTransform(57.025,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhbBXIgFgIIgHgHQAZgJARgMQAQgMAKgNQAJgOAEgNIhJAAIAAgbIBPAAIABgIIAAgJIAAgXIhIAAIAAgaICtAAIAAAaIhLAAIAAAYIAAAIIAAAIIBTAAIAAAbIhMAAQALAZAVATQAWASAgAJIgHAHIgGAJIgFAIQgfgKgVgTQgUgSgOgcQgFAPgLAOQgLANgRAMQgRAMgZAKIgFgIg");
	this.shape_5.setTransform(35.2,19.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhbBXIgGgIIgGgHQAagJAQgMQAQgMAJgNQAKgOAFgNIhKAAIAAgbIBPAAIAAgIIAAgJIAAgXIhIAAIAAgaICuAAIAAAaIhLAAIAAAYIAAAIIgBAIIBVAAIAAAbIhOAAQAMAZAWATQAVASAgAJIgHAHIgGAJIgFAIQgegKgWgTQgVgSgNgcQgFAPgLAOQgLANgRAMQgRAMgYAKIgGgIg");
	this.shape_6.setTransform(13.2,19.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt22, new cjs.Rectangle(0,0,158.2,36.6), null);


(lib.txt21 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAIBcIgJgJIgcAAIAAAUIgXAAIAAgUIguAAIAAgSIAuAAIAAgJIgmAAIAAg2IAmAAIAAgHIgrAAIAAgSIArAAIAAgKIAXAAIAAAKIAqAAIAAASIgqAAIAAAHIAkAAIAAA2IgkAAIAAAJIAqAAIAAAGIAKgKIAIgKQgEgSgDgWQgDgVgBgZIh5AAIAAgVIAwAAIAAgLIglAAIAAgUIAlAAIAAgPIAZAAIAAAPIAiAAIAAAUIgiAAIAAALIAvAAIgBguIAaAAIAAAYIAAAWIA2AAIAAAVIg1AAIACAdIAEAaIAJgVIAIgYIAXAHQgGAUgIASQgIATgKAQQADAJAEAGQAEAFAEAAQADAAACgIIADgYQAEAEAFAEQAGAEAFACQgCARgEAJQgDAKgGAEQgGADgJAAQgKAAgHgGQgIgFgFgLIgNANIgOAMIgHgLgAgfArIAUAAIAAgIIgUAAgAhIArIAWAAIAAgIIgWAAgAgfAXIAUAAIAAgIIgUAAgAhIAXIAWAAIAAgIIgWAAgABAhIIgPgQIAUgNIAKAKIAJALIAIAKIgVAOQgEgHgHgJg");
	this.shape.setTransform(79.325,19.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBeIAAihIhQAAIAAgbIDDAAIAAAbIhZAAIAAAjIAFgGIAaAPIAbAPQAOAIAIAGIgTAYIgQgMIgWgOIgXgNIAABng");
	this.shape_1.setTransform(57.1,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA/BfIgWgJIgXgIIAIgJIg1AAIAQAIQgJAFgLAFIgZAJQgMAFgMACIgFgGIgHgHIgHgGIAfgGQAPgEAMgFIgdAAIAAhBIgHACIgJABIgEgHIgEgHIgFgFQAUgDANgEQALgEAHgFIgjAAIAEgTIADgVIApAAIAAgIIgxAAIAAgQIAxAAIAAgKIAYAAIAAAKIAYAAIAAgKIAZAAIAAAKIAvAAIAAAnIgvAAIAAAKIA8AAIAAADIAAAEIgCAQQgBAGgDADIgGAEIgHACIgBAAIgCAAIAABKIgYAAIAaAKIAVAIIgTAQIgRgIgAgsA2IBeAAIAAgJIheAAgAgsAgIBeAAIAAgJIheAAgAgsAIIBeAAIAAgIIheAAgAAmgOIAUAAIgCgEIgCgDIAHABIAGAAIACgBIACgBIABgCIABgEIgjAAgAgUgUIgGAGIAnAAIAAgOIgdAAIgEAIgAgLgwIgBAFIAZAAIAAgKIgYAAIAAAFgAg5grIAVAAIABgFIAAgFIgVAAgAAmhEIAWAAIAAgIIgWAAgAgLhEIAYAAIAAgIIgYAAg");
	this.shape_2.setTransform(35,19.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhaBbIgJgLQAXgFAOgIQAQgIAJgKQAJgKAGgLIg3AAIAAgwIgDADIgFACIgHgKQgGgGgFgDQAPgKAMgMQAMgLAJgMQAIgLAGgLIAcAFIgDAFIgCAFIAqAAIAEgBIATALIgKAPIgLAPIA7AAIAABKIgxAAIAAAoQAAAGACABQACACAGAAIAYAAQADAAACgCQACgCABgHIACgSIAHAFIAIADIAIADQgBAQgDAJQgDAJgHADQgGAEgLAAIgeAAQgNAAgHgDQgIgDgCgHQgDgHAAgLIAAgpIgDAAQgGAQgJAOQgMAOgRALQgSAMgdAHIgFgLgAAOgIIgCANIAtAAIAAgcIgpAAIgCAPgAgzAFIAkAAIACgNIACgPIgoAAgAgpg3IgJAJIAuAAIAGgJIAHgKIgrAAIgHAKg");
	this.shape_3.setTransform(13,19.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt21, new cjs.Rectangle(0,0,92.2,36.6), null);


(lib.txt12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAyBXIgFgLIALAAIAHAAIADgBIABgCIAAhiIg9AAIAAhJIBWAAIAACrQABAJgDAEQgCAGgFACQgFADgIABIgRABIgDgMgAAfgqIAkAAIAAgLIgkAAgAAfhGIAkAAIAAgLIgkAAgAhcBjIAAjFIBVAAIAABJIg7AAIAAB8gAhCgqIAiAAIAAgLIgiAAgAhChGIAiAAIAAgLIgiAAgAAQBdIAAgXIhLAAIAAgSIASAAIAAg0IgMAAIAAgSIBpAAIAAASIgNAAIAAA0IAQAAIAAASIgQAAIAAAXgAgSA0IAiAAIAAgIIgiAAgAgSAeIAiAAIAAgIIgiAAgAgSAHIAiAAIAAgHIgiAAg");
	this.shape.setTransform(167.1542,19.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5BnIAAhrIgVAAIAAADIgBAZQAAAOgCAOQgCAOgFAOQgEANgHAKIgGgFIgIgFIgFgFIAEgKIAFgMIgPAKIgFgKIgGgLIgHgMIASgJIAJAPIAHAOQAEgQABgRQABgRAAgOIAAhOIAYgGIAYgGIATgHIAUATQgOAFgQAFIghAHIAAAiIBDAAIAAAYIgVAAIAABrgAg5BnIAAhJIgpAAIAAgXIApAAIAAgPIgrAAIAAgWIAWAAIgDgLIgDgMIASgEIgeAAIAAgVIAmAAIgEgJIgDgJIAagHIAFAMIAFANIAeAAIAAAVIgaAAIARAEIgEAMIgFALIAWAAIAAAWIglAAIAAAPIAhAAIAAAXIghAAIAABJgAg7guIADAMIgQAEIAgAAIAEgNIAFgOIghAAIAFALgAhdBSIgJgHIALgRIAIgVIAUAFIgHAQIgHARIgIAMIgIgFg");
	this.shape_1.setTransform(145.05,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAHBnIAAgWIAAhRIAcAAIAAhlIAaAAIAAAtIArAAIAAAYIgrAAIAAAgIAkAAIAABmIgaAAIAAgIIgoAAIAAAJgAAfBGIAoAAIAAgtIgoAAgAhmBeQAFgHAEgKQAEgLABgLIASAFQgCAMgDAMQgEALgHAIgAhBBTIgBgNIgDgOIAQgCIAEAUIABATIgRACIAAgMgAgnBQIgEgMIgDgNIAPgDIAGATIAEASIgQADIgCgMgAgQBHIgKgSIAQgFQAGAHAEAKIAHAQIgQAHIgHgRgAhiAcIASgBIAWAAIAAgLIgiAAIAAgSIAiAAIAAgKIgjAAIAAhTIBdAAIAABTIgkAAIAAAKIAjAAIAAASIgjAAIAAAKIATgBIATAAIgBATIgiACIgiADIgfABgAgngeIATAAIAAgfIgGAOIgEALIgJgDgAhJgeIASAAIAAgvIgSAAIAAAJIAKgEIAFARIACAPIgLAEIgDgPIgDgQgAgngpIAEgPIAEgQIALAEIAAgJIgTAAg");
	this.shape_2.setTransform(123,19.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhjBkIAAgVIBWAAIAAgMIhGAAIAAgTIBGAAIAAgKIg+AAIAAhFIA+AAIAAgIIhUAAIAAgVIBUAAIAAgJIggABIgfAAIgCgKIgDgKIAngBIAogCIAkgDIAggFIAMAVIgfAEIgjADIAAALIBWAAIAAAVIhWAAIAAAIIBBAAIAABFIhBAAIAAAKIBKAAIAAATIhKAAIAAAMIBYAAIAAAVgAAMAVIAnAAIAAgKIgnAAgAgyAVIAlAAIAAgKIglAAgAAMgEIAnAAIAAgKIgnAAgAgygEIAlAAIAAgKIglAAg");
	this.shape_3.setTransform(101.125,18.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhMBfIAAi9ICYAAIAAC8IgcAAIAAgNIhhAAIAAAOgAgxA2IBhAAIAAgxIhhAAgAgxgUIBhAAIAAgvIhhAAg");
	this.shape_4.setTransform(79.15,19.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMBnQAAgFgCgFQgBgFgDgFIANABIAKAAIAFgBIADgDIABgCIABgEIh1AAIAEgVIAEgZIgeAAIAAgYIAhAAIADgTIACgTIgIAKIgIAJIgHgGIgJgFIgIgFQAKgJAKgLQAJgLAIgOQAIgNAGgOIAaAIIgEAHIgDAHIB+AAIAAAXIiLAAIgGAIIgGAJICBAAIAAACIAAAFIAAAEIAAASIgBAQIAgAAIAAAYIghAAIgBAMIgBALIAZAAIAAAXIgbAAIgDALIgDAHQgEAGgEACIgKACIgNABIgRAAgAANAjIALAJIgHAHIAaAAIAAgLIABgNIgsAAIANAIgAAAAzIgMgJQgHgEgHgDIAJgIIgbAAIgCAMIgCAMIAwAAIAAAAgAAPgKIALAIIgHAHIAaAAIABgLIAAgMIgtAAIAOAIgAACAFIgMgIIgNgGIAJgJIgYAAIgBAMIgCALIArAAIAAAAg");
	this.shape_5.setTransform(57.075,19.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDBgIgGgIIgGgGQAOgHAKgJQAMgJAJgMQgHgLgFgMQgFgMgEgMIgGAHIgFAIIgHgKIgJgKIAABuIgaAAIAAg5IgaAKIgOAGIgHAEIgCgIIgEgIIgEgIIAGgFQACgEAAgGIAAhpIAaAAIAABqIAXgHIAAh4IAaAAIAABXQAJgLAGgOQAGgOAEgRIAHgiIAbAEIgEATIgEASIBDAAIAAAYIgNAAQgEAZgHAUQgHAUgJARQAIALALAJQAKAJANAGIgKAKIgIAMQgMgHgJgJQgKgIgJgLQgIALgLAJQgLAJgNAHIgEgHgAAYgiIgBADIAJAcQAFAMAHAMQAGgMAEgOQAEgPADgRIgkAAIgBADg");
	this.shape_6.setTransform(35.375,19.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBcIgHgLQAQgCAMgDQAMgDAKgEIgSgHIgSgHIAIgLIAIgMIgaAAIAAgWIAmAAIAJgTIgsAAIAAgWIAeAAIgDgLIgHgMIAQgFIgfAAIAAgWIAvAAIgDgJIgEgHIAdgFIAFAKIAFALIAoAAIAAAWIgjAAIAUAFIgHAMIgGALIAgAAIAAAWIhPAAIAUAEIgEAHIgDAIIAbAAIACgMIAZADIAAAEIgBAFIARAAIAAAWIgXAAIgIASQgFAIgGAGIAVAKIARAKIgRATIgSgLIgWgLQgNAIgQAFQgQAGgVADIgFgLgAANAtIAZAJIAJgKIAGgMIggAAIgIANgAAVgwIAFALIgQAGIAiAAIAGgOIAGgOIgqAAIAHALgAhbBmIgDgMIgEgMIALAAIAHAAIADgBIABgDIAAguIgVAGIgGgZIAMgDIAPgEIAAglIgXAAIAAgYIAXAAIAAgqIAYAAIAAAqIATAAIAAAYIgTAAIAAAgIARgFIADAXIgKADIgKADIAAA1QAAAJgCAGQgCAFgFADQgFADgHABIgMABIgGAAg");
	this.shape_7.setTransform(13.025,19.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt12, new cjs.Rectangle(0,0,180.2,36.6), null);


(lib.txt11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgXBnIAAhQIgDABIgDgGIgFgFIgJADIgJAEIAAA3QAAAJgCAFQgCAGgFADQgFADgHABQgIABgKgBIgCgLIgFgNIALABIAHgBIADAAIABgDIAAgvIgXAIIgEgaIAMgDIAPgFIAAgmIgXAAIAAgYIAXAAIAAgqIAYAAIAAAqIAUAAIAAAYIgUAAIAAAfIAQgFIACAMQALgEAKgHQAJgGAGgIIghAAIAAgVIAXAAIgEgMIgFgMIAPgEIgLAAIgMAAIgCgJIgDgJIAmgCIAmgEQATgCAOgDIAOATIgYADIgZADIAAAgIAIAAIAHgRIAHgRIAWAGIgIAOIgGAOIAaAAIAAAVIglAAIAPAKIAPAKIALAIIgOAPIAABSIgXAAIAAgIIhEAAIAAAJgAArBMIAYAAIAAgOIgYAAgAgBBMIAWAAIAAgOIgWAAgAArArIAYAAIAAgMIgYAAgAgBArIAWAAIAAgMIgWAAgABNALIgQgLIgRgNIAAAYIAhAAIAAAAgAAJAAQgGAGgGAFIAYAAIAAgYQgGAHgGAGgAAMhJIgJAAIAFANIAFALIgPAFIAXAAIAAgeIgJABg");
	this.shape.setTransform(79,19.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBnIAAh2IgHAJIgHAIIgDgCIgCgDIACAQIgKAEIgLADIAAA0QAAAKgCAFQgCAGgFADQgFADgIACIgSABIgDgNIgEgNIALAAIAHAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABgBIABgDIAAgtIgWAGIgFgZIAMgDIAPgDIAAgnIgZAAIAAgYIAZAAIAAgpIAZAAIAAApIAWAAIAAAYIgWAAIAAAhIAOgEIgFgFIgEgEQAJgJAIgLIACgDQAJgOAHgPQAIgQAEgQIAYAHIgFAPIgGAPIAeAAIgGgOIgHgNIAXgJIAIAPIAHAPIgOAGIAqAAIAAAYIgjAAIAAATIAhAAIAAAWIghAAIAAAUIAgAAIAAAXIggAAIAAAVIAoAAIAAAYIhbAAIAAAOgAAMBBIAbAAIAAgVIgbAAgAAMAVIAbAAIAAgUIgbAAgAAMgVIAbAAIAAgTIgbAAgAgyglIAWAAQgIALgJAJIAEAEIAFAFIgOAEgAgcglg");
	this.shape_1.setTransform(56.975,19.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBBeIgIgJIgvAFIgoAEIgDgWIAUgBIAYgCIAAgNIgnAAIAAgTIAnAAIAAgIIgmAAIAAhDIAmAAIAAgJIgrAAIAAgTIArAAIAAgIIgTABIgSAAIgCgJIgEgJIAigDIAhgDIAcgFIALAUIgSADIgVADIAAAKIApAAIAAAMIAVAAIAAgWIAAgYIAZAAIAAAYIAAAWIAsAAIAAADIAAAFIAAAEIgBA4IgCAnQgBAPgCAJQgCAIgDAEQgDAFgEADQgFACgFABIgMABIgPAAIgDgNQgCgHgDgFIANABIAJAAIAEgBIAEgDQACgCACgMIACggIACg5IgUAAQgBAegFAYQgFAZgKATQgLAUgSAPIgGgJgAgfBDIATgBIASgCQANgSAFgXQAFgXABgeIgUAAIAAgRIgpAAIAAAJIAmAAIAABDIgmAAIAAAIIAnAAIAAATIgnAAgAgfAMIARAAIAAgJIgRAAgAhIAMIARAAIAAgJIgRAAgAgfgMIARAAIAAgKIgRAAgAhIgMIARAAIAAgKIgRAAg");
	this.shape_2.setTransform(34.875,19.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABFBXQgHgIgGgKQgIAKgKAJQgJAIgMAGIgFgIIgHgIIAAADIgXAAIAAgJIgdAAIAAANIgWAAIAAgnQgCAMgEAKQgEALgFAJIgGgGIgHgFIgHgEQAJgQAEgTQAEgTABgUIABgiIAAg8IAcgDIAagFQANgCAJgEIATATQgPAFgSADQgTAEgTABIAAALIBBAAIAAAxQAHgMAFgPQAEgOAEgRQADgRABgRIAaADIgCASIgDASIA3AAIAAAZIgLAAQgDAWgFAUQgGAVgIARQAHALAIAJQAJAKAKAGIgGAHIgHAIIgGAIQgJgGgIgJgAg+AHIAAAHIBDAAIAAA/QALgGAJgJQAJgJAHgKIgHgUIgGgWIgFAIIgEAHIgIgIIgKgIIg+AAIgBAHgAgvA7IAdAAIAAgYIgdAAgAAqgkIAAACIAGAZQADALAFAMIAIgYIAFgbIgaAAIgBABgAg9gbIAAAGIArAAIAAgQIgrAAg");
	this.shape_3.setTransform(13.025,19.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt11, new cjs.Rectangle(0,0,92.2,36.6), null);


(lib.QR_LINE = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.LINE();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.QR_LINE, new cjs.Rectangle(0,0,148,148), null);


(lib.QR_IG = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IG();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.QR_IG, new cjs.Rectangle(0,0,148,148), null);


(lib.QR_FB = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FB();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.QR_FB, new cjs.Rectangle(0,0,148,148), null);


(lib.QR_APP = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.APP();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.QR_APP, new cjs.Rectangle(0,0,148,148), null);


(lib.LINEBTN = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#339900").s().p("AuXIuIAAxbIcvAAIAARbg");
	this.shape.setTransform(461.025,55.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339900").s().p("A3gXkMAAAgvHMAvBAAAMAAAAvHg");
	this.shape_1.setTransform(176.45,-47.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,-198,527,309.6);


(lib.IGBTN = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF6600").s().p("Ap/EOIAAobIT/AAIAAIbg");
	this.shape.setTransform(339,-22.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({scaleX:2.3594,scaleY:5.5563,x:70.1281,y:-93.8165},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.8,-243.8,483.8,300);


(lib.FBBTN = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0000FF").s().p("AqTGLIAAsVIUnAAIAAMVg");
	this.shape.setTransform(326,-86.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({scaleX:2.2955,scaleY:3.7717,x:75.6736,y:-97.0159},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.8,-246,467.8,298);


(lib.APPBTN = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#660066").s().p("AuIE2IAAprIcRAAIAAJrg");
	this.shape.setTransform(361.5,-30.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({scaleX:1.6568,scaleY:4.8374,x:27.094,y:-6.019},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.8,-156,574.8,300);


// stage content:
(lib.socialgif = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,36,84,132,180];
	// timeline functions:
	this.frame_0 = function() {
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://maac.io/1GyHb", "_blank");
		}
	}
	this.frame_36 = function() {
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.button_2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://bit.ly/3tHXzY6", "_blank");
		}
	}
	this.frame_84 = function() {
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.button_3.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("https://bit.ly/2022electionfb", "_blank");
		}
	}
	this.frame_132 = function() {
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.button_4.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("https://bit.ly/2022electionig", "_blank");
		}
	}
	this.frame_180 = function() {
		/* 按一下前往網頁
		按一下特定元件實體，會在新瀏覽器視窗中載入 URL。
		
		指示:
		1. 以希望的 URL 位址取代 http://www.adobe.com。
		   保留引號 ("")。
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://maac.io/1GyHb", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(36).call(this.frame_36).wait(48).call(this.frame_84).wait(48).call(this.frame_132).wait(48).call(this.frame_180).wait(12));

	// BTN
	this.button_4 = new lib.IGBTN();
	this.button_4.name = "button_4";
	this.button_4.setTransform(80,245);
	this.button_4._off = true;
	new cjs.ButtonHelper(this.button_4, 0, 1, 2, false, new lib.IGBTN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_4).wait(132).to({_off:false},0).to({_off:true},48).wait(12));

	// 圖層_6___複製_2_複製 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax4ShMAAAglBMAjxAAAMAAAAlBg");
	mask.setTransform(150,188.7);

	// 圖層_7___複製_2
	this.instance = new lib.txt42();
	this.instance.setTransform(150,277.1,1,1,0,0,0,101.1,18.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(146).to({_off:false},0).to({y:267.1},3).wait(31).to({x:-88},11,cjs.Ease.cubicInOut).wait(1));

	// txt___複製_2_複製
	this.instance_1 = new lib.txt41();
	this.instance_1.setTransform(150,249.1,1,1,0,0,0,68.1,18.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(143).to({_off:false},0).to({y:239.1},3).wait(34).to({x:-88},11,cjs.Ease.cubicInOut).wait(1));

	// 圖層_9
	this.instance_2 = new lib.QR_IG();
	this.instance_2.setTransform(387,145,1,1,0,0,0,74,74);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(132).to({_off:false},0).to({x:150},11,cjs.Ease.cubicInOut).wait(37).to({x:-88},11,cjs.Ease.cubicInOut).wait(1));

	// BTN
	this.button_3 = new lib.FBBTN();
	this.button_3.name = "button_3";
	this.button_3.setTransform(75,247.5);
	this.button_3._off = true;
	new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.FBBTN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(84).to({_off:false},0).to({_off:true},48).wait(60));

	// 圖層_6___複製_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ax4ShMAAAglBMAjxAAAMAAAAlBg");
	mask_1.setTransform(150,188.7);

	// 圖層_7_複製
	this.instance_3 = new lib.txt32();
	this.instance_3.setTransform(150,277.1,1,1,0,0,0,79.1,18.2);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(98).to({_off:false},0).to({y:267.1},3).wait(31).to({x:-70},11,cjs.Ease.cubicInOut).to({_off:true},1).wait(48));

	// txt___複製_2
	this.instance_4 = new lib.txt31();
	this.instance_4.setTransform(150,249.1,1,1,0,0,0,46.1,18.2);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95).to({_off:false},0).to({y:239.1},3).wait(34).to({x:-70},11,cjs.Ease.cubicInOut).to({_off:true},1).wait(48));

	// QR_FB
	this.instance_5 = new lib.QR_FB();
	this.instance_5.setTransform(370,145,1,1,0,0,0,74,74);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(84).to({_off:false},0).to({x:150},11,cjs.Ease.cubicInOut).wait(37).to({x:-70},11,cjs.Ease.cubicInOut).to({_off:true},1).wait(48));

	// BTN
	this.button_2 = new lib.APPBTN();
	this.button_2.name = "button_2";
	this.button_2.setTransform(124.5,155);
	this.button_2._off = true;
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.APPBTN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(36).to({_off:false},0).to({_off:true},48).wait(108));

	// 圖層_6_複製 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Ax4ShMAAAglBMAjxAAAMAAAAlBg");
	mask_2.setTransform(150,188.7);

	// 圖層_7
	this.instance_6 = new lib.txt22();
	this.instance_6.setTransform(150,277.1,1,1,0,0,0,79.1,18.2);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(51).to({_off:false},0).to({y:267.1},3).wait(30).to({x:-70},11,cjs.Ease.cubicInOut).to({_off:true},1).wait(96));

	// txt_複製
	this.instance_7 = new lib.txt21();
	this.instance_7.setTransform(150,249.1,1,1,0,0,0,46.1,18.2);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(48).to({_off:false},0).to({y:239.1},3).wait(33).to({x:-70},11,cjs.Ease.cubicInOut).to({_off:true},1).wait(96));

	// QR_APP
	this.instance_8 = new lib.QR_APP();
	this.instance_8.setTransform(370,145,1,1,0,0,0,74,74);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(36).to({_off:false},0).to({x:150},12,cjs.Ease.cubicInOut).wait(36).to({x:-70},11,cjs.Ease.cubicInOut).to({_off:true},1).wait(96));

	// BTN
	this.button_1 = new lib.LINEBTN();
	this.button_1.name = "button_1";
	this.button_1.setTransform(-26,197.25);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.LINEBTN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).to({_off:true},36).wait(144).to({_off:false},0).wait(12));

	// 圖層_6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ax4ShMAAAglBMAjxAAAMAAAAlBg");
	mask_3.setTransform(150,188.7);

	// 圖層_5
	this.instance_9 = new lib.txt12();
	this.instance_9.setTransform(150,277.1,1,1,0,0,0,90.1,18.2);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).to({y:267.1},3).wait(30).to({x:-77},12,cjs.Ease.cubicInOut).wait(144));

	// txt
	this.instance_10 = new lib.txt11();
	this.instance_10.setTransform(150,249.1,1,1,0,0,0,46.1,18.2);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:239.1},3).wait(33).to({x:-77},12,cjs.Ease.cubicInOut).wait(144));

	// QR_LINE
	this.instance_11 = new lib.QR_LINE();
	this.instance_11.setTransform(150,145,1,1,0,0,0,74,74);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(36).to({x:-77},12,cjs.Ease.cubicInOut).wait(132).to({x:387},0).to({x:150},11,cjs.Ease.cubicInOut).wait(1));

	// bg
	this.instance_12 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(192));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149.2,149,427.3,159.89999999999998);
// library properties:
lib.properties = {
	id: 'BFD53A8E9FCEF948979ED04C72EDEC97',
	width: 300,
	height: 300,
	fps: 18,
	color: "#FFD17B",
	opacity: 0.00,
	manifest: [
		{src:"images/APP.jpg?1649930197219", id:"APP"},
		{src:"images/bg.jpg?1649930197219", id:"bg"},
		{src:"images/FB.jpg?1649930197219", id:"FB"},
		{src:"images/IG.jpg?1649930197219", id:"IG"},
		{src:"images/LINE.jpg?1649930197219", id:"LINE"}
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
an.compositions['BFD53A8E9FCEF948979ED04C72EDEC97'] = {
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