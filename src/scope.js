// scope
function outerFunc() {
  let outer = "1";
  function innerFunc() {
    let inner = "2";
    console.log(inner);
  }
  console.log(outer);
  //console.log(inner) // error
  innerFunc();
}

outerFunc();
