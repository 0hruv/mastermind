let colours = ["red", "green", "blue", "yellow", "orange", "pink", "purple" , "white"];

let colourChoice = document.querySelector(".colour-choices");
for (colour of colours)
{
    let temp = document.createElement("button"); //inserting colours choices
    temp.className = "colour-circle";
    temp.style.backgroundColor = `${colour}`;

    colourChoice.appendChild(temp);
}

let board = document.querySelector(".board")
{
    for (let i = 0 ; i < 15 ; i++ )
    {
        let tab = document.createElement("div");
        tab.className = "tab";

        let input = document.createElement("div");
        input.className = "input";

        for (let j = 0 ; j < 5 ; j++)
        {
            let circle = document.createElement("div");
            circle.className = "colour-circle";
            circle.style.backgroundColor = "#393939";

            input.appendChild(circle);
        }

        let output= document.createElement("div");
        output.className = "output";

        tab.appendChild(input);
        board.appendChild(tab);

    }
}