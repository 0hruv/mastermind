let game = 'on';

let circleNumber = 0;
let turn = 0;

let colours = ["red", "green", "blue", "yellow", "orange", "pink", "purple" , "white"];

let code = [];
setCode();

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
            let circleToFill = document.getElementById(`circle${turn}${circleNumber}`);//human input
            circleToFill.style.backgroundColor = temp.style.backgroundColor;
            console.log(circleToFill.id);
            circleNumber++;

            if (circleNumber == 5)
            {
                showSubmitButton();
            }
            }   
        }
    })
    colourChoice.appendChild(temp);
}


let board = document.querySelector(".board")//making the board
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

let submitButton = document.querySelector(".submit")
submitButton.addEventListener("click",()=>{
        submit();
})

let deleteButton = document.querySelector(".delete")
deleteButton.addEventListener("click",()=>{
    if (game == "on")
    {
        if (circleNumber>0)
        {
            circleNumber--;
        }

        let circleToDelete = document.getElementById(`circle`+turn+circleNumber);
        circleToDelete.style.backgroundColor = "peru";

        hideSubmitButton();
    }
})


function submit()
{
    if (game == "on")
    {
        if (circleNumber == 5)
        {
            let humanInput = [];           

            for (let i = 0 ; i < 5 ; i++)
            {
                let temp = document.getElementById(`circle${turn}${i}`);
                humanInput[i] = temp.style.backgroundColor;
                console.log(humanInput[i]);
            }

            console.log('inside submit');
            console.log(humanInput);
            console.log(code);

            let correctPosition = 0;
            let correctColor = 0;

            for (let i = 0 ; i < 5 ; i++)
            {
                if (humanInput[i] == code[i])
                {
                    correctPosition++;
                    humanInput[i] = "null";
                }
            }

            for (a = 0 ; a < 5 ; a++)
            {
                let colorToCheck = code[a];
                for (humanColor of humanInput)
                {
                    if (humanColor == colorToCheck)
                    {
                        correctColor++;
                    }
                }
            }

            let dotsToFill  = 0;
            while ( dotsToFill < correctPosition )
            {
                let correctPositionDot = document.getElementById("dot"+turn+dotsToFill);
                correctPositionDot.style.background = "red";
                dotsToFill++;
            }

            while ( dotsToFill < correctColor + correctPosition )
            {
                let correctPositionDot = document.getElementById("dot"+turn+dotsToFill);
                correctPositionDot.style.background = "white";
                dotsToFill++;
            }

            circleNumber = 0;
            turn++;
            
            if (correctPosition == 5)
            {
                alert("you win!");
                game = "off";
                showFinalCode();
            }
            else if (turn > 14 )
            {
                alert("You lose !");
                game  = "off";
                showFinalCode();
            }
            
            hideSubmitButton();

        }
    }
}

function setCode()
{
    let colourCopy = colours.slice();

    let sizeOfCopy = colourCopy.length;
    for (let i = 0 ; i < 5 ;i++)
    {
        let randomPosition = Math.floor(Math.random()*(sizeOfCopy-0.00001));
        code[i] = colourCopy[randomPosition];
        colourCopy.splice(randomPosition,1);
        sizeOfCopy--;
    }

    console.log(code);

    let hiddenCode = document.querySelector(".hidden");
    for (let i = 0 ; i < 5 ; i++)
    {
        let codeCircle = document.createElement("div");
        codeCircle.className = "colour-circle";
        codeCircle.style.backgroundColor = code[i];

        hiddenCode.appendChild(codeCircle);
    }
}


function showSubmitButton()
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
                let submitButton = document.querySelector(".submit")
                submitButton.style.visibility = "visible";

            console.log("check");


        }
    }
}

function hideSubmitButton()
{
    let submitButton = document.querySelector(".submit")
    submitButton.style.visibility = "hidden";
}

function showFinalCode(){
    let hiddenStuff = document.querySelector(".hidden");
    hiddenStuff.style.display = "flex";
    window.scrollTo(0,0);
}