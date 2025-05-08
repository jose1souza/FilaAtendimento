## 📋 Fila de Atendimento em JavaScript
Este projeto implementa uma fila circular de atendimento em JavaScript, utilizando programação orientada a objetos (POO) para gerenciar clientes de maneira eficiente. A fila segue o princípio FIFO (First In, First Out), garantindo que os atendimentos ocorram na ordem de chegada.
## 📌 Como o Sistema Funciona
O sistema permite que os clientes sejam adicionados a uma fila de atendimento, gerenciando sua ordem e tempo de espera. Ele foi projetado para simular um fluxo de atendimento, onde os clientes entram na fila, aguardam sua vez e são atendidos conforme chegam ao início da lista.
Cada atendimento registra informações essenciais, como:
- Nome e CPF do cliente
- Data e hora de entrada na fila
- Tempo de espera até o atendimento
- Histórico do último atendimento
Além disso, o sistema usa localStorage para armazenar temporariamente o último cliente atendido, permitindo que essa informação seja exibida no painel de atendimento.

## 🔧 Funcionalidades

➕ Adição de um novo atendimento (addElemento())
- Captura nome e CPF digitados na interface.
- Registra a data e hora do atendimento.
- Adiciona o atendimento à fila, se houver espaço disponível.
- Limpa os campos de entrada após a inserção.
- Exibe um alerta caso a fila esteja cheia.
  
📜 Exibição da fila (mostrarFila())
- Atualiza a visualização da lista de atendimentos no painel.
- Percorre todos os elementos da fila e os exibe dinamicamente.
  
🏥 Atendimento de um cliente (atenderFila())
- Remove o primeiro cliente da fila (dequeue).
- Calcula o tempo de espera entre chegada e atendimento.
- Exibe os detalhes do atendimento no painel.
- Atualiza a visualização da fila após o atendimento.
- Salva o último atendimento no localStorage para consulta posterior.
  
🔍 Busca de cliente por CPF (buscarCPF())
- Percorre a fila e verifica se o CPF digitado está presente.
- Informa a posição do cliente na fila, caso encontrado.

## 💡 Aplicações

Esta estrutura pode ser utilizada em diversos contextos, como:
- Simulação de filas de atendimento (bancos, hospitais, etc.)
- Sistemas de impressão
- Controle de tarefas em ordem de chegada
- Buffers de dados

## 🧑‍💻 Autores

Projeto desenvolvido por José Carlos Souza e Ana Luísa Faria para fins didáticos no IFSULDEMINAS - Campus Machado.
