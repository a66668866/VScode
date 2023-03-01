document.write(`<table>`)
for(let j=1;j<=9;j++){
    document.write(`<td>`);
    for(let i=2;i<=9;i++){
        document.write(`<div>${i} * ${j} =${i*j}</div>`);
    }
   document.write(`</td>`);
}
document.write(`</table>`)
