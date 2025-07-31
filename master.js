let game = 'on';

let circleNumber = 0;
let turn = 0;

let colours = ["red", "green", "blue", "yellow", "orange", "pink", "purple" , "white"];

let colourChoice = document.querySelector(".colour-choices");
for (colour of colours)
{
    let temp = document.createElement("button"); //inserting colours choices
    temp.className = "colour-circle";
    temp.style.backgroundColor = `${colour}`;

    temp.addEventListener("click",()=>{
        if (game == 'on')
        {
            if (circleNumber < 5)
            {
            let circleToFill = document.getElementById(`circle${turn}${circleNumber}`);
            circleToFill.style.backgroundColor = temp.style.backgroundColor;
            console.log(circleToFill.id);
            circleNumber++;

            if (circleNumber == 5)
            {
                sumbit();
            }
            }   
        }
    })
    colourChoice.appendChild(temp);
}


let board = document.querySelector(".board")
{
    for (let i = 14 ; i >= 0 ; i-- )
    {
        let tab = document.createElement("div");
        tab.className = "tab";

        let input = document.createElement("div");
        input.className = "input";

        for (let j = 0 ; j < 5 ; j++)
        {
            let circle = document.createElement("button");
            circle.className = "colour-circle";
            circle.style.backgroundColor = "peru"
            circle.style.opacity = "0.75";
            circle.id = `circle`+i+j;
            console.log(circle.id);

      
            input.appendChild(circle);
            
        }

        let output= document.createElement("div");
        output.className = "output";

        let result= document.createElement("div");
        result.className = "result";

        output.appendChild(result);

        for (let k = 0 ;k < 5 ; k++)
        {
            let dot = document.createElement("div");
            dot.className = "dots";
            dot.id = "dot"+i+k;
            result.appendChild(dot);
        }
        
        tab.appendChild(input);
        tab.appendChild(output);
        board.appendChild(tab);

    }
}


function sumbit()
{
    if (game == "on")
    {
        if (circleNumber == 5)
        {
            let humanInput = [];           

            for (let i = 0 ; i < 5 ; i++)
            {
                let temp = document.getElementById(`circle${turn}${i}`);
                humanInput[i] = {};
                humanInput[i].color = temp.style.backgroundColor;
                humanInput[i].position = i;
                console.log(humanInput[i]);
            }

            for (color of colours )
            {
                let freq = 0;
                for (obj of humanInput)
                {
                    if (color == obj.color)
                    {
                        freq++;
                    }

                    if (obj.color == "peru" )
                    {
                        return  ;
                    }

                }

                if (freq > 1)
                {
                    console.log("repeat");
                    return ;
                }

            }

            console.log("check");


        }
    }
}

function setCode()
{
    let 
}