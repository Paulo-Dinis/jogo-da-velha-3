let batata = 1

let casas= [
    [
        $("cima-esquerda").val(),
        $("cima-meio").val(),
        $("cima-direita").val()
    ],
    [
        $("meio-esqueda").val(),
        $("meio-meio").val(),
        $("meio-direita").val()
    ],
    [
        $("baixo-esquerda").val(),
        $("baixo-meio").val(),
        $("baixo-direita").val()
    ]
];

$(function(){
    $("div").click(function(){
        if(batata == 1){
            let ide = "#" + $(this).attr("id");
            let casaMarcada = $(ide + " > img#circulo").css({display: "block"});
            casaMarcada.val(1)
            batata =2
            console.log(casaMarcada.val())
        } 
        else{
            let ide = "#" + $(this).attr("id");
            let casaMarcada = $(ide + " > img#xis").css({display: "block"});
            casaMarcada.val(2)
            batata =1
            console.log(casaMarcada.val())
        };
    });
});

$(function(){
    $("div").click(function(){
        
    });
});





