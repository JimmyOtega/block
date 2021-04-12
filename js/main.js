$(document).ready(function () {

    var x1 = 0;
    var y1 = 0;
    var t = 0, t2 = 0, t3 = 0;
    var le = 0, le2 = 0, le3 = 0;
    var res = 0, res2 = 0,res3 = 0;
    var r1 = 0;
    var r2 = 0;
    var v=0;
    
    r1 = Math.round(Math.random() * 1000) + 1; //capturo el random
    r2 = Math.round(Math.random() * 550) + 1; //capturo el random
   
    //captura la posicion del terminal del raton para darle esa coordenada al disparo de la nave
    $("body").mousemove(function (e) {
        x1 = e.pageX;
        y1 = e.pageY;
    });

    t = $('.li1').offset(); //captura la pisicion del tanque
    le = t.left.toFixed();
    t2 = $('.li2').offset(); //captura la pisicion del tanque
    le2 = t2.left.toFixed();
    t3 = $('.li2').offset(); //captura la pisicion del tanque
    le3 = t3.left.toFixed();

    //alert(r1 +" , "+ r2 );
    sierre();  //sierre de las hojas de secciones
    tiempo();
    function muevete(evento) {  //permite dar movimiento del tanque con el teclado
        switch (evento.keyCode) {
            case 39:
                evento.preventDefault();
                m_iz();
                break;
            case 37:
                evento.preventDefault();
                m_der();
                break;
            case 13:
                evento.preventDefault();
                anim(y1, x1);
                rotar_cañon();
                anima_articulos_blok_coliccion();
              
                break;
        }

    }
    $(document).on('keydown', muevete);
   

    function m_iz() {      //movimiento izquierdo con el teclado 
        $(".cañon").animate({
            left: "+=10"
        });
        $(".guj").animate({
            left: "+=10"
        });
    }
    function m_der() {    //movimiento derecha con el teclado
        $(".guj").animate({
            left: "-=10"
        });
        $(".cañon").animate({
            left: "-=10"
        });
    }

    function anim(p1, p2) {    //animacion y funcion del disparo
        $(".dot").css({ top: p1, left: p2 });
        $(".dot").show();
        $(".dot").hide(1500);
    }
    function rotar(angulo) {    //rotacion del cañon del  tanque
        $(".img_cañon").rotate(angulo);
    }

    function rotar_cañon() {  // este metodo apunta el cañon al dispara del mismo
        if (x1 > 500 && x1 <= 900) {
            rotar(15);
        }
        else if (x1 > 900 && x1 <= 1200) {
            rotar(30);

        }
        else if (x1 > 1200) {
            rotar(50);
        }
        else if (x1 > 300 && x1 < 500) {
            rotar(-10);
        }
        else if (x1 > 100 && x1 < 300) {
            rotar(-30);
        }
        else if (x1 > 5 && x1 < 100) {
            rotar(-50);
        }
    }

    function anima_articulos_blok_coliccion() {  //este evento muestras las ventanas de articulos

        res = (x1 - le);
        if ((res > 43 && res <= 100) && (y1 > 63 && y1 <= 119)) {
            $(".articulo1").show(2000);
        }
        res2 = (x1 - le2);
        if ((res2 > 10 && res2 <= 105) && (y1 > 74 && y1 <= 99)) {
            $(".articulo2").show(2000);
        }
        res3 = (x1 - le3);
        if ((res3 > 142 && res3 <= 213) && (y1 > 76 && y1 <= 90)) {
            $(".articulo3").show(2000);
        }
        //alert( res3 +"posicion y : " +y1);
    }
    function sierre() {    //este evento sierra la ventanas
        $(".sa").click(function (e) {
            $(".articulo1").fadeOut(3000);//transparencia y desaparece
        });
        $(".sa2").click(function (e) {
            $(".articulo2").fadeOut(3000);//transparencia y desaparece
        });
        $(".sa3").click(function (e) {
            $(".articulo3").fadeOut(3000);//transparencia y desaparece
        });
    }
    function luna_movimiento(l1, l2) { //este es el evento de la luna o posiciones de la misma
        $(".lun").show(2000).hide(3000);
        $(".luna").css({
            top: l1,
            left: l2
        });

        /*var d = $('.lun').position();
        var d1 = $('.lun').position();*/

        //alert("luna_top : " + d.top + " luna_left : "+ d1.left);

    }

    function tiempo(){
       
        setInterval(  //esta instruccion ejecuta una funcion cada expacion de tiempo
            function(){
                r1 = Math.round(Math.random() * 1000) + 1; 
                r2 = Math.round(Math.random() * 550) + 1;
                luna_movimiento(r1, r2);
            },2000

        );
    }


    
});