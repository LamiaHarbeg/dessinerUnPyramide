function dessiner() {
  var nomnbreEtage = document.getElementById("ligne").value;
  var line = "";
  var strSpace = "";
  var strHashtag = "";
  var res = "";
  if (nomnbreEtage <= 25) {
    for (var i = 0; i < nomnbreEtage; i++) {
      strSpace = " ".repeat(nomnbreEtage - 1 - i);
      strHashtag = "#".repeat(2 * i + 1);
      line = strSpace + strHashtag;
      res += line + "\n";
    }
  }
  console.clear();
  console.log("\n" + res); //affichage du pyramide dans la console
  document.getElementById("pyramide").innerHTML = res.replace(/\n/g, "<br>"); //affichage du pyramide dans la page HTML
}
