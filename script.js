/*console.log('bonjour depuis script.js');
let nom="diagly";
console.log(nom);
 /*function calculette(a,b,operation)
{
    if (operation ==='+')
        console.log(a+b);
    else if(operation === '-')
        console.log(a-b);
    else if(operation === '*')
        console.log(a*b);
    else if(operation === '/')
        console.log(a/b);
}
calculette(2,3,'+');
calculette(2,3,'-');

//exo 2
function multi(i,n)
{
return i*n;
}
function table(n)
{
    for(let i=1;i<11;i++)
        console.log(multi(i,n));
}
console.log(table(7));*/

//exo 3
let etudiant ={
    nom :'fall',
    prenom : 'diagly',
    age : 24,
}
for(let key in etudiant)
    console.log(key+':'+etudiant[key]);

let tableau=['ligne','colonne','diagonale']
for(let i=1;i<tableau.length;i++)
    console.log(tableau[i]);
let modou=[
{

    matiere:"epistemologie",
    note:18
},
{

    matiere:"environnement",
    note:16
}

]
for(let i=1;i<modou.length;i++)
    console.log(modou[i]);

