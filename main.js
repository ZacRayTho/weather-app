let main = document.getElementById("main");

function init() {
    const header = document.createElement("h1");
    header.textContent = "Weather App";
    main.append(header);
    const input = document.createElement("input");
    input.setAttribute( "type", "number");
    main.append(input);
    const btn = document.createElement("button");
    btn.textContent = "Get Weather"
    main.append(btn);
}
init()