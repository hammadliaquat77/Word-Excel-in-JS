

function Bold() {
let textArea = document.getElementById('textArea');
                
    if (textArea.style.fontWeight === 'bold') {
        textArea.style.fontWeight = 'normal';
    } else {
        textArea.style.fontWeight = 'bold';
    }
}




function italic() {
    let italic = document.getElementById('textArea');
    // italic.style.fontStyle='italic';
    
    if (italic.style.fontStyle === "italic") {
        
        italic.style.fontStyle = "normal";
    }
    else{
        italic.style.fontStyle ="italic"
    }
}





function upper() {
    let Ucase = document.getElementById('textArea');
    Ucase.value = Ucase.value.toUpperCase();
    
    
    // let text = Ucase.value; 
    // if (text === text.toUpperCase()) {
        //     Ucase.value = text.toLowerCase();
        // } else {
            //     Ucase.value = text.toUpperCase();
            // }
        }
        
        
        
        function lower() {
            let lcase = document.getElementById('textArea');
    lcase.value =lcase.value.toLowerCase();

    // let he = lcase.value;
    // if (he === he.toLowerCase()) {
    //     lcase.value = he.toUpperCase();
    // } else {
        //     lcase.value = he.toLowerCase();
        // }
    }
    


function under() {
    let under = document.getElementById('textArea');
    // under.style.textDecoration='underline';
    
    if ( under.style.textDecoration === 'underline') {
        
        under.style.textDecoration='none';
    }
    else{
        under.style.textDecoration='underline';
    }
}




function over() {
    let over = document.getElementById('textArea');
    // over.style.textDecoration='line-through';
    
    if (over.style.textDecoration === 'line-through') {
        
        over.style.textDecoration = 'none';
    }
    else{
        over.style.textDecoration = 'line-through'
    }
}




function copy() {
    let textArea = document.getElementById('textArea');
    textArea.select();
    document.execCommand('copy');
    alert('Text copied ');
}




function paste() {
    navigator.clipboard.readText().then(text => {
        let textArea = document.getElementById('textArea');
        textArea.value += text;
    }).catch(err => {
        alert('Failed to read clipboard contents: ' + err);
    });
}




function cut() {
    let textArea = document.getElementById('textArea');
    textArea.select();
    documentc('cut');
    alert('Text cut to clipboard!');
}



function clean() {
    let clear = document.getElementById('textArea');
    clear.value =" "
}


function del() {
    var delet = document.getElementById('textArea');
    delet.value = delet.value.slice(0,-1)
     
}



function Align() {
    let center = document.getElementById('textArea');
    // center.style.textDecoration='line-through';
    
    if (center.style.textAlign === 'center') {
        center.style.textAlign = 'left';
    }
    else{
        center.style.textAlign = 'center'
    }
}

function font(){
    var select=document.getElementById("select").value
    var textarea=document.getElementById("textArea");
    textarea.style.fontFamily=`${select}`
console.log(select)
}