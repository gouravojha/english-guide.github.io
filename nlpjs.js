nlp.extend(compromiseNumbers)
nlp.extend(compromiseSentences)
    
function past(){
    var element = document.getElementById("text").value;
    var doc = nlp(element);
    pastText = doc.sentences().toPastTense().text();
    document.getElementById('lblName').innerHTML = pastText ;
}
function neg(){
    var element = document.getElementById("text").value;
    var doc = nlp(element);
    pastText = doc.sentences().toNegative().text();
    document.getElementById('lblName').innerHTML = pastText ;
}
function fut(){
    var element = document.getElementById("text").value;
    var doc = nlp(element);
    pastText = doc.sentences().toFutureTense().text();
    document.getElementById('lblName').innerHTML = pastText ;
}
function present(){
    var element = document.getElementById("text").value;
    var doc = nlp(element);
    pastText = doc.sentences().toPresentTense().text();
    document.getElementById('lblName').innerHTML = pastText ;
}
function pos(){
    var element = document.getElementById("text").value;
    var doc = nlp(element);
    pastText = doc.sentences().toPositive().text();
    document.getElementById('lblName').innerHTML = pastText ;
}
function ntot(){
    var element = document.getElementById("text").value;
    var doc = nlp(element);
    pastText = doc.sentences().numbers().toText().text();
    document.getElementById('lblName').innerHTML = pastText ;
}

function dark(){
    document.documentElement.classList.toggle('dark-mode')
}






