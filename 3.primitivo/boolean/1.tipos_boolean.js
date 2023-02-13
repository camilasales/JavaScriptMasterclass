//--------------------------------------TIPOS BOOLEAN ------------------------------------------------
//Declara boolean por meio da função construtora, que cria um objeto em torno dele
new Boolean(true); //[Boolean: true]
new Boolean(false); //[Boolean: false]


let condition1 = true;
if (condition1) {
    console.log("The condition1 is true");
} else {
    console.log("The condition1 is false");
}

let condition2 = new Boolean(true);
if (condition2) {
    console.log("The condition2 is true");
} else {
    console.log("The condition2 is false");
}

//ATENCAOOOOOOOOO ----------------------------------------------------------
//somente esses 6 tipos são evaloados para falso, ou seja, podem ser convertidos para falso:
//pq sofrem correção de tipo
!!0; 
!!NaN;
!!"";
!!false;
!!undefined;
!!null;

//qualquer outro sempre vai se manter verdadeiro:
!!-10;
!!"JavaScript";
!!{};
!![];
!!/JavaScript/;
!!new Date();
!!function () {};

