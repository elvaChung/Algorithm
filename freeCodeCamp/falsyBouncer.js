// Falsy Bouncer
function bouncer1(arr) {
    let result = [];
  
    for( let i = 0; i < arr.length; i++){
      if(arr[i]) result.push(arr[i]);
    }
    return result;
  }  
  console.log(bouncer1([7, "ate", "", false, 9]));

  bouncer2 = (arr) => {
    return arr.filter(Boolean);
  }
  console.log(bouncer2(["a", "b", "", "c"]));
  console.log(bouncer2([false, null, 0, NaN, undefined, ""]));
