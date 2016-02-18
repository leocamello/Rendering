/// <reference path="three.min.js" />

// JavaScript source code

var once = 0;
var bounces = '10.0';
var shininess = '100.0';
var epsilon = '0.0001';
var infinity = '10000.0';
var background = 'vec3(0.5)';

var canvasWidth = 512, canvasHeight = 512;

function createCamera(fov, near, far, width, height, eye, center, up) {
	camera = new Camera(fov, near, far, width, height, eye, center, up);

	changeValue();
}

function defaultScene() {
	var scene = new Scene();

	background = 'vec3(0.5)';

	var lpos = new THREE.Vector3(60.0, 120.0, 40.0);
	var light = new Light(0, lpos);
	light.setColor(0.8, 0.8, 0.8);
	scene.lights.push(light);

	var spos = new THREE.Vector3(0.0, 20.0, 0.0);
	var sphere = new Sphere(1, 25.0, spos);
	sphere.setDiffuseColor(0.0, 0.0, 1.0);
	sphere.setSpecularColor(1.0, 1.0, 1.0);
	//sphere.setReflective('true');
	scene.objects.push(sphere);

	var vmin = new THREE.Vector3(-80.0, -50.0, -60.0);
	var vmax = new THREE.Vector3(50.0, 50.0, -50.0);
	var vbox = new Box(2, vmin, vmax);
	vbox.setDiffuseColor(0.7, 0.7, 0.0);
	vbox.setSpecularColor(0.9, 0.9, 0.9);
	vbox.setReflective('true');
	scene.objects.push(vbox);

	var hmin = new THREE.Vector3(-80.0, -50.0, -50.0);
	var hmax = new THREE.Vector3(50.0, -45.0, 50.0);
	var hbox = new Box(3, hmin, hmax);
	hbox.setDiffuseColor(0.7, 0.7, 0.0);
	hbox.setSpecularColor(0.0, 0.0, 0.0);
	//hbox.setReflective('true');
	scene.objects.push(hbox);

	createCamera(90, 30, 230, 512, 512, new THREE.Vector3(100, 40, 40), new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));

	return scene;
}

function spheresScene() {
	var scene = new Scene();

	background = 'vec3(0.0)';

	//var l1pos = new THREE.Vector3(0.0, 500.0, 0.0);
	//var light1 = new Light(0, l1pos);
	//light1.setColor(0.8, 0.8, 0.8);
	//scene.lights.push(light1);

	var l2pos = new THREE.Vector3(250.0, 125.0, 250.0);
	var light2 = new Light(9, l2pos);
	light2.setColor(0.8, 0.8, 0.8);
	scene.lights.push(light2);

	var l3pos = new THREE.Vector3(250.0, 125.0, -250.0);
	var light3 = new Light(10, l3pos);
	light3.setColor(0.8, 0.8, 0.8);
	scene.lights.push(light3);

	var l4pos = new THREE.Vector3(-250.0, 125.0, 250.0);
	var light4 = new Light(11, l4pos);
	light4.setColor(0.8, 0.8, 0.8);
	scene.lights.push(light4);

	var l5pos = new THREE.Vector3(-250.0, 125.0, -250.0);
	var light5 = new Light(12, l5pos);
	light5.setColor(0.8, 0.8, 0.8);
	scene.lights.push(light5);

	var mul = 0.5;
	var radius = 25.0;

	var s1pos = new THREE.Vector3(0.0, 0.75*radius, 0.0);
	var sphere1 = new Sphere(1, 0.75*radius, s1pos);
	sphere1.setDiffuseColor(1.0, 1.0, 1.0);
	sphere1.setSpecularColor(0.5, 0.5, 0.5);
	sphere1.setReflective('true');
	scene.objects.push(sphere1);

	var s2pos = new THREE.Vector3(Math.cos(1.0 * Math.PI / 3.0) * radius, 0.0, Math.sin(1.0 * Math.PI / 3.0) * radius);
	var sphere2 = new Sphere(2, mul * radius, s2pos);
	sphere2.setDiffuseColor(1.0, 0.0, 0.0);
	sphere2.setSpecularColor(0.5, 0.5, 0.5);
	sphere2.setReflective('true');
	scene.objects.push(sphere2);

	var s3pos = new THREE.Vector3(Math.cos(2.0 * Math.PI / 3.0) * radius, 0.0, Math.sin(2.0 * Math.PI / 3.0) * radius);
	var sphere3 = new Sphere(3, mul * radius, s3pos);
	sphere3.setDiffuseColor(1.0, 1.0, 0.0);
	sphere3.setSpecularColor(0.5, 0.5, 0.5);
	sphere3.setReflective('true');
	scene.objects.push(sphere3);

	var s4pos = new THREE.Vector3(Math.cos(3.0 * Math.PI / 3.0) * radius, 0.0, Math.sin(3.0 * Math.PI / 3.0) * radius);
	var sphere4 = new Sphere(4, mul * radius, s4pos);
	sphere4.setDiffuseColor(0.0, 1.0, 0.0);
	sphere4.setSpecularColor(0.5, 0.5, 0.5);
	sphere4.setReflective('true');
	scene.objects.push(sphere4);

	var s5pos = new THREE.Vector3(Math.cos(4.0 * Math.PI / 3.0) * radius, 0.0, Math.sin(4.0 * Math.PI / 3.0) * radius);
	var sphere5 = new Sphere(5, mul * radius, s5pos);
	sphere5.setDiffuseColor(0.0, 1.0, 1.0);
	sphere5.setSpecularColor(0.5, 0.5, 0.5);
	sphere5.setReflective('true');
	scene.objects.push(sphere5);

	var s6pos = new THREE.Vector3(Math.cos(5.0 * Math.PI / 3.0) * radius, 0.0, Math.sin(5.0 * Math.PI / 3.0) * radius);
	var sphere6 = new Sphere(6, mul * radius, s6pos);
	sphere6.setDiffuseColor(0.0, 0.0, 1.0);
	sphere6.setSpecularColor(0.5, 0.5, 0.5);
	sphere6.setReflective('true');
	scene.objects.push(sphere6);

	var s7pos = new THREE.Vector3(Math.cos(6.0 * Math.PI / 3.0) * radius, 0.0, Math.sin(6.0 * Math.PI / 3.0) * radius);
	var sphere7 = new Sphere(7, mul * radius, s7pos);
	sphere7.setDiffuseColor(1.0, 0.0, 1.0);
	sphere7.setSpecularColor(0.5, 0.5, 0.5);
	sphere7.setReflective('true');
	scene.objects.push(sphere7);

	var hmin = new THREE.Vector3(-150.0, -mul * radius, -150.0);
	var hmax = new THREE.Vector3(150.0, -mul * radius - 5.0, 150.0);
	var hbox = new Box(8, hmin, hmax);
	hbox.setDiffuseColor(0.25, 0.25, 0.25);
	hbox.setSpecularColor(0.75, 0.75, 0.75);
	hbox.setReflective('true');
	scene.objects.push(hbox);

	createCamera(90, 30, 230, 512, 512, new THREE.Vector3(100, 40, 40), new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));

	return scene;
}

function roomScene() {
	background = 'vec3(1.0)';

	var scene = new Scene();

	var lpos = new THREE.Vector3(125.0, 150.0, 75.0);
	var light = new Light(0, lpos);
	light.setColor(0.4, 0.4, 0.4);
	scene.lights.push(light);

	var l2pos = new THREE.Vector3(125.0, 150.0, -75.0);
	var light2 = new Light(10, l2pos);
	light2.setColor(0.4, 0.4, 0.4);
	scene.lights.push(light2);

	var l3pos = new THREE.Vector3(125.0, 50.0, 0.0);
	var light3 = new Light(11, l3pos);
	light3.setColor(0.4, 0.4, 0.4);
	scene.lights.push(light3);

	var min = new THREE.Vector3(-25.0, 0.0, -25.0);
	var max = new THREE.Vector3(25.0, 50.0, 25.0);
	var box = new Box(2, min, max);
	box.setDiffuseColor(0.75, 0.75, 0.75);
	box.setSpecularColor(0.1, 0.1, 0.1);
	box.setReflective('true');
	scene.objects.push(box);

	var min2 = new THREE.Vector3(-12.5, 175.0, -12.5);
	var max2 = new THREE.Vector3(12.5, 200.0, 12.5);
	var box2 = new Box(8, min2, max2);
	box2.setDiffuseColor(0.75, 0.75, 0.75);
	box2.setSpecularColor(0.1, 0.1, 0.1);
	box2.setReflective('true');
	scene.objects.push(box2);

	// Gold
	var spos = new THREE.Vector3(0.0, 70.0, 0.0);
	var sphere = new Sphere(1, 20.0, spos);
	sphere.setDiffuseColor(0.5, 0.5, 0.0);
	sphere.setSpecularColor(0.5, 0.5, 0.0);
	sphere.setReflective('true');
	scene.objects.push(sphere);

	// Brass
	var s2pos = new THREE.Vector3(0.0, 165.0, 0.0);
	var sphere2 = new Sphere(9, 10.0, s2pos);
	sphere2.setDiffuseColor(0.5, 0.25, 0.0);
	sphere2.setSpecularColor(0.5, 0.25, 0.0);
	sphere2.setReflective('true');
	scene.objects.push(sphere2);

	// Silver
	var s3pos = new THREE.Vector3(0.0, 122.5, 0.0);
	var sphere3 = new Sphere(12, 15.0, s3pos);
	sphere3.setDiffuseColor(0.5, 0.5, 0.5);
	sphere3.setSpecularColor(0.5, 0.5, 0.5);
	sphere3.setReflective('true');
	scene.objects.push(sphere3);

	var lmin = new THREE.Vector3(-100.0, 0.0, -100.0);
	var lmax = new THREE.Vector3(100.0, 200.0, -105.0);
	var lwall = new Box(3, lmin, lmax);
	lwall.setDiffuseColor(0.0, 0.5, 0.0);
	lwall.setSpecularColor(0.5, 0.5, 0.5);
	//lwall.setReflective('true');
	scene.objects.push(lwall);

	var rmin = new THREE.Vector3(-100.0, 0.0, 100.0);
	var rmax = new THREE.Vector3(100.0, 200.0, 105.0);
	var rwall = new Box(4, rmin, rmax);
	rwall.setDiffuseColor(0.0, 0.0, 0.5);
	rwall.setSpecularColor(0.5, 0.5, 0.5);
	//rwall.setReflective('true');
	scene.objects.push(rwall);

	var tmin = new THREE.Vector3(-100.0, 200.0, -105.0);
	var tmax = new THREE.Vector3(100.0, 205.0, 105.0);
	var twall = new Box(5, tmin, tmax);
	twall.setDiffuseColor(0.7, 0.7, 0.7);
	twall.setSpecularColor(0.5, 0.5, 0.5);
	//twall.setReflective('true');
	scene.objects.push(twall);

	var bmin = new THREE.Vector3(-100.0, -5.0, -105.0);
	var bmax = new THREE.Vector3(100.0, 0.0, 105.0);
	var bwall = new Box(6, bmin, bmax);
	bwall.setDiffuseColor(0.7, 0.7, 0.7);
	bwall.setSpecularColor(0.5, 0.5, 0.5);
	//bwall.setReflective('true');
	scene.objects.push(bwall);

	var zmin = new THREE.Vector3(-105.0, 0.0, -100.0);
	var zmax = new THREE.Vector3(-100.0, 200.0, 100.0);
	var zwall = new Box(7, zmin, zmax);
	zwall.setDiffuseColor(0.7, 0.7, 0.7);
	zwall.setSpecularColor(0.5, 0.5, 0.5);
	//zwall.setReflective('true');
	scene.objects.push(zwall);

	createCamera(45, 10, 1000, 512, 512, new THREE.Vector3(300, 100, 0), new THREE.Vector3(0, 100, 0), new THREE.Vector3(0, 1, 0));

	return scene;
}

function setUniforms(program, uniforms) {
	for (var name in uniforms) {
		var value = uniforms[name];
		var location = gl.getUniformLocation(program, name);
		if (location == null) continue;
		if (value instanceof THREE.Vector3) {
			gl.uniform3fv(location, new Float32Array([value.x, value.y, value.z]));
		} else if (value instanceof THREE.Color) {
			gl.uniform3fv(location, new Float32Array([value.r, value.g, value.b]));
		} else if (value instanceof THREE.Matrix3) {
			gl.uniformMatrix4fv(location, false, new Float32Array(value.flatten()));
		} else if (value instanceof Image) {
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, rayTracer.image);
			gl.uniform1i(location, 0);
		} else {
			gl.uniform1f(location, value);
		}
	}
}

function concat(objects, func) {
	var text = '';
	for (var i = 0; i < objects.length; i++) {
		text += func(objects[i]);
	}
	return text;
}

THREE.Color.prototype.toString = function () {
	return 'vec3(' + this.r + ', ' + this.g + ', ' + this.b + ')';
}

function SceneObject() {
	this.isReflective = false;
}

SceneObject.prototype.setReflective = function (value) {
	this.isReflective = value;
}

SceneObject.prototype.setColor = function (r, g, b) {
	this.color = new THREE.Color(r, g, b);
}

SceneObject.prototype.setDiffuseColor = function (r, g, b) {
	this.dcolor = new THREE.Color(r, g, b);
}

SceneObject.prototype.setSpecularColor = function (r, g, b) {
	this.scolor = new THREE.Color(r, g, b);
}

function Light(id, position) {
	SceneObject.apply(this, arguments);

	this.position = position;

	this.name = 'Light' + id;

	this.setColor(1.0, 1.0, 1.0);

	this.positionStr = 'u_Position' + this.name;
}

Light.prototype = new SceneObject();

Light.prototype.globalCode = function () {
	return '' +
		'uniform vec3 ' + this.positionStr + ';\n';
}

Light.prototype.ambientCalculationCode = function () {
	return '' +
		'       accumulatedColor = dcolor * ' + this.color.toString() + ';\n';
}

Light.prototype.colorCalculationCode = function () {
	return '' +
		'       toLight = (' + this.positionStr + ' - point);\n' +
		'       if(dot(toLight, normal) > 0.0)\n' +
		'       {\n' +
		'           float t = intersect(point, toLight);\n' +
		'           if(t == ' + infinity + ')\n' +
		'           {\n' +
		'               accumulatedColor += diffuseComponent(point, dcolor, normal, ' + this.positionStr + ', ' + this.color.toString() + ');\n' +
		'               accumulatedColor += specularComponent(origin, point, scolor, normal, ' + this.positionStr + ', ' + this.color.toString() + ', ' + shininess + ');\n' +
		'           }\n' +
		'       }\n';
}

Light.prototype.setUniforms = function (tracer) {
	tracer.uniforms[this.positionStr] = this.position;
};

function Sphere(id, radius, center) {
	SceneObject.apply(this, arguments);

	this.radius = radius;
	this.center = center;

	this.name = 'Sphere' + id;

	this.setDiffuseColor(1.0, 1.0, 1.0);
	this.setSpecularColor(1.0, 1.0, 1.0);

	this.radiusStr = 'u_Radius' + this.name;
	this.centerStr = 'u_Center' + this.name;

	this.intersectStr = 'Intersect' + this.name;
}

Sphere.prototype = new SceneObject();

Sphere.prototype.globalCode = function () {
	return '' +
		'uniform float ' + this.radiusStr + ';\n' +
		'uniform vec3 ' + this.centerStr + ';\n';
}

Sphere.prototype.intersectCode = function () {
	return '' +
		'   float ' + this.intersectStr + ' = intersectSphere(origin, direction, ' + this.centerStr + ', ' + this.radiusStr + ');\n';
};

Sphere.prototype.minimumIntersectCode = function () {
	return '' +
		'   if (' + this.intersectStr + ' < t)\n' +
		'   {\n' +
		'      t = ' + this.intersectStr + ';\n' +
		'   }\n';
};

Sphere.prototype.colorCalculationCode = function () {
	return '' +
		'       else if(t == ' + this.intersectStr + ') { dcolor = ' + this.dcolor.toString() + '; scolor = ' + this.scolor.toString() + '; isReflective = ' + this.isReflective + '; }\n';
};

Sphere.prototype.normalCalculationCode = function () {
	return '' +
		'       else if(t == ' + this.intersectStr + ') normal = normalForSphere(point, ' + this.centerStr + ', ' + this.radiusStr + ');\n';
};

Sphere.prototype.setUniforms = function (tracer) {
	tracer.uniforms[this.radiusStr] = this.radius;
	tracer.uniforms[this.centerStr] = this.center;
};

function Box(id, lower, upper) {
	SceneObject.apply(this, arguments);

	this.lower = lower;
	this.upper = upper;

	this.name = 'Box' + id;

	this.setDiffuseColor(1.0, 1.0, 1.0);
	this.setSpecularColor(1.0, 1.0, 1.0);

	this.lowerStr = 'u_Lower' + this.name;
	this.upperStr = 'u_Upper' + this.name;

	this.intersectStr = 'Intersect' + this.name;
}

Box.prototype = new SceneObject();

Box.prototype.globalCode = function () {
	return '' +
		'uniform vec3 ' + this.lowerStr + ';\n' +
		'uniform vec3 ' + this.upperStr + ';\n' ;
}

Box.prototype.intersectCode = function () {
	return '' +
		'   vec2 ' + this.intersectStr + ' = intersectBox(origin, direction, ' + this.lowerStr + ', ' + this.upperStr + ');\n';
};

Box.prototype.shadowTestCode = function () {
	return '' +
		this.intersectCode() +
		'   if (' + this.intersectStr + '.x > 0.0 && ' + this.intersectStr + '.x < 1.0 && ' + this.intersectStr + '.x < ' + this.intersectStr + '.y)\n' +
		'       return 0.0;\n';
};

Box.prototype.minimumIntersectCode = function () {
	return '' +
		'   if (' + this.intersectStr + '.x > 0.0 && ' + this.intersectStr + '.x < ' + this.intersectStr + '.y && ' + this.intersectStr + '.x < t)\n' +
		'   {\n' +
		'      t = ' + this.intersectStr + '.x;\n' +
		'   }\n';
};

Box.prototype.colorCalculationCode = function () {
	return '' +
		'       else if(t == ' + this.intersectStr + '.x && ' + this.intersectStr + '.x < ' + this.intersectStr + '.y) { dcolor = ' + this.dcolor.toString() + '; scolor = ' + this.scolor.toString() + '; isReflective = ' + this.isReflective + '; }\n';
};

Box.prototype.normalCalculationCode = function () {
	return '' +
		'       else if(t == ' + this.intersectStr + '.x && ' + this.intersectStr + '.x < ' + this.intersectStr + '.y) normal = normalForBox(point, ' + this.lowerStr + ', ' + this.upperStr + ');\n';
};

Box.prototype.setUniforms = function (tracer) {
	tracer.uniforms[this.lowerStr] = this.lower;
	tracer.uniforms[this.upperStr] = this.upper;
};

function Camera(fov, near, far, wp, hp, eye, center, up) {
	// Parâmetros internos primários
	this.fov = fov;
	this.near = near; this.far = far;
	this.wp = wp; this.hp = hp;

	// Parâmetros internos derivados
	this.df = this.near;
	this.h = 2 * this.df * Math.tan(this.fov / 2.0 * Math.PI / 180);
	this.w = (this.wp / this.hp) * this.h;

	// Parâmetros externos
	this.eye = eye;
	this.center = center;
	this.up = up;

	// Sistema da câmera
	this.ze = new THREE.Vector3();
	this.ze.subVectors(this.eye, this.center);
	this.ze.normalize();

	this.xe = new THREE.Vector3();
	this.xe.crossVectors(this.up, this.ze);
	this.xe.normalize();

	this.ye = new THREE.Vector3();
	this.ye.crossVectors(this.ze, this.xe);
	this.ye.normalize();
}

Camera.prototype.ray = function (x, y) {
	var u = (this.w * ((x / this.wp) - 0.5));
	var v = (this.h * ((y / this.hp) - 0.5));
	var w = -this.df;

	var a = new THREE.Vector3(); a.copy(this.xe); a.multiplyScalar(u);
	var b = new THREE.Vector3(); b.copy(this.ye); b.multiplyScalar(v);
	var c = new THREE.Vector3(); c.copy(this.ze); c.multiplyScalar(w);

	var direction = new THREE.Vector3();
	direction.addVectors(a, b);
	direction.add(c);

	direction.normalize();

	return new THREE.Ray(this.eye, direction);
}

Camera.prototype.update = function () {

	this.ze = new THREE.Vector3();
	this.ze.subVectors(this.eye, this.center);
	this.ze.normalize();

	this.xe = new THREE.Vector3();
	this.xe.crossVectors(this.up, this.ze);
	this.xe.normalize();

	this.ye = new THREE.Vector3();
	this.ye.crossVectors(this.ze, this.xe);
	this.ye.normalize();

}

function compileSource(source, type) {
	var shader = gl.createShader(type);
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		throw new Error('compile error: ' + gl.getShaderInfoLog(shader));
	}
	return shader;
}

function compileShader(vertexSource, fragmentSource) {
	var shaderProgram = gl.createProgram();
	gl.attachShader(shaderProgram, compileSource(vertexSource, gl.VERTEX_SHADER));
	gl.attachShader(shaderProgram, compileSource(fragmentSource, gl.FRAGMENT_SHADER));
	gl.linkProgram(shaderProgram);
	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
		throw new Error('link error: ' + gl.getProgramInfoLog(shaderProgram));
	}
	return shaderProgram;
}

var isReady = false;
function RayTracer() {
	this.lights = [];
	this.objects = [];

	this.tracerProgram = null;

	var vertices = [-1, -1, -1, 1, 1, -1, 1, 1];

	// create vertex buffer
	this.vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

	this.image = new Image();

	// create texture object
	this.texture = gl.createTexture();

	this.image.onload = function () {
		isReady = true;
	}

	this.image.src = './teste.png';

	gl.activeTexture(gl.TEXTURE0);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
}

RayTracer.prototype.load = function (scene) {
	this.uniforms = {};

	this.lights = scene.lights;
	this.objects = scene.objects;

	if (this.tracerProgram != null) {
		gl.deleteProgram(this.tracerProgram);
	}

	// Vertex shader program

	var VERTEX_SHADER =
		'varying vec3 v_Ray;                                                                                                                       \n' +
		'uniform vec3 u_Eye;                                                                                                                       \n' +
		'uniform vec3 u_Ray00;                                                                                                                     \n' +
		'uniform vec3 u_Ray01;                                                                                                                     \n' +
		'uniform vec3 u_Ray10;                                                                                                                     \n' +
		'uniform vec3 u_Ray11;                                                                                                                     \n' +
//		'uniform sampler2D u_Sampler;                                                                                                                   \n' +
		'attribute vec3 a_Vertex;                                                                                                                  \n' +
		'void main()                                                                                                                               \n' +
		'{                                                                                                                                         \n' +
		'   vec2 percent = a_Vertex.xy * 0.5 + 0.5;                                                                                                \n' +
		'   vec3 mix0001 = mix(u_Ray00, u_Ray01, percent.y);                                                                                       \n' +
		'   vec3 mix1011 = mix(u_Ray10, u_Ray11, percent.y);                                                                                       \n' +
		'   v_Ray = mix(mix0001, mix1011, percent.x);                                                                                              \n' +
		'   gl_Position = vec4(a_Vertex, 1.0);                                                                                                     \n' +
		'}                                                                                                                                         \n';

	// Fragment shader program

	var FRAGMENT_SHADER =
		'#ifdef GL_ES                                                                                                                              \n' +
		'precision highp float;                                                                                                                    \n' +
		'#endif                                                                                                                                    \n' +
		concat(this.lights, function (l) { return l.globalCode(); })                                                                                   +
		concat(this.objects, function (o) { return o.globalCode(); })                                                                                  +
		'uniform vec3 u_Eye;                                                                                                                       \n' +
		'varying vec3 v_Ray;                                                                                                                       \n' +
//		'uniform sampler2D u_Sampler;                                                                                                                   \n' +
		'float intersectSphere(vec3 origin, vec3 direction, vec3 sphereCenter, float sphereRadius)                                                 \n' +
		'{                                                                                                                                         \n' +
		'   vec3 toSphere = origin - sphereCenter;                                                                                                 \n' +
		'   float a = dot(direction, direction);                                                                                                   \n' +
		'   float b = 2.0 * dot(toSphere, direction);                                                                                              \n' +
		'   float c = dot(toSphere, toSphere) - sphereRadius * sphereRadius;                                                                       \n' +
		'   float d = b * b - 4.0 * a * c;                                                                                                         \n' +
		'   if(d > 0.0)                                                                                                                            \n' +
		'   {                                                                                                                                      \n' +
		'       float t = (-b - sqrt(d)) / (2.0 * a);                                                                                              \n' +
		'       if(t > 0.0) return t;                                                                                                              \n' +
		'   }                                                                                                                                      \n' +
		'   return ' + infinity + ';                                                                                                               \n' +
		'}                                                                                                                                         \n' +
		'vec2 intersectBox(vec3 origin, vec3 direction, vec3 boxLower, vec3 boxUpper)                                                              \n' +
		'{                                                                                                                                         \n' +
		'   vec3 tMin = (boxLower - origin) / direction;                                                                                           \n' +
		'   vec3 tMax = (boxUpper - origin) / direction;                                                                                           \n' +
		'   vec3 t1 = min(tMin, tMax);                                                                                                             \n' +
		'   vec3 t2 = max(tMin, tMax);                                                                                                             \n' +
		'   float tNear = max(max(t1.x, t1.y), t1.z);                                                                                              \n' +
		'   float tFar = min(min(t2.x, t2.y), t2.z);                                                                                               \n' +
		'   return vec2(tNear, tFar);                                                                                                              \n' +
		' }                                                                                                                                        \n' +
		'float intersect(vec3 origin, vec3 direction)                                                                                              \n' +
		'{                                                                                                                                         \n' +
		'   float t = ' + infinity + ';                                                                                                            \n' +
			concat(this.objects, function (o) { return o.intersectCode(); })                                                                           +
			concat(this.objects, function (o) { return o.minimumIntersectCode(); })                                                                    +
		'   return t;                                                                                                                              \n' +
		'}                                                                                                                                         \n' +
		'vec3 normalForSphere(vec3 hit, vec3 sphereCenter, float sphereRadius)                                                                     \n' +
		'{                                                                                                                                         \n' +
		'   return (hit - sphereCenter) / sphereRadius;                                                                                            \n' +
		'}                                                                                                                                         \n' +
		'vec3 normalForBox(vec3 hit, vec3 boxLower, vec3 boxUpper)                                                                                 \n' +
		'{                                                                                                                                         \n' +
		'   if(hit.x < boxLower.x + ' + epsilon + ') return vec3(-1.0, 0.0, 0.0);                                                                  \n' +
		'   else if(hit.x > boxUpper.x - ' + epsilon + ') return vec3(1.0, 0.0, 0.0);                                                              \n' +
		'   else if(hit.y < boxLower.y + ' + epsilon + ') return vec3(0.0, -1.0, 0.0);                                                             \n' +
		'   else if(hit.y > boxUpper.y - ' + epsilon + ') return vec3(0.0, 1.0, 0.0);                                                              \n' +
		'   else if(hit.z < boxLower.z + ' + epsilon + ') return vec3(0.0, 0.0, -1.0);                                                             \n' +
		'   else return vec3(0.0, 0.0, 1.0);                                                                                                       \n' +
		'}                                                                                                                                         \n' +
		'vec3 diffuseComponent(vec3 point, vec3 dcolor, vec3 normal, vec3 light, vec3 intensity)                                                   \n' +
		'{                                                                                                                                         \n' +
		'   vec3 toLight = normalize(light - point);                                                                                               \n' +
		'   float costheta = max(0.0, dot(normalize(toLight), normal));                                                                            \n' +
		'   return dcolor * intensity * costheta;                                                                                                  \n' +
		'}                                                                                                                                         \n' +
		'vec3 specularComponent(vec3 origin, vec3 point, vec3 scolor, vec3 normal, vec3 light, vec3 intensity, float exponent)                     \n' +
		'{                                                                                                                                         \n' +
		'   vec3 toEye = normalize(origin - point);                                                                                                \n' +
		'   vec3 toLight = normalize(point - light);                                                                                               \n' +
		'   vec3 reflection = (reflect(toLight, normal));                                                                                          \n' +
		'   float cosalpha = max(0.0, dot(reflection, toEye));                                                                                     \n' +
		'   return scolor * intensity * pow(cosalpha, exponent);                                                                                   \n' +
		'}                                                                                                                                         \n' +
		'vec3 shade(vec3 origin, vec3 direction, vec3 point, vec3 dcolor, vec3 scolor, vec3 normal)                                                \n' +
		'{                                                                                                                                         \n' +
		'   vec3 toLight = vec3(0.0);                                                                                                              \n' +
		'   vec3 accumulatedColor = vec3(0.0);                                                                                                     \n' +
			this.lights[0].ambientCalculationCode()                                                                                                    +
			concat(this.lights, function (l) { return l.colorCalculationCode(); })                                                                     +
		'   return accumulatedColor;                                                                                                               \n' +
		'}                                                                                                                                         \n' +
		'vec3 trace(vec3 origin, vec3 direction)                                                                                                   \n' +
		'{                                                                                                                                         \n' +
		'   vec3 fragColor = vec3(0.0);                                                                                                            \n' +
		'   vec3 percentage = vec3(1.0);                                                                                                           \n' +
		'   for (float i = 0.0; i < ' + bounces + '; i++)                                                                                          \n' +
		'   {                                                                                                                                      \n' +
		'       float t = ' + infinity + ';                                                                                                        \n' +
				concat(this.objects, function (o) { return o.intersectCode(); })                                                                       +
				concat(this.objects, function (o) { return o.minimumIntersectCode(); })                                                                +
		'       if(t < ' + infinity + ')                                                                                                           \n' +
		'       {                                                                                                                                  \n' +
		'           bool isReflective = false;                                                                                                     \n' +
		'           vec3 dcolor, scolor, normal;                                                                                                   \n' +
		'           vec3 point = origin + t * direction;                                                                                           \n' +
		'           if (false);                                                                                                                    \n' +
					concat(this.objects, function (o) { return o.colorCalculationCode(); })                                                            +
		'           if (false);                                                                                                                    \n' +
					concat(this.objects, function (o) { return o.normalCalculationCode(); })                                                           +
		'           vec3 color = shade(origin, direction, point, dcolor, scolor, normal);                                                          \n' +
		'           if (isReflective)                                                                                                              \n' +
		'           {                                                                                                                              \n' +
		'               fragColor += percentage * (vec3(1.0) - scolor) * color;                                                                    \n' +
		'           }                                                                                                                              \n' +
		'           else                                                                                                                           \n' +
		'           {                                                                                                                              \n' +
		'               fragColor += percentage * color;                                                                                           \n' +
		'               break;                                                                                                                     \n' +
		'           }                                                                                                                              \n' +
		'           vec3 toEye = normalize(point - origin);                                                                                        \n' +
		'           direction = reflect(toEye, normal);                                                                                            \n' +
		'           origin = point;                                                                                                                \n' +
		'           percentage *= scolor;                                                                                                          \n' +
		'       }                                                                                                                                  \n' +
		'       else                                                                                                                               \n' +
		'       {                                                                                                                                  \n' +
		'           fragColor += percentage * ' + background + ';                                                                                  \n' +
		'           break;                                                                                                                         \n' +
		'       }                                                                                                                                  \n' +
		'   }                                                                                                                                      \n' +
		'   return fragColor;                                                                                                                      \n' +
		'}                                                                                                                                         \n' +
		'void main()                                                                                                                               \n' +
		'{                                                                                                                                         \n' +
//		'   gl_FragColor = texture2D(u_Sampler, v_Ray.xy);                                                                                         \n' +
		'   gl_FragColor = vec4(trace(u_Eye, v_Ray), 1.0);                                                                                         \n' +
		'}                                                                                                                                         \n';

	if (once == 0) {
		console.log(FRAGMENT_SHADER);
		once++;
	}

	this.tracerProgram = compileShader(VERTEX_SHADER, FRAGMENT_SHADER);
	this.tracerVertexAttribute = gl.getAttribLocation(this.tracerProgram, 'a_Vertex');

	gl.enableVertexAttribArray(this.tracerVertexAttribute);
}

RayTracer.prototype.update = function (cam) {
	// calculate uniforms
	for (var i = 0; i < this.lights.length; i++) {
		this.lights[i].setUniforms(this);
	}

	for (var i = 0; i < this.objects.length; i++) {
		this.objects[i].setUniforms(this);
	}

	this.uniforms.u_Eye = cam.eye;
	this.uniforms.u_Ray00 = cam.ray(0, 0).direction;
	this.uniforms.u_Ray01 = cam.ray(0, cam.hp).direction;
	this.uniforms.u_Ray10 = cam.ray(cam.wp, 0).direction;
	this.uniforms.u_Ray11 = cam.ray(cam.wp, cam.hp).direction;

	if (isReady) {
		this.uniforms.u_Sampler = this.image;
	}

	// set uniforms
	gl.useProgram(this.tracerProgram);
	setUniforms(this.tracerProgram, this.uniforms);
}

RayTracer.prototype.draw = function () {
	// render
	gl.useProgram(this.tracerProgram);
	gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
	gl.vertexAttribPointer(this.tracerVertexAttribute, 2, gl.FLOAT, false, 0, 0);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

function Scene() {
	this.lights = [];
	this.objects = [];
}

var gl = null, canvas;
var camera, rayTracer;

function mainLoop() {
	camera.update()
	rayTracer.update(camera);
	rayTracer.draw();

	requestAnimationFrame(mainLoop, canvas);
}

window.onload = function () {
	canvas = document.getElementById('canvas');
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;

	try {
		gl = canvas.getContext('experimental-webgl');
	} catch (e) {
	}

	if (gl) {
		rayTracer = new RayTracer();

		rayTracer.load(defaultScene());

		mainLoop();
	}
}

function changeValue() {
	document.getElementById("x_range").value = camera.eye.x;
	document.getElementById("y_range").value = camera.eye.y;
	document.getElementById("z_range").value = camera.eye.z;

}

function valueChanged() {
	camera.eye.x = document.getElementById("x_range").value;
	camera.eye.y = document.getElementById("y_range").value;
	camera.eye.z = document.getElementById("z_range").value;
}

function selectChanged() {
	var index = document.getElementById("select").selectedIndex;

	switch (index) {
		default:
		case 0:
			rayTracer.load(defaultScene());
			break;
		case 1:
			rayTracer.load(spheresScene());
			break;
		case 2:
			rayTracer.load(roomScene());
			break;
	}
}
