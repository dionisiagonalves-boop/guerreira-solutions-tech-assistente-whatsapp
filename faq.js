const faqDatabase = [
    {
        question: "O que é Guerreira Solutions Tech?",
        answer: "Somos uma empresa de soluções tecnológicas que oferece assistência virtual via WhatsApp para automação de negócios."
    },
    {
        question: "Como agendar uma consulta?",
        answer: "Você pode agendar uma consulta através do nosso sistema integrado no WhatsApp. Basta clicar no botão de agendamento."
    },
    {
        question: "Qual é o horário de atendimento?",
        answer: "Oferecemos atendimento 24/7 através do nosso assistente virtual automático."
    },
    {
        question: "Como funciona a integração com WhatsApp?",
        answer: "Nossa plataforma se integra perfeitamente com o WhatsApp para enviar e receber mensagens automaticamente."
    },
    {
        question: "Quais são os serviços oferecidos?",
        answer: "Oferecemos atendimento ao cliente, agendamento de consultas, suporte técnico e automação de processos."
    },
    {
        question: "Como entro em contato?",
        answer: "Você pode nos contatar via WhatsApp, email ou através do formulário no nosso site."
    }
];

function searchFAQ(query) {
    return faqDatabase.filter(item => 
        item.question.toLowerCase().includes(query.toLowerCase()) ||
        item.answer.toLowerCase().includes(query.toLowerCase())
    );
}

function displayFAQ() {
    const faqContainer = document.getElementById('faq-container');
    if (faqContainer) {
        faqContainer.innerHTML = '';
        faqDatabase.forEach((item, index) => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            faqItem.innerHTML = `
                <h4>${item.question}</h4>
                <p>${item.answer}</p>
            `;
            faqContainer.appendChild(faqItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', displayFAQ);