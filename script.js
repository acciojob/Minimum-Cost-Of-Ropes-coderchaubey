function calculateMinCost() {
  var btn = document.getElementById("rope-lengths").value;
  var btnArr = btn.split(',').map(function(params) {
    return parseInt(params);
  });

  btnArr.sort(function(a, b) {
    return a - b;
  });

  var totalCost = 0;
  while (btnArr.length > 1) {
    let a = btnArr[0] + btnArr[1];

    btnArr = btnArr.slice(2);

    totalCost += a;

    btnArr.push(a);

    btnArr.sort(function(a, b) {
      return a - b;
    });
  }

  document.getElementById("result").innerHTML = totalCost;
}