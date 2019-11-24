export function ajaxGet(url) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(this.responseText);
    };
    xhr.onerror = reject;
    xhr.open('GET', url);
    xhr.send();
  });
}

export function ajaxPost(url, data) {
  // console.log(data);
  // let postData = json(data);
  // console.log(data);
  // debugger;
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(this.responseText);
    };
    xhr.onerror = reject;
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);
  });
}

export function json(data){
  // debugger;
  return JSON.parse(data);
}
