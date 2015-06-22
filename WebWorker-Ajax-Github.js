
self.addEventListener('message', function(e) {
    var term = e.data;

    makeAjax(term, self);
});

function makeAjax(term, self) {

    //var url = 'https://api.github.com/search/repositories?q=cassandra';
    var url = 'https://api.github.com/search/repositories?q=' + term;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.addEventListener('readystatechange', function() {
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
            //self.postMessage(JSON.stringify(xhr.responseText));
            self.postMessage(xhr.responseText);
        }
    });

    xhr.send();
}