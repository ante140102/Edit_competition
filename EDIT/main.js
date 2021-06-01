function provjera() {
    
    var radioGumbi = document.getElementsByName('pitanje1');
    var odgovor1 = "";
    for (i = 0; i < radioGumbi.length; i++) {
        if (radioGumbi[i].checked) {
            odgovor1 = radioGumbi[i].value;
        }
    }
    var radioGumbi = document.getElementsByName('pitanje2');
    var odgovor2 = "";
    for (i = 0; i < radioGumbi.length; i++) {
        if (radioGumbi[i].checked) {
            odgovor2 = radioGumbi[i].value;
        }
    }
    var radioGumbi = document.getElementsByName('pitanje3');
    var odgovor3 = "";
    for (i = 0; i < radioGumbi.length; i++) {
        if (radioGumbi[i].checked) {
            odgovor3 = radioGumbi[i].value;
        }
    }
    
    var tocno = 0;
    if (odgovor1 === "1715.godine") {
        tocno++;
    }
    if (odgovor2 === "kolovoz") {
        tocno++;
    }
    if (odgovor3 === "Edek") {
        tocno++;
    }

    

    //window.alert('Broj točno odgovorenih pitanja ' + tocno); 

    var slika = ["slikeJS/0.jpg", "slikeJS/1.jpg", "slikeJS/2.jpg", 
                "slikeJS/3.jpg", ];
    var poruka = ["Morate bolje.", "OK", "To je u redu", "Bravo",]; 
    var tocnih = [" točnih", " točan", " točna", " točna",] 

    document.getElementById("nakon-provjere").style.visibility = "visible";
    document.getElementById("poruka").innerHTML = poruka[tocno];
    document.getElementById("slika").src = slika[tocno];
    document.getElementById("broj-tocnih").innerHTML = 
        "Imali ste " + tocno + tocnih[tocno] + '.';
        
}