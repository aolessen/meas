var tp = 1;
window.onclick = function(event) {
  var c = event.target.className;
  if (c == "profile") {
    tp = smul(event.target.innerHTML.split("/")[0])
    update(items[0]);
  }
}

function smul(s) {
  var r = s.split("x");
  var o = 1;
  for (var i=0; i<r.length; i++) o *= Number(r[i]);
  return o;
}

function update(item) {
  var od = item.od;
  var id = od/Math.sqrt(tp);
  var oa = Math.PI*od*od/4;
  var ia = Math.PI*id*id/4;
  
  var out = "<table style=\"white-space:nowrap;font-size:200%\"><tr><td colspan=\"3\"><center>" + itemDisplay(item.name) + "</center></td></tr>\
  <tr><td class=\"material\">" + material[0][0].name + "</td><td>Total</td><td>Strand</td></tr>\
  <tr><td>Diameter        </td><td>" + diameter(od)                               + "</td><td>" + diameter(id)                             + "</td></tr>\
  <tr><td>Circumference   </td><td>" + diameter(Math.PI*od)                       + "</td><td>" + diameter(Math.PI*id)                     + "</td></tr>\
  <tr><td>Area            </td><td>" + area(oa)                                   + "</td><td>" + area(ia)                                 + "</td></tr>\
  <tr><td>Weight          </td><td>" + weight(material[0][0].weight*oa)           + "</td><td>" + weight(material[0][0].weight*ia)         + "</td></tr>\
  <tr><td>Yield Strength  </td><td>" + force(material[0][0].yield*oa)             + "</td><td>" + force(material[0][0].yield*ia)           + "</td></tr>\
  <tr><td>Tensile Strength</td><td>" + force(material[0][0].tensile*oa)           + "</td><td>" + force(material[0][0].tensile*ia)         + "</td></tr>\
  <tr><td>Yield Moment    </td><td>" + torque(material[0][0].yield*tp*id*id*id/6) + "</td><td>" + torque(material[0][0].yield*id*id*id/6)  + "</td></tr>\
  <tr><td>Resistivity     </td><td>" + electrical(material[0][0].electrical/oa)   + "</td><td>" + electrical(material[0][0].electrical/ia) + "</td></tr>\
  <tr><td>Conductivity    </td><td>" + thermal(material[0][0].thermal*oa)         + "</td><td>" + thermal(material[0][0].thermal*ia)       + "</td></tr>\
  </table><br>\
  <table style=\"white-space:nowrap;font-size:200%\"><tr><td>Strand Profile</td><td>Strands</td><td>Diameter</td></tr>";
  
  for (i=0; i<item.strand.length; i++) {
    id = od/Math.sqrt(smul(item.strand[i]));
    if (id == od) j = 0;
    else for (j = items.length-1; items[j].od - id > id - items[j-1].od; j--) {}
    out += "<tr><td class=\"profile\">" + item.strand[i] + "/" + items[j].name + "</td><td>" + smul(item.strand[i]) + "</td><td>" + diameter(id) + "</td></tr>";
  }
  document.documentElement.innerHTML = out +"</table><br>";
}

update(items[0]);