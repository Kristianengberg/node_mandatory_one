$(function() {
    $("#navBar").load("../components/navbar.html");
});

$(function() {
    $("#footer").load("../components/footer.html");
});



function time() {
    let date = new Date();

    const time =
        "The time is: " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();


    console.log("time is served");
    console.log(time);
    document.getElementById("timeexample").innerHTML = time;
}