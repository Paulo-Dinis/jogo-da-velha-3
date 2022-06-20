function gameOver(){
    
        criarCasa()
        if((
            casas[0][0] == 1&&
            casas[0][1] == 1&&
            casas[0][2] == 1
            )|| 
            (
            casas[0][0] == 2&&
            casas[0][1] == 2&&
            casas[0][2] == 2
            )
        ){
            $("#cima-esquerda").addClass("gameOver")
            $("#cima-meio").addClass("gameOver")
            $("#cima-direita").addClass("gameOver")
            fim = true
            $("#reset").css({display: "block"})
        };

        if((
            casas[1][0] == 1&&
            casas[1][1] == 1&&
            casas[1][2] == 1
            )|| 
            (
            casas[1][0] == 2&&
            casas[1][1] == 2&&
            casas[1][2] == 2
            )
        ){
            $("#meio-esquerda").addClass("gameOver")
            $("#meio-meio").addClass("gameOver")
            $("#meio-direita").addClass("gameOver")
            fim = true
            $("#reset").css({display: "block"})
        };

        if((
            casas[2][0] == 1&&
            casas[2][1] == 1&&
            casas[2][2] == 1
            )|| 
            (
            casas[2][0] == 2&&
            casas[2][1] == 2&&
            casas[2][2] == 2
            )
        ){
            $("#baixo-esquerda").addClass("gameOver")
            $("#baixo-meio").addClass("gameOver")
            $("#baixo-direita").addClass("gameOver")
            fim = true
            $("#reset").css({display: "block"})
        };

        if((
            casas[0][0] == 1&&
            casas[1][0] == 1&&
            casas[2][0] == 1
            )|| 
            (
            casas[0][0] == 2&&
            casas[1][0] == 2&&
            casas[2][0] == 2
            )
        ){
            $("#cima-esquerda").addClass("gameOver")
            $("#meio-esquerda").addClass("gameOver")
            $("#baixo-esquerda").addClass("gameOver")
            fim = true
            $("#reset").css({display: "block"})
        };

        if((
            casas[0][1] == 1&&
            casas[1][1] == 1&&
            casas[2][1] == 1
            )|| 
            (
            casas[0][1] == 2&&
            casas[1][1] == 2&&
            casas[2][1] == 2
            )
        ){
            $("#cima-meio").addClass("gameOver")
            $("#meio-meio").addClass("gameOver")
            $("#baixo-meio").addClass("gameOver")
            fim = true
            $("#reset").css({display: "block"})
        };

        if((
            casas[0][2] == 1&&
            casas[1][2] == 1&&
            casas[2][2] == 1
            )|| 
            (
            casas[0][2] == 2&&
            casas[1][2] == 2&&
            casas[2][2] == 2
            )
        ){
            $("#cima-direita").addClass("gameOver")
            $("#meio-direita").addClass("gameOver")
            $("#baixo-direita").addClass("gameOver")
            fim = true
            $("#reset").css({display: "block"})
        };

        if((
            casas[0][0] == 1&&
            casas[1][1] == 1&&
            casas[2][2] == 1
            )|| 
            (
            casas[0][0] == 2&&
            casas[1][1] == 2&&
            casas[2][2] == 2
            )
        ){
            $("#cima-esquerda").addClass("gameOver")
            $("#meio-meio").addClass("gameOver")
            $("#baixo-direita").addClass("gameOver")
            fim = true
            $("#reset").css({display: "block"})
        };

        if((
            casas[0][2] == 1&&
            casas[1][1] == 1&&
            casas[2][0] == 1
            )|| 
            (
            casas[0][2] == 2&&
            casas[1][1] == 2&&
            casas[2][0] == 2
            )
        ){
            $("#cima-direita").addClass("gameOver")
            $("#meio-meio").addClass("gameOver")
            $("#baixo-esquerda").addClass("gameOver")
            fim = true
            $("#reset").css({display: "block"})
        };
        
    deuVelha()
};

function deuVelha(){
    soma = 0
    for(let i = 0; i <= 2; i++)
        for(let j = 0; j <= 2; j++){
            if(parseInt(casas[i][j]) > 0){
                soma += parseInt(casas[i][j])
            }
    }
    if(soma == 13){
        fim = true
        $("#reset").css({display: "block"})
    }
}