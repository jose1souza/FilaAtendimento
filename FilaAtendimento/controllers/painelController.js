function atualizarAtendimento() {
    const ultimo = localStorage.getItem('ultimoAtendido');  
    if(ultimo !== null && ultimo !=undefined) {
        document.getElementById('ultimoAtendimento').innerText = ultimo;
    } 
    else{
        document.getElementById('ultimoAtendimento').innerText = 'Aguardando...';
    }      
}

atualizarAtendimento();
setInterval(atualizarAtendimento, 1000);