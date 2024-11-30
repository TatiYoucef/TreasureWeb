const onePiece = {
    one: d([70, 97, 107, 101, 83, 101, 99, 114, 101, 116, 115]),
    two: "Just kidding!"
};

/*document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) { // F12 or Ctrl+Shift+I
        e.preventDefault();
    }
});*/

(function() {
    var blockedConsole = ['log', 'debug', 'info', 'warn', 'error', 'assert'];
    blockedConsole.forEach(function(method) {
        console[method] = function() {
        };
    });
})();

function colorControl(color) {
  const colorSet = prompt(a([
    69, 110, 116, 101, 114, 32,
     116, 104, 101, 32, 112, 97, 115, 115, 119
     , 111,
      114, 100, 
    32, 116, 111, 32, 97, 
    99, 99, 101, 115, 115, 32, 67, 104, 97, 108,
     108, 101, 110, 103, 101, 32
  ]) + color);
  const colorArray = {
      2: a([84,97,116,65
        ,108,105]), 3: a([84, 111, 117, 116, 111, 117, 
            84, 105, 116, 105]), 4: a([81, 100, 56, 43, 
    82, 101, 56, 35])
  };

  if (colorSet === colorArray[color]) {
        if(color != 2)window.location.href = a([99, 104, 97,
         108, 108, 101, 110, 103,
          101]) + color + a([46, 104,
         116, 109, 108]); else window.location.href = "https://tatiyoucef.github.io/CryptoWeb/"; 
  } else {
      alert(a([78, 105, 99, 101, 32, 116, 114, 121, 32, 112, 105, 114,
         97, 116, 101, 44, 
        32, 98, 101, 116, 116, 101, 114, 32, 116, 114, 121, 
        32, 115, 111,
         109, 
        101, 116, 104, 
        105, 110, 103, 32, 98, 101,
         116, 116, 101, 
         114, 44, 32, 

        104, 97, 104, 97, 33
      ]));
  }
}

(function () {
    console.log("You're wasting your time reading this...");
})();

function a(timeSetRegion) {
    return timeSetRegion.map(baron => String.fromCharCode(baron)).join('');
}

function d(array){
    console.log(array)
}

function op(jvhsdvbsjfh){
    colorControl(jvhsdvbsjfh)
}

const real = {
    one: d([70, 97, 107, 101, 83, 101, 99, 114, 101, 116, 115]),
    two: "Just kidding!"
};