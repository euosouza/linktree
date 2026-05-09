export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const useFAQ = () => {
  const categories = [
    { id: 'atendimento', label: 'Atendimento & Região', icon: 'ph:map-pin-bold' },
    { id: 'saude', label: 'Saúde & Espécies', icon: 'ph:heartbeat-bold' },
    { id: 'financeiro', label: 'Pagamentos & Planos', icon: 'ph:credit-card-bold' }
  ]

  const faqs: FAQItem[] = [
    // Atendimento
    {
      category: 'atendimento',
      question: 'Qual a região de atendimento?',
      answer: 'Atendemos em domicílio em um raio de até 30km da cidade de São Paulo. Isso inclui toda a capital e algumas cidades vizinhas da região metropolitana.'
    },
    {
      category: 'atendimento',
      question: 'Como faço para agendar uma consulta?',
      answer: 'O agendamento pode ser feito diretamente pelo nosso WhatsApp (31) 99958-1716 ou pelo botão flutuante aqui no site. Basta informar seu nome, o nome do pet e o serviço desejado.'
    },
    {
      category: 'atendimento',
      question: 'Quais são os horários de atendimento?',
      answer: 'Nosso horário padrão é de segunda a sexta, das 08:00 às 20:00, e aos sábados, das 09:00 às 14:00. Horários fora deste período podem ser consultados via WhatsApp conforme disponibilidade.'
    },
    // Saúde
    {
      category: 'saude',
      question: 'Quais animais a Dra. Kelly atende?',
      answer: 'A Dra. Kelly é especializada em clínica médica de pequenos animais, focando exclusivamente no atendimento de cães e gatos de todas as raças e idades.'
    },
    {
      category: 'saude',
      question: 'Vocês atendem emergências 24 horas?',
      answer: 'Não realizamos atendimento de emergência ou pronto-socorro 24h. Nosso foco é atendimento domiciliar preventivo, consultas de rotina e exames. Em casos de emergência crítica (atropelamento, convulsão, etc), recomendamos levar o pet imediatamente à clínica hospitalar mais próxima.'
    },
    {
      category: 'saude',
      question: 'É possível realizar exames de sangue em casa?',
      answer: 'Sim! Realizamos a coleta de sangue e outros materiais biológicos no conforto do seu lar, evitando o estresse do deslocamento para o animal. Os resultados são enviados digitalmente.'
    },
    // Financeiro
    {
      category: 'financeiro',
      question: 'Aceitam plano de saúde veterinário?',
      answer: 'Não trabalhamos com convênio direto. No entanto, fornecemos toda a documentação necessária (recibos e laudos) para que você possa solicitar o reembolso integral ou parcial junto ao seu plano de saúde.'
    },
    {
      category: 'financeiro',
      question: 'Quais as formas de pagamento aceitas?',
      answer: 'Aceitamos PIX, cartões de débito e crédito (com possibilidade de parcelamento dependendo do valor do serviço). O pagamento é realizado no momento do atendimento.'
    },
    {
      category: 'financeiro',
      question: 'Existe taxa de deslocamento?',
      answer: 'O valor da consulta já contempla o deslocamento dentro do raio de atendimento principal. Para regiões mais afastadas, pode haver uma taxa adicional proporcional à distância.'
    }
  ]

  return {
    categories,
    faqs
  }
}
