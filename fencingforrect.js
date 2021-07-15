const fencingforrect=(b,w,numberofwires,costperfeet)=>{
    const parameter = b+w+b+w;
    const totalof = parameter * numberofwires *costperfeet;
    return totalof;
};
    console.log(`total of fencing${fencingforrect(40,70,7,12)}`);
