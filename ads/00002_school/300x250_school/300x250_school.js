(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_school_atlas_1", frames: [[0,0,600,500],[602,0,323,333],[602,471,256,78],[602,335,322,134]]}
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



(lib.bg3pngcopy = function() {
	this.initialize(ss["300x250_school_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curve = function() {
	this.initialize(ss["300x250_school_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo1 = function() {
	this.initialize(ss["300x250_school_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.logo2 = function() {
	this.initialize(ss["300x250_school_atlas_1"]);
	this.gotoAndStop(3);
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
	this.instance = new lib.bg3pngcopy();
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
	this.instance = new lib.bg3pngcopy();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.tcs = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A1482").s().p("AgEAFQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape.setTransform(40.8,62.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A1482").s().p("AgJAkQgFgCgDgDQgDgDgCgFQgBgFAAgEQAAgGABgEQACgEADgDQADgEAFgBQAEgCAFAAQAEAAAFACQAEACACADIABAAIAAgiIAIAAIAABKIgIAAIAAgHIgBAAQgCAEgFABQgEADgEAAQgFAAgEgCgAgFgBIgFADIgDAEIgBAIIABAGIADAFIAFADQADABACABQAEgBADgBIAFgDIADgFIABgGIgBgIIgDgEIgFgDQgDgBgEAAQgCAAgDABg");
	this.shape_1.setTransform(36.625,59.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A1482").s().p("AAMAYIAAgbIgBgFIgCgEIgEgCIgEgBIgEABIgEADIgDAFIgBAGIAAAYIgJAAIAAguIAJAAIAAAHQACgDAEgDQAEgCAFAAIAGABIAGADIADAGQACADAAAFIAAAdg");
	this.shape_2.setTransform(31.325,60.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A1482").s().p("AgJAYIgGgDIgDgEIgBgGQAAgFACgDQACgDADgBIAIgDIAJgBIAHAAIAAgCIgBgDIgCgDIgDgCIgFgBIgEAAIgDABIgDACIgDACIgFgGQAEgDAFgCIAJgBIAIABIAGADQADACABADIABAGIAAAXIAAAEIAAAEIgIAAIAAgHQgDAFgEACQgEABgEAAIgGAAgAABABIgFACIgFACQAAABgBAAQAAABAAAAQAAABgBABQAAAAAAABQAAAEADACQADABAEAAIAGgBIAEgDIACgEIABgFIAAgDIgFAAg");
	this.shape_3.setTransform(26.275,60.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0A1482").s().p("AgDAlIAAhJIAHAAIAABJg");
	this.shape_4.setTransform(22.875,59.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0A1482").s().p("AgIAXQgFgCgDgEQgDgDgCgEQgBgFAAgFQAAgEABgFQACgEADgDQAEgEAEgBQAEgCAFAAQAGAAAEACQAEACADADIAEAIIABAIIAAADIgkAAIABAGIAEAEIAFADIAFABQAEAAADgCIAFgFIAHAFQgHAJgNAAQgFAAgEgBgAAOgDIgBgFQAAgBgBAAQAAgBAAgBQAAAAgBAAQAAgBgBAAIgEgDIgFgBIgFABIgFADIgDAEIgBAFIAbAAIAAAAg");
	this.shape_5.setTransform(19.275,60.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0A1482").s().p("AgMAYIAAguIAJAAIAAAHIACgDIADgDIAEgBIADgBIAFABIgBAJIgCAAIgCAAQgHAAgCADQgDAEAAAGIAAAYg");
	this.shape_6.setTransform(15.2,60.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0A1482").s().p("AgEAjIAAhFIAJAAIAABFg");
	this.shape_7.setTransform(12.125,59.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0A1482").s().p("AgFAmIAAgmIgKAAIAAgIIAKAAIAAgKQAAgJADgFQADgFAJAAIADABIADAAIgBAIIgCgBIgDAAIgEABIgCACIgBADIAAAFIAAAKIAKAAIAAAIIgKAAIAAAmg");
	this.shape_8.setTransform(6.925,59.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0A1482").s().p("AgJAXQgEgCgEgEQgDgDgCgEQgCgFAAgFQAAgEACgEQACgFADgDQAEgEAEgBQAFgCAEAAQAFAAAFACQAEABADAEQAEADACAFQACAEAAAEQAAAFgCAFQgCAEgEADQgDAEgEACQgFABgFAAQgEAAgFgBgAgGgOIgEADIgDAFIgBAGIABAHIADAFIAEADQADABADAAQADAAADgBIAFgDIADgFIABgHIgBgGIgDgFIgFgDQgDgBgDAAQgDAAgDABg");
	this.shape_9.setTransform(2.675,60.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0A1482").s().p("AAJAlIgUgYIAAAYIgJAAIAAhJIAJAAIAAAvIATgTIALAAIgUAUIAWAZg");
	this.shape_10.setTransform(51.35,48.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0A1482").s().p("AAMAYIAAgbIgBgFIgCgEIgEgCIgEgBIgEABIgEADIgDAFIgBAGIAAAYIgJAAIAAguIAJAAIAAAHQACgDAEgDQAEgCAFAAIAGABIAGADIADAGQACADAAAFIAAAdg");
	this.shape_11.setTransform(46.125,49.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0A1482").s().p("AgJAYIgGgDIgDgEIgBgGQAAgFACgDQACgDADgBIAIgDIAJgBIAHAAIAAgCIgBgDIgCgDIgDgCIgFgBIgEAAIgDABIgDACIgDACIgFgGQAEgDAFgCIAJgBIAIABIAGADQADACABADIABAGIAAAXIAAAEIAAAEIgIAAIAAgHQgDAFgEACQgEABgEAAIgGAAgAABABIgFACIgFACQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAAEADACQADABAEAAIAGgBIAEgDIACgEIABgFIAAgDIgFAAg");
	this.shape_12.setTransform(41.075,49.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0A1482").s().p("AgXAjIAAhFIAXAAIAIABIAHAEQADACACADQABADAAAFQAAAGgDADQgEAEgFACQADAAADABIAFAEIADAFIABAGQAAAFgCAEQgCADgDADQgDACgEABQgFACgFAAgAgNAbIANAAIAEgBIAEgCIAFgDQABgDAAgDQAAgGgEgDQgEgEgGAAIgNAAgAgNgFIAMAAIAEAAIAEgCIADgDIABgFQAAgEgDgDQgCgDgGAAIgNAAg");
	this.shape_13.setTransform(36,48.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0A1482").s().p("AgDAlIAAhJIAHAAIAABJg");
	this.shape_14.setTransform(29.325,48.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0A1482").s().p("AgJAYIgGgDIgDgEIgBgGQAAgFACgDQACgDADgBIAIgDIAJgBIAHAAIAAgCIgBgDIgCgDIgDgCIgFgBIgEAAIgDABIgDACIgDACIgFgGQAEgDAFgCIAJgBIAIABIAGADQADACABADIABAGIAAAXIAAAEIAAAEIgIAAIAAgHQgDAFgEACQgEABgEAAIgGAAgAABABIgFACIgFACQAAABgBAAQAAABAAAAQAAABgBABQAAAAAAABQAAAEADACQADABAEAAIAGgBIAEgDIACgEIABgFIAAgDIgFAAg");
	this.shape_15.setTransform(25.825,49.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0A1482").s().p("AgNAYIAAguIAJAAIAAAHIADgDIACgDIAFgBIADgBIAEABIAAAJIgCAAIgCAAQgGAAgDADQgEAEAAAGIAAAYg");
	this.shape_16.setTransform(22,49.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0A1482").s().p("AAIAeIgIgBQgCgBgBgDQgBgCAAgDIgBgFIAAgYIgKAAIAAgHIAKAAIAAgNIAIAAIAAANIAMAAIAAAHIgMAAIAAAUIAAAEIABAEIACACIADABIAEAAIADgBIAAAIIgEABg");
	this.shape_17.setTransform(18.25,49.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0A1482").s().p("AAMAYIAAgbIgBgFIgCgEIgEgCIgEgBIgEABIgEADIgDAFIgBAGIAAAYIgJAAIAAguIAJAAIAAAHQACgDAEgDQAEgCAFAAIAGABIAGADIADAGQACADAAAFIAAAdg");
	this.shape_18.setTransform(14.225,49.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0A1482").s().p("AgIAXQgFgCgDgEQgDgDgCgEQgBgFAAgFQAAgEABgFQACgEADgDQAEgEAEgBQAEgCAFAAQAGAAAEACQAEACADADIAEAIIABAIIAAADIgkAAIABAGIAEAEIAFADIAFABQAEAAADgCIAFgFIAHAFQgHAJgNAAQgFAAgEgBgAAOgDIgBgFQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgEgDIgFgBIgFABIgFADIgDAEIgBAFIAbAAIAAAAg");
	this.shape_19.setTransform(9.075,49.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0A1482").s().p("AgJAhQgHgDgEgFQgFgFgDgGQgCgHAAgGQAAgIADgGQADgHAEgFQAFgFAGgDQAHgDAIAAQAGAAAHADQAGACAEAGIgHAGQgDgDgEgDQgFgCgFAAQgFAAgEADQgGACgDADQgDAEgCAFQgCAGAAAFQAAAFACAFQACAFADAEIAIAFQAFACAFABQAGAAAFgDQAEgCADgFIAIAGIgDADIgFAEIgHADQgFACgGABQgHAAgHgEg");
	this.shape_20.setTransform(3.3,48.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0A1482").s().p("AgIAXQgFgCgDgEQgDgDgCgEQgBgFAAgFQAAgEABgFQACgEADgDQAEgEAEgBQAEgCAFAAQAGAAAEACQAEACADADIAEAIIABAIIAAADIgkAAIABAGIAEAEIAFADIAFABQAEAAADgCIAFgFIAHAFQgHAJgNAAQgFAAgEgBgAAOgDIgBgFQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgEgDIgFgBIgFABIgFADIgDAEIgBAFIAbAAIAAAAg");
	this.shape_21.setTransform(66.675,38.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0A1482").s().p("AAMAlIAAgbIgBgGIgCgDIgEgCIgEgBIgEABIgEADIgDAEIgBAHIAAAYIgJAAIAAhJIAJAAIAAAiQACgDAEgCQAEgDAFAAIAGABIAGAEIADAFQACACAAAFIAAAeg");
	this.shape_22.setTransform(61.525,37.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0A1482").s().p("AAIAeIgIgBQgCgBgBgDQgCgCABgDIgBgFIAAgYIgKAAIAAgHIAKAAIAAgNIAIAAIAAANIAMAAIAAAHIgMAAIAAAUIAAAEIABAEIABACIAEABIAEAAIADgBIAAAIIgEABg");
	this.shape_23.setTransform(57.05,38.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0A1482").s().p("AgRAjIgFgBIACgIIAFABIAEgBIACgBIACgDIABgDIADgHIgUguIALAAIAMAjIABAAIANgjIAKAAIgXA3IgBAGIgDAEIgEADIgHABg");
	this.shape_24.setTransform(50.8,39.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0A1482").s().p("AgHAkQgFgDgDgDIAAAGIgJAAIAAhIIAJAAIAAAiQADgEAFgCQAEgCAEAAQAFAAAEACQAFACADADQADADACADQACAFAAAGQAAAFgCAEQgCAEgDADQgDAEgFACQgEACgFgBQgEAAgEgBgAgGAAIgEABIgEAGIgBAHIABAGIAEAFIAEADQADABADAAQAEAAACgBIAFgDIADgFIABgGIgBgHIgDgGIgFgBQgCgCgEAAQgDAAgDACg");
	this.shape_25.setTransform(45.75,37.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0A1482").s().p("AgJAkQgFgCgDgEQgDgDgCgEQgBgEAAgFQAAgGABgFQACgDADgDQADgDAFgCQAEgCAFAAQAEAAAFACQAEACACAEIABAAIAAgiIAIAAIAABIIgIAAIAAgGIgBAAQgCADgFADQgEABgEAAQgFABgEgCgAgFAAIgFABIgDAGIgBAHIABAGIADAFIAFADQADABACAAQAEAAADgBIAFgDIADgFIABgGIgBgHIgDgGIgFgBQgDgCgEAAQgCAAgDACg");
	this.shape_26.setTransform(37.375,37.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0A1482").s().p("AgIAXQgFgCgDgEQgDgDgCgEQgBgFAAgFQAAgEABgFQACgEADgDQAEgEAEgBQAEgCAFAAQAGAAAEACQAEACADADIAEAIIABAIIAAADIgkAAIABAGIAEAEIAFADIAFABQAEAAADgCIAFgFIAHAFQgHAJgNAAQgFAAgEgBgAAOgDIgBgFQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgEgDIgFgBIgFABIgFADIgDAEIgBAFIAbAAIAAAAg");
	this.shape_27.setTransform(32.075,38.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0A1482").s().p("AAIAeIgIgBQgCgBgBgDQgBgCAAgDIgBgFIAAgYIgKAAIAAgHIAKAAIAAgNIAIAAIAAANIANAAIAAAHIgNAAIAAAUIAAAEIABAEIACACIADABIAEAAIADgBIAAAIIgEABg");
	this.shape_28.setTransform(27.6,38.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0A1482").s().p("AgJAYIgGgDIgDgEIgBgGQAAgFACgDQACgDADgBIAIgDIAJgBIAHAAIAAgCIgBgDIgCgDIgDgCIgFgBIgEAAIgDABIgDACIgDACIgFgGQAEgDAFgCIAJgBIAIABIAGADQADACABADIABAGIAAAXIAAAEIAAAEIgIAAIAAgHQgDAFgEACQgEABgEAAIgGAAgAABABIgFACIgFACQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAAEADACQADABAEAAIAGgBIAEgDIACgEIABgFIAAgDIgFAAg");
	this.shape_29.setTransform(23.675,38.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0A1482").s().p("AgDAlIAAhJIAHAAIAABJg");
	this.shape_30.setTransform(20.275,37.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0A1482").s().p("AgJAXIgGgDIgDgGQgCgDAAgFIAAgdIAJAAIAAAbIABAFQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAIAEACIAEABIAEgBIAEgDIADgFIABgHIAAgXIAJAAIAAAuIgJAAIAAgHQgCADgEADQgEACgFAAIgGgBg");
	this.shape_31.setTransform(16.675,38.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0A1482").s().p("AgMAiQgGgCgFgFIAGgHQAEADAEACQAEACAFAAQAEAAADgBIAFgEQACgCABgDIABgGIAAgGIgBAAQgCADgFACQgEADgEAAQgFAAgEgCQgFgCgDgDIgFgHQgBgEAAgFQAAgFABgFIAFgIQADgDAFgBQAEgDAFAAQAEAAAEADQAFABACAEIABAAIAAgHIAIAAIAAAuQAAAFgBAFIgFAHQgEADgFACQgEACgFgBQgHAAgFgBgAgFgZIgFADIgDAFIgBAHQAAAHAEADQAEAEAGABQAHgBAFgEQAEgDAAgHIgBgHIgDgFIgFgDQgDgBgEgBQgCABgDABg");
	this.shape_32.setTransform(11.125,39.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0A1482").s().p("AgIAXQgFgCgDgEQgDgDgCgEQgBgFAAgFQAAgEABgFQACgEADgDQAEgEAEgBQAEgCAFAAQAGAAAEACQAEACADADIAEAIIABAIIAAADIgkAAIABAGIAEAEIAFADIAFABQAEAAADgCIAFgFIAHAFQgHAJgNAAQgFAAgEgBgAAOgDIgBgFQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgEgDIgFgBIgFABIgFADIgDAEIgBAFIAbAAIAAAAg");
	this.shape_33.setTransform(5.825,38.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0A1482").s().p("AgNAYIAAguIAJAAIAAAHIADgDIACgDIAFgBIAEgBIADABIAAAJIgCAAIgCAAQgGAAgDADQgEAEAAAGIAAAYg");
	this.shape_34.setTransform(1.75,38.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0A1482").s().p("AgKAXQgEgCgEgFIAIgFIAEAEQADABADAAIADAAIADgBIACgCIABgDIgBgDIgDgCIgEgBIgCgBIgGgBIgEgCIgDgEQgCgCAAgDQAAgEACgCIAEgFIAGgDIAFAAIAJABQAEACADAEIgHAFIgEgDQgCgBgDAAQgCAAgCABQgBABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAIACACIADACIAEAAIAFACIAFACIACADIABAGQAAAEgBADIgEAEIgHADIgGAAQgFAAgFgBg");
	this.shape_35.setTransform(59.65,27.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0A1482").s().p("AgDAjIAAguIAHAAIAAAugAgEgXQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQACgCACAAQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_36.setTransform(56.625,26.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0A1482").s().p("AAMAYIAAgbIgBgFIgCgEIgEgCIgEgBIgEABIgEADIgDAFIgBAGIAAAYIgJAAIAAguIAJAAIAAAHQACgDAEgDQAEgCAFAAIAGABIAGADIADAGQACADAAAFIAAAdg");
	this.shape_37.setTransform(50.575,27.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0A1482").s().p("AgJAXQgEgCgEgEQgDgDgCgEQgCgFAAgFQAAgEACgEQACgFADgDQAEgEAEgBQAFgCAEAAQAFAAAFACQAEABADAEQAEADACAFQACAEAAAEQAAAFgCAFQgCAEgEADQgDAEgEACQgFABgFAAQgEAAgFgBgAgGgOIgEADIgDAFIgBAGIABAHIADAFIAEADQADABADAAQADAAADgBIAFgDIADgFIABgHIgBgGIgDgFIgFgDQgDgBgDAAQgDAAgDABg");
	this.shape_38.setTransform(45.225,27.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0A1482").s().p("AgDAjIAAguIAHAAIAAAugAgEgXQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQACgCACAAQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_39.setTransform(41.375,26.575);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0A1482").s().p("AAMAYIAAgbIgBgFIgCgEIgEgCIgEgBIgEABIgEADIgDAFIgBAGIAAAYIgJAAIAAguIAJAAIAAAHQACgDAEgDQAEgCAFAAIAGABIAGADIADAGQACADAAAFIAAAdg");
	this.shape_40.setTransform(37.775,27.675);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0A1482").s().p("AgJAiQgFgCgEgEQgDgEgDgFQgCgFAAgGIAAgrIAJAAIAAAqIABAHIADAGIAGAFQADACAEAAQAFAAADgCIAFgFIAEgGIABgHIAAgqIAJAAIAAArQAAAGgCAFQgCAFgEAEQgEAEgFACQgEACgGAAQgFAAgEgCg");
	this.shape_41.setTransform(31.9,26.675);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0A1482").s().p("AAIAeIgIgBQgCgBgBgDQgCgCAAgDIAAgFIAAgYIgKAAIAAgHIAKAAIAAgNIAIAAIAAANIANAAIAAAHIgNAAIAAAUIAAAEIABAEIACACIADABIAEAAIADgBIAAAIIgEABg");
	this.shape_42.setTransform(24.25,27.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0A1482").s().p("AgDAjIAAguIAHAAIAAAugAgEgXQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQACgCACAAQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_43.setTransform(21.725,26.575);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0A1482").s().p("AgJAkQgFgCgDgEQgDgDgCgEQgBgEAAgGQAAgFABgFQACgDADgDQADgDAFgCQAEgCAFAAQAEAAAFACQAEACACADIABAAIAAghIAIAAIAABJIgIAAIAAgHIgBAAQgCAEgFACQgEACgEgBQgFAAgEgBgAgFAAIgFABIgDAGIgBAGIABAHIADAFIAFADQADACACgBQAEABADgCIAFgDIADgFIABgHIgBgGIgDgGIgFgBQgDgCgEAAQgCAAgDACg");
	this.shape_44.setTransform(17.725,26.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0A1482").s().p("AgIAXQgFgCgDgEQgDgDgCgEQgBgFAAgFQAAgEABgFQACgEADgDQAEgEAEgBQAEgCAFAAQAGAAAEACQAEACADADIAEAIIABAIIAAADIgkAAIABAGIAEAEIAFADIAFABQAEAAADgCIAFgFIAHAFQgHAJgNAAQgFAAgEgBgAAOgDIgBgFQAAgBgBAAQAAgBAAgBQAAAAgBAAQAAgBgBAAIgEgDIgFgBIgFABIgFADIgDAEIgBAFIAbAAIAAAAg");
	this.shape_45.setTransform(12.425,27.725);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0A1482").s().p("AgMAYIAAguIAJAAIAAAHIACgDIACgDIAFgBIADgBIAFABIgBAJIgCAAIgCAAQgHAAgCADQgEAEABAGIAAAYg");
	this.shape_46.setTransform(8.35,27.675);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0A1482").s().p("AgJAhQgHgDgEgFQgFgFgDgGQgCgHAAgHQAAgGADgIQADgGAEgFQAFgFAGgDQAHgCAIgBQAGABAHACQAGACAEAGIgHAGQgDgDgEgDQgFgCgFAAQgFAAgEACQgGADgDAEQgDADgCAGQgCAFAAAEQAAAGACAFQACAEADAEIAIAHQAFABAFAAQAGABAFgDQAEgDADgEIAIAGIgDADIgFAEIgHAEQgFABgGAAQgHAAgHgDg");
	this.shape_47.setTransform(3.3,26.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0A1482").s().p("AAIAeIgIgBQgCgBgBgDQgBgCAAgDIgBgFIAAgYIgKAAIAAgHIAKAAIAAgNIAIAAIAAANIAMAAIAAAHIgMAAIAAAUIAAAEIABAEIACACIADABIAEAAIADgBIAAAIIgEABg");
	this.shape_48.setTransform(54.7,16.125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0A1482").s().p("AgKAXQgEgCgEgFIAIgFIAEAEQADABADAAIADAAIADgBIACgCIABgDIgBgDIgDgCIgEgBIgCgBIgGgBIgEgCIgDgEQgCgCAAgDQAAgEACgCIAEgFIAGgDIAFAAQAFAAAEABQAEACADAEIgHAFIgEgDQgCgBgDAAQgCAAgCABQgBABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAIACACIADACIAEAAIAFACIAFACIACADIABAGQAAAEgBADIgEAEIgHADIgGAAQgFAAgFgBg");
	this.shape_49.setTransform(51.1,16.725);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0A1482").s().p("AgNAYIAAguIAJAAIAAAHIADgDIACgDIAFgBIADgBIAEABIAAAJIgCAAIgCAAQgGAAgDADQgEAEAAAGIAAAYg");
	this.shape_50.setTransform(47.65,16.675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0A1482").s().p("AgDAjIAAguIAHAAIAAAugAgEgXQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQACgCACAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_51.setTransform(44.725,15.575);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0A1482").s().p("AgVAjIAAhFIArAAIAAAJIghAAIAAAWIAeAAIAAAIIgeAAIAAAeg");
	this.shape_52.setTransform(41.275,15.575);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0A1482").s().p("AgNAYIAAguIAJAAIAAAHIADgDIADgDIADgBIAFgBIADABIAAAJIgCAAIgCAAQgHAAgCADQgDAEgBAGIAAAYg");
	this.shape_53.setTransform(34.4,16.675);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0A1482").s().p("AgIAXQgFgCgDgEQgDgDgCgEQgBgFAAgFQAAgEABgFQACgEADgDQAEgEAEgBQAEgCAFAAQAGAAAEACQAEACADADIAEAIIABAIIAAADIgkAAIABAGIAEAEIAFADIAFABQAEAAADgCIAFgFIAHAFQgHAJgNAAQgFAAgEgBgAAOgDIgBgFQAAgBgBAAQAAgBAAgBQAAAAgBAAQAAgBgBAAIgEgDIgFgBIgFABIgFADIgDAEIgBAFIAbAAIAAAAg");
	this.shape_54.setTransform(29.975,16.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0A1482").s().p("AgIAkQgEgDgCgDIAAAHIgJAAIAAhKIAJAAIAAAiQACgDAEgCQAFgCAEAAQAFAAAFACQAEABADAEQADADACAEQACAEgBAFQABAFgCAFQgCAFgDACQgDAEgEACQgFABgFABQgEAAgFgCgAgFgBIgGADIgCAEIgBAHIABAHIACAFIAGADQACABADABQADgBADgBIAFgDIADgFIABgHIgBgHIgDgEIgFgDQgDgBgDAAQgDAAgCABg");
	this.shape_55.setTransform(24.65,15.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0A1482").s().p("AAaAYIAAgZIAAgFQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBgBIgDgDIgFgBQgGAAgDAEQgDAEAAAGIAAAZIgHAAIAAgYIgBgGIgBgEIgDgEIgFgBIgFABIgEADIgCAFIgBAGIAAAYIgJAAIAAguIAIAAIAAAIIACgDIADgDIAFgCIAFgBQAFAAAEACQADACACAFQACgFAEgCQAEgCAEAAQAGAAADACQAEACACADQACACAAAEIABAIIAAAag");
	this.shape_56.setTransform(17.675,16.675);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0A1482").s().p("AgIAXQgFgCgDgEQgDgDgCgEQgBgFAAgFQAAgEABgFQACgEADgDQAEgEAEgBQAEgCAFAAQAGAAAEACQAEACADADIAEAIIABAIIAAADIgkAAIABAGIAEAEIAFADIAFABQAEAAADgCIAFgFIAHAFQgHAJgNAAQgFAAgEgBgAAOgDIgBgFQAAgBgBAAQAAgBAAgBQAAAAgBAAQAAgBgBAAIgEgDIgFgBIgFABIgFADIgDAEIgBAFIAbAAIAAAAg");
	this.shape_57.setTransform(11.075,16.725);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0A1482").s().p("AAbAjIAAg4IgYA4IgFAAIgXg4IgBAAIAAA4IgJAAIAAhFIAOAAIAVA0IAWg0IAOAAIAABFg");
	this.shape_58.setTransform(4.175,15.575);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0A1482").s().p("AgEAFQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_59.setTransform(49.35,7.45);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0A1482").s().p("AgSAjIgDgBIABgJIAFACIADgBIADgBIABgCIACgEIADgHIgTguIAKAAIAMAjIABAAIANgjIAJAAIgVA4IgCAFIgDAFIgFACIgFABg");
	this.shape_60.setTransform(45.8,6.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0A1482").s().p("AgDAlIAAhJIAHAAIAABJg");
	this.shape_61.setTransform(42.425,4.35);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0A1482").s().p("AgYAmIAAhJIAJAAIAAAGQADgDAEgCQAFgCAEAAQAFAAAEACQAFABADADIAFAIQACAEAAAGQAAAFgCAEQgCAEgDADQgDAEgFACQgEABgFAAQgEAAgFgCQgEgCgDgEIAAAjgAgGgbIgEADIgEAFIgBAHIABAGIAEAGIAEABQADACADAAQAEAAACgCIAFgBIADgGIABgGIgBgHIgDgFIgFgDQgCgBgEAAQgDAAgDABg");
	this.shape_62.setTransform(38.65,7.05);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0A1482").s().p("AgXAmIAAhJIAJAAIAAAGQACgDAFgCQAEgCAEAAQAFAAAFACQAEABADADIAFAIQABAEAAAGQAAAFgBAEQgCAEgDADQgDAEgEACQgFABgFAAQgEAAgEgCQgFgCgCgEIAAAjgAgFgbIgGADIgDAFIAAAHIAAAGIADAGIAGABQACACADAAQADAAADgCIAFgBIADgGIABgGIgBgHIgDgFIgFgDQgDgBgDAAQgDAAgCABg");
	this.shape_63.setTransform(32.95,7.05);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0A1482").s().p("AgJAYIgGgDIgDgEIgBgGQAAgFACgDQACgDADgBIAIgDIAJgBIAHAAIAAgCIgBgDIgCgDIgDgCIgFgBIgEAAIgDABIgDACIgDACIgFgGQAEgDAFgCIAJgBIAIABIAGADQADACABADIABAGIAAAXIAAAEIAAAEIgIAAIAAgHQgDAFgEACQgEABgEAAIgGAAgAABABIgFACIgFACQAAABgBAAQAAABAAAAQAAABgBABQAAAAAAABQAAAEADACQADABAEAAIAGgBIAEgDIACgEIABgFIAAgDIgFAAg");
	this.shape_64.setTransform(27.525,5.725);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0A1482").s().p("AgKAXQgEgCgEgFIAHgFIAFAEQADABADAAIADAAIADgBIACgCIABgDIgBgDIgDgCIgDgBIgDgBIgFgBIgFgCIgDgEQgBgCAAgDQAAgEABgCIAEgFIAGgDIAGAAIAJABQAEACACAEIgGAFIgFgDQgCgBgDAAQgCAAgCABQgBABgBAAQAAAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAIACACIAEACIADAAIAGACIADACIADADIABAGQAAAEgBADIgEAEIgHADIgGAAQgFAAgFgBg");
	this.shape_65.setTransform(20.6,5.725);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0A1482").s().p("AgJAhQgHgDgEgFQgFgFgDgHQgCgGAAgGQAAgHADgIQADgGAEgFQAFgFAGgDQAHgCAIAAQAGAAAHACQAGADAEAFIgHAGQgDgEgEgCQgFgCgFAAQgFAAgEADQgGABgDAEQgDAEgCAFQgCAFAAAGQAAAFACAFQACAEADAFIAIAFQAFADAFAAQAGAAAFgDQAEgDADgEIAIAGIgDADIgFAEIgHADQgFADgGAAQgHAAgHgEg");
	this.shape_66.setTransform(15.45,4.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0A1482").s().p("AgTAiQgEgBgDgDIgEgHQgCgDAAgEQAAgEACgDQABgDACgCIAFgEIAGgDIgGgHQgCgEAAgFQAAgEACgDQABgDADgCIAFgDIAIgBIAFABIAGADIAEAFIABAGIgBAGIgDAFIgFAEIgEADIANAOIAJgOIAKAAIgNAUIAQAQIgNAAIgJgJQgEAFgFADQgEADgHAAQgGAAgEgCgAgOAEIgEADIgDAEIgBAFIABAEIADAEIAFADIAEABIAFgBIAEgCIADgDIADgDIgQgRgAgMgZQgDACAAAEIABADIACADIACADIACADIAEgDIADgCIACgDIABgFQAAgDgCgCQgCgCgDAAQgEAAgDACg");
	this.shape_67.setTransform(8.825,4.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0A1482").s().p("AgEAjIAAg8IgWAAIAAgJIA1AAIAAAJIgWAAIAAA8g");
	this.shape_68.setTransform(2.55,4.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tcs, new cjs.Rectangle(-2.2,-3.7,76,72.4), null);


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

	// Layer_1
	this.text = new cjs.Text(" ", "14px 'Avenir Light'", "#FFFFFF");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(149,-10.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAoQgGgEgEgFQgEgEgBgHIgBgNIAAgwIALAAIAAAvIAAAKQACAFACADQACAFAEABQAEADAHAAQAEAAAGgCQAFgCAEgFQAEgEACgGQACgGABgIIAAgpIAKAAIAAA6IAAAFIABAIIAAAGIAAAEIgLAAIAAgJIAAgFIgBAAQgDAHgHAFQgIAEgJAAQgKAAgGgCg");
	this.shape.setTransform(133.8,0.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRApQgIgEgFgFQgHgGgCgIQgDgIAAgKQAAgIADgIQACgIAHgGQAFgGAIgDQAIgEAJAAQAKAAAHAEQAIADAHAGQAFAGAEAIQACAIAAAIQAAAKgCAIQgEAIgFAGQgHAFgIAEQgHADgKAAQgJAAgIgDgAgMgeQgHADgEAEQgEAFgDAGQgCAGAAAGQAAAHACAGQADAHAEAEQAEAFAHACQAFADAHAAQAHAAAHgDQAGgCAEgFQAFgEACgHQACgGAAgHQAAgGgCgGQgCgGgFgFQgEgEgGgDQgHgDgHAAQgHAAgFADg");
	this.shape_1.setTransform(124.55,0.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfA+IgFgBIABgKIAEACIAGAAIAFgBIADgDIADgFIADgEIAHgTIgihTIANAAIAaBFIAahFIAMAAIgpBsQgEAIgFAFQgFAEgJAAg");
	this.shape_2.setTransform(116.05,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADA1QgDgBgDgDIgEgHIgBgIIAAg2IgSAAIAAgJIASAAIAAgZIAKAAIAAAZIAYAAIAAAJIgYAAIAAA2QAAAFADADQADADAGAAIAGgBIAGgCIABAKIgHABIgHABQgGAAgEgBg");
	this.shape_3.setTransform(106.225,-0.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEA+IAAhSIAJAAIAABSgAgEgwQgDgCAAgDQAAgDADgDQACgCACAAQADAAADACQACADAAADQAAADgCACQgDADgDAAQgCAAgCgDg");
	this.shape_4.setTransform(102.15,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAoQgHgEgDgFQgDgEgBgHIgCgNIAAgwIALAAIAAAvIABAKQABAFACADQACAFAEABQAEADAGAAQAFAAAGgCQAFgCAEgFQAEgEACgGQACgGAAgIIAAgpIAMAAIAAA6IAAAFIAAAIIAAAGIAAAEIgLAAIAAgJIgBgFIAAAAQgDAHgIAFQgHAEgKAAQgJAAgGgCg");
	this.shape_5.setTransform(95.95,0.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAoQgJgEgFgJIAKgHQADAHAHAEQAHADAGAAIAHgBIAGgDQADgCABgDQACgCAAgEQAAgGgEgDQgDgDgGgBIgLgDQgGgBgFgCQgGgCgEgEQgDgFAAgIQAAgGACgEQADgFAEgDQAEgDAFgBQAFgCAEAAQAKAAAIAEQAHAEAFAIIgKAGQgDgGgFgDQgEgDgIAAIgFABIgGADIgEAEQgCACAAADQAAAGAEADIAJAEIALADQAHABAFACQAFACAEAEQAEAFAAAIQAAAHgDAEQgCAFgEADQgEAEgGABQgFACgGAAQgKAAgJgEg");
	this.shape_6.setTransform(88.025,0.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRApQgIgEgFgFQgHgGgCgIQgDgIAAgKQAAgIADgIQACgIAHgGQAFgGAIgDQAIgEAJAAQAKAAAHAEQAIADAHAGQAFAGAEAIQACAIAAAIQAAAKgCAIQgEAIgFAGQgHAFgIAEQgHADgKAAQgJAAgIgDgAgMgeQgHADgEAEQgEAFgDAGQgCAGAAAGQAAAHACAGQADAHAEAEQAEAFAHACQAFADAHAAQAHAAAHgDQAGgCAEgFQAFgEACgHQACgGAAgHQAAgGgCgGQgCgGgFgFQgEgEgGgDQgHgDgHAAQgHAAgFADg");
	this.shape_7.setTransform(76.4,0.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AADA1QgDgBgDgDIgEgHIgBgIIAAg2IgSAAIAAgJIASAAIAAgZIAKAAIAAAZIAYAAIAAAJIgYAAIAAA2QAAAFADADQADADAGAAIAGgBIAGgCIABAKIgHABIgHABQgGAAgEgBg");
	this.shape_8.setTransform(69.025,-0.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAoQgJgEgFgJIAKgHQADAHAHAEQAHADAGAAIAHgBIAGgDQADgCABgDQACgCAAgEQAAgGgEgDQgDgDgGgBIgLgDQgGgBgFgCQgGgCgEgEQgDgFAAgIQAAgGACgEQADgFAEgDQAEgDAFgBQAFgCAEAAQAKAAAIAEQAHAEAFAIIgKAGQgDgGgFgDQgEgDgIAAIgFABIgGADIgEAEQgCACAAADQAAAGAEADIAJAEIALADQAHABAFACQAFACAEAEQAEAFAAAIQAAAHgDAEQgCAFgEADQgEAEgGABQgFACgGAAQgKAAgJgEg");
	this.shape_9.setTransform(59.475,0.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAZArIAAgwIgBgKIgCgJQgDgDgEgDQgEgCgGAAQgFAAgGACQgFACgEAFQgEAEgCAGQgDAHABAHIAAAqIgLAAIAAg7IAAgGIAAgGIgBgHIAAgEIALAAIAAAJIABAFIAAAAQAEgHAHgFQAHgFAKAAQAJAAAHADQAFAEAEAEQAEAFABAHIABANIAAAxg");
	this.shape_10.setTransform(51.75,0.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPArQgGgCgDgDQgEgDgDgEQgDgFAAgHQAAgJAFgGQAFgEAHgDQAHgDAIgBIANgBIANAAIAAgFQAAgLgHgEQgGgFgKAAQgOAAgLAJIgHgHQAGgGAJgDQAJgDAIAAQAOAAAKAIQAIAHABAPIAAAUIAAALIAAAJIABAIIAAAHIgKAAIgBgOIgBAAQgEAIgHAEQgHAEgKAAIgKgBgAAAABIgMADQgFACgDAEQgDADAAAGQAAAEABACIAFAFIAGADIAHABQAHAAAGgCQAGgDADgEQAEgEAAgFIACgKIAAgGIgMAAg");
	this.shape_11.setTransform(43.05,0.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQApQgJgEgGgFQgFgGgEgIQgCgIAAgKQAAgIACgIQAEgIAFgGQAGgGAJgDQAHgEAJAAQAKAAAHAEQAJADAFAGQAGAGADAIQADAIAAAIQAAAKgDAIQgDAIgGAGQgFAFgJAEQgHADgKAAQgJAAgHgDgAgNgeQgGADgEAEQgFAFgCAGQgCAGAAAGQAAAHACAGQACAHAFAEQAEAFAGACQAGADAHAAQAIAAAFgDQAHgCAEgFQAFgEACgHQACgGAAgHQAAgGgCgGQgCgGgFgFQgEgEgHgDQgFgDgIAAQgHAAgGADg");
	this.shape_12.setTransform(34.2,0.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEBEIAAiHIAKAAIAACHg");
	this.shape_13.setTransform(27.7,-2.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUArIAAg7IAAgGIAAgGIgBgHIAAgEIALAAIAAAJIAAAFQAEgHAGgFQAGgFAKAAIADABIADAAIgBALIgEgBQgHAAgFADQgFACgDAEQgDAEgCAFQgCAFAAAGIAAAtg");
	this.shape_14.setTransform(20.5,0.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRApQgIgEgFgFQgHgGgCgIQgEgIAAgKQAAgIAEgIQACgIAHgGQAFgGAIgDQAJgEAIAAQAJAAAIAEQAJADAGAGQAFAGAEAIQADAIAAAIQAAAKgDAIQgEAIgFAGQgGAFgJAEQgIADgJAAQgIAAgJgDgAgMgeQgHADgEAEQgEAFgCAGQgDAGAAAGQAAAHADAGQACAHAEAEQAEAFAHACQAFADAHAAQAHAAAHgDQAGgCAEgFQAFgEABgHQADgGAAgHQAAgGgDgGQgBgGgFgFQgEgEgGgDQgHgDgHAAQgHAAgFADg");
	this.shape_15.setTransform(12.65,0.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglBAIAAh/IBLAAIAAALIg/AAIAAAtIA7AAIAAAKIg7AAIAAA9g");
	this.shape_16.setTransform(3.875,-1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.loans_mc, new cjs.Rectangle(-3.7,-15.4,160.89999999999998,28.6), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBDIAAiFIBaAAIAAAbIg9AAIAAAZIA6AAIAAAbIg6AAIAAAbIBAAAIAAAbg");
	this.shape.setTransform(103.625,7.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBDIgbg2IgOAAIAAA2IgeAAIAAiFIA0AAQAKAAAJACQAJACAHAEQAHAFAEAIQAEAIAAAMQAAAOgHAKQgIAJgOACIAiA5gAgXgLIARAAIAHAAIAJgCQADgBADgDQACgDAAgGQAAgFgCgDQgCgDgDgBQgDgCgEgBIgIAAIgTAAg");
	this.shape_1.setTransform(91.95,7.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBDIAAiFIBaAAIAAAbIg9AAIAAAZIA6AAIAAAbIg6AAIAAAbIBAAAIAAAbg");
	this.shape_2.setTransform(79.625,7.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdBDIAAg6Ig4AAIAAA6IgfAAIAAiFIAfAAIAAAyIA4AAIAAgyIAdAAIAACFg");
	this.shape_3.setTransform(66.35,7.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVBDIg1hAIAABAIgeAAIAAiFIAeAAIAAA4IAzg4IAnAAIg7A+IBABHg");
	this.shape_4.setTransform(47.825,7.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBCQgNgFgKgJQgJgKgGgNQgGgNABgQQgBgPAGgNQAGgNAJgKQAKgJANgFQAOgFAOAAIAMABIAMAEQAGACAGAEQAFAEAFAFIgYATQgEgGgGgCQgHgDgIAAQgIAAgGADQgHADgGAGQgFAGgDAIQgDAIAAAIQAAAKADAHQADAIAFAGQAFAGAIADQAFADAIAAQAJAAAIgDQAGgEAFgHIAYASQgIAMgNAGQgNAGgOAAQgOAAgOgFg");
	this.shape_5.setTransform(34,7.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBDIAAiFIAdAAIAACFg");
	this.shape_6.setTransform(24.575,7.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpBDIAAiFIAdAAIAABqIA2AAIAAAbg");
	this.shape_7.setTransform(17.525,7.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQBCQgOgFgJgJQgJgKgGgNQgGgNABgQQgBgPAGgNQAGgNAJgKQAJgJAOgFQANgFAPAAIAMABIAMAEQAGACAGAEQAFAEAFAFIgYATQgEgGgGgCQgGgDgJAAQgIAAgGADQgHADgGAGQgFAGgDAIQgDAIAAAIQAAAKADAHQADAIAFAGQAFAGAIADQAFADAIAAQAJAAAHgDQAIgEAEgHIAYASQgIAMgNAGQgNAGgOAAQgPAAgNgFg");
	this.shape_8.setTransform(5.75,7.475);

	this.text = new cjs.Text(" ", "14px 'Avenir Light'", "#FFFFFF");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(152.25,-30.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_mc, new cjs.Rectangle(-2.9,-32.6,163.4,55.8), null);


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

}).prototype = getMCSymbolPrototype(lib.copy1_mc, new cjs.Rectangle(-106.9,-68,153.4,167.3), null);


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

	// copy1
	this.instance_1 = new lib.copy1_mc();
	this.instance_1.setTransform(-23.8,-44.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({alpha:0},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.7,-123.9,279.7,290.9);


// stage content:
(lib._300x250_school = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [290];
	// timeline functions:
	this.frame_290 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(290).call(this.frame_290).wait(1));

	// logo2
	this.instance = new lib.logo2_mc();
	this.instance.setTransform(209.5,209.5,1,1,0,0,0,80.5,33.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(226).to({_off:false},0).to({alpha:1},9).wait(56));

	// tcs
	this.instance_1 = new lib.tcs();
	this.instance_1.setTransform(41,208.8,1,1,0,0,0,35,31.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(281).to({_off:false},0).to({alpha:1},9).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("A3RzXMAujAAAMAAAAmvMgujAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(291));

	// logo1
	this.instance_2 = new lib.logo1_mc();
	this.instance_2.setTransform(227,213.5,1,1,0,0,0,64,19.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},5).wait(90).to({alpha:0},5).wait(191));

	// cta
	this.instance_3 = new lib.cta_mc();
	this.instance_3.setTransform(129,111.5,1,1,0,0,0,68,9.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(215).to({_off:false},0).to({x:139,alpha:1},10,cjs.Ease.sineInOut).wait(24).to({regY:9.6,scaleX:1.0552,scaleY:1.0552,y:111.65},6).to({regY:9.5,scaleX:1,scaleY:1,y:111.5},5).wait(10).to({regY:9.6,scaleX:1.0552,scaleY:1.0552,y:111.65},6).to({regY:9.5,scaleX:1,scaleY:1,y:111.5},5).wait(10));

	// loans
	this.instance_4 = new lib.loans_mc();
	this.instance_4.setTransform(142,107.7,1,1,0,0,0,81,18.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(215).to({_off:false},0).to({x:152,alpha:1},10,cjs.Ease.sineInOut).wait(66));

	// curve_rotate
	this.instance_5 = new lib.curve_rotate_mc();
	this.instance_5.setTransform(150,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(160).to({_off:false},0).to({rotation:180},15).wait(15).to({regX:122,regY:104,x:28,y:21},0).to({regX:121.9,regY:103.9,scaleX:0.7876,scaleY:0.7876,x:5.95,y:9.95},10).wait(91));

	// curve
	this.instance_6 = new lib.curve_mc();
	this.instance_6.setTransform(191.5,146,1,1,0,0,0,80.5,83);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100).to({_off:false},0).to({_off:true},60).wait(131));

	// copy1_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("AiWCXIAAktIEtAAIAAEtg");
	var mask_graphics_7 = new cjs.Graphics().p("AoRCXIAAktIEuAAIAAEXIAAAWgAjjCBIAAkXIL1AAIAAEXg");
	var mask_graphics_10 = new cjs.Graphics().p("ArXCXIAAktIEvAAIL0AAIAAEIIAAkIIGMAAIAAEIImMAAIAAAPIr0AAIAAkXIAAEXIAAAWg");
	var mask_graphics_13 = new cjs.Graphics().p("ArXEsIAAkpIEvAAIkvAAIAAkuIEvAAIAAEYIAAAWIKBAAIAAEpgAmogTIAAkYIL0AAIAAEJIAAkJIGMAAIAAEJImMAAIAAAPg");
	var mask_graphics_16 = new cjs.Graphics().p("Ar/EsIAAkpIEvAAIkvAAIAAkuIEvAAIAAEYIAAAWIKBAAIJPAAIAAEVIpPAAIAAkVIAAEVIAAAUgAnQgTIAAkYIL0AAIGMAAIAAEJImMAAIAAkJIAAEJIAAAPg");
	var mask_graphics_19 = new cjs.Graphics().p("Ar/HRIAAlKIKzAAIAAFKgAhMCHIqzAAIAAkoIAAkvIEvAAIL0AAIGMAAIAAEJImMAAIAAkJIAAEJIAAAPIr0AAIAAkYIAAEYIAAAXIKBAAIJPAAIAAEUIpPAAIAAkUIAAEUIAAAUgAnQihIkvAAgAhMCHg");
	var mask_graphics_22 = new cjs.Graphics().p("AhZHWIAAgKIAAlKIqyAAIKyAAIAAFKIqyAAIAAlKIAAkoIAAkvIEuAAIL1AAIGLAAIAAEJImLAAIAAkJIAAEJIAAAPIr1AAIAAkYIAAEYIAAAXIKCAAIJOAAIAAEUIpOAAIAAkUIAAEUIAAAUIj+AAID+AAIJnAAIAAFUgAndimIkuAAgAhZCCg");
	var mask_graphics_25 = new cjs.Graphics().p("AsLJvIAAk7IGkAAIAAE7gAhZE9IAAgJIkOAAImkAAIAAlKIAAkpIAAkuIEuAAIL1AAIGLAAIAAEIImLAAIAAkIIAAEIIAAAQIr1AAIAAkYIAAEYIAAAWIKCAAIAAEVIAAAUIj+AAID+AAIJnAAIAAFTgAhZE0IAAlKIqyAAIKyAAgAndk/IkuAAgAlnE0gAClgqIAAkVIJOAAIAAEVgAClgqg");
	var mask_graphics_28 = new cjs.Graphics().p("AlnJ0IAAgKImkAAIAAk7IAAlKIAAkpIEuAAIkuAAIAAkuIEuAAIL1AAIGLAAIAAEIImLAAIAAkIIAAEIIAAAQIr1AAIAAkYIAAEYIAAAWIKCAAIAAEVIAAAUIj+AAID+AAIJnAAIAAFTImkAAIAAgJInBAAIHBAAIAAAJIAAE8gAlnEvIAAE7IAAk7IEOAAIAAlKIqyAAIKyAAIAAFKIkOAAImkAAgAClgvIAAkVIJOAAIAAEVgAClgvg");
	var mask_graphics_31 = new cjs.Graphics().p("AE4J0IqfAAIAAgKImkAAIAAk7IGkAAIAAE7IAAk7ImkAAIAAlKIAAkpIEuAAIkuAAIAAkuIEuAAIL1AAIGLAAIAAEIImLAAIAAkIIAAEIIAAAQIr1AAIAAkYIAAEYIAAAWIKCAAIAAEVIAAAUIj+AAID+AAIJnAAIAAFTIiWAAIAAgCIkOAAIAAgHInBAAIAAlKIqyAAIKyAAIAAFKIkOAAIEOAAIHBAAIAAAHIgwAAIAAE+IAAk+IAwAAIEOAAIAAACIAAE8gAFoE2gAhZEvgAClgvIAAkVIJOAAIAAEVgAClgvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:30.175,y:33.175}).wait(3).to({graphics:mask_graphics_7,x:68.05,y:33.175}).wait(3).to({graphics:mask_graphics_10,x:87.8,y:33.175}).wait(3).to({graphics:mask_graphics_13,x:87.8,y:48.05}).wait(3).to({graphics:mask_graphics_16,x:91.8,y:48.05}).wait(3).to({graphics:mask_graphics_19,x:91.8,y:64.55}).wait(3).to({graphics:mask_graphics_22,x:93.05,y:65.05}).wait(3).to({graphics:mask_graphics_25,x:93.05,y:80.3}).wait(3).to({graphics:mask_graphics_28,x:93.05,y:80.8}).wait(3).to({graphics:mask_graphics_31,x:93.05,y:80.8}).wait(260));

	// copy1
	this.instance_7 = new lib.copy1_mc();
	this.instance_7.setTransform(126.2,80.7);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).wait(90).to({_off:true},66).wait(131));

	// bg3
	this.instance_8 = new lib.Tween1("synched",0);
	this.instance_8.setTransform(150,375);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween2("synched",0);
	this.instance_9.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},190).to({state:[{t:this.instance_9}]},25).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(190).to({_off:false},0).to({_off:true,y:125},25,cjs.Ease.sineInOut).wait(76));

	// bg2
	this.instance_10 = new lib.bg2_mc();
	this.instance_10.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(95).to({alpha:0},5).wait(191));

	// bg1
	this.instance_11 = new lib.bg1_mc();
	this.instance_11.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(291));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(117.1,77.7,204.6,422.3);
// library properties:
lib.properties = {
	id: '0D31762BEC544CDCAFB5F74A7943328F',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_school_atlas_1.png?1614766847027", id:"300x250_school_atlas_1"}
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