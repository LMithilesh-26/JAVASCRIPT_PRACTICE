// Immediately Invoked Function Expression:

(function func(){
    console.log(`DB Connected.`);
})();

((name) => {
    console.log(`DB Disconnected, ${name}.`);
})("Kane");