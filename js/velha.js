let batata = 1
let casas = [];
let soma = 0;
let fim = false;

function criarCasa(){
    casas= [
        [
            $("#cima-esquerda").val(),
            $("#cima-meio").val(),
            $("#cima-direita").val()
        ],
        [
            $("#meio-esquerda").val(),
            $("#meio-meio").val(),
            $("#meio-direita").val()
        ],
        [
            $("#baixo-esquerda").val(),
            $("#baixo-meio").val(),
            $("#baixo-direita").val()
        ]
    ];
};

$(function(){
    $(document).ready(function(){
        gameOver();
        deuVelha();
    });
});

$("div").click(function(){
    if($(this).val() == '' && fim == false){
        if(batata == 1){
            let ide = "#" + $(this).attr("id");
            $(ide + " > img#circulo").css({display: "block"});
            $(ide).val(1)
            batata =2
            criarCasa();
            console.log(casas)
        } 
        else{
                let ide = "#" + $(this).attr("id");
                $(ide + " > img#xis").css({display: "block"});
                $(ide).val(2)
                batata =1
                criarCasa();
        };

    gameOver()

    }
});   






