function go(p){
  window.location.href = p;
}

function copy(){
  let t = document.getElementById("code");
  t.select();
  document.execCommand("copy");
  alert("Copiado!");
}
