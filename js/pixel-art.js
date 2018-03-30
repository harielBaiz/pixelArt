// variables globales:
var paleta = document.getElementById("paleta");
var grillaPx = document.getElementById("grilla-pixeles");

//Estado del mouse sobre la grilla
var mouseEstado = false;

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
// genera paleta de colores
var generarPaleta = function(){
  for (var i=0; i<nombreColores.length; i++){
    var nuevoDiv = document.createElement("div");
    nuevoDiv.style.backgroundColor=nombreColores[i];
    nuevoDiv.className = "color-paleta";
    paleta.appendChild(nuevoDiv);
  }
}
generarPaleta();

// genera grilla para pintar
var generarGrillaPx = function(){
  for (var i=0; i<=1750; i++){
    var nuevoDiv = document.createElement("div");
    grillaPx.appendChild(nuevoDiv);
  }
}
generarGrillaPx();

//cambia el color del pincel
var colorPincel = document.getElementById("indicador-de-color");
paleta.addEventListener("mousedown", cambiarColor);
function cambiarColor(e){
  colorPincel.style.backgroundColor = e.target.style.backgroundColor;
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    colorPincel.style.backgroundColor = colorActual;
  })
);

//Pintar grilla
grillaPx.addEventListener("mousedown", pintar);

function pintar(e) {
  mouseEstado = true;
  e.target.style.backgroundColor=colorPincel.style.backgroundColor;
}

//detecta mouseup
grillaPx.addEventListener("mouseup", mouseParado);

function mouseParado(){
  mouseEstado = false;
}

//sigue pintando
grillaPx.addEventListener("mouseover", seguirPintando);

function seguirPintando(e){
  if(mouseEstado){
    e.target.style.backgroundColor=colorPincel.style.backgroundColor;
  }
}
