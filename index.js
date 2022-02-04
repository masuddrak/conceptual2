// burgar kibo kina 
function burgarKinbo(icha,enoughTaka){
    if(icha==true && enoughTaka>=100){
        return "ami akhon burgar khabo";
    }else{
        return 'na ami burgar kinbona';
    }
}
let result=burgarKinbo(false,100);
console.log(result);