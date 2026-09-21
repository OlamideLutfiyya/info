let name = prompt("Input your name:");

if (!name || name.trim() === "") {
    document.body.innerHTML = "<h1>Access Denied!!</h1>";
} else {
    let isNew = confirm("Are you new here?");
    
    if (isNew) {
        alert("Welcome " + name);
    } else {
        alert("Welcome back " + name);
    }
}