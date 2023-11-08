var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://tth200.github.io/week4/cities1.json');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();