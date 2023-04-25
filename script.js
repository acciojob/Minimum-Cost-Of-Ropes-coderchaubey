function calculateMinCost() {
  try {
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

    totalCost = totalCost.toString();

    document.getElementById("result").innerHTML = totalCost;
  } catch (err) {
    // Handle the error, e.g. log it, display an error message, etc.
    console.error(err);
    // Cypress will automatically fail the test
    throw err;
  }
}
