$(document).ready(function () {
    //zona de variables publicas pueden canviar su valor
    var x1 = 0;
    var y1 = 0;
    var t = 0, t2 = 0, t3 = 0;
    var le = 0, le2 = 0, le3 = 0;
    var res = 0, res2 = 0,res3 = 0;
    var r1 = 0;
    var r2 = 0;
    var v=0;
    var con=0;
    var re_lunTop=0,re_lunleft=0;
    var ban=true;
    // termina la zona de variables publicas pueden canviar su valor

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
    $(".articulo1").css({display :'none'});
    $(".articulo2").css({display :'none'});
    sierre();  //sierre de las hojas de secciones
    tiempo();  //funcion que maneja la ejecucion de una funcion cada tiempo 
    function muevete(evento) {  //permite dar movimiento del tanque con el teclado
        switch (evento.keyCode) {
            case 39:
                evento.preventDefault();
                //m_iz();
                break;
            case 37:
                evento.preventDefault();
               // m_der();
                break;
            case 13:
                evento.preventDefault();
                if(ban==true){
                    anim(y1, x1);
                    rotar_cañon();
                    anima_articulos_blok_coliccion();
                    bala_choca_luna();
                  
                }else{
                   
                }
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
        $(".audio")[0].play();
       
    }
    function rotar(angulo) {    //rotacion del cañon del  tanque
        $(".img_cañon").rotate(angulo);
    }

    function rotar_cañon() {  // este metodo apunta el cañon al dispara del mismo
        if (x1 > 500 && x1 <= 900) {
            rotar(15);
            /*setTimeout( function() { }, 7000); esta es una funcion que me permite una espera de 7 segundos*/
            setTimeout( function() { rotar(0) }, 1000);
        }
        else if (x1 > 900 && x1 <= 1000) {
            rotar(30);
            setTimeout( function() { rotar(0) }, 1000);
        }
        else if (x1 > 1000 && x1 <= 1200 ) {
            rotar(50);
            setTimeout( function() { rotar(0) }, 1000);
        }
        else if (x1 > 1200) {
            rotar(80);
            setTimeout( function() { rotar(0) }, 1000);
        }
        else if (x1 > 300 && x1 < 500) {
            rotar(-10);
            setTimeout( function() { rotar(0) }, 1000);
        }
        else if (x1 > 100 && x1 < 300) {
            rotar(-30);
            setTimeout( function() { rotar(0) }, 1000);
        }
        else if (x1 > 5 && x1 < 100) {
            rotar(-50);
            setTimeout( function() { rotar(0) }, 1000);
        }
        else if (x1 > -5 && x1 < 10) {
            rotar(-80);
            setTimeout( function() { rotar(0) }, 1000);
        }
    }

    function anima_articulos_blok_coliccion() {  //este evento muestras las ventanas de los articulos
        res = (x1 - le);
        if ((res > 43 && res <= 100) && (y1 > 63 && y1 <= 119)) {
            $(".articulo1").show(2000);
            ban=false;
        }
        res2 = (x1 - le2);
        if ((res2 > 10 && res2 <= 105) && (y1 > 74 && y1 <= 99)) {
            $(".articulo2").show(2000);
            ban=false;
        }
        res3 = (x1 - le3);
        if ((res3 > 142 && res3 <= 213) && (y1 > 76 && y1 <= 90)) {
            $(".articulo3").show(2000);
            ban=false;
        }
        //alert( res3 +"posicion y : " +y1);
    }
    function sierre() {    //este evento sierra la ventanas de articulos
        $(".sa").click(function (e) {
            $(".articulo1").fadeOut(3000);//transparencia y desaparece
            ban=true;
            //location.reload(); //actualiza la pagina por completo
            setTimeout( function() { location.reload() }, 2000);
        });
        $(".sa2").click(function (e) {
            $(".articulo2").fadeOut(3000);//transparencia y desaparece
            ban=true;
            //location.reload(); //actualiza la pagina por completo
            setTimeout( function() { location.reload() }, 2000);
        });
        $(".sa3").click(function (e) {
            $(".articulo3").fadeOut(3000);//transparencia y desaparece
            ban=true;
        });
    }
   
    function tiempo(){  //funcion que maneja la ejecucion de una funcion cada tiempo 
        setInterval(  //esta instruccion ejecuta una funcion cada expacion de tiempo
            function(){
                r1 = Math.round(Math.random() * 300) + 1; 
                r2 = Math.round(Math.random() * 1200) + 1;
                luna_movimiento(r1, r2);
            },2000

        );
    }

    function luna_movimiento(l1, l2) { //este es el evento de la luna o posiciones de la misma
        $(".lun").show(2000).hide(3000);
        $(".luna").css({
            top: l1,
            left: l2
        });
        
        re_lunTop=l1-y1;
        re_lunleft=l2-x1;

    }
    
    function bala_choca_luna(){     //coliccion del disparo con la luna
       
        if( (re_lunTop > -73 && re_lunTop <= -19 ) || (re_lunTop >19 && re_lunTop <= 73) && (re_lunleft > -99 && re_lunleft<= -64) || (re_lunleft>64 && re_lunleft <=99)){
            con++;
            $(".exlu").css({ top: y1, left: x1 });
            $(".exlu").show(2000);
            $(".exlu").hide(1500);
            $(".img_mano").show(200).hide(1500);
            $(".gana")[0].play();
            $('.contador').show(2000);
            $('.contador').append(con);
           
        }else{
            //alert("no lo logro");
        }
    }
    /*------------- seciones de las paginas articulos ------------*/
    $("#enter").on('click',function(){ 
        gravedad();
    });
    $("#ent").on('click',function(){ 
        gravedad_articulo2();
    });

    function gravedad(){ // utilizar gravedad
        $('.articulo1').jGravity({
            target: '.j_art, .j_art1, .j_art2, .j_art3, .j_art4, .j_art5, .enter', //quienes tendran gravedad
            ignoreClass: 'ignoreMe',    //si quieres que ignore una clase
            weight: 10,
            depth: 5,
            drag: true     //si quiere que puedan mover los div afectados
        });
        //$(this).removeClass('jGravity'); canselar la gravedad
        $(".vidrio")[0].play();
    }

    function gravedad_articulo2(){ // utilizar gravedad
        $('.articulo2').jGravity({
            target: '.titu, .caja1, .caja2, .caja3, .caja4, .caja5', //quienes tendran gravedad
            ignoreClass: 'ignoreMe',    //si quieres que ignore una clase
            weight: 10,
            depth: 5,
            drag: true     //si quiere que puedan mover los div afectados
        });
        //$(this).removeClass('jGravity'); canselar la gravedad
        $(".vidrio")[0].play();
    }

    
});