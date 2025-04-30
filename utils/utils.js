// Função para obter a data atual formatada
function obterDataAtual() {
    let dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1; // Adiciona 1 porque o mês inicia do zero
    let ano = dataAtual.getFullYear();
    return `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
}

// Função para obter a hora atual formatada
function obterHoraAtual() {
    const data = new Date();
    const hora = data.getHours().toString().padStart(2, '0');
    const minuto = data.getMinutes().toString().padStart(2, '0');
    const segundo = data.getSeconds().toString().padStart(2, '0');
    return `${hora}:${minuto}:${segundo}`;
}

// Função para calcular a diferença entre duas horas
function calcularDiferencaHoras(hora1, hora2) {
    const [h1, m1, s1] = hora1.split(':').map(Number);
    const [h2, m2, s2] = hora2.split(':').map(Number);
    const diferencaSegundos = (h2 * 3600 + m2 * 60 + s2) - (h1 * 3600 + m1 * 60 + s1);
    const horas = Math.floor(diferencaSegundos / 3600);
    const minutos = Math.floor((diferencaSegundos % 3600) / 60);
    const segundos = diferencaSegundos % 60;
    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}