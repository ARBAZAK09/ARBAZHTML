const areaofrectangle=(h,w)=> h*w;

console.log(areaofrectangle(14,27));

const areaoftriangle=(w,h)=>1/2*w*h;

//console.log(areaoftriangle(12,12));

const x=12;
const h=14;
const w=27;
const halfcircle=(r1)=> 3.14 *r*r;
const r1=5;

const areaofacircle=(r)=> 3.14 *r*r;
const r=7;
console.log(`area of diagram is  ${areaofrectangle(x,w)+areaoftriangle(w,h-x)+areaofacircle(r)-halfcircle(r1)}`);