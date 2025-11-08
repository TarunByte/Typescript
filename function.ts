function fruits(): number {
  return 10;
}

function simple(): boolean {
  return true;
}

function complex(): number | string | boolean {
  let data = 10;
  let name = "anil siddhu";
  let type = "age";

  if (type == "age") {
    return data;
  } else {
    return name;
  }
}
function anything(): any {
  return;
}
