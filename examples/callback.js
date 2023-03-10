// function load(src, callback) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = function(){
//         callback(script);
//     }
//     script.onerror = function(){
//         callback(new Error("Error"))
//     }
//     document.head.append(script);
// }
// load("https://ap.poly.edu.vn/", function(data , error){
//     if(error){
//         console.log("a");
//     }else{
//         console.log("b");
//     }
// });
function loadScript(src, callback) {
    const script = document.createElement("script"); // <script>
    script.src = src; // <script src="https://javascript.info/callbacks"></script
    script.onload = () => callback(10);
    script.onerror = () => callback(new Error("Load script failed"));
    document.head.append(script); // <head><script src="https://javascript.info/callbacks"></script</head>
}

loadScript("https://javascript.info/callbacks", function (error, data) {
    console.log("data", data);
    loadScript("https://javascript.info/callbacks2", function (data2) {
        console.log("data2", data2 + data);
        loadScript("https://javascript.info/callbacks2", function (data3) {
            console.log("data2", data3 + data2 + data);
        });
    });
});