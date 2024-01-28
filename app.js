// bramka AND
const and = (...arg) => arg[0] && arg[1]; // odpowiednio pierwszy i drugi element przekazany do funkcji
const setValueAND = () => {
    const x1 = document.getElementById("x1").checked;
    const x2 = document.getElementById("x2").checked;
    const wynik1 = and(x1,x2);
    const wartoscWynik1 = wynik1 ? 1 : 0;
    document.getElementById("wartoscAND").innerHTML = wartoscWynik1.toString();
}

// bramka OR
const or = (...arg) => arg[0] || arg[1];
const setValueOR = () => {
    const y1 = document.getElementById("y1").checked;
    const y2 = document.getElementById("y2").checked;
    const wynik2 = or(y1,y2);
    const wartoscWynik2 = wynik2 ? 1 : 0;
    document.getElementById("wartoscOR").innerHTML = wartoscWynik2.toString();
}

// bramka NOT
const not = (...arg) => !(arg[0])
const setValueNOT = () => {
    const n1 = document.getElementById("n1").checked;
    const wynik3 = not(n1);
    const wartoscWynik3 = wynik3 ? 1 : 0;
    document.getElementById("wartoscNOT").innerHTML = wartoscWynik3.toString();
}

// bramka NAND
const nand = (...arg) => !(arg[0] && arg[1]);
const setValueNAND = () => {
    const z1 = document.getElementById("z1").checked;
    const z2 = document.getElementById("z2").checked;
    const wynik4 = nand(z1,z2);
    const wartoscWynik4 = wynik4 ? 1 : 0;
    document.getElementById("wartoscNAND").innerHTML = wartoscWynik4.toString();
}

// bramka NOR
const nor = (...arg) => !(arg[0] || arg[1]);
const setValueNOR = () => {
    const t1 = document.getElementById("t1").checked;
    const t2 = document.getElementById("t2").checked;
    const wynik5 = nor(t1,t2);
    const wartoscWynik5 = wynik5 ? 1 : 0;
    document.getElementById("wartoscNOR").innerHTML = wartoscWynik5.toString();
}

// bramka XOR - różnica symetryczna
const xor = (...arg) => ((arg[0] || arg[1]) && !(arg[0] && arg[1]));
const setValueXOR = () => {
    const k1 = document.getElementById("k1").checked;
    const k2 = document.getElementById("k2").checked;
    const wynik6 = xor(k1,k2);
    const wartoscWynik6 = wynik6 ? 1 : 0;
    document.getElementById("wartoscXOR").innerHTML = wartoscWynik6.toString();
}

// bramka XNOR
const xnor = (...arg) => !((arg[0] || arg[1]) && !(arg[0] && arg[1]));
const setValueXNOR = () => {
    const l1 = document.getElementById("l1").checked;
    const l2 = document.getElementById("l2").checked;
    const wynik7 = xnor(l1,l2);
    const wartoscWynik7 = wynik7 ? 1 : 0;
    document.getElementById("wartoscXNOR").innerHTML = wartoscWynik7.toString();
}

// bramka OR i NOT
const orNot = (...arg) => !(arg[0]) || arg[1];
const setValueORNOT = () => {
    const m1 = document.getElementById("m1").checked;
    const m2 = document.getElementById("m2").checked;
    const wynik8 = orNot(m1,m2);
    const wartoscWynik8 = wynik8 ? 1 : 0;
    document.getElementById("wartoscORNOT").innerHTML = wartoscWynik8.toString();
}

// bramka XOR-NOT-NOR
const xorNotNor = (...arg) => !(((arg[0] || arg[1]) && !(arg[0] && arg[1])) || !(arg[2]));
// !(wartosc z XOR || wartosc z NOT)
const setValueXORNOTNOR = () => {
    const w1 = document.getElementById("w1").checked;
    const w2 = document.getElementById("w2").checked;
    const w3 = document.getElementById("w3").checked;
    const wynik9 = xorNotNor(w1,w2,w3);
    const wartoscWynik9 = wynik9 ? 1 : 0;
    document.getElementById("wartoscXORNOTNOR").innerHTML = wartoscWynik9.toString();
}

// bramka OR-OR-AND
const orOrAnd = (...arg) => (arg[0] || arg[1]) && (arg[2] || arg[3]);
// (wartosc OR && wartosc Or)
const setValueORORAND = () => {
    const r1 = document.getElementById("r1").checked;
    const r2 = document.getElementById("r2").checked;
    const r3 = document.getElementById("r3").checked;
    const r4 = document.getElementById("r4").checked;
    const wynik10 = orOrAnd(r1,r2,r3,r4);
    const wartoscWynik10 = wynik10 ? 1 : 0;
    document.getElementById("wartoscORORAND").innerHTML = wartoscWynik10.toString();
}

//bramka AND-NOR-XOR 
const setValueAND_NOR_XOR = () => {
    const p1 = document.getElementById("p1").checked;
    const p2 = document.getElementById("p2").checked;
    const p3 = document.getElementById("p3").checked;
    const p4 = document.getElementById("p4").checked;

    const p12 = p1 && p2;
    const p34 = !(p3 || p4);
    const p1234 = (p12 || p34) && !(p12 && p34);

    const wynik11 = p12 ? 1 : 0;
    const wynik12 = p1234 ? 1 : 0;
    document.getElementById("wartoscAND_NOR_XOR1").innerHTML = wynik11.toString();
    document.getElementById("wartoscAND_NOR_XOR2").innerHTML = wynik12.toString();
}