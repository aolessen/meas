function update(item) {
  for (u in units)
    document.cookie = u + "=" + units[u][0][0] + "; path=/";
  document.cookie = "material" + "=" + material[0][0] + "; path=/";
  
  var od = item.od
  if (typeof item.id !== 'undefined') {
    var id = item.id;
    var td = od/2 - id/2;
  } else {
    var td = item.td;
    var id = od - td - td;
  }
  var oa = Math.PI*od*od/4;
  var ia = Math.PI*id*id/4;
  var ta = od-id;
  var oc = Math.PI*od;
  var ic = Math.PI*id;
  
  var out = "<table style=\"white-space:nowrap;font-size:200%\"><tr><td colspan=\"3\"><center>" + itemDisplay(item.name) + "</center></td></tr>\
  <tr><td>Outer        </td><td>" + diameter(od) + "</td><td>" + area(oa)    + "</td></tr>\
  <tr><td>Inner        </td><td>" + diameter(id) + "</td><td>" + area(ia)    + "</td></tr>\
  <tr><td>Wall         </td><td>" + diameter(td) + "</td><td>" + area(oa-ia) + "</td></tr>\
  <tr><td>Lateral Outer</td><td>" + diameter(oc) + "</td><td>" + area(oc*td) + "</td></tr>\
  <tr><td>Lateral Inner</td><td>" + diameter(ic) + "</td><td>" + area(ic*td) + "</td></tr>\
  </table><br>\
  <table style=\"white-space:nowrap;font-size:200%\"><tr><td ontouchmove=\"event.preventDefault()\" class=\"material\">" + material[0][0].name + "</td><td>Wall</td></tr>\
  <tr><td>Weight          </td><td>" + weight(material[0][0].weight*oa)                        + "</td></tr>\
  <tr><td>Yield Strength  </td><td>" + force(material[0][0].yield*ta)                          + "</td></tr>\
  <tr><td>Tensile Strength</td><td>" + force(material[0][0].tensile*ta)                        + "</td></tr>\
  <tr><td>Yield Moment    </td><td>" + torque(material[0][0].yield*(od*od*od-id*id*id)/6000)   + "</td></tr>\
  <tr><td>Tensile Moment  </td><td>" + torque(material[0][0].tensile*(od*od*od-id*id*id)/6000) + "</td></tr>\
  <tr><td>Resistivity     </td><td>" + electrical(material[0][0].electrical/ta)                + "</td></tr>\
  <tr><td>Conductivity    </td><td>" + thermal(material[0][0].thermal*ta)                      + "</td></tr>\
  <tr><td>Pressure        </td><td>" + pressure(material[0][0].tensile*2*td/id)                + "</td></tr>\
  <!--crush strength-->\
  </table><br>"
  document.documentElement.innerHTML = out;
}

update(items[0]);