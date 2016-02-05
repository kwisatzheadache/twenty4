/*so now I've got a case where I have four numbers. I need every combination
of operands applied to the set of numbers, in every possible order.
So... I should establish an ordered set. Then apply each combo of operands
to that set. And then apply each combo of operands to ever order of the set.
[1,2,3,4]
[1,2,4,3]
[etc]

[+,+,+]
[+,+,-]

Such that, for every [1,2,3,4], every [+,+,+] will be applied.*/
var fNu = [1,2,3,4];
var answer = [];


var fourRandom = [];//empty array

function numGen (){//random generate four numbers 0<x<10
  for (i=0; i<4; i++) {
    fourRandom[i] = Math.floor((Math.random() * 10) + 1);
  }
}
function ranCheck(){
if  (fourRandom[0]===fourRandom[1]
    ||fourRandom[0]===fourRandom[2]
    ||fourRandom[0]===fourRandom[3]
    ||fourRandom[1]===fourRandom[2]
    ||fourRandom[1]===fourRandom[3]
    ||fourRandom[2]===fourRandom[3]){
      numGen();
    }
  }
function genRan(){
  numGen();
  ranCheck();
  console.log(fourRandom);
}
genRan();

//genRan() is used to generate a four digit random array, fourRandom[].


//Creation of functions that test every order and combination of operands
function mat0(array){
  answer = ((array[0] + array[1]) + array[2]) + array[3];
  console.log(answer);
}
function mat1(array){
  answer = ((array[0] + array[1]) + array[2]) - array[3];
  console.log(answer);
}
function mat2(array){
  answer = ((array[0] + array[1]) + array[2]) * array[3];
  console.log(answer);
}
function mat3(array){
  answer = ((array[0] + array[1]) + array[2]) / array[3];
  console.log(answer);
}
function mat4(array){
  answer = ((array[0] + array[1]) + array[2]) ^ array[3];
  console.log(answer);
}
function mat5(array){
  answer = ((array[0] + array[1]) - array[2]) + array[3];
  console.log(answer);
}
function mat6(array){
  answer = ((array[0] + array[1]) - array[2]) - array[3];
  console.log(answer);
}
function mat7(array){
  answer = ((array[0] + array[1]) - array[2]) * array[3];
  console.log(answer);
}
function mat8(array){
  answer = ((array[0] + array[1]) - array[2]) / array[3];
  console.log(answer);
}
function mat9(array){
  answer = ((array[0] + array[1]) - array[2]) ^ array[3];
  console.log(answer);
}
function mat10(array){
  answer = ((array[0] + array[1]) * array[2]) + array[3];
  console.log(answer);
}
function mat11(array){
  answer = ((array[0] + array[1]) * array[2]) - array[3];
  console.log(answer);
}
function mat12(array){
  answer = ((array[0] + array[1]) * array[2]) * array[3];
  console.log(answer);
}
function mat13(array){
  answer = ((array[0] + array[1]) * array[2]) / array[3];
  console.log(answer);
}
function mat14(array){
  answer = ((array[0] + array[1]) * array[2]) ^ array[3];
  console.log(answer);
}
function mat15(array){
  answer = ((array[0] + array[1]) / array[2]) + array[3];
  console.log(answer);
}
function mat16(array){
  answer = ((array[0] + array[1]) / array[2]) - array[3];
  console.log(answer);
}
function mat17(array){
  answer = ((array[0] + array[1]) / array[2]) * array[3];
  console.log(answer);
}
function mat18(array){
  answer = ((array[0] + array[1]) / array[2]) / array[3];
  console.log(answer);
}
function mat19(array){
  answer = ((array[0] + array[1]) / array[2]) ^ array[3];
  console.log(answer);
}
function mat20(array){
  answer = ((array[0] + array[1]) ^ array[2]) + array[3];
  console.log(answer);
}
function mat21(array){
  answer = ((array[0] + array[1]) ^ array[2]) - array[3];
  console.log(answer);
}
function mat22(array){
  answer = ((array[0] + array[1]) ^ array[2]) * array[3];
  console.log(answer);
}
function mat23(array){
  answer = ((array[0] + array[1]) ^ array[2]) / array[3];
  console.log(answer);
}
function mat24(array){
  answer = ((array[0] + array[1]) ^ array[2]) ^ array[3];
  console.log(answer);
}
function mat25(array){
  answer = ((array[0] - array[1]) + array[2]) + array[3];
  console.log(answer);
}
function mat26(array){
  answer = ((array[0] - array[1]) + array[2]) - array[3];
  console.log(answer);
}
function mat27(array){
  answer = ((array[0] - array[1]) + array[2]) * array[3];
  console.log(answer);
}
function mat28(array){
  answer = ((array[0] - array[1]) + array[2]) / array[3];
  console.log(answer);
}
function mat29(array){
  answer = ((array[0] - array[1]) + array[2]) ^ array[3];
  console.log(answer);
}
function mat30(array){
  answer = ((array[0] - array[1]) - array[2]) + array[3];
  console.log(answer);
}
function mat31(array){
  answer = ((array[0] - array[1]) - array[2]) - array[3];
  console.log(answer);
}
function mat32(array){
  answer = ((array[0] - array[1]) - array[2]) * array[3];
  console.log(answer);
}
function mat33(array){
  answer = ((array[0] - array[1]) - array[2]) / array[3];
  console.log(answer);
}
function mat34(array){
  answer = ((array[0] - array[1]) - array[2]) ^ array[3];
  console.log(answer);
}
function mat35(array){
  answer = ((array[0] - array[1]) * array[2]) + array[3];
  console.log(answer);
}
function mat36(array){
  answer = ((array[0] - array[1]) * array[2]) - array[3];
  console.log(answer);
}
function mat37(array){
  answer = ((array[0] - array[1]) * array[2]) * array[3];
  console.log(answer);
}
function mat38(array){
  answer = ((array[0] - array[1]) * array[2]) / array[3];
  console.log(answer);
}
function mat39(array){
  answer = ((array[0] - array[1]) * array[2]) ^ array[3];
  console.log(answer);
}
function mat40(array){
  answer = ((array[0] - array[1]) / array[2]) + array[3];
  console.log(answer);
}
function mat41(array){
  answer = ((array[0] - array[1]) / array[2]) - array[3];
  console.log(answer);
}
function mat42(array){
  answer = ((array[0] - array[1]) / array[2]) * array[3];
  console.log(answer);
}
function mat43(array){
  answer = ((array[0] - array[1]) / array[2]) / array[3];
  console.log(answer);
}
function mat44(array){
  answer = ((array[0] - array[1]) / array[2]) ^ array[3];
  console.log(answer);
}
function mat45(array){
  answer = ((array[0] - array[1]) ^ array[2]) + array[3];
  console.log(answer);
}
function mat46(array){
  answer = ((array[0] - array[1]) ^ array[2]) - array[3];
  console.log(answer);
}
function mat47(array){
  answer = ((array[0] - array[1]) ^ array[2]) * array[3];
  console.log(answer);
}
function mat48(array){
  answer = ((array[0] - array[1]) ^ array[2]) / array[3];
  console.log(answer);
}
function mat49(array){
  answer = ((array[0] - array[1]) ^ array[2]) ^ array[3];
  console.log(answer);
}
function mat50(array){
  answer = ((array[0] * array[1]) + array[2]) + array[3];
  console.log(answer);
}
function mat51(array){
  answer = ((array[0] * array[1]) + array[2]) - array[3];
  console.log(answer);
}
function mat52(array){
  answer = ((array[0] * array[1]) + array[2]) * array[3];
  console.log(answer);
}
function mat53(array){
  answer = ((array[0] * array[1]) + array[2]) / array[3];
  console.log(answer);
}
function mat54(array){
  answer = ((array[0] * array[1]) + array[2]) ^ array[3];
  console.log(answer);
}
function mat55(array){
  answer = ((array[0] * array[1]) - array[2]) + array[3];
  console.log(answer);
}
function mat56(array){
  answer = ((array[0] * array[1]) - array[2]) - array[3];
  console.log(answer);
}
function mat57(array){
  answer = ((array[0] * array[1]) - array[2]) * array[3];
  console.log(answer);
}
function mat58(array){
  answer = ((array[0] * array[1]) - array[2]) / array[3];
  console.log(answer);
}
function mat59(array){
  answer = ((array[0] * array[1]) - array[2]) ^ array[3];
  console.log(answer);
}
function mat60(array){
  answer = ((array[0] * array[1]) * array[2]) + array[3];
  console.log(answer);
}
function mat61(array){
  answer = ((array[0] * array[1]) * array[2]) - array[3];
  console.log(answer);
}
function mat62(array){
  answer = ((array[0] * array[1]) * array[2]) * array[3];
  console.log(answer);
}
function mat63(array){
  answer = ((array[0] * array[1]) * array[2]) / array[3];
  console.log(answer);
}
function mat64(array){
  answer = ((array[0] * array[1]) * array[2]) ^ array[3];
  console.log(answer);
}
function mat65(array){
  answer = ((array[0] * array[1]) / array[2]) + array[3];
  console.log(answer);
}
function mat66(array){
  answer = ((array[0] * array[1]) / array[2]) - array[3];
  console.log(answer);
}
function mat67(array){
  answer = ((array[0] * array[1]) / array[2]) * array[3];
  console.log(answer);
}
function mat68(array){
  answer = ((array[0] * array[1]) / array[2]) / array[3];
  console.log(answer);
}
function mat69(array){
  answer = ((array[0] * array[1]) / array[2]) ^ array[3];
  console.log(answer);
}
function mat70(array){
  answer = ((array[0] * array[1]) ^ array[2]) + array[3];
  console.log(answer);
}
function mat71(array){
  answer = ((array[0] * array[1]) ^ array[2]) - array[3];
  console.log(answer);
}
function mat72(array){
  answer = ((array[0] * array[1]) ^ array[2]) * array[3];
  console.log(answer);
}
function mat73(array){
  answer = ((array[0] * array[1]) ^ array[2]) / array[3];
  console.log(answer);
}
function mat74(array){
  answer = ((array[0] * array[1]) ^ array[2]) ^ array[3];
  console.log(answer);
}
function mat75(array){
  answer = ((array[0] / array[1]) + array[2]) + array[3];
  console.log(answer);
}
function mat76(array){
  answer = ((array[0] / array[1]) + array[2]) - array[3];
  console.log(answer);
}
function mat77(array){
  answer = ((array[0] / array[1]) + array[2]) * array[3];
  console.log(answer);
}
function mat78(array){
  answer = ((array[0] / array[1]) + array[2]) / array[3];
  console.log(answer);
}
function mat79(array){
  answer = ((array[0] / array[1]) + array[2]) ^ array[3];
  console.log(answer);
}
function mat80(array){
  answer = ((array[0] / array[1]) - array[2]) + array[3];
  console.log(answer);
}
function mat81(array){
  answer = ((array[0] / array[1]) - array[2]) - array[3];
  console.log(answer);
}
function mat82(array){
  answer = ((array[0] / array[1]) - array[2]) * array[3];
  console.log(answer);
}
function mat83(array){
  answer = ((array[0] / array[1]) - array[2]) / array[3];
  console.log(answer);
}
function mat84(array){
  answer = ((array[0] / array[1]) - array[2]) ^ array[3];
  console.log(answer);
}
function mat85(array){
  answer = ((array[0] / array[1]) * array[2]) + array[3];
  console.log(answer);
}
function mat86(array){
  answer = ((array[0] / array[1]) * array[2]) - array[3];
  console.log(answer);
}
function mat87(array){
  answer = ((array[0] / array[1]) * array[2]) * array[3];
  console.log(answer);
}
function mat88(array){
  answer = ((array[0] / array[1]) * array[2]) / array[3];
  console.log(answer);
}
function mat89(array){
  answer = ((array[0] / array[1]) * array[2]) ^ array[3];
  console.log(answer);
}
function mat90(array){
  answer = ((array[0] / array[1]) / array[2]) + array[3];
  console.log(answer);
}
function mat91(array){
  answer = ((array[0] / array[1]) / array[2]) - array[3];
  console.log(answer);
}
function mat92(array){
  answer = ((array[0] / array[1]) / array[2]) * array[3];
  console.log(answer);
}
function mat93(array){
  answer = ((array[0] / array[1]) / array[2]) / array[3];
  console.log(answer);
}
function mat94(array){
  answer = ((array[0] / array[1]) / array[2]) ^ array[3];
  console.log(answer);
}
function mat95(array){
  answer = ((array[0] / array[1]) ^ array[2]) + array[3];
  console.log(answer);
}
function mat96(array){
  answer = ((array[0] / array[1]) ^ array[2]) - array[3];
  console.log(answer);
}
function mat97(array){
  answer = ((array[0] / array[1]) ^ array[2]) * array[3];
  console.log(answer);
}
function mat98(array){
  answer = ((array[0] / array[1]) ^ array[2]) / array[3];
  console.log(answer);
}
function mat99(array){
  answer = ((array[0] / array[1]) ^ array[2]) ^ array[3];
  console.log(answer);
}
function mat100(array){
  answer = ((array[0] ^ array[1]) + array[2]) + array[3];
  console.log(answer);
}
function mat101(array){
  answer = ((array[0] ^ array[1]) + array[2]) - array[3];
  console.log(answer);
}
function mat102(array){
  answer = ((array[0] ^ array[1]) + array[2]) * array[3];
  console.log(answer);
}
function mat103(array){
  answer = ((array[0] ^ array[1]) + array[2]) / array[3];
  console.log(answer);
}
function mat104(array){
  answer = ((array[0] ^ array[1]) + array[2]) ^ array[3];
  console.log(answer);
}
function mat105(array){
  answer = ((array[0] ^ array[1]) - array[2]) + array[3];
  console.log(answer);
}
function mat106(array){
  answer = ((array[0] ^ array[1]) - array[2]) - array[3];
  console.log(answer);
}
function mat107(array){
  answer = ((array[0] ^ array[1]) - array[2]) * array[3];
  console.log(answer);
}
function mat108(array){
  answer = ((array[0] ^ array[1]) - array[2]) / array[3];
  console.log(answer);
}
function mat109(array){
  answer = ((array[0] ^ array[1]) - array[2]) ^ array[3];
  console.log(answer);
}
function mat110(array){
  answer = ((array[0] ^ array[1]) * array[2]) + array[3];
  console.log(answer);
}
function mat111(array){
  answer = ((array[0] ^ array[1]) * array[2]) - array[3];
  console.log(answer);
}
function mat112(array){
  answer = ((array[0] ^ array[1]) * array[2]) * array[3];
  console.log(answer);
}
function mat113(array){
  answer = ((array[0] ^ array[1]) * array[2]) / array[3];
  console.log(answer);
}
function mat114(array){
  answer = ((array[0] ^ array[1]) * array[2]) ^ array[3];
  console.log(answer);
}
function mat115(array){
  answer = ((array[0] ^ array[1]) / array[2]) + array[3];
  console.log(answer);
}
function mat116(array){
  answer = ((array[0] ^ array[1]) / array[2]) - array[3];
  console.log(answer);
}
function mat117(array){
  answer = ((array[0] ^ array[1]) / array[2]) * array[3];
  console.log(answer);
}
function mat118(array){
  answer = ((array[0] ^ array[1]) / array[2]) / array[3];
  console.log(answer);
}
function mat119(array){
  answer = ((array[0] ^ array[1]) / array[2]) ^ array[3];
  console.log(answer);
}
function mat120(array){
  answer = ((array[0] ^ array[1]) ^ array[2]) + array[3];
  console.log(answer);
}
function mat121(array){
  answer = ((array[0] ^ array[1]) ^ array[2]) - array[3];
  console.log(answer);
}
function mat122(array){
  answer = ((array[0] ^ array[1]) ^ array[2]) * array[3];
  console.log(answer);
}
function mat123(array){
  answer = ((array[0] ^ array[1]) ^ array[2]) / array[3];
  console.log(answer);
}
function mat124(array){
  answer = ((array[0] ^ array[1]) ^ array[2]) ^ array[3];
  console.log(answer);
}
//covering the portion of operations applied to two sets of ().
//I just copied the entire thing, despite its redundancy.
function mot0(array){
  answer = (array[0] + array[1]) + (array[2] + array[3]);
  console.log(answer);
}
function mot1(array){
  answer = (array[0] + array[1]) + (array[2] - array[3]);
  console.log(answer);
}
function mot2(array){
  answer = (array[0] + array[1]) + (array[2] * array[3]);
  console.log(answer);
}
function mot3(array){
  answer = (array[0] + array[1]) + (array[2] / array[3]);
  console.log(answer);
}
function mot4(array){
  answer = (array[0] + array[1]) + (array[2] ^ array[3]);
  console.log(answer);
}
function mot5(array){
  answer = (array[0] + array[1]) - (array[2] + array[3]);
  console.log(answer);
}
function mot6(array){
  answer = (array[0] + array[1]) - (array[2] - array[3]);
  console.log(answer);
}
function mot7(array){
  answer = (array[0] + array[1]) - (array[2] * array[3]);
  console.log(answer);
}
function mot8(array){
  answer = (array[0] + array[1]) - (array[2] / array[3]);
  console.log(answer);
}
function mot9(array){
  answer = (array[0] + array[1]) - (array[2] ^ array[3]);
  console.log(answer);
}
function mot10(array){
  answer = (array[0] + array[1]) * (array[2] + array[3]);
  console.log(answer);
}
function mot11(array){
  answer = (array[0] + array[1]) * (array[2] - array[3]);
  console.log(answer);
}
function mot12(array){
  answer = (array[0] + array[1]) * (array[2] * array[3]);
  console.log(answer);
}
function mot13(array){
  answer = (array[0] + array[1]) * (array[2] / array[3]);
  console.log(answer);
}
function mot14(array){
  answer = (array[0] + array[1]) * (array[2] ^ array[3]);
  console.log(answer);
}
function mot15(array){
  answer = (array[0] + array[1]) / (array[2] + array[3]);
  console.log(answer);
}
function mot16(array){
  answer = (array[0] + array[1]) / (array[2] - array[3]);
  console.log(answer);
}
function mot17(array){
  answer = (array[0] + array[1]) / (array[2] * array[3]);
  console.log(answer);
}
function mot18(array){
  answer = (array[0] + array[1]) / (array[2] / array[3]);
  console.log(answer);
}
function mot19(array){
  answer = (array[0] + array[1]) / (array[2] ^ array[3]);
  console.log(answer);
}
function mot20(array){
  answer = (array[0] + array[1]) ^ (array[2] + array[3]);
  console.log(answer);
}
function mot21(array){
  answer = (array[0] + array[1]) ^ (array[2] - array[3]);
  console.log(answer);
}
function mot22(array){
  answer = (array[0] + array[1]) ^ (array[2] * array[3]);
  console.log(answer);
}
function mot23(array){
  answer = (array[0] + array[1]) ^ (array[2] / array[3]);
  console.log(answer);
}
function mot24(array){
  answer = (array[0] + array[1]) ^ (array[2] ^ array[3]);
  console.log(answer);
}
function mot25(array){
  answer = (array[0] - array[1]) + (array[2] + array[3]);
  console.log(answer);
}
function mot26(array){
  answer = (array[0] - array[1]) + (array[2] - array[3]);
  console.log(answer);
}
function mot27(array){
  answer = (array[0] - array[1]) + (array[2] * array[3]);
  console.log(answer);
}
function mot28(array){
  answer = (array[0] - array[1]) + (array[2] / array[3]);
  console.log(answer);
}
function mot29(array){
  answer = (array[0] - array[1]) + (array[2] ^ array[3]);
  console.log(answer);
}
function mot30(array){
  answer = (array[0] - array[1]) - (array[2] + array[3]);
  console.log(answer);
}
function mot31(array){
  answer = (array[0] - array[1]) - (array[2] - array[3]);
  console.log(answer);
}
function mot32(array){
  answer = (array[0] - array[1]) - (array[2] * array[3]);
  console.log(answer);
}
function mot33(array){
  answer = (array[0] - array[1]) - (array[2] / array[3]);
  console.log(answer);
}
function mot34(array){
  answer = (array[0] - array[1]) - (array[2] ^ array[3]);
  console.log(answer);
}
function mot35(array){
  answer = (array[0] - array[1]) * (array[2] + array[3]);
  console.log(answer);
}
function mot36(array){
  answer = (array[0] - array[1]) * (array[2] - array[3]);
  console.log(answer);
}
function mot37(array){
  answer = (array[0] - array[1]) * (array[2] * array[3]);
  console.log(answer);
}
function mot38(array){
  answer = (array[0] - array[1]) * (array[2] / array[3]);
  console.log(answer);
}
function mot39(array){
  answer = (array[0] - array[1]) * (array[2] ^ array[3]);
  console.log(answer);
}
function mot40(array){
  answer = (array[0] - array[1]) / (array[2] + array[3]);
  console.log(answer);
}
function mot41(array){
  answer = (array[0] - array[1]) / (array[2] - array[3]);
  console.log(answer);
}
function mot42(array){
  answer = (array[0] - array[1]) / (array[2] * array[3]);
  console.log(answer);
}
function mot43(array){
  answer = (array[0] - array[1]) / (array[2] / array[3]);
  console.log(answer);
}
function mot44(array){
  answer = (array[0] - array[1]) / (array[2] ^ array[3]);
  console.log(answer);
}
function mot45(array){
  answer = (array[0] - array[1]) ^ (array[2] + array[3]);
  console.log(answer);
}
function mot46(array){
  answer = (array[0] - array[1]) ^ (array[2] - array[3]);
  console.log(answer);
}
function mot47(array){
  answer = (array[0] - array[1]) ^ (array[2] * array[3]);
  console.log(answer);
}
function mot48(array){
  answer = (array[0] - array[1]) ^ (array[2] / array[3]);
  console.log(answer);
}
function mot49(array){
  answer = (array[0] - array[1]) ^ (array[2] ^ array[3]);
  console.log(answer);
}
function mot50(array){
  answer = (array[0] * array[1]) + (array[2] + array[3]);
  console.log(answer);
}
function mot51(array){
  answer = (array[0] * array[1]) + (array[2] - array[3]);
  console.log(answer);
}
function mot52(array){
  answer = (array[0] * array[1]) + (array[2] * array[3]);
  console.log(answer);
}
function mot53(array){
  answer = (array[0] * array[1]) + (array[2] / array[3]);
  console.log(answer);
}
function mot54(array){
  answer = (array[0] * array[1]) + (array[2] ^ array[3]);
  console.log(answer);
}
function mot55(array){
  answer = (array[0] * array[1]) - (array[2] + array[3]);
  console.log(answer);
}
function mot56(array){
  answer = (array[0] * array[1]) - (array[2] - array[3]);
  console.log(answer);
}
function mot57(array){
  answer = (array[0] * array[1]) - (array[2] * array[3]);
  console.log(answer);
}
function mot58(array){
  answer = (array[0] * array[1]) - (array[2] / array[3]);
  console.log(answer);
}
function mot59(array){
  answer = (array[0] * array[1]) - (array[2] ^ array[3]);
  console.log(answer);
}
function mot60(array){
  answer = (array[0] * array[1]) * (array[2] + array[3]);
  console.log(answer);
}
function mot61(array){
  answer = (array[0] * array[1]) * (array[2] - array[3]);
  console.log(answer);
}
function mot62(array){
  answer = (array[0] * array[1]) * (array[2] * array[3]);
  console.log(answer);
}
function mot63(array){
  answer = (array[0] * array[1]) * (array[2] / array[3]);
  console.log(answer);
}
function mot64(array){
  answer = (array[0] * array[1]) * (array[2] ^ array[3]);
  console.log(answer);
}
function mot65(array){
  answer = (array[0] * array[1]) / (array[2] + array[3]);
  console.log(answer);
}
function mot66(array){
  answer = (array[0] * array[1]) / (array[2] - array[3]);
  console.log(answer);
}
function mot67(array){
  answer = (array[0] * array[1]) / (array[2] * array[3]);
  console.log(answer);
}
function mot68(array){
  answer = (array[0] * array[1]) / (array[2] / array[3]);
  console.log(answer);
}
function mot69(array){
  answer = (array[0] * array[1]) / (array[2] ^ array[3]);
  console.log(answer);
}
function mot70(array){
  answer = (array[0] * array[1]) ^ (array[2] + array[3]);
  console.log(answer);
}
function mot71(array){
  answer = (array[0] * array[1]) ^ (array[2] - array[3]);
  console.log(answer);
}
function mot72(array){
  answer = (array[0] * array[1]) ^ (array[2] * array[3]);
  console.log(answer);
}
function mot73(array){
  answer = (array[0] * array[1]) ^ (array[2] / array[3]);
  console.log(answer);
}
function mot74(array){
  answer = (array[0] * array[1]) ^ (array[2] ^ array[3]);
  console.log(answer);
}
function mot75(array){
  answer = (array[0] / array[1]) + (array[2] + array[3]);
  console.log(answer);
}
function mot76(array){
  answer = (array[0] / array[1]) + (array[2] - array[3]);
  console.log(answer);
}
function mot77(array){
  answer = (array[0] / array[1]) + (array[2] * array[3]);
  console.log(answer);
}
function mot78(array){
  answer = (array[0] / array[1]) + (array[2] / array[3]);
  console.log(answer);
}
function mot79(array){
  answer = (array[0] / array[1]) + (array[2] ^ array[3]);
  console.log(answer);
}
function mot80(array){
  answer = (array[0] / array[1]) - (array[2] + array[3]);
  console.log(answer);
}
function mot81(array){
  answer = (array[0] / array[1]) - (array[2] - array[3]);
  console.log(answer);
}
function mot82(array){
  answer = (array[0] / array[1]) - (array[2] * array[3]);
  console.log(answer);
}
function mot83(array){
  answer = (array[0] / array[1]) - (array[2] / array[3]);
  console.log(answer);
}
function mot84(array){
  answer = (array[0] / array[1]) - (array[2] ^ array[3]);
  console.log(answer);
}
function mot85(array){
  answer = (array[0] / array[1]) * (array[2] + array[3]);
  console.log(answer);
}
function mot86(array){
  answer = (array[0] / array[1]) * (array[2] - array[3]);
  console.log(answer);
}
function mot87(array){
  answer = (array[0] / array[1]) * (array[2] * array[3]);
  console.log(answer);
}
function mot88(array){
  answer = (array[0] / array[1]) * (array[2] / array[3]);
  console.log(answer);
}
function mot89(array){
  answer = (array[0] / array[1]) * (array[2] ^ array[3]);
  console.log(answer);
}
function mot90(array){
  answer = (array[0] / array[1]) / (array[2] + array[3]);
  console.log(answer);
}
function mot91(array){
  answer = (array[0] / array[1]) / (array[2] - array[3]);
  console.log(answer);
}
function mot92(array){
  answer = (array[0] / array[1]) / (array[2] * array[3]);
  console.log(answer);
}
function mot93(array){
  answer = (array[0] / array[1]) / (array[2] / array[3]);
  console.log(answer);
}
function mot94(array){
  answer = (array[0] / array[1]) / (array[2] ^ array[3]);
  console.log(answer);
}
function mot95(array){
  answer = (array[0] / array[1]) ^ (array[2] + array[3]);
  console.log(answer);
}
function mot96(array){
  answer = (array[0] / array[1]) ^ (array[2] - array[3]);
  console.log(answer);
}
function mot97(array){
  answer = (array[0] / array[1]) ^ (array[2] * array[3]);
  console.log(answer);
}
function mot98(array){
  answer = (array[0] / array[1]) ^ (array[2] / array[3]);
  console.log(answer);
}
function mot99(array){
  answer = (array[0] / array[1]) ^ (array[2] ^ array[3]);
  console.log(answer);
}
function mot100(array){
  answer = (array[0] ^ array[1]) + (array[2] + array[3]);
  console.log(answer);
}
function mot101(array){
  answer = (array[0] ^ array[1]) + (array[2] - array[3]);
  console.log(answer);
}
function mot102(array){
  answer = (array[0] ^ array[1]) + (array[2] * array[3]);
  console.log(answer);
}
function mot103(array){
  answer = (array[0] ^ array[1]) + (array[2] / array[3]);
  console.log(answer);
}
function mot104(array){
  answer = (array[0] ^ array[1]) + (array[2] ^ array[3]);
  console.log(answer);
}
function mot105(array){
  answer = (array[0] ^ array[1]) - (array[2] + array[3]);
  console.log(answer);
}
function mot106(array){
  answer = (array[0] ^ array[1]) - (array[2] - array[3]);
  console.log(answer);
}
function mot107(array){
  answer = (array[0] ^ array[1]) - (array[2] * array[3]);
  console.log(answer);
}
function mot108(array){
  answer = (array[0] ^ array[1]) - (array[2] / array[3]);
  console.log(answer);
}
function mot109(array){
  answer = (array[0] ^ array[1]) - (array[2] ^ array[3]);
  console.log(answer);
}
function mot110(array){
  answer = (array[0] ^ array[1]) * (array[2] + array[3]);
  console.log(answer);
}
function mot111(array){
  answer = (array[0] ^ array[1]) * (array[2] - array[3]);
  console.log(answer);
}
function mot112(array){
  answer = (array[0] ^ array[1]) * (array[2] * array[3]);
  console.log(answer);
}
function mot113(array){
  answer = (array[0] ^ array[1]) * (array[2] / array[3]);
  console.log(answer);
}
function mot114(array){
  answer = (array[0] ^ array[1]) * (array[2] ^ array[3]);
  console.log(answer);
}
function mot115(array){
  answer = (array[0] ^ array[1]) / (array[2] + array[3]);
  console.log(answer);
}
function mot116(array){
  answer = (array[0] ^ array[1]) / (array[2] - array[3]);
  console.log(answer);
}
function mot117(array){
  answer = (array[0] ^ array[1]) / (array[2] * array[3]);
  console.log(answer);
}
function mot118(array){
  answer = (array[0] ^ array[1]) / (array[2] / array[3]);
  console.log(answer);
}
function mot119(array){
  answer = (array[0] ^ array[1]) / (array[2] ^ array[3]);
  console.log(answer);
}
function mot120(array){
  answer = (array[0] ^ array[1]) ^ (array[2] + array[3]);
  console.log(answer);
}
function mot121(array){
  answer = (array[0] ^ array[1]) ^ (array[2] - array[3]);
  console.log(answer);
}
function mot122(array){
  answer = (array[0] ^ array[1]) ^ (array[2] * array[3]);
  console.log(answer);
}
function mot123(array){
  answer = (array[0] ^ array[1]) ^ (array[2] / array[3]);
  console.log(answer);
}
function mot124(array){
  answer = (array[0] ^ array[1]) ^ (array[2] ^ array[3]);
  console.log(answer);
}

//throwing the functions in an array to be called later by one single function
var allFunctions = [
  mat0,	  mat1,	  mat2,	  mat3,	  mat4,
  mat5,	  mat6,	  mat7,	  mat8,	  mat9,
  mat10,	mat11, 	mat12,  mat13,  mat14,
  mat15, 	mat16,	mat17,  mat18,  mat19,
  mat20, 	mat21,	mat22,  mat23,  mat24,
  mat25, 	mat26,	mat27,  mat28,  mat29,
  mat30, 	mat31,	mat32,  mat33,  mat34,
  mat35, 	mat36,	mat37,  mat38,  mat39,
  mat40, 	mat41,	mat42,  mat43,  mat44,
  mat45, 	mat46,	mat47,  mat48,  mat49,
  mat50, 	mat51,	mat52,  mat53,  mat54,
  mat55, 	mat56,	mat57,  mat58,  mat59,
  mat60, 	mat61,	mat62,  mat63,  mat64,
  mat65, 	mat66, 	mat67, 	mat68,  mat69,
  mat70, 	mat71,	mat72,  mat73,  mat74,
  mat75, 	mat76,	mat77,  mat78,  mat79,
  mat80, 	mat81,	mat82,  mat83,  mat84,
  mat85, 	mat86,  mat87,  mat88,  mat89,
  mat90,	mat91,	mat92, 	mat93,  mat94,
  mat95, 	mat96,  mat97,  mat98,  mat99,
  mat100,	mat101,	mat102,	mat103,	mat104,
  mat105,	mat106,	mat107,	mat108,	mat109,
  mat110,	mat111,	mat112,	mat113,	mat114,
  mat115,	mat116,	mat117,	mat118,	mat119,
  mat120,	mat121,	mat122,	mat123,	mat124,
  mot0,	  mot1,	  mot2,	  mot3,	  mot4,
  mot5,	  mot6,	  mot7,	  mot8,	  mot9,
  mot10,	mot11, 	mot12,  mot13,  mot14,
  mot15, 	mot16,	mot17,  mot18,  mot19,
  mot20, 	mot21,	mot22,  mot23,  mot24,
  mot25, 	mot26,	mot27,  mot28,  mot29,
  mot30, 	mot31,	mot32,  mot33,  mot34,
  mot35, 	mot36,	mot37,  mot38,  mot39,
  mot40, 	mot41,	mot42,  mot43,  mot44,
  mot45, 	mot46,	mot47,  mot48,  mot49,
  mot50, 	mot51,	mot52,  mot53,  mot54,
  mot55, 	mot56,	mot57,  mot58,  mot59,
  mot60, 	mot61,	mot62,  mot63,  mot64,
  mot65, 	mot66, 	mot67, 	mot68,  mot69,
  mot70, 	mot71,	mot72,  mot73,  mot74,
  mot75, 	mot76,	mot77,  mot78,  mot79,
  mot80, 	mot81,	mot82,  mot83,  mot84,
  mot85, 	mot86,  mot87,  mot88,  mot89,
  mot90,	mot91,	mot92, 	mot93,  mot94,
  mot95, 	mot96,  mot97,  mot98,  mot99,
  mot100,	mot101,	mot102,	mot103,	mot104,
  mot105,	mot106,	mot107,	mot108,	mot109,
  mot110,	mot111,	mot112,	mot113,	mot114,
  mot115,	mot116,	mot117,	mot118,	mot119,
  mot120,	mot121,	mot122,	mot123,	mot124]
;

//creating and sorting arrays to house the winning functions.
var answerKey = [];
var answerSort = [];
function applyAll (array){
  for (var i = 0; i<allFunctions.length; i ++){
    allFunctions[i](array);
    if(answer===24){
      answerKey[answerKey.length]=("mat" + i);
      answerSort = answerKey.sort();
    }
  }
}



applyAll(fNu);
//should do this to fourRandom, since that's our random set of numbers...
//but we need to create the array of all permutations first...
//genRan();
//applyAll(fourRandom);

console.log(answerKey);

var permArr = [];
function permute(input) {
    var //permArr = [],
        usedChars = [];
    return (function main() {
        for (var i = 0; i < input.length; i++) {
            var ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length === 0) {
                permArr.push(usedChars.slice());
            }
            main();
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr;
    })();
}

//sorting the answers
for (var j = 0; j<permArr.length; j++){
  applyAll(permArr[j]);
  if (answerKey.length>=1) {
    console.log(answerSort);
    console.log(answerKey.length);
  }
}
//genRan(); //generates random 4, sends to array, fourRandom
//permute(fourRandom); // creates array of permutations
//applyAll(permArr);// runs array of permutations through all functions
        //testing if fourRandom yields 24 in any combination, any order
function play(){
genRan();
permute(fourRandom);
applyAll(permArr);
console.log(fourRandom);
if(answerKey.length>=1){
  console.log(answerSort);
}
else{console.log("no known solutions");
}
}
/*
//testing from earlier
var array23 = [3,4,5,6];
permute(array23);
console.log(permArr);
*/


play();
