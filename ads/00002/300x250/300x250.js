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



(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,38);


(lib.curve = function() {
	this.initialize(img.curve);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,323,333);


(lib.loan = function() {
	this.initialize(img.loan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,325,38);


(lib.logo1 = function() {
	this.initialize(img.logo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,78);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,322,134);


(lib.tcs = function() {
	this.initialize(img.tcs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,128);// helper functions:

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


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg3();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg3();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.tcs_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tcs();
	this.instance.setTransform(0,0,0.4965,0.4965);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tcs_1, new cjs.Rectangle(0,0,70,63.6), null);


(lib.logo2_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.logo2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo2_mc, new cjs.Rectangle(0,0,161,67), null);


(lib.logo1_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.logo1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo1_mc, new cjs.Rectangle(0,0,128,39), null);


(lib.loans_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.loan();
	this.instance.setTransform(0,0,0.4985,0.4987);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.loans_mc, new cjs.Rectangle(0,0,162,19), null);


(lib.curve_innter_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.curve();
	this.instance.setTransform(0,0,0.4985,0.4985);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.curve_innter_mc, new cjs.Rectangle(0,0,161,166), null);


(lib.cta_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cta();
	this.instance.setTransform(0,0,0.4982,0.4987);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(0,0,135.5,19), null);


(lib.copy3_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgJBlQgFgCgDgEQgEgEgCgEQgCgEABgGQgBgGACgEQACgFAEgEQADgDAFgCQAEgCAFAAQAGAAAEACQAFACAEADQADAEACAFQABAEAAAGQAAAGgBAEQgCAEgDAEQgEAEgFACQgEABgGAAQgFAAgEgBgAgUAkIAAgNQAAgIADgGQABgGAGgEIANgNIALgKIAIgKQACgEAAgFQABgJgGgGQgGgEgJAAQgMAAgGAGQgIAIgBAKIgrgDQADgeAUgPQASgQAcAAQANAAAMAFQALADAJAHQAJAHAEAKQAGALgBANQAAAIgBAGQgCAHgEAHQgEAGgHAHIgQANQgHAFgCAFQgCAFAAAFIAAAIg");
	this.shape.setTransform(64.45,45.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBDQgNgGgLgJQgKgJgGgNQgGgOAAgQQAAgPAGgOQAGgMAKgKQALgKANgFQAOgEAPgBQAPABALAEQAMAFAJAKQAIAKAEAMQAFAOAAAPIAAANIhhAAQADAMAIAIQAJAHALAAQAKgBAHgEQAIgFAFgHIAdAVQgKANgPAIQgPAGgRAAQgPAAgOgEgAgJgmQgGADgDADQgEADgCAFQgCAEgBAGIA3AAQAAgLgHgHQgHgIgMAAQgGAAgFACg");
	this.shape_1.setTransform(47.775,48.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBDQgNgGgLgJQgKgJgGgNQgGgOAAgQQAAgPAGgOQAGgMAKgKQALgKANgFQAOgEAPgBQAMABANAEQANAEAKAJIgbAeQgDgEgGgDQgGgDgGAAQgPgBgJAKQgJAKAAAOQAAAPAJAKQAJAJAPAAQAGAAAGgCIAJgIIAbAdQgKAKgNAFQgNADgMAAQgPAAgOgEg");
	this.shape_2.setTransform(33.05,48.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBmIAAiHIApAAIAACHgAgQg7QgHgHAAgKQAAgKAHgHQAHgIAJAAQAKAAAHAIQAHAHAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_3.setTransform(21.675,45.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYBrIAAhmIgcAAIAAghIAcAAIAAgXQAAgMACgKQACgKAGgIQAFgHAKgEQAKgFARABIANAAIAMACIgCAkIgHgCIgHgCQgKAAgFAFQgFAFAAANIAAAVIAfAAIAAAhIgfAAIAABmg");
	this.shape_4.setTransform(12.625,45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYBrIAAhmIgcAAIAAghIAcAAIAAgXQAAgMACgKQACgKAGgIQAFgHAKgEQAKgFARABIANAAIAMACIgCAkIgHgCIgHgCQgKAAgFAFQgFAFAAANIAAAVIAfAAIAAAhIgfAAIAABmg");
	this.shape_5.setTransform(2.275,45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdBDQgNgGgLgJQgKgJgGgNQgFgOgBgQQABgPAFgOQAGgMAKgKQALgKANgFQAOgEAPgBQAQABAOAEQAOAFAJAKQALAKAFAMQAHAOAAAPQAAAQgHAOQgFANgLAJQgJAJgOAGQgOAEgQAAQgPAAgOgEgAgYgYQgIAKAAAOQAAAPAIAKQAJAJAPAAQAQAAAIgJQAKgKgBgPQABgOgKgKQgIgKgQABQgPgBgJAKg");
	this.shape_6.setTransform(-12.15,48.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXBDQgNgGgLgJQgKgJgGgNQgGgOAAgQQAAgPAGgOQAGgMAKgKQALgKANgFQAOgEAPgBQAPABALAEQAMAFAJAKQAIAKAEAMQAFAOAAAPIAAANIhhAAQADAMAIAIQAJAHALAAQAKgBAHgEQAIgFAFgHIAdAVQgKANgPAIQgPAGgRAAQgPAAgOgEgAgJgmQgGADgDADQgEADgCAFQgCAEgBAGIA3AAQAAgLgHgHQgHgIgMAAQgGAAgFACg");
	this.shape_7.setTransform(-37.975,48.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABBBGIAAhPQAAgJgEgHQgEgHgKAAQgIAAgFADQgFACgDAEQgCAEgCAGIgBAMIAABHIgpAAIAAhHIAAgJIgCgKQgCgFgEgDQgDgEgIAAQgIAAgFADQgFADgDAFQgCAFgBAGIgBAMIAABEIgqAAIAAiHIAoAAIAAASIABAAIAGgIIAIgHIAMgFQAGgCAIAAQAOAAALAGQAKAGAGANQAHgNAKgGQALgGAPAAQAOAAAJAFQAJAFAGAIQAFAHADALQACALAAAMIAABQg");
	this.shape_8.setTransform(-58.675,48.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdBDQgNgGgLgJQgKgJgGgNQgFgOAAgQQAAgPAFgOQAGgMAKgKQALgKANgFQAOgEAPgBQAQABAOAEQANAFAKAKQALAKAFAMQAGAOABAPQgBAQgGAOQgFANgLAJQgKAJgNAGQgOAEgQAAQgPAAgOgEgAgYgYQgJAKABAOQgBAPAJAKQAJAJAPAAQAQAAAIgJQAKgKgBgPQABgOgKgKQgIgKgQABQgPgBgJAKg");
	this.shape_9.setTransform(-79.85,48.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXBqIAAhDIAAgMQgBgGgCgGQgCgFgEgDQgEgEgJAAQgHAAgEADQgGADgCAFQgDAFgBAGIgBANIAABEIgpAAIAAjTIApAAIAABeIABAAIAFgIIAIgHQAFgDAFgCQAGgCAIAAQAQAAAKAFQAKAFAFAJQAGAJACAKQABAMAAAOIAABLg");
	this.shape_10.setTransform(-96.9,45.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiBFQgJgDgHgFQgGgFgEgJQgFgHAAgLQABgLAEgJQAEgHAIgFQAHgFAKgDIATgFIAUgCIASAAQABgLgIgHQgJgGgKAAQgKAAgIAFQgJAEgGAHIgXgWQAMgLAQgGQAQgFAPgBQATABALAEQANAFAGAIQAIAKACANQAEAMAAASIAABEIgoAAIAAgRIAAAAQgHALgMAFQgKAEgNAAQgJAAgJgCgAAFAJIgNACQgHACgFAEQgEAEAAAHQAAAHAGAEQAHAEAHAAQAFAAAGgCQAFgCAFgDQAEgCADgGQACgEAAgHIAAgJIgKAAg");
	this.shape_11.setTransform(30.95,17.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdBDQgNgGgLgJQgKgJgGgOQgFgNgBgQQABgPAFgNQAGgNAKgKQALgKANgEQAOgGAPAAQAQAAAOAGQAOAEAJAKQALAKAFANQAHANAAAPQAAAQgHANQgFAOgLAJQgJAJgOAGQgOAEgQAAQgPAAgOgEgAgYgYQgIAKAAAOQAAAQAIAJQAJAKAPgBQAQABAIgKQAKgJgBgQQABgOgKgKQgIgKgQAAQgPAAgJAKg");
	this.shape_12.setTransform(5.85,17.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEBXQgIgCgHgEQgGgGgEgHQgEgIAAgLIAAhAIgbAAIAAgiIAbAAIAAgoIApAAIAAAoIAlAAIAAAiIglAAIAAAtIAAAJQABAFACAEQACADAEABQAEADAHAAIAJgBQAFgBADgDIAAAjQgHADgHABIgQABQgKAAgJgDg");
	this.shape_13.setTransform(-9.1,15.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAXBGIAAhDIAAgLQgBgGgBgGQgCgFgFgDQgFgEgHAAQgIAAgFADQgFADgDAFQgCAFgBAGIAAAMIAABEIgrAAIAAiHIApAAIAAASIABAAIAFgIIAIgHIALgFQAGgCAIAAQAQAAAKAFQAKAFAFAJQAGAJABALQADAMAAAOIAABKg");
	this.shape_14.setTransform(-23.05,17.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUBmIAAiHIApAAIAACHgAgQg7QgHgHAAgKQAAgKAHgHQAHgIAJAAQAKAAAHAIQAHAHAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_15.setTransform(-35.225,14.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAYBGIAAhDIgBgLQAAgGgDgGQgBgFgFgDQgEgEgJAAQgGAAgFADQgFADgEAFQgCAFgBAGIAAAMIAABEIgqAAIAAiHIAnAAIAAASIABAAIAGgIIAIgHIALgFQAGgCAIAAQAQAAAKAFQAJAFAGAJQAFAJACALQACAMAAAOIAABKg");
	this.shape_16.setTransform(-56.1,17.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgvBGIAAiHIAqAAIAAAVIABAAQAFgMAKgGQAJgHAOAAIAHABIAHABIAAAmIgJgCIgJgBQgMAAgHAEQgHADgEAGQgDAGgBAIIgBASIAAA5g");
	this.shape_17.setTransform(-70.275,17.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgoBBQgKgFgGgJQgFgJgCgLQgBgMgBgOIAAhKIArAAIAABDIAAALQAAAGACAGQADAFAEADQAEAEAIAAQAHAAAGgDQAEgDADgFQADgFAAgGIABgMIAAhEIArAAIAACHIgpAAIAAgSIgBAAIgFAIIgIAHIgLAFQgHACgHAAQgQAAgKgFg");
	this.shape_18.setTransform(-85.05,17.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAEBXQgIgCgGgEQgIgGgDgHQgEgIAAgLIAAhAIgbAAIAAgiIAbAAIAAgoIApAAIAAAoIAlAAIAAAiIglAAIAAAtIABAJQAAAFACAEQACADAEABQAEADAHAAIAJgBQAFgBADgDIAAAjQgHADgIABIgOABQgLAAgJgDg");
	this.shape_19.setTransform(-99.5,15.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABBBGIAAhPQAAgJgEgHQgEgHgKAAQgIAAgFADQgFACgDAEQgCAEgCAGIgBAMIAABHIgpAAIAAhHIAAgJIgCgKQgCgFgEgDQgDgEgIAAQgIAAgFADQgFADgDAFQgCAFgBAGIgBAMIAABEIgqAAIAAiHIAoAAIAAASIABAAIAGgIIAIgHIAMgFQAGgCAIAAQAOAAALAGQAKAGAGANQAHgNAKgGQALgGAPAAQAOAAAJAFQAJAFAGAIQAFAHADALQACALAAAMIAABQg");
	this.shape_20.setTransform(25.625,-13.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhJBgIAGgiQAJAEALAAQAGAAAFgBQAFgCACgDIAFgHIAEgKIADgIIg7iIIAtAAIAiBaIABAAIAehaIArAAIg+CdIgIAUQgEAIgFAGQgGAGgJADQgJADgPAAQgRAAgPgGg");
	this.shape_21.setTransform(5.2,-10.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoBjQgRgEgPgLIAXgjQAKAIALAEQAKAFANAAQATAAAJgJQAJgJAAgPIAAgNIgBAAQgHAJgLAEQgKAFgJAAQgPgBgNgFQgMgEgJgKQgIgKgFgMQgFgMAAgPQAAgOAEgNQAFgMAIgLQAIgJALgGQAMgHAOAAQAJAAAHACIANAGIAKAHIAHAHIAAAAIAAgSIAnAAIAAB7QAAAngUAUQgTAVgnAAQgSgBgSgEgAgLg/QgGADgEAEQgFAGgCAFQgDAHAAAGQAAAHADAGQACAGAFAEQAEAFAGADQAGACAHAAQAHAAAGgCQAGgDAFgFQAEgEADgGQACgGAAgHQAAgGgCgHQgDgFgEgGQgFgEgGgDQgGgDgHAAQgHAAgGADg");
	this.shape_22.setTransform(-12.325,-10.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXBCQgNgEgLgKQgKgJgGgOQgGgNAAgQQAAgPAGgNQAGgOAKgJQALgKANgEQAOgGAPAAQAPAAALAGQAMAEAJAKQAIAJAEAOQAFANAAAPIAAANIhhAAQADAMAIAIQAJAGALAAQAKABAHgFQAIgEAFgIIAdAWQgKANgPAGQgPAIgRAAQgPAAgOgGgAgJgmQgGADgDADQgEADgCAFQgCAFgBAEIA3AAQAAgKgHgIQgHgHgMAAQgGAAgFACg");
	this.shape_23.setTransform(-37.975,-13.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ABBBGIAAhPQAAgJgEgHQgEgHgKAAQgIAAgFADQgFACgDAEQgCAEgCAGIgBAMIAABHIgpAAIAAhHIAAgJIgCgKQgCgFgEgDQgDgEgIAAQgIAAgFADQgFADgDAFQgCAFgBAGIgBAMIAABEIgqAAIAAiHIAoAAIAAASIABAAIAGgIIAIgHIAMgFQAGgCAIAAQAOAAALAGQAKAGAGANQAHgNAKgGQALgGAPAAQAOAAAJAFQAJAFAGAIQAFAHADALQACALAAAMIAABQg");
	this.shape_24.setTransform(-58.675,-13.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgdBCQgNgEgLgKQgKgJgGgOQgFgNAAgQQAAgPAFgNQAGgOAKgJQALgKANgEQAOgGAPAAQAQAAAOAGQANAEAKAKQALAJAFAOQAGANABAPQgBAQgGANQgFAOgLAJQgKAKgNAEQgOAGgQAAQgPAAgOgGgAgYgYQgJAJABAPQgBAQAJAJQAJAKAPAAQAQAAAIgKQAKgJgBgQQABgPgKgJQgIgKgQAAQgPAAgJAKg");
	this.shape_25.setTransform(-79.85,-13.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAXBqIAAhDIAAgMQgBgGgCgGQgCgFgEgDQgEgEgJAAQgHAAgEADQgGADgCAFQgDAFgBAGIgBANIAABEIgpAAIAAjTIApAAIAABeIABAAIAFgIIAIgHQAFgDAFgCQAGgCAIAAQAQAAAKAFQAKAFAFAJQAGAJACAKQABAMAAAOIAABLg");
	this.shape_26.setTransform(-96.9,-17.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgvBGIAAiHIAqAAIAAAVIABAAQAFgMAKgGQAJgHAOAAIAHABIAHABIAAAmIgJgCIgJgBQgMAAgHAEQgHADgEAGQgDAGgBAIIgBASIAAA5g");
	this.shape_27.setTransform(7.825,-44.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgoBBQgKgFgGgJQgFgJgCgLQgBgMgBgOIAAhKIArAAIAABDIAAALQAAAGACAGQADAFAEADQAEAEAIAAQAHAAAGgDQAFgDACgFQADgFABgGIABgMIAAhEIAqAAIAACHIgpAAIAAgSIgBAAIgFAIIgJAHIgKAFQgHACgHAAQgRAAgJgFg");
	this.shape_28.setTransform(-6.95,-44.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgcBCQgOgEgLgKQgKgKgGgNQgGgNAAgQQAAgPAGgOQAGgNAKgJQALgJAOgGQANgEAPAAQAPAAAOAEQAOAGALAJQAKAJAGANQAFAOAAAPQAAAQgFANQgGANgKAKQgLAKgOAEQgOAFgPABQgPgBgNgFgAgYgYQgJAJAAAPQAAAPAJAKQAJAKAPAAQAQAAAJgKQAIgKABgPQgBgPgIgJQgJgJgQAAQgPAAgJAJg");
	this.shape_29.setTransform(-24,-44.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhJBgIAGgiQAKAEAKAAQAGAAAFgBQAFgCADgDIAEgHIAFgKIACgIIg7iIIAtAAIAiBaIABAAIAehaIArAAIg+CdIgIAUQgEAIgFAGQgGAGgJADQgJADgQAAQgPAAgQgGg");
	this.shape_30.setTransform(-40.8,-41.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgiBmQgMgFgJgKQgIgIgFgOQgFgNAAgPQAAgOAEgNQAFgMAIgLQAIgKALgGQAMgFAOAAQAMAAAMADQALAFAHAKIABAAIAAhaIAqAAIAADSIgnAAIAAgSIAAAAIgHAHIgJAIIgNAEQgGADgGAAQgPAAgNgGgAgWALQgJAJAAAQQAAAPAJAKQAJAKAPAAQAQAAAIgKQAJgKAAgPQAAgQgJgJQgIgJgQAAQgPAAgJAJg");
	this.shape_31.setTransform(-67.075,-48.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgUBmIAAiHIApAAIAACHgAgQg7QgHgHAAgKQAAgKAHgHQAHgIAJAAQAKAAAHAIQAHAHAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_32.setTransform(-79.575,-48.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhbBjIAAjFIBCAAQAYAAAUAFQAWAGAQAMQAQALAJATQAKATgBAaQAAAYgJATQgIATgQALQgQANgTAHQgVAGgVAAgAgvA7IAXAAQAPAAAMgEQANgCAKgIQAJgGAGgNQAFgLAAgQQAAgPgFgKQgGgLgJgHQgJgHgMgEQgMgDgOAAIgaAAg");
	this.shape_33.setTransform(-93.8,-47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy3_mc, new cjs.Rectangle(-106.9,-68,181.5,136), null);


(lib.copy2_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgJBlQgFgCgEgEQgDgEgCgEQgCgEAAgGQAAgGACgEQACgFADgEQAEgDAFgCQAEgCAFAAQAGAAAEACQAFACADADQAEAEACAFQACAEgBAGQABAGgCAEQgCAEgEAEQgDAEgFACQgEABgGAAQgFAAgEgBgAgUAkIAAgNQAAgIACgGQACgGAGgEIAOgNIALgKIAHgKQACgEABgFQgBgJgFgGQgGgEgIAAQgNAAgGAGQgIAIAAAKIgrgDQADgeASgPQAUgQAcAAQANAAALAFQALADAJAHQAJAHAEAKQAFALABANQAAAIgCAGQgBAHgFAHQgEAGgGAHIgRANQgGAFgDAFQgCAFAAAFIAAAIg");
	this.shape.setTransform(10.6,45.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBqIgthFIgBAAIAABFIgqAAIAAjTIAqAAIAACAIAug0IAzAAIg2A8IA4BLg");
	this.shape_1.setTransform(-5.025,45.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvBGIAAiHIAqAAIAAAVIABAAQAFgMAKgGQAJgHAOAAIAHABIAHABIAAAmIgJgCIgJgBQgMAAgHAEQgHADgEAGQgDAGgBAIIgBASIAAA5g");
	this.shape_2.setTransform(-19.175,48.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdBDQgOgGgKgJQgKgJgGgNQgGgOAAgQQAAgPAGgOQAGgMAKgKQAKgKAOgFQAOgEAPgBQAPABAOAEQAOAFALAKQAKAKAFAMQAHAOgBAPQABAQgHAOQgFANgKAJQgLAJgOAGQgOAEgPAAQgPAAgOgEgAgYgYQgIAKgBAOQABAPAIAKQAJAJAPAAQAQAAAIgJQAJgKAAgPQAAgOgJgKQgIgKgQABQgPgBgJAKg");
	this.shape_3.setTransform(-34.45,48.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdBEIgdhZIAAAAIgYBZIgrAAIgyiHIAtAAIAcBUIAAAAIAXhUIAtAAIAZBUIABAAIAZhUIArAAIgxCHg");
	this.shape_4.setTransform(-55.15,48.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcBDQgPgGgKgJQgKgJgGgNQgGgOABgQQgBgPAGgOQAGgMAKgKQAKgKAPgFQANgEAPgBQAPABAOAEQAOAFAKAKQALAKAGAMQAFAOAAAPQAAAQgFAOQgGANgLAJQgKAJgOAGQgOAEgPAAQgPAAgNgEgAgYgYQgJAKAAAOQAAAPAJAKQAJAJAPAAQAQAAAJgJQAIgKABgPQgBgOgIgKQgJgKgQABQgPgBgJAKg");
	this.shape_5.setTransform(-84.55,48.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAEBYQgIgDgGgEQgIgGgDgHQgEgIAAgLIAAhAIgbAAIAAgiIAbAAIAAgoIApAAIAAAoIAlAAIAAAiIglAAIAAAsIABAKQAAAGACACQACAEAEACQAEACAHAAIAJgBQAFgBADgDIAAAjQgHADgIABIgOABQgLAAgJgCg");
	this.shape_6.setTransform(-99.5,47.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASBqIgthFIgBAAIAABFIgqAAIAAjTIAqAAIAACAIAug0IAzAAIg2A8IA4BLg");
	this.shape_7.setTransform(16.825,13.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBDQgNgGgLgJQgKgJgGgOQgGgNAAgQQAAgPAGgNQAGgNAKgKQALgKANgEQAOgGAPAAQAMAAANAFQANADAKAKIgbAeQgDgEgGgDQgGgEgGAAQgPAAgJAKQgJAKAAAOQAAAQAJAJQAJAKAPgBQAHABAFgDIAJgIIAbAdQgKAKgNAFQgNADgMAAQgPAAgOgEg");
	this.shape_8.setTransform(1.55,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiBFQgJgDgHgFQgGgFgEgJQgFgHAAgLQAAgLAFgJQAFgHAGgFQAIgFAJgDIAUgFIAUgCIATAAQAAgLgIgHQgIgGgLAAQgJAAgJAFQgJAEgGAHIgXgWQAMgLAQgGQAPgFAQgBQASABAMAEQANAFAGAIQAIAKADANQADAMAAASIAABEIgnAAIAAgRIgBAAQgHALgMAFQgKAEgNAAQgJAAgJgCgAAEAJIgMACQgHACgFAEQgEAEAAAHQAAAHAHAEQAGAEAHAAQAFAAAGgCQAFgCAFgDQAEgCADgGQADgEAAgHIAAgJIgLAAg");
	this.shape_9.setTransform(-13.85,17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFBqIgMgGIgKgGIgGgIIgBAAIAAASIgnAAIAAjTIAqAAIAABaIABAAQAHgJALgEQAMgFAMAAQAPAAALAHQALAFAIALQAJAKAEAMQAEANAAAOQAAAPgFANQgFANgIAKQgJAJgNAFQgLAFgQAAQgHAAgFgBgAgZALQgJAKAAAPQAAAQAJAJQAIAKAQgBQAQABAIgKQAJgJAAgQQAAgPgJgKQgIgKgQAAQgQAAgIAKg");
	this.shape_10.setTransform(-30.05,14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAdBEIgdhZIAAAAIgYBZIgrAAIgyiHIAtAAIAcBUIAAAAIAXhUIAtAAIAZBUIABAAIAZhUIArAAIgxCHg");
	this.shape_11.setTransform(-60.2,17.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXBDQgNgGgLgJQgKgJgGgOQgGgNAAgQQAAgPAGgNQAGgNAKgKQALgKANgEQAOgGAPAAQAPAAALAGQAMAEAJAKQAIAKAEANQAFANAAAPIAAANIhhAAQADAMAIAIQAJAGALABQAKAAAHgFQAIgFAFgHIAdAVQgKAOgPAGQgPAIgRgBQgPAAgOgEgAgJgmQgGADgDADQgEADgCAFQgCAEgBAFIA3AAQAAgKgHgIQgHgHgMAAQgGAAgFACg");
	this.shape_12.setTransform(-80.375,17.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXBGIAAhDIAAgLQgBgGgCgGQgCgFgEgDQgEgEgJAAQgHAAgEADQgGADgCAFQgDAFgBAGIgBAMIAABEIgpAAIAAiHIAnAAIAAASIABAAIAGgIIAJgHIAKgFQAGgCAIAAQAQAAAKAFQAKAFAFAJQAGAJACALQABAMAAAOIAABKg");
	this.shape_13.setTransform(-96.9,17.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXBCQgNgEgLgKQgKgJgGgOQgGgNAAgQQAAgPAGgNQAGgOAKgJQALgKANgEQAOgGAPAAQAPAAALAGQAMAEAJAKQAIAJAEAOQAFANAAAPIAAANIhhAAQADAMAIAIQAJAGALAAQAKABAHgFQAIgEAFgIIAdAWQgKANgPAGQgPAIgRAAQgPAAgOgGgAgJgmQgGADgDADQgEADgCAFQgCAFgBAEIA3AAQAAgKgHgIQgHgHgMAAQgGAAgFACg");
	this.shape_14.setTransform(27.025,-13.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYBqIAAhDIgBgMQAAgGgDgGQgBgFgFgDQgEgEgJAAQgGAAgFADQgFADgDAFQgDAFgBAGIAAANIAABEIgqAAIAAjTIAqAAIAABeIAAAAIAEgIIAJgHQAEgDAGgCQAHgCAHAAQAQAAAKAFQAJAFAGAJQAFAJACAKQACAMAAAOIAABLg");
	this.shape_15.setTransform(10.5,-17.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAEBXQgIgBgHgGQgGgEgEgIQgEgIAAgLIAAhAIgbAAIAAghIAbAAIAAgpIApAAIAAApIAlAAIAAAhIglAAIAAAtIAAAKQABAEACAEQACADAEABQAEACAHAAIAJAAQAFgBADgDIAAAkQgHACgHABIgQABQgKAAgJgDg");
	this.shape_16.setTransform(-3.95,-15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUBqIAAjTIApAAIAADTg");
	this.shape_17.setTransform(-22.25,-17.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdBCQgOgEgKgKQgKgJgGgOQgGgNAAgQQAAgPAGgNQAGgOAKgJQAKgKAOgEQAOgGAPAAQAPAAAOAGQAOAEALAKQAKAJAFAOQAHANgBAPQABAQgHANQgFAOgKAJQgLAKgOAEQgOAGgPAAQgPAAgOgGgAgYgYQgIAJgBAPQABAQAIAJQAJAKAPAAQAQAAAIgKQAJgJAAgQQAAgPgJgJQgIgKgQAAQgPAAgJAKg");
	this.shape_18.setTransform(-34.9,-13.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdBCQgOgEgKgKQgKgJgGgOQgGgNAAgQQAAgPAGgNQAGgOAKgJQAKgKAOgEQAOgGAPAAQAPAAAOAGQAOAEALAKQAKAJAFAOQAHANgBAPQABAQgHANQgFAOgKAJQgLAKgOAEQgOAGgPAAQgPAAgOgGgAgYgYQgIAJgBAPQABAQAIAJQAJAKAPAAQAQAAAIgKQAJgJAAgQQAAgPgJgJQgIgKgQAAQgPAAgJAKg");
	this.shape_19.setTransform(-52.45,-13.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAYBqIAAhDIgBgMQgBgGgBgGQgDgFgEgDQgEgEgJAAQgHAAgFADQgEADgEAFQgCAFgBAGIAAANIAABEIgrAAIAAjTIArAAIAABeIAAAAIAEgIIAJgHQAEgDAGgCQAGgCAIAAQAQAAAKAFQAKAFAFAJQAFAJACAKQACAMABAOIAABLg");
	this.shape_20.setTransform(-69.5,-17.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPBCQgOgEgKgKQgKgJgGgOQgGgNAAgQQAAgPAGgNQAGgOAKgJQAKgKAOgEQAOgGAPAAQAMAAANAEQANAFAKAJIgcAeQgDgFgFgDQgGgDgGAAQgPAAgJAKQgJAJAAAPQAAAQAJAJQAJAKAPAAQAGAAAGgEIAIgHIAcAdQgKAKgNAEQgNAFgMAAQgPAAgOgGg");
	this.shape_21.setTransform(-84.25,-13.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggBDQgPgEgKgKIAagcQAFAHAIAEQAHADAJAAQAGAAAGgCQAGgCAAgGQAAgEgFgEIgMgEIgRgEQgJgCgIgEQgIgEgFgHQgGgIAAgNQAAgMAFgIQAFgJAIgGQAIgFAKgDQALgDAKAAQANAAAOAEQANAFAKAJIgaAaQgJgMgPABQgFAAgFACQgFADAAAGQAAAEAGADIAMAEIARAEQAJACAIAFQAIAFAFAGQAFAIAAANQAAANgGAIQgFAJgJAFQgJAFgLACQgMACgKABQgOAAgOgFg");
	this.shape_22.setTransform(-98.475,-13.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgcBCQgOgEgLgKQgKgKgGgNQgGgNAAgQQAAgPAGgOQAGgNAKgJQALgJAOgGQANgEAPAAQAPAAAOAEQAOAGALAJQAKAJAGANQAFAOAAAPQAAAQgFANQgGANgKAKQgLAKgOAEQgOAFgPABQgPgBgNgFgAgYgYQgJAJAAAPQAAAPAJAKQAJAKAPAAQAQAAAJgKQAIgKABgPQgBgPgIgJQgJgJgQAAQgPAAgJAJg");
	this.shape_23.setTransform(18.75,-44.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEBYQgIgDgHgFQgGgEgEgIQgEgIAAgLIAAhAIgbAAIAAghIAbAAIAAgpIApAAIAAApIAlAAIAAAhIglAAIAAAsIABALQAAAEACADQACAEAEABQAEACAHAAIAJAAQAFgBADgCIAAAjQgHACgHABIgQABQgKAAgJgCg");
	this.shape_24.setTransform(3.8,-46.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AASBqIgthFIgBAAIAABFIgqAAIAAjTIAqAAIAACAIAug0IAzAAIg2A8IA4BLg");
	this.shape_25.setTransform(-17.875,-48.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPBCQgNgEgLgKQgKgKgGgNQgGgNAAgQQAAgPAGgOQAGgNAKgJQALgJANgGQAOgEAPAAQAMAAANADQANAFAKAKIgcAdQgCgFgGgDQgGgCgGAAQgPAAgJAJQgJAJAAAPQAAAPAJAKQAJAKAPAAQAHgBAFgDIAIgHIAcAdQgKAKgNAEQgNAFgMAAQgPgBgOgFg");
	this.shape_26.setTransform(-33.15,-44.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgiBEQgJgCgHgFQgGgFgFgJQgDgIAAgKQgBgMAFgHQAEgJAIgEQAHgFAJgEIAVgDIATgCIASAAQAAgMgHgGQgJgHgKAAQgJAAgJAEQgIAFgIAIIgVgYQALgLAQgFQAPgGAQABQASgBANAFQALAFAIAJQAHAJACAMQADAOAAARIAABEIgnAAIAAgRIAAAAQgHALgLAEQgLAFgNABQgKAAgIgEgAAFAJIgNACQgHACgEAEQgFAEAAAHQAAAHAGAEQAHAEAHAAQAFAAAGgCQAGgBAEgDQAFgDACgFQACgFAAgGIAAgJIgJAAg");
	this.shape_27.setTransform(-48.55,-44.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGBpIgMgEIgJgIIgHgHIAAAAIAAASIgnAAIAAjSIAqAAIAABaIABAAQAHgKAMgFQALgDAMAAQAOAAAMAFQAMAGAHAKQAJALAEAMQAEANAAAOQAAAPgEANQgGAOgJAIQgIAKgMAFQgNAGgPAAQgHAAgGgDgAgaALQgIAJAAAQQAAAPAIAKQAKAKAQAAQAOAAAKgKQAIgKAAgPQAAgQgIgJQgKgJgOAAQgQAAgKAJg");
	this.shape_28.setTransform(-64.75,-48.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AggBDQgPgEgKgKIAagdQAFAIAIAEQAHADAJAAQAGAAAGgBQAGgDAAgGQAAgEgFgEIgMgEIgRgEQgJgCgIgEQgIgEgFgHQgGgIAAgMQAAgNAFgIQAFgJAIgGQAIgFAKgDQALgCAKAAQANAAAOADQANAFAKAKIgaAZQgJgMgPAAQgFAAgFADQgFACAAAHQAAAFAGACIAMAEIARAEQAJACAIAFQAIAEAFAHQAFAHAAAOQAAAMgGAJQgFAJgJAFQgJAFgLACQgMADgKAAQgOAAgOgFg");
	this.shape_29.setTransform(-89.725,-44.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVBjIAAjFIArAAIAADFg");
	this.shape_30.setTransform(-100.8,-47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2_mc, new cjs.Rectangle(-106.9,-68,144.7,136), null);


(lib.copy1_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgJBlQgFgCgDgEQgEgEgCgEQgCgEABgGQgBgGACgEQACgFAEgEQADgDAFgCQAEgCAFAAQAGAAAEACQAFACAEADQADAEACAFQABAEAAAGQAAAGgBAEQgCAEgDAEQgEAEgFACQgEABgGAAQgFAAgEgBgAgUAkIAAgNQAAgIADgGQABgGAGgEIANgNIALgKIAIgKQACgEAAgFQABgJgGgGQgGgEgJAAQgMAAgGAGQgIAIAAAKIgsgDQADgeAUgPQASgQAcAAQANAAAMAFQALADAJAHQAJAHAEAKQAGALAAANQgBAIgBAGQgCAHgEAHQgEAGgHAHIgQANQgHAFgCAFQgCAFAAAFIAAAIg");
	this.shape.setTransform(96.85,45.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBGIAAiHIAqAAIAAAVIABAAQAFgMAKgGQAJgHAOAAIAHABIAHABIAAAmIgJgCIgJgBQgMAAgHAEQgHADgEAGQgDAGgBAIIgBASIAAA5g");
	this.shape_1.setTransform(83.125,48.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBEQgJgCgHgFQgHgGgEgHQgDgJAAgJQgBgMAFgJQAFgHAGgFQAIgFAJgDIAUgEIAUgDIATAAQAAgLgIgHQgIgGgLAAQgJAAgJAEQgIAFgIAHIgVgWQALgMAQgFQAPgGAQAAQATAAAMAFQALAFAIAIQAHAKADANQACAMAAASIAABEIgmAAIAAgRIgBAAQgHALgLAFQgLAEgNAAQgJAAgJgDgAAEAJIgMACQgHACgEAEQgFAEAAAHQAAAIAHADQAGAEAHAAQAFAAAGgCQAGgBAEgEQAFgDACgEQACgFABgHIAAgJIgKAAg");
	this.shape_2.setTransform(68.7,48.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBDQgNgGgLgJQgKgJgGgNQgGgOAAgQQAAgPAGgOQAGgMAKgKQALgKANgFQAOgEAPgBQAMABANAEQANAEAKAJIgbAeQgDgEgGgDQgGgDgGAAQgPgBgJAKQgJAKAAAOQAAAPAJAKQAJAJAPAAQAGAAAGgCIAJgIIAbAdQgKAKgNAFQgNADgMAAQgPAAgOgEg");
	this.shape_3.setTransform(54.65,48.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcBEIgchZIAAAAIgZBZIgqAAIgyiHIAtAAIAcBUIAAAAIAYhUIAtAAIAYBUIABAAIAZhUIArAAIgwCHg");
	this.shape_4.setTransform(26.5,48.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXBDQgNgGgLgJQgKgJgGgNQgGgOAAgQQAAgPAGgOQAGgMAKgKQALgKANgFQAOgEAPgBQAPABALAEQAMAFAJAKQAIAKAEAMQAFAOAAAPIAAANIhhAAQADAMAIAIQAJAHALAAQAKgBAHgEQAIgFAFgHIAdAVQgKANgPAIQgPAGgRAAQgPAAgOgEgAgJgmQgGADgDADQgEADgCAFQgCAEgBAGIA3AAQAAgLgHgHQgHgIgMAAQgGAAgFACg");
	this.shape_5.setTransform(6.325,48.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYBGIAAhDIgBgLQAAgGgDgGQgBgFgFgDQgEgEgJAAQgGAAgFADQgFADgEAFQgCAFgBAGIAAAMIAABEIgqAAIAAiHIAnAAIAAASIABAAIAGgIIAIgHIALgFQAGgCAIAAQAQAAAKAFQAJAFAGAJQAFAJACALQACAMAAAOIAABKg");
	this.shape_6.setTransform(-10.2,48.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiBEQgJgCgHgFQgHgGgEgHQgDgJAAgJQgBgMAFgJQAFgHAGgFQAIgFAJgDIAVgEIATgDIATAAQgBgLgHgHQgJgGgKAAQgJAAgJAEQgIAFgIAHIgVgWQALgMAQgFQAQgGAPAAQASAAANAFQALAFAIAIQAHAKADANQACAMAAASIAABEIgmAAIAAgRIgBAAQgHALgLAFQgLAEgNAAQgKAAgIgDgAAEAJIgMACQgHACgEAEQgFAEAAAHQAAAIAHADQAGAEAHAAQAFAAAGgCQAGgBAEgEQAFgDACgEQACgFABgHIAAgJIgKAAg");
	this.shape_7.setTransform(-35.15,48.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcBDQgPgGgKgJQgKgJgGgNQgGgOABgQQgBgPAGgOQAGgMAKgKQAKgKAPgFQANgEAPgBQAPABAOAEQAOAFAKAKQALAKAGAMQAFAOAAAPQAAAQgFAOQgGANgLAJQgKAJgOAGQgOAEgPAAQgPAAgNgEgAgYgYQgJAKAAAOQAAAPAJAKQAJAJAPAAQAQAAAJgJQAIgKABgPQgBgOgIgKQgJgKgQABQgPgBgJAKg");
	this.shape_8.setTransform(-60.25,48.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAEBYQgIgDgGgEQgIgGgDgHQgEgIAAgLIAAhAIgbAAIAAgiIAbAAIAAgoIApAAIAAAoIAlAAIAAAiIglAAIAAAsIABAKQAAAGACACQACAEAEACQAEACAHAAIAJgBQAFgBADgDIAAAjQgHADgIABIgOABQgLAAgJgCg");
	this.shape_9.setTransform(-75.2,47.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAYBGIAAhDIgBgLQgBgGgCgGQgCgFgEgDQgEgEgJAAQgGAAgFADQgGADgCAFQgDAFgBAGIgBAMIAABEIgpAAIAAiHIAnAAIAAASIABAAIAGgIIAJgHIAKgFQAHgCAHAAQAQAAAKAFQAJAFAGAJQAFAJACALQACAMAAAOIAABKg");
	this.shape_10.setTransform(-89.15,48.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUBmIAAiHIApAAIAACHgAgQg7QgHgHAAgKQAAgKAHgHQAHgIAJAAQAKAAAHAIQAHAHAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_11.setTransform(-101.325,45.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAEBXQgIgCgHgEQgGgGgEgHQgEgIAAgLIAAhAIgbAAIAAgiIAbAAIAAgoIApAAIAAAoIAlAAIAAAiIglAAIAAAtIAAAJQABAFACAEQACADAEABQAEADAHAAIAJgBQAFgBADgDIAAAjQgHADgHABIgPABQgLAAgJgDg");
	this.shape_12.setTransform(38.5,15.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUBqIAAjTIApAAIAADTg");
	this.shape_13.setTransform(28.95,13.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXBDQgNgGgLgJQgKgJgGgOQgGgNAAgQQAAgPAGgNQAGgNAKgKQALgKANgEQAOgGAPAAQAPAAALAGQAMAEAJAKQAIAKAEANQAFANAAAPIAAANIhhAAQADAMAIAIQAJAGALABQAKAAAHgFQAIgFAFgHIAdAVQgKAOgPAGQgPAIgRgBQgPAAgOgEgAgJgmQgGADgDADQgEADgCAFQgCAEgBAFIA3AAQAAgKgHgIQgHgHgMAAQgGAAgFACg");
	this.shape_14.setTransform(16.775,17.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFBqIgNgGIgJgGIgGgIIgBAAIAAASIgnAAIAAjTIAqAAIAABaIABAAQAHgJALgEQAMgFAMAAQAOAAAMAHQALAFAJALQAHAKAFAMQAEANAAAOQAAAPgFANQgFANgIAKQgJAJgNAFQgMAFgPAAQgHAAgFgBgAgaALQgIAKAAAPQAAAQAIAJQAKAKAPgBQAPABAKgKQAIgJAAgQQAAgPgIgKQgKgKgPAAQgPAAgKAKg");
	this.shape_15.setTransform(-0.1,14.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoBjQgRgEgPgLIAXgkQAKAJALAFQAKAEANAAQATAAAJgJQAJgKAAgOIAAgNIgBAAQgHAKgLADQgKAFgJAAQgPAAgNgGQgMgEgJgKQgIgJgFgNQgFgMAAgQQAAgNAEgNQAFgNAIgJQAIgLALgFQAMgHAOAAQAJAAAHACIANAGIAKAHIAHAHIAAAAIAAgSIAnAAIAAB7QAAAngUAUQgTAVgngBQgSABgSgFgAgLg+QgGACgEAEQgFAFgCAHQgDAFAAAHQAAAHADAGQACAGAFAFQAEAEAGADQAGABAHABQAHgBAGgBQAGgDAFgEQAEgFADgGQACgGAAgHQAAgHgCgFQgDgHgEgFQgFgEgGgCQgGgEgHAAQgHAAgGAEg");
	this.shape_16.setTransform(-27.825,20.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXBGIAAhDIAAgLQgBgGgCgGQgCgFgEgDQgEgEgJAAQgHAAgEADQgGADgCAFQgDAFgBAGIgBAMIAABEIgpAAIAAiHIAnAAIAAASIABAAIAGgIIAJgHIAKgFQAGgCAIAAQAQAAAKAFQAKAFAFAJQAGAJACALQABAMAAAOIAABKg");
	this.shape_17.setTransform(-44.7,17.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUBmIAAiHIApAAIAACHgAgQg7QgHgHAAgKQAAgKAHgHQAHgIAJAAQAKAAAHAIQAHAHAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_18.setTransform(-56.875,14.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABBBGIAAhPQAAgJgEgHQgEgHgKAAQgIAAgFADQgFACgDAEQgCAEgCAGIgBAMIAABHIgpAAIAAhHIAAgJIgCgKQgCgFgEgDQgDgEgIAAQgIAAgFADQgFADgDAFQgCAFgBAGIgBAMIAABEIgqAAIAAiHIAoAAIAAASIABAAIAGgIIAIgHIAMgFQAGgCAIAAQAOAAALAGQAKAGAGANQAHgNAKgGQALgGAPAAQAOAAAJAFQAJAFAGAIQAFAHADALQACALAAAMIAABQg");
	this.shape_19.setTransform(-73.175,17.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUBmIAAiHIApAAIAACHgAgQg7QgHgHAAgKQAAgKAHgHQAHgIAJAAQAKAAAHAIQAHAHAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_20.setTransform(-89.475,14.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAEBXQgIgCgGgEQgIgGgDgHQgEgIAAgLIAAhAIgbAAIAAgiIAbAAIAAgoIApAAIAAAoIAlAAIAAAiIglAAIAAAtIABAJQAAAFACAEQACADAEABQAEADAHAAIAJgBQAFgBADgDIAAAjQgHADgIABIgOABQgLAAgJgDg");
	this.shape_21.setTransform(-99.5,15.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAcBEIgchaIAAAAIgZBaIgqAAIgyiHIAtAAIAbBVIABAAIAYhVIAsAAIAaBVIAAAAIAahVIAqAAIgwCHg");
	this.shape_22.setTransform(4.3,-13.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXBCQgNgEgLgKQgKgJgGgOQgGgNAAgQQAAgPAGgNQAGgOAKgJQALgKANgEQAOgGAPAAQAPAAALAGQAMAEAJAKQAIAJAEAOQAFANAAAPIAAANIhhAAQADAMAIAIQAJAGALAAQAKABAHgFQAIgEAFgIIAdAWQgKANgPAGQgPAIgRAAQgPAAgOgGgAgJgmQgGADgDADQgEADgCAFQgCAFgBAEIA3AAQAAgKgHgIQgHgHgMAAQgGAAgFACg");
	this.shape_23.setTransform(-15.875,-13.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAXBGIAAhDIAAgLQAAgGgCgGQgCgFgFgDQgFgEgHAAQgHAAgGADQgEADgEAFQgCAFgBAGIAAAMIAABEIgrAAIAAiHIApAAIAAASIABAAIAFgIIAIgHIALgFQAHgCAHAAQAQAAAKAFQAJAFAGAJQAFAJADALQACAMAAAOIAABKg");
	this.shape_24.setTransform(-32.4,-13.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAEBXQgIgBgHgGQgGgEgEgIQgEgIAAgLIAAhAIgbAAIAAghIAbAAIAAgpIApAAIAAApIAlAAIAAAhIglAAIAAAtIABAKQAAAEACAEQACADAEABQAEACAHAAIAJAAQAFgBADgDIAAAkQgHACgIABIgPABQgKAAgJgDg");
	this.shape_25.setTransform(-55.6,-15.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgiBFQgJgDgHgFQgGgFgEgJQgFgHAAgLQAAgLAFgJQAFgIAGgEQAIgFAJgDIAUgFIAUgBIATAAQAAgMgIgGQgIgHgLAAQgJAAgJAFQgJAEgGAHIgXgXQAMgKAQgGQAPgFAQgBQASABAMAEQANAFAGAIQAIAKADAMQADANAAASIAABEIgnAAIAAgRIgBAAQgHALgMAEQgKAGgNAAQgJAAgJgDgAAEAJIgMACQgHACgFAEQgEAEAAAHQAAAIAHADQAGAEAHAAQAFAAAGgCQAFgCAFgDQAEgDADgFQADgFAAgFIAAgJIgLAAg");
	this.shape_26.setTransform(-69.2,-13.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAXBqIAAhDIAAgMQAAgGgCgGQgCgFgFgDQgFgEgHAAQgHAAgGADQgEADgEAFQgCAFgBAGIAAANIAABEIgrAAIAAjTIArAAIAABeIAAAAIAEgIIAJgHQAFgDAFgCQAHgCAHAAQAQAAAKAFQAJAFAGAJQAFAJADAKQACAMAAAOIAABLg");
	this.shape_27.setTransform(-85.05,-17.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAEBXQgIgBgGgGQgIgEgDgIQgEgIAAgLIAAhAIgbAAIAAghIAbAAIAAgpIApAAIAAApIAlAAIAAAhIglAAIAAAtIABAKQAAAEACAEQACADAEABQAEACAHAAIAJAAQAFgBADgDIAAAkQgHACgIABIgOABQgLAAgJgDg");
	this.shape_28.setTransform(-99.5,-15.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAYBGIAAhDIgBgLQgBgGgBgGQgDgFgEgDQgEgEgJAAQgHAAgFADQgEADgEAFQgCAFgBAGIAAAMIAABEIgqAAIAAiHIAnAAIAAASIACAAIAFgIIAIgHIALgFQAGgCAIAAQAQAAAKAFQAKAFAFAJQAFAJACALQACAMABAOIAABKg");
	this.shape_29.setTransform(56.5,-44.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgvBGIAAiHIAqAAIAAAVIABAAQAFgMAKgGQAJgHAOAAIAHABIAHABIAAAmIgJgCIgJgBQgMAAgHAEQgHADgEAGQgDAGgBAIIgBASIAAA5g");
	this.shape_30.setTransform(42.325,-44.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgoBBQgKgFgGgJQgFgJgCgLQgCgMAAgOIAAhKIAqAAIAABDIABALQAAAGACAGQADAFAEADQAEAEAIAAQAIAAAFgDQAEgDADgFQADgFAAgGIABgMIAAhEIArAAIAACHIgpAAIAAgSIgBAAIgFAIIgIAHIgLAFQgHACgHAAQgRAAgJgFg");
	this.shape_31.setTransform(27.55,-44.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAEBYQgIgDgGgFQgIgEgDgIQgEgIAAgLIAAhAIgbAAIAAghIAbAAIAAgpIApAAIAAApIAlAAIAAAhIglAAIAAAsIABALQAAAEACADQACAEAEABQAEACAHAAIAJAAQAFgBADgCIAAAjQgHACgIABIgOABQgLAAgJgCg");
	this.shape_32.setTransform(13.1,-46.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgdBCQgNgEgLgKQgKgKgGgNQgFgNAAgQQAAgPAFgOQAGgNAKgJQALgJANgGQAOgEAPAAQAQAAAOAEQANAGAKAJQALAJAFANQAGAOABAPQgBAQgGANQgFANgLAKQgKAKgNAEQgOAFgQABQgPgBgOgFgAgYgYQgJAJABAPQgBAPAJAKQAJAKAPAAQAQAAAIgKQAKgKgBgPQABgPgKgJQgIgJgQAAQgPAAgJAJg");
	this.shape_33.setTransform(-10.1,-44.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAEBYQgIgDgGgFQgIgEgDgIQgEgIAAgLIAAhAIgbAAIAAghIAbAAIAAgpIApAAIAAApIAlAAIAAAhIglAAIAAAsIAAALQABAEACADQACAEAEABQAEACAHAAIAJAAQAFgBADgCIAAAjQgHACgIABIgOABQgLAAgJgCg");
	this.shape_34.setTransform(-25.05,-46.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXBCQgNgEgLgKQgKgKgGgNQgGgNAAgQQAAgPAGgOQAGgNAKgJQALgJANgGQAOgEAPAAQAPAAALAEQAMAGAJAJQAIAJAEANQAFAOAAAPIAAANIhhAAQADAMAIAHQAJAIALgBQAKAAAHgEQAIgFAFgHIAdAWQgKAMgPAIQgPAGgRABQgPgBgOgFgAgJgmQgGACgDAEQgEADgCAFQgCAFgBAEIA3AAQAAgKgHgIQgHgHgMAAQgGAAgFACg");
	this.shape_35.setTransform(-47.775,-44.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("ABBBGIAAhPQAAgJgEgHQgEgHgKAAQgIAAgFADQgFACgDAEQgCAEgCAGIgBAMIAABHIgpAAIAAhHIAAgJIgCgKQgCgFgEgDQgDgEgIAAQgIAAgFADQgFADgDAFQgCAFgBAGIgBAMIAABEIgqAAIAAiHIAoAAIAAASIABAAIAGgIIAIgHIAMgFQAGgCAIAAQAOAAALAGQAKAGAGANQAHgNAKgGQALgGAPAAQAOAAAJAFQAJAFAGAIQAFAHADALQACALAAAMIAABQg");
	this.shape_36.setTransform(-68.475,-44.975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgUBmIAAiHIApAAIAACHgAgQg7QgHgHAAgKQAAgKAHgHQAHgIAJAAQAKAAAHAIQAHAHAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_37.setTransform(-84.775,-48.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgVBjIAAieIg4AAIAAgnICbAAIAAAnIg4AAIAACeg");
	this.shape_38.setTransform(-96.925,-47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1_mc, new cjs.Rectangle(-106.9,-68,213.9,136), null);


(lib.bg2_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0A1482").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg2_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.bg1_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1E9BFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg1_mc, new cjs.Rectangle(-150,-125,300,250), null);


(lib.curve_mccopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_30 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AxLWvIAA2WIRLAAIAAgxIhFAAIAA2WISRAAMAAAAmlIxMAAIAAG4g");
	var mask_graphics_1 = new cjs.Graphics().p("AolLLIAA2VIRLAAIAAWVg");
	var mask_graphics_9 = new cjs.Graphics().p("AolLLIAA2VIRLAAIAAWVg");
	var mask_graphics_16 = new cjs.Graphics().p("AoMTTIAAwNIgyAAIAA2VIAyAAIAAgDIRLAAMAAAAmlg");
	var mask_graphics_23 = new cjs.Graphics().p("AxLWvIAA2WIRLAAIAAgxIhFAAIAA2WISRAAMAAAAmlIxMAAIAAG4g");
	var mask_graphics_30 = new cjs.Graphics().p("AxLWvIAA2WIRLAAIAAgxIhFAAIAA2WISRAAMAAAAmlIxMAAIAAG4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:78,y:83.525}).wait(1).to({graphics:mask_graphics_1,x:-88.95,y:110.55}).wait(8).to({graphics:mask_graphics_9,x:126.5,y:12.05}).wait(7).to({graphics:mask_graphics_16,x:129,y:61.525}).wait(7).to({graphics:mask_graphics_23,x:78,y:83.525}).wait(7).to({graphics:mask_graphics_30,x:78,y:83.525}).wait(1));

	// Layer_1
	this.instance = new lib.curve_innter_mc();
	this.instance.setTransform(80.5,83,1,1,0,0,0,80.5,83);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:360},29).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,-32.6,222.9,230.7);


(lib.curve_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(2));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AolLLIAA2VIRLAAIAAWVg");
	var mask_graphics_8 = new cjs.Graphics().p("AolLLIAA2VIRLAAIAAWVg");
	var mask_graphics_15 = new cjs.Graphics().p("AoMTTIAAwNIgyAAIAA2VIAyAAIAAgDIRLAAMAAAAmlg");
	var mask_graphics_22 = new cjs.Graphics().p("AxLWvIAA2WIRLAAIAAgxIhFAAIAA2WISRAAMAAAAmlIxMAAIAAG4g");
	var mask_graphics_29 = new cjs.Graphics().p("AxLWvIAA2WIRLAAIAAgxIhFAAIAA2WISRAAMAAAAmlIxMAAIAAG4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-88.95,y:110.55}).wait(8).to({graphics:mask_graphics_8,x:126.5,y:12.05}).wait(7).to({graphics:mask_graphics_15,x:129,y:61.525}).wait(7).to({graphics:mask_graphics_22,x:78,y:83.525}).wait(7).to({graphics:mask_graphics_29,x:78,y:83.525}).wait(2));

	// Layer_1
	this.instance = new lib.curve_innter_mc();
	this.instance.setTransform(80.5,83,1,1,0,0,0,80.5,83);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},29).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,-32.6,222.9,230.7);


(lib.curve_rotate_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_44 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// curve
	this.instance = new lib.curve_mccopy();
	this.instance.setTransform(-39,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// copy3
	this.instance_1 = new lib.copy3_mc();
	this.instance_1.setTransform(-58.4,-44.3,1,1,0,0,0,-34.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({alpha:0},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.7,-123.9,279.7,290.9);


// stage content:
(lib._300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [404];
	// timeline functions:
	this.frame_404 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(404).call(this.frame_404).wait(1));

	// logo2
	this.instance = new lib.logo2_mc();
	this.instance.setTransform(209.5,209.5,1,1,0,0,0,80.5,33.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(340).to({_off:false},0).to({alpha:1},9).wait(56));

	// tcs
	this.instance_1 = new lib.tcs_1();
	this.instance_1.setTransform(41,208.8,1,1,0,0,0,35,31.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(395).to({_off:false},0).to({alpha:1},9).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("A3RzXMAujAAAMAAAAmvMgujAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(405));

	// logo1
	this.instance_2 = new lib.logo1_mc();
	this.instance_2.setTransform(227,213.5,1,1,0,0,0,64,19.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).to({alpha:1},5).wait(100).to({alpha:0},5).wait(191));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(129,105.5,1,1,0,0,0,68,9.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(329).to({_off:false},0).to({x:139,alpha:1},10,cjs.Ease.sineInOut).wait(24).to({regY:9.6,scaleX:1.0552,scaleY:1.0552,y:105.65},6).to({regY:9.5,scaleX:1,scaleY:1,y:105.5},5).wait(10).to({regY:9.6,scaleX:1.0552,scaleY:1.0552,y:105.65},6).to({regY:9.5,scaleX:1,scaleY:1,y:105.5},5).wait(10));

	// loans
	this.instance_4 = new lib.loans_mc();
	this.instance_4.setTransform(142,96.7,1,1,0,0,0,81,18.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(329).to({_off:false},0).to({x:152,alpha:1},10,cjs.Ease.sineInOut).wait(66));

	// curve_rotate
	this.instance_5 = new lib.curve_rotate_mc();
	this.instance_5.setTransform(150,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(274).to({_off:false},0).to({rotation:180},15).wait(15).to({regX:122,regY:104,x:28,y:21},0).to({regX:121.8,regY:103.9,scaleX:0.7876,scaleY:0.7876,x:8,y:10.95},10).wait(91));

	// curve
	this.instance_6 = new lib.curve_mc();
	this.instance_6.setTransform(191.5,146,1,1,0,0,0,80.5,83);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(214).to({_off:false},0).to({_off:true},60).wait(131));

	// copy3
	this.instance_7 = new lib.copy3_mc();
	this.instance_7.setTransform(91.6,80.7,1,1,0,0,0,-34.6,0);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(154).to({_off:false},0).to({rotation:1080,alpha:1},15).to({_off:true},105).wait(131));

	// copy2
	this.instance_8 = new lib.copy2_mc();
	this.instance_8.setTransform(91.6,80.7,1,1,0,0,0,-34.6,0);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(94).to({_off:false},0).to({rotation:1080,alpha:1},15).wait(45).to({rotation:2160,alpha:0},15).wait(236));

	// copy1_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("AlaB+IAAj8IK1AAIAAD8g");
	var mask_graphics_7 = new cjs.Graphics().p("AofB+IAAj8IK1AAIAAD8gAC1B8IAAjzIFrAAIAADzg");
	var mask_graphics_10 = new cjs.Graphics().p("AD5CDIAAjzIJ6AAIAADzgAtyB6IAAj8IK2AAIAAD8gAidB3IAAjzIFqAAIAADzg");
	var mask_graphics_13 = new cjs.Graphics().p("At4EnIAAkQIJ+AAIAAEQgAD/ggIAAj0IJ6AAIAAD0gAtsgpIAAj9IK2AAIAAD9gAiWgsIAAj0IFpAAIAAD0g");
	var mask_graphics_16 = new cjs.Graphics().p("At4EnIAAkQIJ+AAIAAEQgAjOEeIAAj6IJjAAIAAD6gAD/ggIAAj0IJ6AAIAAD0gAtsgpIAAj9IK2AAIAAD9gAiWgsIAAj0IFpAAIAAD0g");
	var mask_graphics_19 = new cjs.Graphics().p("AtxHPIAAkaIOMAAIAAEagAt4CAIAAkPIJ+AAIAAEPgAjOB3IAAj5IJjAAIAAD5gAD/jHIAAj0IJ6AAIAAD0gAtsjRIAAj9IK2AAIAAD9gAiWjTIAAj0IFpAAIAAD0g");
	var mask_graphics_22 = new cjs.Graphics().p("AtxHPIAAkaIOMAAIAAEagABZHFIAAkfIJhAAIAAEfgAt4CAIAAkPIJ+AAIAAEPgAjOB3IAAj5IJjAAIAAD5gAD/jHIAAj0IJ6AAIAAD0gAtsjRIAAj9IK2AAIAAD9gAiWjTIAAj0IFpAAIAAD0g");
	var mask_graphics_25 = new cjs.Graphics().p("AtxJoIAApMIOMAAIAAEaIk7AAIAAEygABZEsIAAkfIJhAAIAAEfgAt4gYIAAkQIJ+AAIAAEQgAjOghIAAj6IJjAAIAAD6gAD/lgIAAj0IJ6AAIAAD0gAtslqIAAj9IK2AAIAAD9gAiWlsIAAj0IFpAAIAAD0g");
	var mask_graphics_28 = new cjs.Graphics().p("AtxJoIAApMIOMAAIAAEaIk7AAIAAEygAj+JWIAAjvIDvAAIAADvgABZEsIAAkfIJhAAIAAEfgAt4gYIAAkQIJ+AAIAAEQgAjOghIAAj6IJjAAIAAD6gAD/lgIAAj0IJ6AAIAAD0gAtslqIAAj9IK2AAIAAD9gAiWlsIAAj0IFpAAIAAD0g");
	var mask_graphics_31 = new cjs.Graphics().p("AtxJoIAApMIOMAAIAAEaIk7AAIAAEygAj+JWIAAjvIDvAAIAADvgAASJMIAAjfIJCAAIAADfgABZEsIAAkfIJhAAIAAEfgAt4gYIAAkQIJ+AAIAAEQgAjOghIAAj6IJjAAIAAD6gAD/lgIAAj0IJ6AAIAAD0gAtslqIAAj9IK2AAIAAD9gAiWlsIAAj0IFpAAIAAD0g");
	var mask_graphics_34 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:53.8,y:33}).wait(3).to({graphics:mask_graphics_7,x:73.475,y:33}).wait(3).to({graphics:mask_graphics_10,x:107.375,y:33.475}).wait(3).to({graphics:mask_graphics_13,x:106.75,y:49.875}).wait(3).to({graphics:mask_graphics_16,x:106.75,y:49.875}).wait(3).to({graphics:mask_graphics_19,x:106.75,y:66.6}).wait(3).to({graphics:mask_graphics_22,x:106.75,y:66.6}).wait(3).to({graphics:mask_graphics_25,x:106.75,y:81.9}).wait(3).to({graphics:mask_graphics_28,x:106.75,y:81.9}).wait(3).to({graphics:mask_graphics_31,x:106.75,y:81.9}).wait(3).to({graphics:mask_graphics_34,x:150,y:125}).wait(371));

	// copy1
	this.instance_9 = new lib.copy1_mc();
	this.instance_9.setTransform(126.2,80.7);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).wait(90).to({rotation:1080,alpha:0},15).wait(296));

	// bg3
	this.instance_10 = new lib.Tween1("synched",0);
	this.instance_10.setTransform(150,375);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween2("synched",0);
	this.instance_11.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},304).to({state:[{t:this.instance_11}]},25).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(304).to({_off:false},0).to({_off:true,y:125},25,cjs.Ease.sineInOut).wait(76));

	// bg2
	this.instance_12 = new lib.bg2_mc();
	this.instance_12.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(94).to({alpha:1},15).wait(45).to({alpha:0},15).wait(236));

	// bg1
	this.instance_13 = new lib.bg1_mc();
	this.instance_13.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(405));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(113.2,77.7,208.5,422.3);
// library properties:
lib.properties = {
	id: '0D31762BEC544CDCAFB5F74A7943328F',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg3.png?1609867944296", id:"bg3"},
		{src:"images/cta.png?1609867944296", id:"cta"},
		{src:"images/curve.png?1609867944296", id:"curve"},
		{src:"images/loan.png?1609867944296", id:"loan"},
		{src:"images/logo1.png?1609867944296", id:"logo1"},
		{src:"images/logo2.png?1609867944296", id:"logo2"},
		{src:"images/tcs.png?1609867944296", id:"tcs"}
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
an.compositions['0D31762BEC544CDCAFB5F74A7943328F'] = {
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
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;