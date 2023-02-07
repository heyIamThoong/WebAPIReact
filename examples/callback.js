function load(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = function(){
        callback(script);
    }
    script.onerror = function(){
        
    }
    document.head.append(script);
}
load("https://ap.poly.edu.vn/", function(data , error){

});