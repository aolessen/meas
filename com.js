
/******************************* Parameters ***********************************/
var units = {
    diameter: [["mm",1], ["cm",1/10], ["in",1/25.4], ["μm",1000], ["mil",1000/25.4]],
    distance: [["m",1], ["km",1/1000], ["mi",125/201168], ["cm",100], ["in",5000/127], ["ft",1250/381]],
    area: [["mm²", 1], ["in²", 1/25.4/25.4], ["mil²", 1000000/25.4/25.4], [ "mcm", 4000/25.4/25.4/Math.PI]],
    flow: [[ "l/m", 28.31684659], ["gpm",7.480526598], ["cfm", 1], ["cc/s", 471.9474432]],
    electrical: [["mΩ",1000], ["Ω",1], ["μΩ",1000000]],
    thermal: [["°C/W",.000001], ["°F/W",.0000018]],
    weight: [["N",4.44822], ["lb",1], ["kg",.4535922053], ["kN",.00444822], ["ton",.0005], ["g",453.5922053]],
    pressure: [["kPa",1],["inHG",.2952997144],["psi",.1450377439],["bar",.01],["atm",.009869232667],["mPa",.001],["ksi",.0001450377439],["Pa",1000],["mbar",10],["torr",7.500637554]]};

var material = [
  [{name:"Steel Grade 10",   weight:11.45/6.894757,yield:130000/6.894757,tensile:150000/6.894757,electrical:0.169,thermal:54},
   {name:"Steel Grade 8",    weight:11.45/6.894757,yield:130000/6.894757,tensile:150000/6.894757,electrical:0.169,thermal:54},
   {name:"Steel Grade 5",    weight:11.45/6.894757,yield: 81000/6.894757,tensile:105000/6.894757,electrical:0.169,thermal:54},
   {name:"Steel Grade 2",    weight:11.45/6.894757,yield: 36000/6.894757,tensile: 60000/6.894757,electrical:0.169,thermal:54},
   {name:"Steel Class 12.9", weight:11.45/6.894757,yield:160000/6.894757,tensile:170000/6.894757,electrical:0.169,thermal:54},
   {name:"Steel Class 10.9", weight:11.45/6.894757,yield:130000/6.894757,tensile:150000/6.894757,electrical:0.169,thermal:54},
   {name:"Steel Class 8.8",  weight:11.45/6.894757,yield: 93000/6.894757,tensile:120000/6.894757,electrical:0.169,thermal:54},
   {name:"Steel Class 5.8",  weight:11.45/6.894757,yield: 57000/6.894757,tensile: 74000/6.894757,electrical:0.169,thermal:54},
   {name:"Steel Class 4.6",  weight:11.45/6.894757,yield: 36000/6.894757,tensile: 60000/6.894757,electrical:0.169,thermal:54},
   {name:"Cast Iron",        weight:11.45/6.894757,yield: 36000/6.894757,tensile: 60000/6.894757,electrical:0.169,thermal:58}],
  [{name:"Stainless 18-8",   weight:11.45/6.894757,yield:     0/6.894757,tensile: 70000/6.894757,electrical:0.169,thermal:16},
   {name:"Stainless 316",    weight:11.45/6.894757,yield:     0/6.894757,tensile: 70000/6.894757,electrical:0.169,thermal:16}],
  [{name:"ABS",              weight:  1.08        ,yield:  48.3         ,tensile:     0         ,electrical:1000000,thermal:0.194708},
   {name:"PVC",              weight:  1.40        ,yield:  55.2         ,tensile:     0         ,electrical:1000000,thermal:0.158651},
   {name:"CPVC",             weight:  1.54        ,yield:  55.2         ,tensile:     0         ,electrical:1000000,thermal:0.144228},
   {name:"PE",               weight:  0.95        ,yield:  22.1         ,tensile:     0         ,electrical:1000000,thermal:0.461531},
   {name:"PEX",              weight:  0.94        ,yield:  19.3         ,tensile:     0         ,electrical:1000000,thermal:0.461531},
   {name:"PB",               weight:  0.92        ,yield:  29.0         ,tensile:     0         ,electrical:1000000,thermal:0.216342},
   {name:"PVDF",             weight:  1.76        ,yield:  48.3         ,tensile:     0         ,electrical:1000000,thermal:0.216342}],
  [{name:"Cement",           weight:11.45/6.894757,yield:     0/6.894757,tensile: 70000/6.894757,electrical:0.169,thermal:.29},
   {name:"Mortar",           weight:11.45/6.894757,yield:     0/6.894757,tensile: 70000/6.894757,electrical:0.169,thermal:1.73},
   {name:"Glass",            weight:11.45/6.894757,yield:     0/6.894757,tensile: 70000/6.894757,electrical:0.169,thermal:1.05}],
  [{name:"Aluminum 7071",    weight:3.840/6.894757,yield: 40000/6.894757,tensile: 54000/6.894757,electrical:.0265,thermal:205}],
  [{name:"Copper H8",        weight:12.69/6.894757,yield: 62000/6.894757,tensile: 94000/6.894757,electrical:.0168,thermal:401},
   {name:"Copper H6",        weight:12.69/6.894757,yield: 62000/6.894757,tensile: 78600/6.894757,electrical:.0168,thermal:401},
   {name:"Copper H4",        weight:12.69/6.894757,yield: 60000/6.894757,tensile: 76000/6.894757,electrical:.0168,thermal:401},
   {name:"Copper H2",        weight:12.69/6.894757,yield: 50000/6.894757,tensile: 62000/6.894757,electrical:.0168,thermal:401},
   {name:"Copper H1",        weight:12.69/6.894757,yield: 40000/6.894757,tensile: 54000/6.894757,electrical:.0168,thermal:401}]];

function floatString(x, digits) {
  if (x>=Math.pow(10,digits) || x < 0) return "-".repeat(digits);
  else return RegExp("[^0]"+(".".repeat(digits-1))).exec(x.toFixed(digits-1));
}

function diameter(x)   {return "<span class=\"diameter\">"   + floatString(x*units.diameter[0][1],5) + " " + units.diameter[0][0] + "</span>";}
function distance(x)   {return "<span class=\"distance\">"   + floatString(x*units.distance[0][1],5) + " " + units.distance[0][0] + "</span>";}
function area(x)       {return "<span class=\"area\">"       + floatString(x*units.area[0][1],5) + " " + units.area[0][0] + "</span>";}
function weight(x)     {return "<span class=\"weight\">"     + floatString(x*units.weight[0][1]/units.distance[0][1],5) + " " + units.weight[0][0]+"/"+units.distance[0][0] + "</span>";}
function force(x)      {return "<span class=\"weight\">"     + floatString(x*units.weight[0][1],5) + " " + units.weight[0][0] + "</span>";}
function torque(x)     {return "<span class=\"distance\">"   + floatString(x*units.weight[0][1]*units.distance[0][1],5) + " " + units.distance[0][0]+"-"+units.weight[0][0] + "</span>";}
function electrical(x) {return "<span class=\"electrical\">" + floatString(x*units.electrical[0][1]/units.distance[0][1],5) + " " + units.electrical[0][0]+"/"+units.distance[0][0] + "</span>";}
function thermal(x)    {return "<span class=\"thermal\">"    + floatString(x*units.thermal[0][1]/units.distance[0][1],5) + " " + units.thermal[0][0]+"-"+units.distance[0][0] + "</span>";}
function pressure(x)    {return "<span class=\"thermal\">"   + floatString(x*units.pressure[0][1],5) + " " + units.pressure[0][0] + "</span>";}

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
  c = event.target.className
  bounds = event.target.getBoundingClientRect();
}

window.ontouchend = function(event) {
  if (event.changedTouches[0].pageX < bounds.left) { // next setting
    for (u in units) if (c == u) units[c].unshift(units[c].pop());
    if (c == "material") material[0].unshift(material[0].pop());
    if (c == "item") location.search = "?"+items.pop().name;
  } else if (event.changedTouches[0].pageX > bounds.right) { // previous setting
    for (u in units) if (c == u) units[c].push(units[c].shift());
    if (c == "material") material[0].push(material[0].shift());
    if (c == "item") {items.shift(); location.search = "?"+items.shift().name;}
  } else if (event.changedTouches[0].pageY < bounds.top) { // next major setting
    if (c == "material") material.unshift(material.pop());
  } else if (event.changedTouches[0].pageY > bounds.bottom) { // previous major setting
    if (c == "material") material.push(material.shift());
  } else {
    return;
  }
  update(items[0]);
}

window.ontouchmove = function(event) {
  var c = event.target.className
  if (c in units || c == "material" || c == "item")
    event.preventDefault()
}
