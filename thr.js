
/******************************* Parameters ***********************************/
var units = {
    diameter: [["mm",1], ["cm",1/10], ["in",1/25.4], ["μm",1000], ["mil",1000/25.4]],
    distance: [["m",1], ["km",1/1000], ["mi",125/201168], ["cm",100], ["in",5000/127], ["ft",1250/381]],
    area: [["mm²", 1], ["in²", 1/25.4/25.4], ["mil²", 1000000/25.4/25.4], [ "mcm", 4000/25.4/25.4/Math.PI]],
    flow: [[ "l/m", 28.31684659], ["gpm",7.480526598], ["cfm", 1], ["cc/s", 471.9474432]],
    electrical: [["mΩ",1000], ["Ω",1], ["μΩ",1000000]],
    thermal: [["°C/W",.000001], ["°F/W",.0000018]],
    weight: [["N",4.44822], ["lb",1], ["kg",.4535922053], ["kN",.00444822], ["ton",.0005], ["g",453.5922053]]};

var material = [
  [{name:"Steel Grade 10",   weight:11.45/645.16,yield:130000/645.16,tensile:150000/645.16,electrical:0.169,thermal:54},
   {name:"Steel Grade 8",    weight:11.45/645.16,yield:130000/645.16,tensile:150000/645.16,electrical:0.169,thermal:54},
   {name:"Steel Grade 5",    weight:11.45/645.16,yield: 81000/645.16,tensile:105000/645.16,electrical:0.169,thermal:54},
   {name:"Steel Grade 2",    weight:11.45/645.16,yield: 36000/645.16,tensile: 60000/645.16,electrical:0.169,thermal:54},
   {name:"Steel Class 12.9", weight:11.45/645.16,yield:160000/645.16,tensile:170000/645.16,electrical:0.169,thermal:54},
   {name:"Steel Class 10.9", weight:11.45/645.16,yield:130000/645.16,tensile:150000/645.16,electrical:0.169,thermal:54},
   {name:"Steel Class 8.8",  weight:11.45/645.16,yield: 93000/645.16,tensile:120000/645.16,electrical:0.169,thermal:54},
   {name:"Steel Class 5.8",  weight:11.45/645.16,yield: 57000/645.16,tensile: 74000/645.16,electrical:0.169,thermal:54},
   {name:"Steel Class 4.6",  weight:11.45/645.16,yield: 36000/645.16,tensile: 60000/645.16,electrical:0.169,thermal:54},
   {name:"Cast Iron",        weight:11.45/645.16,yield: 36000/645.16,tensile: 60000/645.16,electrical:0.169,thermal:58}],
  [{name:"Stainless 18-8",   weight:11.45/645.16,yield:     0/645.16,tensile: 70000/645.16,electrical:0.169,thermal:16},
   {name:"Stainless 316",    weight:11.45/645.16,yield:     0/645.16,tensile: 70000/645.16,electrical:0.169,thermal:16}],
  [{name:"Cement",           weight:11.45/645.16,yield:     0/645.16,tensile: 70000/645.16,electrical:0.169,thermal:.29},
   {name:"Mortar",           weight:11.45/645.16,yield:     0/645.16,tensile: 70000/645.16,electrical:0.169,thermal:1.73},
   {name:"Glass",            weight:11.45/645.16,yield:     0/645.16,tensile: 70000/645.16,electrical:0.169,thermal:1.05}],
  [{name:"Aluminum 7071",    weight:3.840/645.16,yield: 40000/645.16,tensile: 54000/645.16,electrical:.0265,thermal:205}],
  [{name:"Copper H8",        weight:12.69/645.16,yield: 62000/645.16,tensile: 94000/645.16,electrical:.0168,thermal:401},
   {name:"Copper H6",        weight:12.69/645.16,yield: 62000/645.16,tensile: 78600/645.16,electrical:.0168,thermal:401},
   {name:"Copper H4",        weight:12.69/645.16,yield: 60000/645.16,tensile: 76000/645.16,electrical:.0168,thermal:401},
   {name:"Copper H2",        weight:12.69/645.16,yield: 50000/645.16,tensile: 62000/645.16,electrical:.0168,thermal:401},
   {name:"Copper H1",        weight:12.69/645.16,yield: 40000/645.16,tensile: 54000/645.16,electrical:.0168,thermal:401}]];

function floatString(x, digits) {
  if (x>=Math.pow(10,digits) || x < 0) return "-".repeat(digits);
  else return RegExp("[^0]"+(".".repeat(digits-1))).exec(x.toFixed(digits-1));
}

// function diameter(x) {return floatString(x*units.diameter[0][1],5) + " " + units.diameter[0][0];}
// function distance(x) {return floatString(x*units.distance[0][1],5) + " " + units.distance[0][0];}
// function area(x)     {return floatString(x*units.area[0][1],5) + " " + units.area[0][0];}
// function weight(x) {return floatString(x*units.weight[0][1]/units.distance[0][1],5) + " " + units.weight[0][0]+"/"+units.distance[0][0];}
// function force(x)  {return floatString(x*units.weight[0][1],5) + " " + units.weight[0][0];}
// function torque(x) {return floatString(x*units.weight[0][1]*units.distance[0][1],5) + " " + units.distance[0][0]+"-"+units.weight[0][0];}
// function electrical(x) {return floatString(x*units.electrical[0][1]/units.distance[0][1],5) + " " + units.electrical[0][0]+"/"+units.distance[0][0];}
// function thermal(x) {return floatString(x*units.thermal[0][1]/units.distance[0][1],5) + " " + units.thermal[0][0]+"-"+units.distance[0][0];}
function diameter(x)   {return " ontouchmove=\"event.preventDefault()\" class=\"diameter\">"   + floatString(x*units.diameter[0][1],5) + " " + units.diameter[0][0];}
function distance(x)   {return " ontouchmove=\"event.preventDefault()\" class=\"distance\">"   + floatString(x*units.distance[0][1],5) + " " + units.distance[0][0];}
function area(x)       {return " ontouchmove=\"event.preventDefault()\" class=\"area\">"       + floatString(x*units.area[0][1],5) + " " + units.area[0][0];}
function weight(x)     {return " ontouchmove=\"event.preventDefault()\" class=\"weight\">"     + floatString(x*units.weight[0][1]/units.distance[0][1],5) + " " + units.weight[0][0]+"/"+units.distance[0][0];}
function force(x)      {return " ontouchmove=\"event.preventDefault()\" class=\"weight\">"     + floatString(x*units.weight[0][1],5) + " " + units.weight[0][0];}
function torque(x)     {return " ontouchmove=\"event.preventDefault()\" class=\"distance\">"   + floatString(x*units.weight[0][1]*units.distance[0][1],5) + " " + units.distance[0][0]+"-"+units.weight[0][0];}
function electrical(x) {return " ontouchmove=\"event.preventDefault()\" class=\"electrical\">" + floatString(x*units.electrical[0][1]/units.distance[0][1],5) + " " + units.electrical[0][0]+"/"+units.distance[0][0];}
function thermal(x)    {return " ontouchmove=\"event.preventDefault()\" class=\"thermal\">"    + floatString(x*units.thermal[0][1]/units.distance[0][1],5) + " " + units.thermal[0][0]+"-"+units.distance[0][0];}

function getCookie(cname) {
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(cname + "=") == 0) return c.substring(cname.length + 1, c.length);
    }
    return "";
}

// Get the units from cookies
for (u in units) {
  var c = getCookie(u);
  for (i=0; i<units[u].length; i++)
    if (c == units[u][0][0]) break;
    else units[u].push(units[u].shift());
}
// Get the material from cookies
var c = getCookie("material");
for (i=0; i<material.length; i++) {
  for (j=0; j<material[0].length; j++)
    if (c == material[0][0].name) break;
    else material[0].push(material[0].shift());
  if (c == material[0][0].name) break;
  else material.push(material.shift());  
}
// Get the item from url
var c = decodeURI(location.search.substring(1));
for (i=0; i<items.length; i++)
  if (c == items[0].name) break;
  else items.push(items.shift());


/******************************* Touch and click ******************************/
var c = "";
var bounds;
window.ontouchstart = function(event) {
// window.onmousedown = function(event) {
  c = event.target.className
  bounds = event.target.getBoundingClientRect();
}

window.ontouchend = function(event) {
// window.onmouseup = function(event) {
  if (event.changedTouches[0].pageX < bounds.left) { // next setting
  // if (event.clientX < bounds.left) { // next setting
    for (u in units) if (c == u) units[c].unshift(units[c].pop());
    if (c == "material") material[0].unshift(material.pop());
    if (c == "item") location.search = "?"+items.shift().name;
  } else if (event.changedTouches[0].pageX > bounds.right) { // previous setting
  // } else if (event.clientX > bounds.right) { // previous setting
    for (u in units) if (c == u) units[c].push(units[c].shift());
    if (c == "material") material[0].push(material.shift());
    if (c == "item") location.search = "?"+items.pop().name;
  } else if (event.changedTouches[0].pageY < bounds.top) { // next major setting
  // } else if (event.clientY < bounds.top) { // next major setting
    if (c == "material") material.unshift(material.pop());
  } else if (event.changedTouches[0].pageY > bounds.bottom) { // previous major setting
  // } else if (event.clientY > bounds.bottom) { // previous major setting
    if (c == "material") material.push(material.shift());
  } else {
    return;
  }
  update(items[0]);
}


/* window.onclick = function(event) {
  var c = event.target.className;
  for (u in units) if (c == u) units[c].push(units[c].shift());
  if (c == "material") material.push(material.shift());
  if (c == "item") location.search = "?"+items.pop().name;
  update(items[0]);
}


/******************************* Table selection ******************************/

function update(item) {
  var od = item.od
  var tp = item.tp
  var td = tp * 5.5 / 16 * Math.sqrt(3); //5.635
  var pd = od - td;
  var id = od - td - td;
  var oa = Math.PI*od*od/4;
  var pa = Math.PI*pd*pd/4;
  var ia = Math.PI*id*id/4;
  var oc = Math.PI*od;
  var pc = Math.PI*pd;
  var ic = Math.PI*id;
  
  // var out = "<table style=\"white-space:nowrap\"><tr><td colspan=\"3\"><center ontouchmove=\"event.preventDefault()\" class=\"item\">" + item.name + " thread</center></td></tr>\
  // <tr><td>Major        </td><td class=\"diameter\">" + diameter(od) + "</td><td class=\"area\">" + area(oa)    + "</td></tr>\
  // <tr><td>Pitch        </td><td class=\"diameter\">" + diameter(pd) + "</td><td class=\"area\">" + area(pa)    + "</td></tr>\
  // <tr><td>Minor        </td><td class=\"diameter\">" + diameter(id) + "</td><td class=\"area\">" + area(ia)    + "</td></tr>\
  // <tr><td>Thread       </td><td class=\"diameter\">" + diameter(td) + "</td><td class=\"area\">" + area(oa-ia) + "</td></tr>\
  // <tr><td>Lateral Major</td><td class=\"diameter\">" + diameter(oc) + "</td><td class=\"area\">" + area(oc*tp) + "</td></tr>\
  // <tr><td>Lateral Pitch</td><td class=\"diameter\">" + diameter(pc) + "</td><td class=\"area\">" + area(pc*tp) + "</td></tr>\
  // <tr><td>Lateral Minor</td><td class=\"diameter\">" + diameter(ic) + "</td><td class=\"area\">" + area(ic*tp) + "</td></tr>\
  // </table><br>\
  // <table style=\"white-space:nowrap\"><tr><td ontouchmove=\"event.preventDefault()\" class=\"material\">" + material[0][0].name + "</td><td>Shank</td><td>Thread</td></tr>\
  // <tr><td>Weight          </td><td class=\"weight\"    >" + weight(material[0][0].weight*oa)             + "</td><td class=\"weight\"    >" + weight(material[0][0].weight*pa)             + "</td></tr>\
  // <tr><td>Yield Strength  </td><td class=\"weight\"    >" + force(material[0][0].yield*oa)               + "</td><td class=\"weight\"    >" + force(material[0][0].yield*ia)               + "</td></tr>\
  // <tr><td>Tensile Strength</td><td class=\"weight\"    >" + force(material[0][0].tensile*oa)             + "</td><td class=\"weight\"    >" + force(material[0][0].tensile*ia)             + "</td></tr>\
  // <tr><td>Yield Moment    </td><td class=\"distance\"  >" + torque(material[0][0].yield*od*od*od/6000)   + "</td><td class=\"distance\"  >" + torque(material[0][0].yield*id*id*id/6000)   + "</td></tr>\
  // <tr><td>Tensile Moment  </td><td class=\"distance\"  >" + torque(material[0][0].tensile*od*od*od/6000) + "</td><td class=\"distance\"  >" + torque(material[0][0].tensile*id*id*id/6000) + "</td></tr>\
  // <tr><td>Resistivity     </td><td class=\"electrical\">" + electrical(material[0][0].electrical/oa)     + "</td><td class=\"electrical\">" + electrical(material[0][0].electrical/ia)     + "</td></tr>\
  // <tr><td>Conductivity    </td><td class=\"thermal\"   >" + thermal(material[0][0].thermal*oa)           + "</td><td class=\"thermal\"   >" + thermal(material[0][0].thermal*ia)           + "</td></tr>\
  // </table><br>\
  // <table style=\"white-space:nowrap\"><tr><td colspan=\"4\">Tap Drills</td></tr>";
  var out = "<table style=\"white-space:nowrap\"><tr><td colspan=\"3\"><center ontouchmove=\"event.preventDefault()\" class=\"item\">" + item.name + " thread</center></td></tr>\
  <tr><td>Major        </td><td" + diameter(od) + "</td><td" + area(oa)    + "</td></tr>\
  <tr><td>Pitch        </td><td" + diameter(pd) + "</td><td" + area(pa)    + "</td></tr>\
  <tr><td>Minor        </td><td" + diameter(id) + "</td><td" + area(ia)    + "</td></tr>\
  <tr><td>Thread       </td><td" + diameter(td) + "</td><td" + area(oa-ia) + "</td></tr>\
  <tr><td>Lateral Major</td><td" + diameter(oc) + "</td><td" + area(oc*tp) + "</td></tr>\
  <tr><td>Lateral Pitch</td><td" + diameter(pc) + "</td><td" + area(pc*tp) + "</td></tr>\
  <tr><td>Lateral Minor</td><td" + diameter(ic) + "</td><td" + area(ic*tp) + "</td></tr>\
  </table><br>\
  <table style=\"white-space:nowrap\"><tr><td ontouchmove=\"event.preventDefault()\" class=\"material\">" + material[0][0].name + "</td><td>Shank</td><td>Thread</td></tr>\
  <tr><td>Weight          </td><td" + weight(material[0][0].weight*oa)             + "</td><td" + weight(material[0][0].weight*pa)             + "</td></tr>\
  <tr><td>Yield Strength  </td><td" + force(material[0][0].yield*oa)               + "</td><td" + force(material[0][0].yield*ia)               + "</td></tr>\
  <tr><td>Tensile Strength</td><td" + force(material[0][0].tensile*oa)             + "</td><td" + force(material[0][0].tensile*ia)             + "</td></tr>\
  <tr><td>Yield Moment    </td><td" + torque(material[0][0].yield*od*od*od/6000)   + "</td><td" + torque(material[0][0].yield*id*id*id/6000)   + "</td></tr>\
  <tr><td>Tensile Moment  </td><td" + torque(material[0][0].tensile*od*od*od/6000) + "</td><td" + torque(material[0][0].tensile*id*id*id/6000) + "</td></tr>\
  <tr><td>Resistivity     </td><td" + electrical(material[0][0].electrical/oa)     + "</td><td" + electrical(material[0][0].electrical/ia)     + "</td></tr>\
  <tr><td>Conductivity    </td><td" + thermal(material[0][0].thermal*oa)           + "</td><td" + thermal(material[0][0].thermal*ia)           + "</td></tr>\
  </table><br>\
  <table style=\"white-space:nowrap\"><tr><td colspan=\"4\">Tap Drills</td></tr>";
  
  var drills = {0.04830:"#107", 0.05000:"0.05 mm", 0.05840:"#106", 0.06860:"#105", 0.07870:"#104", 0.08890:"#103", 0.09910:"#102", 0.10000:"0.1 mm", 0.10920:"#101", 0.11940:"#100", 0.12950:"#99", 0.13970:"#98", 0.14990:"#97", 0.16000:"#96", 0.17020:"#95", 
  0.18030:"#94", 0.19050:"#93", 0.20000:"0.2 mm", 0.20070:"#92", 0.21080:"#91", 0.22100:"#90", 0.23110:"#89", 0.24130:"#88", 0.25400:"#87", 0.26670:"#86", 0.27940:"#85", 0.29210:"#84", 0.30000:"0.3 mm", 0.30480:"#83", 0.31750:"#82", 0.33020:"#81",
  0.34290:"#80", 0.36800:"#79", 0.39690:"1/64 in", 0.40000:"0.4 mm", 0.40640:"#78", 0.45720:"#77", 0.50000:"0.5 mm", 0.50800:"#76", 0.53340:"#75", 0.57150:"#74", 0.60000:"0.6 mm", 0.60960:"#73", 0.63500:"#72", 0.66040:"#71", 0.70000:"0.7 mm", 0.71120:"#70",
  0.74170:"#69", 0.78740:"#68", 0.79380:"1/32 in", 0.80000:"0.8 mm", 0.81280:"#67", 0.83820:"#66", 0.88900:"#65", 0.90000:"0.9 mm", 0.91440:"#64", 0.93980:"#63", 0.96520:"#62", 0.99060:"#61", 1.00000:"1 mm", 1.01600:"#60", 1.04140:"#59", 1.06680:"#58",
  1.09220:"#57", 1.10000:"1.1 mm", 1.18110:"#56", 1.19060:"3/64 in", 1.20000:"1.2 mm", 1.30000:"1.3 mm", 1.32080:"#55", 1.39700:"#54", 1.40000:"1.4 mm", 1.50000:"1.5 mm", 1.51130:"#53", 1.58750:"1/16 in", 1.60000:"1.6 mm", 1.61290:"#52", 1.70000:"1.7 mm",
  1.70180:"#51", 1.77800:"#50", 1.80000:"1.8 mm", 1.85420:"#49", 1.90000:"1.9 mm", 1.93040:"#48", 1.98440:"5/64 in", 1.99390:"#47", 2.00000:"2 mm", 2.05740:"#46", 2.08280:"#45", 2.10000:"2.1 mm", 2.18440:"#44", 2.20000:"2.2 mm", 2.26060:"#43", 2.30000:"2.3 mm",
  2.37490:"#42", 2.38130:"3/32 in", 2.40000:"2.4 mm", 2.43840:"#41", 2.48920:"#40", 2.50000:"2.5 mm", 2.52730:"#39", 2.57810:"#38", 2.60000:"2.6 mm", 2.64160:"#37", 2.70000:"2.7 mm", 2.70510:"#36", 2.77810:"7/64 in", 2.79400:"#35", 2.80000:"2.8 mm",
  2.81940:"#34", 2.87020:"#33", 2.90000:"2.9 mm", 2.94640:"#32", 3.00000:"3 mm", 3.04800:"#31", 3.10000:"3.1 mm", 3.17500:"1/8 in", 3.20000:"3.2 mm", 3.26390:"#30", 3.30000:"3.3 mm", 3.40000:"3.4 mm", 3.45440:"#29", 3.50000:"3.5 mm", 3.56870:"#28",
  3.57190:"9/64 in", 3.60000:"3.6 mm", 3.65760:"#27", 3.70000:"3.7 mm", 3.73380:"#26", 3.79730:"#25", 3.80000:"3.8 mm", 3.86080:"#24", 3.90000:"3.9 mm", 3.91160:"#23", 3.96880:"5/32 in", 3.98780:"#22", 4.00000:"4 mm", 4.03860:"#21", 4.08940:"#20",
  4.10000:"4.1 mm", 4.20000:"4.2 mm", 4.21640:"#19", 4.30000:"4.3 mm", 4.30530:"#18", 4.36560:"11/64 in", 4.39420:"#17", 4.40000:"4.4 mm", 4.49580:"#16", 4.50000:"4.5 mm", 4.57200:"#15", 4.60000:"4.6 mm", 4.62280:"#14", 4.69900:"#13", 4.70000:"4.7 mm",
  4.76250:"3/16 in", 4.80000:"4.8 mm", 4.80060:"#12", 4.85140:"#11", 4.90000:"4.9 mm", 4.91490:"#10", 4.97840:"#9", 5.00000:"5 mm", 5.05460:"#8", 5.10000:"5.1 mm", 5.10540:"#7", 5.15940:"13/64 in", 5.18160:"#6", 5.20000:"5.2 mm", 5.21970:"#5", 5.30000:"5.3 mm",
  5.30860:"#4", 5.40000:"5.4 mm", 5.41020:"#3", 5.50000:"5.5 mm", 5.55630:"7/32 in", 5.60000:"5.6 mm", 5.61340:"#2", 5.70000:"5.7 mm", 5.79120:"#1", 5.80000:"5.8 mm", 5.90000:"5.9 mm", 5.94360:"A", 5.95310:"15/64 in", 6.00000:"6 mm", 6.04520:"B",
  6.10000:"6.1 mm", 6.14680:"C", 6.20000:"6.2 mm", 6.24840:"D", 6.30000:"6.3 mm", 6.35000:"1/4 in", 6.35000:"E", 6.40000:"6.4 mm", 6.50000:"6.5 mm", 6.52780:"F", 6.60000:"6.6 mm", 6.62940:"G", 6.70000:"6.7 mm", 6.74690:"17/64 in", 6.75640:"H",
  6.80000:"6.8 mm", 6.90000:"6.9 mm", 6.90880:"I", 7.00000:"7 mm", 7.03580:"J", 7.10000:"7.1 mm", 7.13740:"K", 7.14380:"9/32 in", 7.20000:"7.2 mm", 7.30000:"7.3 mm", 7.36600:"L", 7.40000:"7.4 mm", 7.49300:"M", 7.50000:"7.5 mm", 7.54060:"19/64 in",
  7.60000:"7.6 mm", 7.67080:"N", 7.70000:"7.7 mm", 7.80000:"7.8 mm", 7.90000:"7.9 mm", 7.93750:"5/16 in", 8.00000:"8 mm", 8.02640:"O", 8.10000:"8.1 mm", 8.20000:"8.2 mm", 8.20420:"P", 8.30000:"8.3 mm", 8.33440:"21/64 in", 8.40000:"8.4 mm", 8.43280:"Q",
  8.50000:"8.5 mm", 8.60000:"8.6 mm", 8.61060:"R", 8.70000:"8.7 mm", 8.73130:"11/32 in", 8.80000:"8.8 mm", 8.83920:"S", 8.90000:"8.9 mm", 9.00000:"9 mm", 9.09320:"T", 9.10000:"9.1 mm", 9.12810:"23/64 in", 9.20000:"9.2 mm", 9.30000:"9.3 mm", 9.34720:"U",
  9.40000:"9.4 mm", 9.50000:"9.5 mm", 9.52500:"3/8 in", 9.57580:"V", 9.60000:"9.6 mm", 9.70000:"9.7 mm", 9.80000:"9.8 mm", 9.80440:"W", 9.90000:"9.9 mm", 9.92190:"25/64 in", 10.0000:"10 mm", 10.0838:"X", 10.2616:"Y", 10.3188:"13/32 in", 10.4902:"Z",
  10.5000:"10.5 mm", 10.7156:"27/64 in", 11.0000:"11 mm", 11.1125:"7/16 in", 11.5000:"11.5 mm", 11.5094:"29/64 in", 11.9063:"15/32 in", 12.0000:"12 mm", 12.3031:"31/64 in", 12.5000:"12.5 mm", 12.7000:"1/2 in", 13.0000:"13 mm", 13.0969:"33/64 in",
  13.4938:"17/32 in", 13.5000:"13.5 mm", 13.8906:"35/64 in", 14.0000:"14 mm", 14.2875:"9/16 in", 14.5000:"14.5 mm", 14.6844:"37/64 in", 15.0000:"15 mm", 15.0813:"19/32 in", 15.4781:"39/64 in", 15.5000:"15.5 mm", 15.8750:"5/8 in", 16.0000:"16 mm",
  16.2719:"41/64 in", 16.5000:"16.5 mm", 17.0000:"17 mm", 17.0656:"43/64 in", 17.4625:"11/16 in", 17.5000:"17.5 mm", 17.8594:"45/64 in", 18.0000:"18 mm", 18.2563:"23/32 in", 18.5000:"18.5 mm", 18.6531:"47/64 in", 19.0000:"19 mm", 19.0500:"3/4 in",
  19.4469:"49/64 in", 19.5000:"19.5 mm", 19.8438:"25/32 in", 20.0000:"20 mm", 20.2406:"51/64 in", 20.5000:"20.5 mm", 20.6375:"13/16 in", 21.0000:"21 mm", 21.0344:"53/64 in", 21.4313:"27/32 in", 21.5000:"21.5 mm", 21.8281:"55/64 in", 22.0000:"22 mm",
  22.2250:"7/8 in", 22.5000:"22.5 mm", 22.6219:"57/64 in", 23.0000:"23 mm", 23.0188:"29/32 in", 23.1913:"21/23 in", 23.4156:"59/64 in", 23.5000:"23.5 mm", 23.8125:"15/16 in", 24.0000:"24 mm", 24.2094:"61/64 in", 24.5000:"24.5 mm", 24.6063:"31/32 in",
  25.0000:"25 mm", 25.0031:"63/64 in", 25.4000:"1 in", 25.5000:"25.5 mm", 25.7969:"1 1/64 in", 26.0000:"26 mm", 26.1938:"1 1/32 in", 26.5000:"26.5 mm", 26.5906:"1 3/64 in", 26.9875:"1 1/16 in", 27.0000:"27 mm", 27.3844:"1 5/64 in", 27.5000:"27.5 mm",
  27.7813:"1 3/32 in", 28.0000:"28 mm", 28.1781:"1 7/64 in", 28.5000:"28.5 mm", 28.5750:"1 1/8 in", 28.9719:"1 9/64 in", 29.0000:"29 mm", 29.3688:"1 5/32 in", 29.5000:"29.5 mm", 29.7656:"1 11/64 in", 30.0000:"30 mm", 30.1625:"1 3/16 in", 30.5000:"30.5 mm",
  30.5594:"1 13/64 in", 30.9563:"1 7/32 in", 31.0000:"31 mm", 31.3531:"1 15/64 in", 31.5000:"31.5 mm", 31.7500:"1 1/4 in", 32.0000:"32 mm", 32.1469:"1 17/64 in", 32.5000:"32.5 mm", 32.5438:"1 9/32 in", 32.9406:"1 19/64 in", 33.0000:"33 mm", 33.3375:"1 5/16 in",
  33.5000:"33.5 mm", 33.7344:"1 21/64 in", 34.0000:"34 mm", 34.1313:"1 11/32 in", 34.5000:"34.5 mm", 34.5281:"1 23/64 in", 34.9250:"1 3/8 in", 35.0000:"35 mm", 35.3219:"1 25/64 in", 35.5000:"35.5 mm", 35.7188:"1 13/32 in", 36.0000:"36 mm", 36.1156:"1 27/64 in",
  36.5000:"36.5 mm", 36.5125:"1 7/16 in", 36.9094:"1 29/64 in", 37.0000:"37 mm", 37.3063:"1 15/32 in", 37.5000:"37.5 mm", 37.7031:"1 31/64 in", 38.0000:"38 mm", 38.1000:"1 1/2 in"};
  for (x in drills)
    if (id <= x && x <= od) out += "<tr><td>"+Math.round(50*(od-x)/td)+"%</td><td>"+drills[x]+"</td><td" + diameter(x) + "</td></tr>\n";
  document.documentElement.innerHTML = out +"</table><br>";
  
  for(u in units) {
    l = document.getElementsByClassName(u);
    for (var i=0; i<l.length; i++)
      l[i].ontouchmove="event.preventDefault()"
  }
}


update(items[0]);

