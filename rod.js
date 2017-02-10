function update(item) {
  var od = item.od;
  var oa = Math.PI*od*od/4;
  
  var out = "<table style=\"white-space:nowrap;font-size:200%\"><tr><td colspan=\"3\"><center>" + itemDisplay(item.name) + "</center></td></tr>\
  <tr><td class=\"material\">" + material[0][0].name + "</td><td>Total</td></tr>\
  <tr><td>Diameter        </td><td>" + diameter(od)                               + "</td></tr>\
  <tr><td>Circumference   </td><td>" + diameter(Math.PI*od)                       + "</td></tr>\
  <tr><td>Area            </td><td>" + area(oa)                                   + "</td></tr>\
  <tr><td>Weight          </td><td>" + weight(material[0][0].weight*oa)           + "</td></tr>\
  <tr><td>Yield Strength  </td><td>" + force(material[0][0].yield*oa)             + "</td></tr>\
  <tr><td>Tensile Strength</td><td>" + force(material[0][0].tensile*oa)           + "</td></tr>\
  <tr><td>Yield Moment    </td><td>" + torque(material[0][0].yield*od*od*od/6) + "</td></tr>\
  <tr><td>Resistivity     </td><td>" + electrical(material[0][0].electrical/oa)   + "</td></tr>\
  <tr><td>Conductivity    </td><td>" + thermal(material[0][0].thermal*oa)         + "</td></tr>\
  </table>";
  document.documentElement.innerHTML = out +"</table><br>";
}

update(items[0]);