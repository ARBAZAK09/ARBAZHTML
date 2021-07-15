const areaofrectangle=(b,w)=> b*w;

console.log(areaofrectangle(12,13));

const areaoftriangle=(b,h)=>1/2*b*h;

console.log(areaoftriangle(12,12));

const x=10;
const b=10;
const h=10;
console.log(`area of diagram is  ${areaofrectangle(x,b)+areaoftriangle(b,h-x)}`);
const areaofacircle=(r)=> 3.14 *r*r;
console.log(`area of circle is  ${areaofacircle(50)}`);

const 