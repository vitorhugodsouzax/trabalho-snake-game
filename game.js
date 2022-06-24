

//desenhando o background

let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32 //32pixeis por 32pixeis o nosso quadrado




 function drawBackgroud() {
    context.fillStyle ="black";
    context.fillRect(0, 0, 16*box, 16*box)   //16 de largura e 16 de altura terá o jogo

 }

 drawBackgroud();



 //desenhar a cobra
 

 let snake = [];  // criar a cobrinha como uma lista , por que ela vai ter uma serie de coordenadas que serao pintadas para criar os quadrados
 snake[0] = {        
     x: 8 * box,
     y: 8 * box
 }
 

 function drawSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
    
    }
    
    drawSnake();



    //ao começar o jogo a cobra ira andar para a direita
   


    let direction ="RIGHT";




    
    function draw () {
        drawBackgroud();
        drawSnake();
        drawFood();


 
      
          
        


        let snakeX = snake[0].x   //a coordenada do primeiro quadrado
        let snakeY = snake[0].y
      

        if (direction == "RIGHT") snakeX += box;     //eu quero que a coordenada X seja aumentada pois ela ira  ir para a direita
        if (direction == "LEFT") snakeX -= box;      // //eu quero que a coordenada Y seja diminuida pois ela ira para esquerda
        if (direction == "UP") snakeY -= box;         //eu quero que a coordenada Y seja diminuida pois ela ira para cima
        if (direction == "DOWN") snakeY += box;       // eu quero que a coordenada Y seja aumentada pois ela ira  ir para a baixo

        for(i = 1; i < snake.length; i++){                                    // isso faz com que a cobrinha se choque com o proprio corpo
            if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){          //como faz isso? se a coordenada X(Y) da cabeça da cobra for igual a cordenada incial eles se chocam 
                clearInterval(game);    //essa function clearinterval faz com que pare de chamar a function (DRAW)                                      // entao o jogo da gameover
                alert("Você perdeu!!! (╥ω╥)")
            }
        }

        if(snakeX < 0 * box || snakeX > 15 * box || snakeY < 0 * box || snakeY > 15 * box){  
            clearInterval(game); 
            //alert("Voce perdeu")  //por algum motivo quando eu coloco o alerta o game termina "AS VEZES" antes de chegar no limite e "AS VEZES" ele finaliza o game se o 
            //professor quiser testar nao sei muito oq fazer ja tentei de tudo do que eu sei
        }

            
        
        
        




        //aumentar de tamanho quando comer

        if(snakeX != food.x || snakeY != food.y){           
          snake.pop();                  // esse metodo pop tira o último elemento da lista
           } else {
            food.x = Math.floor(Math.random() * 15 + 1) * box;  
            food.y = Math.floor(Math.random() * 15 + 1) * box;
           }
        
        

        


        let newHead = {   
            x: snakeX,
            y: snakeY
        }

        snake.unshift(newHead); //metodo unshift adiciona como primeiro quadradinho da cobrinha
          
    
    }


    let game = setInterval(draw, 100);  
        
    // fazer com que o teclado mude a direcao da cobra
    //addEventListener quando um evento aconterce ele chama uma funcao vou usar ele para quando eu aperte o botao esse metodo detecte e chame uma funcao que eu quero



    document.addEventListener("keydown", updateDirection); // eu aperto uma tecla addeventlistener vai chamar updatedirection passando como argumento o event que vai passar o codigo keycode que assim ele ira atualizar o valor de direction

   function updateDirection(event){    //&& direction != "RIGHT" ISSO FAZ COM QUE A COBRA NAO VA PARA DIRECAO OPOSTA
        if (event.keyCode == 37 && direction != "RIGHT") direction = "LEFT";      
        if (event.keyCode == 38 && direction != "DOWN") direction = "UP";
        if (event.keyCode == 39 && direction != "LEFT") direction = "RIGHT";
        if (event.keyCode == 40 && direction != "UP") direction = "DOWN";


    
   }

   //fazer a comida 

 let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,    //fazer com que a comida seja criada randomicamente dentro do box  e nao fora dele
    y: Math.floor(Math.random() * 15 + 1) * box


 }
   function drawFood () {
    context.fillStyle = "red"
    context.fillRect(food.x, food.y, box, box);	
   }

   drawFood()
    

   


   


