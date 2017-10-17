function loadJsonFile(file) {
    var result;

    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        result = JSON.parse(this.responseText);
    };
    xhttp.open('get', file, false);
    xhttp.send();

    return result;
}
