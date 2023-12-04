let nome = "Argus";
let xp = 7850;

switch(true) {
    case xp < 1000:
        console.log ("O Herói de nome " + nome + " está no nível de FERRO");
    break;

    case xp >= 1001 && xp <= 2000:
            console.log ("O Herói de nome " + nome + " está no nível de BRONZE");
    break;

    case xp >= 2001 && xp <= 5000:
            console.log ("O Herói de nome " + nome + " está no nível de PRATA");
    break;

    case xp >= 6001 && xp <= 7000:
            console.log ("O Herói de nome " + nome + " está no nível de OURO");
    break;

    case xp >= 7001 && xp <= 8000:
            console.log ("O Herói de nome " + nome + " está no nível de PLATINA");
    break;

    case xp >= 8001 && xp <= 9000:
            console.log ("O Herói de nome " + nome + " está no nível de ASCENDENTE");
    break;

    case xp >= 9001 && xp <= 10000:
            console.log ("O Herói de nome " + nome + " está no nível de IMORTAL");
    break;

    case xp >= 10001:
        console.log ("O Herói de nome " + nome + " está no nível de RADIANTE");
    break;

    default: 
        console.log ("Herói " + nome + " ainda está sem nível");
}