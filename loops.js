/*let sum=0;
for(let i=1;i<=5;i++)
{
  sum=sum+i;
  
}
console.log("sum=",sum);*/
/*let i=1;
do{
console.log("i=",i);
i++
}
while(i<=5)
{
 // console.log("Suman dumre");
  //i++
}*/


/*const cars=["suman","dumre","nexon"];//  constant arrray 
console.log(cars);*/

//for-of loop
/*let str="suman";
let size=0;
for ( let val of str )//iterator-> character
{
  console.log("val=",val);
  size++;
}
console.log("size=",size);*/

//for-in loop
/*let student={
  name:"suman",
  class:13,
  cgpa:9,
  ispass:true,
};
for(let key in student)
{
  console.log("key=",key,"value=",student [key]);
}*/

/*for(let i=0;i<=100;i++)
{
  if(i%2!=0)
  {
    console.log("num=",i);
  }
}*/
let gameNum=8;
let i=prompt("Enter a value:");
while(i!=gameNum)
{
i=prompt("you enter wrong number:");
}
console.log("Congrats you enter the correct value:");
