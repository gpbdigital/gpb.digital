(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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
p.nominalBounds = new cjs.Rectangle(0,0,500,400);


(lib.birds = function() {
	this.initialize(img.birds);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.branch_down = function() {
	this.initialize(img.branch_down);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,250);


(lib.branch_left = function() {
	this.initialize(img.branch_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,250);


(lib.branch_top = function() {
	this.initialize(img.branch_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

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


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#343C3D").s().p("AgJAqIAAgeIgZg1IAUAAIAIATIAGATIAAAAIAHgTIAIgTIAUAAIgaA1IAAAeg");
	this.shape.setTransform(178.275,18.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#343C3D").s().p("AASAqIgFgUIgZAAIgGAUIgTAAIAahTIAXAAIAaBTgAAJAHIgCgHIgHgbIAAAAIgGAbIgCAHIARAAg");
	this.shape_1.setTransform(170.975,18.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#343C3D").s().p("AggAqIAAhTIAYAAQATAAALAKQALAKAAAVQAAAVgLALQgLAKgSAAgAgNAbIAEAAQAXAAAAgbQAAgagXAAIgEAAg");
	this.shape_2.setTransform(163.125,18.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#343C3D").s().p("AgbAgQgLgMABgUQgBgUALgLQALgMAQAAQASAAAKAMQAKALAAAUQAAAUgKAMQgKAMgSAAQgQAAgLgMgAgNgTQgFAHAAAMQAAANAFAHQAGAIAHAAQAJAAAEgIQAGgHAAgNQAAgMgGgHQgEgIgJABQgIgBgFAIg");
	this.shape_3.setTransform(154.2,18.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#343C3D").s().p("AgJAqIAAhDIgXAAIAAgQIBBAAIAAAQIgXAAIAABDg");
	this.shape_4.setTransform(145.95,18.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#343C3D").s().p("AgaAqIAAhTIA0AAIAAAQIghAAIAAARIAcAAIAAAPIgcAAIAAATIAiAAIAAAQg");
	this.shape_5.setTransform(135.975,18.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#343C3D").s().p("AgIAqIAAhDIgYAAIAAgQIBBAAIAAAQIgXAAIAABDg");
	this.shape_6.setTransform(128.45,18.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#343C3D").s().p("AgbAgQgLgMAAgUQAAgUALgLQALgMAQAAQARAAALAMQALALAAAUQAAAUgLAMQgLAMgRAAQgQAAgLgMgAgNgTQgFAHAAAMQAAANAFAHQAFAIAIAAQAJAAAEgIQAGgHAAgNQAAgMgGgHQgEgIgJABQgIgBgFAIg");
	this.shape_7.setTransform(120.25,18.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#343C3D").s().p("AghACIAAgsIAUAAIAAAuQAAAMADAFQAEAFAGABQAPgBAAgWIAAguIATAAIAAAsQAAApgiAAQghAAAAgpg");
	this.shape_8.setTransform(111.325,18.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#343C3D").s().p("AADAwQgIgFgFgLQgOgCgIgMQgIgMAAgQQAAgVALgLQAKgMASAAQAQAAALAMQAKALAAAVQAAAPgHAMQgHALgNADQAGAJANAAQAFAAAEgCIAEAPQgGACgJAAQgNAAgKgHgAgPgeQgFAHAAANQAAAMAFAIQAFAIAJAAQAHAAAFgIQAGgIAAgMQAAgNgGgHQgFgIgHABQgJgBgFAIg");
	this.shape_9.setTransform(102.625,19.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#343C3D").s().p("AASAqIgFgUIgZAAIgGAUIgTAAIAahTIAXAAIAaBTgAAJAHIgCgHIgHgbIAAAAIgGAbIgCAHIARAAg");
	this.shape_10.setTransform(89.675,18.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#343C3D").s().p("AgJAqIAAhDIgXAAIAAgQIBBAAIAAAQIgXAAIAABDg");
	this.shape_11.setTransform(77.75,18.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#343C3D").s().p("AgaAqIAAhTIA0AAIAAAQIghAAIAAARIAcAAIAAAPIgcAAIAAATIAiAAIAAAQg");
	this.shape_12.setTransform(69.775,18.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#343C3D").s().p("AgWAhQgMgMAAgUQAAgUAMgMQAMgMARAAQAPAAALALIgKAMQgIgGgIAAQgJgBgGAIQgGAHAAAMQAAAcAXAAQAGAAADgDIAAgOIgOAAIAAgPIAfAAIAAAmQgLAKgRAAQgRAAgMgLg");
	this.shape_13.setTransform(60.875,18.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Vrstva 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AylC6IAAlzMAlLAAAIAAFzg");
	this.shape_14.setTransform(119.025,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,238.1,37.2), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmFGGIAAsLIMLAAIAAMLg");
	mask.setTransform(39,39);

	// Vrstva 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmFGGIAAsLIMLAAIAAMLgAlyFzILlAAIAArlIrlAAIAAKGIABgBQAvg7Asg5QBChVALgSQAFgHAIgPIAGgNIA5AAIADAbIAlB5IAUgZIghhlQgIgTgCgDIBCAAIAAAGIACAMIARA8IAwg9QAEgHABgKIA4AAQgLAHgRAXIhABSIAHAaIABAFIADgFQBUhsAEgJIAMgVIA2AAIADAVIAiB1IAaBQQARA2AHAEIhGAAQAAgOgDgLIgchcIhwAAIgRAZIAWBFIAMAXIhCAAIgCgOIgGgWIgUAYIgGAMIg1AAIgCgOIgHgXIgIAKQgIAKgDAFIgFAMIg0AAIATgUIApg0IgNgtIhuAAIhBBVIgMAQIgKAQIggAAgAhHDPIAMAoIAUgcQgCgCgLgjgACFCUIgRg2IgBgNIAAgHQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAgBABQgHARgwA5IBLAAIAAAAgAiXCUIgRg2IgBgNIAAgHQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAABQgJARguA5IBKAAIAAAAg");
	this.shape.setTransform(39,39.025);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0.1,78,77.9), null);


(lib.Doplnění15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjB6ICojzIAYAAIioDzgAAdBhQgRgQAAgbQAAgcAUgRQARgNAVAAQAXAAARANQATAQAAAbQAAAcgUARQgRANgXAAQgYAAgQgNgAAxA0QAAAYAFALQAFAKALAAQAMAAAFgKQAEgJAAgYQAAgZgFgKQgFgKgLAAQgVAAAAArgAhugRQgSgPAAgbQAAgdAVgQQARgOAVAAQAXAAARAOQATAQAAAbQAAAcgUAQQgRAOgXAAQgYAAgQgOgAhbg+QAAAZAGALQAEAJAMAAQALAAAFgJQAFgKAAgXQAAgZgFgLQgFgJgLAAQgWAAAAAqg");
	this.shape.setTransform(63.725,2.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFBYQgfgeAAg3QAAg5AjghQAdgbAkAAQApAAAcAcQAgAfAAA2QAAA4ghAgQgdAcgoAAQgpAAgbgbgAgehNQgLAWAAA2QAAA2AKAXQAKAWAVAAQAXAAAJgVQAJgWABg0QgBg4gKgXQgJgVgWAAQgUAAgKAUg");
	this.shape_1.setTransform(39.05,2.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhRBNQAAgWAXAAQAMAAAGAFQAGAGACAQQACAMADACQADAEANAAQAjAAAAg0QAAgZgKgKQgKgJgWAAIgQAAIAAgQIAOAAQAVAAAIgKQAKgLAAgYQAAgqgdAAQgIAAgDACQgDADgBAHQgBASgFAFQgGAHgNAAQgXAAAAgVQAAgRAUgJQATgKAfAAQAiAAAVAOQAWAPgBAYQAAATgOAOQgQAPgeAGIAAABQAgADARAMQAUAPAAAaQAAAcgXASQgZATgtAAQhGAAAAgmg");
	this.shape_2.setTransform(18.7,2.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9BCQgbgYAAgqQAAgpAcgYQAZgVAkAAQAlAAAYAVQAbAXAAAqQAAAqgcAYQgYAVgkAAQgmAAgYgVgAgZg4QgJAPAAAnQAAAqAJARQAIAOASAAQASAAAHgOQAJgQAAgpQAAgpgJgQQgIgNgSAAQgRAAgIAOg");
	this.shape_3.setTransform(-7.625,5.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA/IAAhnIgWAAIAAgLQAkgMAOgrIAVAAIAAAsIAtAAIgFAWIgoAAIAABjQAAAMAFAFQAFAFAMAAQAIAAAPgEIAAANQgOARgkAAQgsAAAAgsg");
	this.shape_4.setTransform(-23.2,3.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.7,-51,307.4,110);


(lib.Doplnění14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AheB4IAAgMIAJgCQAIgCACgDQACgDAAgLIAAihQAAgJgCgEQgCgDgHgEIgLgHIAAgLIBDgHIAFADIgCATIABAAQAagWAeAAQAbAAARARQAUAVAAAoQAAAvgbAZQgYAXgsAAQgNAAgMgDQABAIAAALIAAARQAAALACADQACADAHACIAMACIAAAMgAgXhTIAABtQALALAPAAQAWAAAJgNQALgPAAgnQAAg8gpAAQgLAAgQAHg");
	this.shape.setTransform(61.475,-13.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdBUIACgVIgBAAQghAYgeAAQgUAAgMgLQgLgLAAgUIAAhXQAAgKgCgDQgBgDgIgEIgLgHIAAgKIBDgHIAFAEIAAByQAAAaAXAAQALAAAVgIIAAhcQAAgKgCgDQgCgDgHgEIgLgHIAAgKIBDgHIAFAEIAAB7QAAAMACADQABAEAIACIAJAFIAAALIhBAJg");
	this.shape_1.setTransform(41.275,-16.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5BAQgWgXAAgpQAAgnAbgZQAYgWAiAAQBJAAABBTIhsAAQABAhAPAPQAMAOAaAAQAYAAAZgNIAAAPQgKAKgQAHQgVAJgWAAQgpAAgWgXgAgcgTIA5gDQAAgcgFgKQgFgKgQAAQgdAAgCAzg");
	this.shape_2.setTransform(14.275,-16.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBTIg2h+QgFgOgEgEQgEgFgGgCIgGgCIAAgMIBeAAIAAAMIgIACQgKAEAAAKQAAADAFAOIAaBIIACAAIAZhIQADgMABgGQAAgKgKgDIgJgCIAAgMIBAAAIAAAMIgHACQgGACgEAFQgEAFgGAQIgwB7g");
	this.shape_3.setTransform(-3.3,-16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMBEIgBAAQgPATgdAAQgXAAgNgLQgOgMAAgUQAAgVAPgMQAPgMAmgJIAZgGIAAgYQAAgTgFgGQgFgGgOAAQgHAAgDACQgCADgBAHQgCAcgYAAQgWAAAAgUQAAgQATgKQAUgJAhAAQA/AAAAAsIAABUQAAAQAIAEQAFACALABIAAALQgQALgWAAQgcAAgGgTgAgFAEQgPABgHAHQgGAIAAARQAAAZAXAAQAOAAAGgJIAAgyg");
	this.shape_4.setTransform(-20.925,-16.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhKBpIgDg+IANAAQAOAaAKAMQANARAXAAQAQAAALgKQALgJAAgNQAAgOgKgJQgLgLgbgKQgigNgOgQQgNgQAAgZQAAgdAWgSQAWgTAjAAQAmAAAUAHIADA3IgNAAQgNgYgJgKQgKgLgTAAQgPAAgLAJQgKAJAAAMQAAAMAIAIQAJAIAbAKQAmAPAQAPQAPAQAAAXQAAAggWAVQgXAWgnAAQglAAgfgKg");
	this.shape_5.setTransform(-38.525,-19.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.1,-36,246.29999999999998,73);


(lib.Doplnění13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAFQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape.setTransform(120.45,3.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAeQgFgHgBgMQABgLAGgHQAGgHAIAAQAGAAAIAGIgBgIIAAgTIAJAAIAABGIgHAAIgBgFIAAAAQgIAGgGAAQgJAAgGgGgAgIgCQgEAFAAAIQAAAIADAFQAFAGAEAAQAHAAAGgIIAAgYQgGgFgGAAQgFAAgEAFg");
	this.shape_1.setTransform(116.45,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMAZIAAgdQgBgNgJABQgDgBgDACIgGAGIAAAiIgIAAIAAgwIAGAAIABAIIAAAAQAIgJAIAAQAPAAAAATIAAAeg");
	this.shape_2.setTransform(111.35,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAWQgEgDAAgHQAAgIAHgEQAHgDAPgCQgBgMgJgBQgGAAgIAGIgDgGQAKgHAIAAQARAAAAAVIAAAcIgHAAIAAgGIgBAAQgIAIgHgBQgGAAgEgDgAgFAEQgFACAAAGQAAAHAIAAQAGAAAHgGIAAgNQgLAAgFAEg");
	this.shape_3.setTransform(106.2,1.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAZIAAg8IAIAAIAAA9QAAABAAABQAAAAAAABQABAAAAAAQAAABABAAIACgBIABAHIgFAAQgIAAAAgLg");
	this.shape_4.setTransform(102.825,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNATQgHgHAAgMQAAgKAHgIQAGgGAIgBQAJAAAGAHQAFAGAAAKIgBAEIggAAQABAIAEAFQAFAEAGAAQAGAAAGgDIADAFQgIAEgIAAQgJAAgHgGgAANgCQAAgIgDgEQgDgEgGAAQgEAAgEAEQgEAEgBAIIAZAAIAAAAg");
	this.shape_5.setTransform(99.125,1.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAZIAAgwIAIAAIAAAJIAAAAQAFgKAJAAIAEABIgBAIIgFgBQgHAAgEALIAAAeg");
	this.shape_6.setTransform(95.5,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_7.setTransform(92.275,0.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAkIAAgpIgGAAIAAgGIAGAAIAAgIQAAgQANAAIAIABIgBAHIgGgBQgHAAABAJIAAAIIAKAAIAAAGIgKAAIAAApg");
	this.shape_8.setTransform(88.2,-0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOATQgIgHABgMQgBgLAIgHQAFgGAJgBQAJABAHAGQAGAHABALQgBAMgGAHQgHAGgJAAQgJAAgFgGgAgJgMQgEAFAAAHQAAAJAEAFQAEAFAFAAQAGAAAEgFQAEgFAAgJQAAgHgEgFQgEgGgGAAQgFAAgEAGg");
	this.shape_9.setTransform(83.95,1.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALAjIgNgXIgJALIAAAMIgIAAIAAhGIAIAAIAAAvIAUgYIAJAAIgQATIASAcg");
	this.shape_10.setTransform(77.525,0.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALAZIAAgdQAAgNgJABQgDgBgDACIgGAGIAAAiIgIAAIAAgwIAGAAIABAIIAAAAQAIgJAIAAQAPAAAAATIAAAeg");
	this.shape_11.setTransform(72.2,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOAWQgEgDAAgHQAAgIAHgEQAHgDAPgCQgBgMgJgBQgGAAgIAGIgDgGQAKgHAIAAQARAAAAAVIAAAcIgHAAIAAgGIgBAAQgIAIgHgBQgGAAgEgDgAgFAEQgFACAAAGQAAAHAIAAQAGAAAHgGIAAgNQgLAAgFAEg");
	this.shape_12.setTransform(67.05,1.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAhIAAhBIATAAQAWAAAAAQQAAAFgDAEQgDAEgGABIAAABQAQABAAAOQAAAJgHAFQgHAFgKAAgAgNAaIAKAAQARAAAAgNQAAgMgRAAIgKAAgAgNgEIAJAAQAPAAAAgLQAAgKgPAAIgJAAg");
	this.shape_13.setTransform(62.1,0.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAZIAAg8IAIAAIAAA9QAAABAAABQAAAAAAABQABAAAAAAQAAABABAAIACgBIABAHIgFAAQgIAAAAgLg");
	this.shape_14.setTransform(56.225,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAWQgEgDAAgHQAAgIAHgEQAHgDAOgCQAAgMgKgBQgFAAgIAGIgDgGQAJgHAJAAQARAAAAAVIAAAcIgHAAIgBgGIAAAAQgIAIgHgBQgGAAgEgDgAgGAEQgEACAAAGQAAAHAJAAQAEAAAHgGIAAgNQgKAAgGAEg");
	this.shape_15.setTransform(52.35,1.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMAZIAAgwIAGAAIABAJIABAAQAEgKAIAAIAGABIgCAIIgFgBQgHAAgEALIAAAeg");
	this.shape_16.setTransform(48.75,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHAPIAAgaIgHAAIAAgFIAIgBIAAgOIAHAAIAAAOIAMAAIAAAGIgMAAIAAAaQAAAKAHAAIAFgCIACAHIgJABQgNABAAgRg");
	this.shape_17.setTransform(45.2,0.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAMAZIAAgdQAAgNgKABQgDgBgDACIgGAGIAAAiIgJAAIAAgwIAHAAIABAIIAAAAQAJgJAHAAQAPAAAAATIAAAeg");
	this.shape_18.setTransform(40.95,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNATQgHgHAAgMQAAgKAHgIQAGgGAIgBQAJAAAGAHQAFAGAAAKIgBAEIggAAQABAIAEAFQAFAEAGAAQAGAAAGgDIADAFQgIAEgIAAQgJAAgHgGgAANgCQAAgIgDgEQgDgEgGAAQgEAAgEAEQgEAEgBAIIAZAAIAAAAg");
	this.shape_19.setTransform(35.975,1.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPAZQgJgJAAgQQAAgOAJgKQAIgJAMAAQAKAAAIAIIgFAGQgGgHgHABQgIgBgGAIQgFAHgBALQABAMAFAIQAGAHAHAAQAJAAAGgHIAGAFQgJAJgMAAQgMAAgHgJg");
	this.shape_20.setTransform(30.9,0.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNATQgHgHAAgMQAAgKAHgIQAGgGAIgBQAJAAAGAHQAFAGAAAKIgBAEIggAAQABAIAEAFQAFAEAGAAQAGAAAGgDIADAFQgIAEgIAAQgJAAgHgGgAANgCQAAgIgDgEQgDgEgGAAQgEAAgEAEQgEAEgBAIIAZAAIAAAAg");
	this.shape_21.setTransform(23.925,1.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AALAjIAAgdQAAgMgJAAQgCAAgDABIgHAFIAAAjIgIAAIAAhGIAIAAIAAATIAAAKQAIgHAHgBQAOAAAAATIAAAeg");
	this.shape_22.setTransform(18.95,0.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHAPIAAgaIgHAAIAAgFIAHgBIABgOIAGAAIAAAOIANAAIAAAGIgNAAIAAAaQABAKAHAAIAFgCIACAHIgJABQgNABAAgRg");
	this.shape_23.setTransform(14.8,0.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgTAiIACgHIADABQAIAAADgLIABgDIgTgwIAIAAIAKAbIAEANIAFgNIAIgbIAIAAIgSA0QgFARgMAAIgGgBg");
	this.shape_24.setTransform(9.125,2.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMAeIgBAAIAAAFIgHAAIAAhGIAIAAIAAATIAAAJQAIgHAGAAQAJAAAGAHQAEAHAAAKQAAAMgGAIQgGAGgJAAQgGAAgGgGgAgMgBIAAAZQAGAFAGABQAFgBAEgFQAEgFAAgJQAAgRgNAAQgFAAgHAGg");
	this.shape_25.setTransform(4.375,0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPAeQgGgHABgMQgBgLAHgHQAGgHAIAAQAGAAAIAGIgBgIIAAgTIAIAAIAABGIgGAAIgBgFIAAAAQgIAGgGAAQgJAAgGgGgAgIgCQgEAFAAAIQAAAIADAFQAFAGAEAAQAHAAAGgIIAAgYQgFgFgHAAQgFAAgEAFg");
	this.shape_26.setTransform(-3.1,0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNATQgHgHAAgMQAAgKAHgIQAGgGAIgBQAJAAAGAHQAFAGAAAKIgBAEIggAAQABAIAEAFQAFAEAGAAQAGAAAGgDIADAFQgIAEgIAAQgJAAgHgGgAANgCQAAgIgDgEQgDgEgGAAQgEAAgEAEQgEAEgBAIIAZAAIAAAAg");
	this.shape_27.setTransform(-7.925,1.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHAPIAAgaIgHAAIAAgFIAHgBIABgOIAHAAIAAAOIAMAAIAAAGIgMAAIAAAaQAAAKAHAAIAFgCIACAHIgJABQgNABAAgRg");
	this.shape_28.setTransform(-11.85,0.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgOAWQgEgDAAgHQAAgIAHgEQAHgDAPgCQAAgMgKgBQgGAAgIAGIgDgGQAKgHAIAAQARAAAAAVIAAAcIgHAAIgBgGIAAAAQgJAIgGgBQgGAAgEgDgAgGAEQgEACAAAGQAAAHAIAAQAFAAAIgGIAAgNQgLAAgGAEg");
	this.shape_29.setTransform(-16,1.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGAZIAAg8IAIAAIAAA9QAAABAAABQAAAAAAABQABAAAAAAQAAABABAAIACgBIABAHIgFAAQgIAAAAgLg");
	this.shape_30.setTransform(-19.375,0.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSAGIAAgeIAIAAIAAAdQAAAHACADQACADAFAAQAGAAAGgIIAAgiIAIAAIAAAwIgGAAIgBgIQgIAJgHAAQgPAAAAgTg");
	this.shape_31.setTransform(-23.375,1.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQAhQgFgEAAgGQAAgGAHgFIAAAAQgEgDAAgFQAAgFAFgDIAAgBQgGgFAAgIQAAgHAFgFQAFgFAIAAQADAAADABIARAAIAAAGIgKAAQAEAEAAAGQAAAIgGAFQgFAEgGAAQgEAAgDgBQgEACAAACQAAAGAJAAIAIAAQARAAAAALQAAAHgGAFQgHAFgKAAQgJAAgGgDgAgOAWQAAAEAEACQADACAHAAQAGAAAEgDQAEgCAAgEQAAgGgJAAIgIAAIgGgBQgFADAAAFgAgIgaQgDADAAAFQAAAFADAEQADADAEAAQADAAADgDQADgEAAgFQAAgFgDgDQgDgDgDAAQgFAAgCADg");
	this.shape_32.setTransform(-28.175,2.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgNATQgHgHAAgMQAAgKAHgIQAGgGAIgBQAJAAAGAHQAFAGAAAKIgBAEIggAAQABAIAEAFQAFAEAGAAQAGAAAGgDIADAFQgIAEgIAAQgJAAgHgGgAANgCQAAgIgDgEQgDgEgGAAQgEAAgEAEQgEAEgBAIIAZAAIAAAAg");
	this.shape_33.setTransform(-33.075,1.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNAZIAAgwIAHAAIABAJIAAAAQAFgKAJAAIAEABIgBAIIgFgBQgHAAgEALIAAAeg");
	this.shape_34.setTransform(-36.7,1.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgRATIAEgFQAHAFAGAAQAFAAADgCQACgCAAgDQAAgDgEgDIgGgDQgHgDgDgCQgFgDAAgGQAAgFAFgEQAEgEAHgBQAIAAAHAGIgEAGQgFgFgGAAQgDAAgCACQgDACAAADQAAADAEADIAGADQAHACADABQAFAEAAAGQAAAGgFAFQgFADgIAAQgJAAgIgGg");
	this.shape_35.setTransform(-42.525,1.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDAiIAAgvIAHAAIAAAvgAgDgZQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIADgBIAEABQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_36.setTransform(-45.625,0.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgMATQgGgHAAgMQAAgLAHgHQAGgGAJgBQAIABAGAFIgEAGQgFgEgEgBQgGAAgEAGQgFAFAAAHQAAAJAFAFQAEAFAFAAQAGAAAGgFIADAFQgHAHgIgBQgJAAgHgGg");
	this.shape_37.setTransform(-50.625,1.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgOAWQgEgDAAgHQAAgIAHgEQAHgDAOgCQABgMgLgBQgFAAgIAGIgDgGQAJgHAJAAQARAAAAAVIAAAcIgHAAIgBgGIAAAAQgJAIgGgBQgGAAgEgDgAgGAEQgEACAAAGQAAAHAJAAQAFAAAGgGIAAgNQgKAAgGAEg");
	this.shape_38.setTransform(-55.4,1.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPAeQgFgHgBgMQABgLAGgHQAGgHAIAAQAHAAAGAGIAAgIIAAgTIAIAAIAABGIgHAAIAAgFIgBAAQgGAGgHAAQgJAAgGgGgAgHgCQgFAFAAAIQAAAIAEAFQADAGAGAAQAGAAAGgIIAAgYQgFgFgHAAQgFAAgDAFg");
	this.shape_39.setTransform(-60.65,0.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNATQgHgHAAgMQAAgKAHgIQAGgGAIgBQAJAAAGAHQAFAGAAAKIgBAEIggAAQABAIAEAFQAFAEAGAAQAGAAAGgDIADAFQgIAEgIAAQgJAAgHgGgAANgCQAAgIgDgEQgDgEgGAAQgEAAgEAEQgEAEgBAIIAZAAIAAAAg");
	this.shape_40.setTransform(-67.275,1.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMATQgGgHAAgMQAAgLAHgHQAGgGAJgBQAIABAGAFIgEAGQgFgEgEgBQgGAAgEAGQgFAFAAAHQAAAJAFAFQAEAFAFAAQAGAAAGgFIADAFQgHAHgIgBQgJAAgHgGg");
	this.shape_41.setTransform(-71.775,1.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALAZIAAgdQAAgNgJABQgCgBgEACIgGAGIAAAiIgIAAIAAgwIAGAAIABAIIABAAQAHgJAIAAQAOAAAAATIAAAeg");
	this.shape_42.setTransform(-76.65,1.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgOAWQgEgDAAgHQAAgIAHgEQAHgDAPgCQgBgMgJgBQgGAAgIAGIgDgGQAKgHAIAAQARAAAAAVIAAAcIgHAAIAAgGIgBAAQgIAIgHgBQgGAAgEgDgAgFAEQgFACAAAGQAAAHAIAAQAFAAAIgGIAAgNQgLAAgFAEg");
	this.shape_43.setTransform(-81.8,1.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgNAZIAAgwIAIAAIAAAJIAAAAQAFgKAJAAIAEABIgBAIIgFgBQgHAAgEALIAAAeg");
	this.shape_44.setTransform(-85.4,1.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgSAGIAAgeIAIAAIAAAdQAAAHACADQACADAFAAQAGAAAGgIIAAgiIAIAAIAAAwIgGAAIgBgIQgIAJgHAAQgPAAAAgTg");
	this.shape_45.setTransform(-90.075,1.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgRATIAEgFQAHAFAGAAQAFAAADgCQACgCAAgDQAAgDgEgDIgGgDQgHgDgDgCQgFgDAAgGQAAgFAFgEQAEgEAHgBQAIAAAHAGIgEAGQgFgFgGAAQgDAAgCACQgDACAAADQAAADAEADIAGADQAHACADABQAFAEAAAGQAAAGgFAFQgFADgIAAQgJAAgIgGg");
	this.shape_46.setTransform(-94.625,1.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAMAZIAAgdQAAgNgKABQgCgBgDACIgHAGIAAAiIgJAAIAAgwIAIAAIAAAIIAAAAQAJgJAHAAQAOAAAAATIAAAeg");
	this.shape_47.setTransform(-99.2,1.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgDAhIAAhBIAHAAIAABBg");
	this.shape_48.setTransform(-103.025,0.325);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AASAhIgGgUIgXAAIgGAUIgJAAIAWhBIAJAAIAWBBgAAKAGIgDgJIgHgWIgGAWIgDAJIATAAg");
	this.shape_49.setTransform(-108.625,0.325);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAPAhIgKgSIgFgKIAAAAIgFAKIgJASIgJAAIATghIgSggIAJAAIAJARIAEAJIABAAIAEgJIAJgRIAJAAIgSAgIATAhg");
	this.shape_50.setTransform(-113.675,0.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AASAhIgGgUIgXAAIgGAUIgJAAIAWhBIAJAAIAWBBgAAKAGIgDgJIgHgWIgGAWIgDAJIATAAg");
	this.shape_51.setTransform(-118.725,0.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.5,-8.2,247.1,16.6);


(lib.Doplnění11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FBEAF").s().p("AjkDLIE5mVICQAAIk5GVg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-20.3,45.7,40.7);


(lib.Doplnění9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2A8QgUgVAAgnQAAgkAZgXQAXgWAfAAQBFAAABBPIhlAAQABAeAOAPQALAMAYAAQAWAAAYgLIAAANQgJAKgPAHQgTAIgWAAQgmAAgVgWgAgagRIA1gDQAAgbgFgJQgEgKgPAAQgbAAgCAxg");
	this.shape.setTransform(64.025,1.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyA8QgUgVAAglQAAgqAfgWQAZgTAkAAQAxAAAAAcQAAAKgGAHQgGAHgKAAQgTAAgCgXQgBgIgDgDQgDgCgHAAQgkAAAAA2QAABCAyAAQATAAAYgMIAAAOQgJAKgPAGQgSAJgXAAQgkAAgUgWg");
	this.shape_1.setTransform(48.45,1.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJBQIAAgMIAIgCQAHgCABgCQACgDAAgKIAAhKQAAgOgGgGQgFgGgLAAQgLAAgSAGIAABeQAAAKABADQACACAHACIAIACIAAAMIhVAAIAAgMIAIgCQAIgCACgDQACgCAAgKIAAhWQAAgJgCgDQgCgCgHgFIgKgGIAAgKIA/gHIAEADIgCASIACAAQAdgVAdAAQApAAAAAoIAABYQAAAKACACQACADAHACIAIACIAAAMg");
	this.shape_2.setTransform(31.125,1.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMBAIgCAAQgNASgcAAQgVAAgNgLQgMgLAAgSQAAgUANgMQAPgLAjgIIAXgFIAAgXQAAgSgFgGQgEgFgNAAQgHAAgCACQgDACAAAHQgCAbgXAAQgUAAAAgTQAAgQASgIQASgKAfAAQA7AAABApIAABQQAAAOAHAEQAEACAKABIAAALQgOAKgVAAQgaAAgFgSgAgFAEQgOABgGAHQgGAHAAAQQAAAYAVAAQAOAAAFgJIAAgvg");
	this.shape_3.setTransform(13.6,1.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCBQIAAgMIAIgCQAIgCACgDQACgCAAgKIAAhWQAAgJgCgDQgCgCgHgFIgKgGIAAgKIA/gHIAEADIgCAUIACAAQAHgJAMgGQAOgIAMAAQAXAAAAAWQAAAXgVAAQgKAAgEgDQgFgCgEgHQgDgEgFAAQgGAAgKAJIAABaQAAAKACADQABADAHABIALACIAAAMg");
	this.shape_4.setTransform(-1.775,1.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbBPIACgUIgBAAQgfAXgcAAQgTAAgLgKQgLgLAAgUIAAhRQAAgJgBgDQgBgCgHgFIgLgFIAAgKIA/gGIAFACIAABrQAAAZAVAAQAKAAAUgIIAAhWQAAgJgCgDQgBgCgHgFIgLgFIAAgKIA/gGIAFACIAAB0QAAAMACADQABACAHADIAJAFIAAAKIg9AJg");
	this.shape_5.setTransform(-18.475,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag4BMIgDguIAMAAQAJARAIAJQAKALASAAQAZAAAAgUQAAgKgJgHQgHgEgUgJQgtgQAAgfQAAgWARgOQARgPAeAAQAbAAAPAGIACApIgMAAQgHgMgKgMQgHgHgNAAQgYAAAAATQAAAIAHAFQAHAGASAHQAcAJALALQAMALAAARQAAAYgSAPQgSAPggAAQgZAAgXgGg");
	this.shape_6.setTransform(-34.575,1.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAJBQIAAgMIAIgCQAHgCABgCQACgDAAgKIAAhKQAAgOgGgGQgFgGgLAAQgLAAgSAGIAABeQAAAKABADQACACAHACIAIACIAAAMIhVAAIAAgMIAIgCQAIgCACgDQACgCAAgKIAAhWQAAgJgCgDQgCgCgHgFIgKgGIAAgKIA/gHIAEADIgCASIACAAQAdgVAdAAQApAAAAAoIAABYQAAAKACACQACADAHACIAIACIAAAMg");
	this.shape_7.setTransform(-50.875,1.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgyBoIAAgMIAMgCQAHgCACgDQADgEAAgMIAAiJQAAgNgDgDQgCgDgHgCIgMgCIAAgMIBlAAIAAAMIgMACQgIACgCADQgCADAAANIAACJQAAANACADQACADAIACIAMACIAAAMg");
	this.shape_8.setTransform(-65.975,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.9,-17,147.9,34);


(lib.Doplnění8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2A8QgUgVAAgnQAAgkAZgXQAXgWAfAAQBFAAABBPIhlAAQABAeAOAPQALAMAYAAQAWAAAYgLIAAANQgJAKgPAHQgTAIgWAAQgmAAgVgWgAgagRIA1gDQAAgbgFgJQgEgKgPAAQgbAAgCAxg");
	this.shape.setTransform(69.725,1.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA3BQIAAgMIAIgCQAGgCACgCQABgDAAgKIAAhKQAAgOgEgGQgFgGgLAAQgKAAgRAGIgBAIIAABWQAAAKACADQABACAGACIAIACIAAAMIhQAAIAAgMIAHgCQAHgCABgCQACgDAAgKIAAhKQAAgOgFgGQgEgGgLAAQgMAAgQAGIAABeQAAAKABADQACACAGACIAIACIAAAMIhUAAIAAgMIAIgCQAIgCACgDQACgCAAgKIAAhWQAAgJgCgDQgCgCgHgFIgKgGIAAgKIA/gHIAEADIgCASIACAAQAegVAbAAQAaAAAKAVIABAAQAggVAaAAQAnAAAAAoIAABYQAAAKACACQABADAIACIAIACIAAAMg");
	this.shape_1.setTransform(47.975,1.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5A+QgZgWAAgnQAAgoAagWQAXgUAhAAQAkAAAWAUQAZAWAAAnQAAAogZAWQgXAUgjAAQgiAAgXgUgAgYg0QgIAOAAAlQAAAnAIAPQAIAOARAAQAQAAAHgNQAJgPAAgmQAAgngJgPQgHgMgRAAQgQAAgIANg");
	this.shape_2.setTransform(25.375,1.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANBoIAAgMIALgCQAHgCACgDQADgDAAgNIAAg/IhHAAIAAA/QAAANACADQACADAIACIAKACIAAAMIhjAAIAAgMIALgCQAHgCACgDQADgEAAgMIAAiJQAAgMgDgEQgCgDgHgCIgLgCIAAgMIBjAAIAAAMIgKACQgIADgCACQgCAEAAAMIAAA6IBHAAIAAg6QAAgMgDgEQgBgCgIgDIgLgCIAAgMIBjAAIAAAMIgKACQgIACgCADQgCAEAAAMIAACJQAAAMACAEQACADAIACIAKACIAAAMg");
	this.shape_3.setTransform(5.15,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAJBoIAAgMIAIgCQALgDAAgHQAAgEgFgQIgHgSIhBAAIgGASQgEAPgBAEQAAAFADACQADACAIACIAJACIAAAMIhFAAIAAgMIAJgCQAHgCADgEQAEgFAGgQIA+imIAeAAIBACnQAGAPAFAFQACAFAIACIAHABIAAAMgAAKAZIgZhKIgCAAIgaBKIA1AAg");
	this.shape_4.setTransform(-24,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAABoIAAgMIALgCQAKgBAAgIQAAgEgKgQIgbgsIAAAAIgcArQgJAPAAAGQAAAHAJACIAKACIAAAMIhGAAIAAgMIAGgBQAHgDAGgEQAGgGAKgOIAqg9IguhHQgIgKgDgEQgEgEgIgDIgHgCIAAgMIBqAAIAAAMIgKACQgKACAAAHQAAAFAJAPIAZAoIABAAIAXgpQAIgLgBgIQAAgHgKgCIgKgCIAAgMIBHAAIAAAMIgJACQgFACgFAFIgQAUIgkA4IAxBJIANASQAEAEAFACIAGABIAAAMg");
	this.shape_5.setTransform(-45.05,-1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIBoIAAgMIAJgCQALgDAAgHQAAgEgFgQIgHgSIhAAAIgHASQgFAPABAEQAAAFACACQADACAHACIAJACIAAAMIhDAAIAAgMIAHgCQAIgCAEgEQADgFAHgQIA+imIAdAAIBACnQAGAPAEAFQAEAFAGACIAHABIAAAMgAAKAZIgZhKIgCAAIgZBKIA0AAg");
	this.shape_6.setTransform(-66.25,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-17,158.3,34);


(lib.Doplnění7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF1620").s().p("AjkDLIE5mVICQAAIk5GVg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-20.3,45.7,40.7);


(lib.Doplnění6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 1
	this.instance = new lib.branch_down();
	this.instance.setTransform(-200,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-125,400,250);


(lib.Doplnění5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 1
	this.instance = new lib.branch_left();
	this.instance.setTransform(-200,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-125,400,250);


(lib.Doplnění4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 1
	this.instance = new lib.branch_down();
	this.instance.setTransform(-200,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-125,400,250);


(lib.Doplnění3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 1
	this.instance = new lib.branch_top();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Doplnění2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 1
	this.instance = new lib.birds();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Doplnění1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 1
	this.instance = new lib.bg();
	this.instance.setTransform(-250,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-200,500,400);


(lib.Doplnění12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0.15,0.15,1.3464,1.3464,0,0,0,39.1,39.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF1721").s().p("AiiC3IEbltIAqAAIkaFtg");
	this.shape.setTransform(28.0805,-25.2699,1.3464,1.3464);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-52.5,105,105);


(lib.Doplnění10 = function(mode,startPosition,loop,reversed) {
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
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(43).call(this.frame_43).wait(1));

	// Vrstva 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgyrAEhMApKg2gMA8NAteMgpLA2gg");
	mask.setTransform(-274.8,-153.8);

	// Vrstva 3
	this.instance = new lib.Doplnění14("synched",0);
	this.instance.setTransform(60,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-211},12,cjs.Ease.get(0.6)).wait(32));

	// Vrstva 11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgyrAEhMApKg2gMA8NAteMgpLA2gg");
	mask_1.setTransform(-274.8,-153.8);

	// Vrstva 2
	this.instance_1 = new lib.Doplnění15("synched",0);
	this.instance_1.setTransform(0,12.05);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({x:-252},12,cjs.Ease.get(0.6)).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-381.7,-122,431.3,250);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
		var i = 1;
	}
	this.frame_544 = function() {
		if (i>0) {
			this.stop();
			}
		else {
			i++;
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(544).call(this.frame_544).wait(11));

	// Vrstva 14
	this.instance = new lib.Doplnění13("synched",0);
	this.instance.setTransform(151,234);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(422).to({_off:false},0).to({alpha:1},9).to({startPosition:0},114).to({alpha:0},9).wait(1));

	// logo
	this.instance_1 = new lib.Doplnění12("synched",0);
	this.instance_1.setTransform(150,79);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(404).to({_off:false},0).to({y:92,alpha:1},9,cjs.Ease.get(1)).to({startPosition:0},132).to({alpha:0},9).wait(1));

	// button
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(150,199.6,1,1,0,0,0,119,18.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(413).to({_off:false},0).to({alpha:1},9).wait(75).to({regY:18.7,scaleX:1.0378,scaleY:1.0378,x:150.05,y:199.7},4).to({regY:18.6,scaleX:1,scaleY:1,x:150,y:199.6},4).to({regY:18.7,scaleX:1.0378,scaleY:1.0378,x:150.05,y:199.7},4).to({regY:18.6,scaleX:1,scaleY:1,x:150,y:199.6},4).wait(32).to({alpha:0},9).wait(1));

	// Vrstva 9
	this.instance_3 = new lib.Doplnění10();
	this.instance_3.setTransform(352,122);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(267).to({_off:false},0).wait(128).to({x:322,alpha:0},9,cjs.Ease.get(-0.68)).wait(151));

	// Vrstva 8
	this.instance_4 = new lib.Doplnění9("synched",0);
	this.instance_4.setTransform(125,175.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(152).to({_off:false},0).to({y:155,alpha:1},10,cjs.Ease.get(1)).to({startPosition:0},88).to({y:145,alpha:0},9,cjs.Ease.get(-0.5)).wait(296));

	// AXA home
	this.instance_5 = new lib.Doplnění8("synched",0);
	this.instance_5.setTransform(131,142);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(152).to({_off:false},0).to({y:122,alpha:1},10,cjs.Ease.get(1)).to({startPosition:0},88).to({y:112,alpha:0},9,cjs.Ease.get(-0.5)).wait(296));

	// ribbon
	this.instance_6 = new lib.Doplnění7("synched",0);
	this.instance_6.setTransform(55,119);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(145).to({_off:false},0).to({alpha:1},7).to({startPosition:0},98).to({alpha:0},9).to({_off:true},1).wait(295));

	// ribbon_green
	this.instance_7 = new lib.Doplnění11("synched",0);
	this.instance_7.setTransform(244.8,80.95,7.4396,7.4387,0,0,0,0,0.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(259).to({_off:false},0).to({alpha:1},8).to({startPosition:0},128).to({alpha:0},9).wait(151));

	// Vrstva 6
	this.instance_8 = new lib.Doplnění5("synched",0);
	this.instance_8.setTransform(120,136,1.025,1.025);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({scaleX:1.296,scaleY:1.296,x:101,y:160},109,cjs.Ease.get(0.5)).to({alpha:0},9,cjs.Ease.get(1)).wait(410));

	// Vrstva 3
	this.instance_9 = new lib.Doplnění6("synched",0);
	this.instance_9.setTransform(349,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({scaleX:1.365,scaleY:1.365,x:389,y:79},114,cjs.Ease.get(0.5)).to({startPosition:0},8).to({alpha:0},9).wait(410));

	// branch_down
	this.instance_10 = new lib.Doplnění4("synched",0);
	this.instance_10.setTransform(149,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:0.2,regY:-0.1,scaleX:1.2481,scaleY:1.2481,rotation:-0.4897,x:199.3,y:134.05},112,cjs.Ease.get(0.5)).to({startPosition:0},24,cjs.Ease.get(1)).to({alpha:0},9,cjs.Ease.get(1)).wait(410));

	// branch_top
	this.instance_11 = new lib.Doplnění3("synched",0);
	this.instance_11.setTransform(175,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:0.1,regY:0.2,scaleX:1.1835,scaleY:1.1835,x:165.15,y:117.3},135,cjs.Ease.get(1)).to({startPosition:0},1).to({alpha:0},9).wait(410));

	// birds3
	this.instance_12 = new lib.Doplnění2("synched",0);
	this.instance_12.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:8,y:228},135,cjs.Ease.get(1)).to({startPosition:0},1).to({alpha:0},9).wait(410));

	// bg
	this.instance_13 = new lib.Doplnění1("synched",0);
	this.instance_13.setTransform(150.45,98.6,0.6075,0.6075,0,0,0,0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:0.1,regY:0.1,scaleX:0.8699,scaleY:0.8699,x:129.1,y:127.1},135,cjs.Ease.get(1)).to({startPosition:0},1).to({regX:0,regY:0,scaleX:0.805,scaleY:0.805,x:129,y:127,alpha:0},9).wait(410));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-277.2,-351.7,939.2,704.7);


// stage content:
(lib._300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Vrstva 2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(250,200,1,1,0,0,0,250,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(65,102,484,162.10000000000002);
// library properties:
lib.properties = {
	id: '75427306A193484FA84565BAE266C135',
	width: 300,
	height: 250,
	fps: 40,
	color: "#343C3D",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1598263154005", id:"bg"},
		{src:"images/birds.png?1598263154005", id:"birds"},
		{src:"images/branch_down.png?1598263154005", id:"branch_down"},
		{src:"images/branch_left.png?1598263154005", id:"branch_left"},
		{src:"images/branch_top.png?1598263154005", id:"branch_top"}
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
an.compositions['75427306A193484FA84565BAE266C135'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;