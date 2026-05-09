export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceStep {
  title: string
  description: string
}

export interface Service {
  slug: string
  name: string
  icon: string
  shortDescription: string
  longDescription: string
  videoUrl?: string
  gallery: string[]
  includes: string[]
  steps: ServiceStep[]
  animals: string[]
  duration: string
  aftercare: string
  faqs: ServiceFAQ[]
}

export const useServices = () => {
  const config = useRuntimeConfig()
  const baseURL = config.app.baseURL

  const services: Service[] = [
    {
      slug: 'consulta-geral',
      name: 'Consulta Geral',
      icon: 'ph:first-aid',
      shortDescription: 'Check-up completo e avaliação clínica minuciosa no conforto do seu lar.',
      longDescription: 'A consulta geral domiciliar oferece uma avaliação completa da saúde do seu pet sem o estresse da clínica. Realizamos exame físico detalhado, avaliação nutricional, verificação de parâmetros vitais e orientações personalizadas para cada fase da vida do animal.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      gallery: [`${baseURL}banner_1.jpeg`, `${baseURL}banner_2.jpeg`],
      includes: [
        'Exame físico completo',
        'Avaliação nutricional',
        'Verificação de parâmetros vitais',
        'Orientações de manejo',
        'Prescrição digital'
      ],
      steps: [
        { title: 'Agendamento', description: 'Escolha o melhor horário via WhatsApp.' },
        { title: 'Chegada', description: 'A Dra. Kelly chega na sua residência com todo equipamento.' },
        { title: 'Avaliação', description: 'Consulta realizada no ambiente onde o pet se sente seguro.' },
        { title: 'Plano de Saúde', description: 'Definição de tratamentos ou exames necessários.' }
      ],
      animals: ['Cães', 'Gatos', 'Coelhos', 'Roedores'],
      duration: '45 a 60 minutos',
      aftercare: 'Siga as orientações da prescrição e monitore o comportamento do pet.',
      faqs: [
        { question: 'Precisa de jejum?', answer: 'Geralmente não, a menos que exames de sangue específicos sejam solicitados.' },
        { question: 'Atende em prédios?', answer: 'Sim, atendemos em casas e apartamentos em toda a região de cobertura.' }
      ]
    },
    {
      slug: 'vacinacao',
      name: 'Vacinação',
      icon: 'ph:syringe',
      shortDescription: 'Imunização completa com as melhores vacinas do mercado.',
      longDescription: 'Protocolos vacinais personalizados para cães e gatos, utilizando apenas vacinas de marcas líderes mundiais (V10, Antirrábica, Gripe, Giárdia para cães; Quádrupla ou Quíntupla e Antirrábica para gatos).',
      gallery: [`${baseURL}banner_1.jpeg`, `${baseURL}banner_2.jpeg`],
      includes: [
        'Avaliação pré-vacinal',
        'Aplicação da vacina',
        'Carteira de vacinação digital/física',
        'Lembrete para reforços'
      ],
      steps: [
        { title: 'Triagem', description: 'Verificação se o pet está apto a ser vacinado.' },
        { title: 'Aplicação', description: 'Procedimento rápido e indolor em casa.' },
        { title: 'Observação', description: 'Acompanhamento breve para garantir que não haja reações imediatas.' }
      ],
      animals: ['Cães', 'Gatos'],
      duration: '30 minutos',
      aftercare: 'Mantenha o pet em repouso e evite banhos por 48 horas após a vacinação.',
      faqs: [
        { question: 'Quais vacinas são obrigatórias?', answer: 'Antirrábica e as polivalentes (V10/V8 para cães e V4/V5 para gatos).' }
      ]
    },
    {
      slug: 'exames-laboratoriais',
      name: 'Exames Laboratoriais',
      icon: 'ph:test-tube',
      shortDescription: 'Coleta de sangue, urina e outros exames diagnósticos.',
      longDescription: 'Coletamos amostras para exames de sangue, urina e fezes diretamente em sua casa, enviando para laboratórios parceiros de alta confiança com entrega rápida de resultados.',
      gallery: [`${baseURL}banner_1.jpeg`, `${baseURL}banner_2.jpeg`],
      includes: [
        'Coleta de amostras',
        'Transporte refrigerado adequado',
        'Análise em laboratórios de referência',
        'Interpretação e retorno médico'
      ],
      steps: [
        { title: 'Preparação', description: 'Instruções de jejum passadas previamente.' },
        { title: 'Coleta', description: 'Realizada com técnica humanizada para minimizar desconforto.' },
        { title: 'Resultado', description: 'Envio do laudo via WhatsApp ou e-mail em até 24-48h.' }
      ],
      animals: ['Cães', 'Gatos', 'Outros'],
      duration: '20 a 40 minutos',
      aftercare: 'Pode haver um pequeno hematoma no local da coleta, que desaparece em poucos dias.',
      faqs: [
        { question: 'Quanto tempo de jejum?', answer: 'Geralmente 8 a 12 horas para cães e 6 a 8 horas para gatos.' }
      ]
    },
    {
      slug: 'ultrassonografia',
      name: 'Ultrassonografia',
      icon: 'ph:monitor',
      shortDescription: 'Diagnóstico por imagem de alta precisão em casa.',
      longDescription: 'Equipamento portátil de última geração para realização de ultrassonografia abdominal e acompanhamento gestacional sem que o pet precise sair de casa.',
      gallery: [`${baseURL}banner_1.jpeg`, `${baseURL}banner_2.jpeg`],
      includes: [
        'Exame de imagem detalhado',
        'Laudo assinado por especialista',
        'Acompanhamento gestacional (se aplicável)'
      ],
      steps: [
        { title: 'Preparo', description: 'Necessário jejum alimentar e bexiga cheia.' },
        { title: 'Exame', description: 'Duração de aproximadamente 30 minutos em local tranquilo.' },
        { title: 'Laudo', description: 'Laudo completo entregue após a análise.' }
      ],
      animals: ['Cães', 'Gatos'],
      duration: '40 a 60 minutos',
      aftercare: 'O pet pode retornar às atividades normais imediatamente.',
      faqs: [
        { question: 'Precisa raspar o pelo?', answer: 'Sim, uma pequena área precisa ser tricotomizada para melhor qualidade da imagem.' }
      ]
    },
    {
      slug: 'laserterapia',
      name: 'Laserterapia',
      icon: 'ph:lightning',
      shortDescription: 'Tratamento moderno para dor e cicatrização.',
      longDescription: 'Terapia não invasiva que utiliza luz laser para acelerar a cicatrização, reduzir inflamações e aliviar dores crônicas ou agudas, especialmente em pets idosos.',
      gallery: [`${baseURL}banner_1.jpeg`, `${baseURL}banner_2.jpeg`],
      includes: [
        'Sessão de laserterapia',
        'Avaliação da evolução do quadro',
        'Protocolo personalizado de sessões'
      ],
      steps: [
        { title: 'Diagnóstico', description: 'Identificação das áreas que necessitam de tratamento.' },
        { title: 'Aplicação', description: 'Uso de óculos de proteção (se necessário) e aplicação local.' },
        { title: 'Manutenção', description: 'Definição da frequência das próximas sessões.' }
      ],
      animals: ['Cães', 'Gatos', 'Animais Silvestres'],
      duration: '20 a 30 minutos',
      aftercare: 'O animal costuma sentir relaxamento imediato após a sessão.',
      faqs: [
        { question: 'Dói?', answer: 'Pelo contrário, é indolor e costuma ser muito relaxante para o pet.' }
      ]
    },
    {
      slug: 'eletro-ecocardiograma',
      name: 'Eletro & Ecocardiograma',
      icon: 'ph:activity',
      shortDescription: 'Check-up cardiológico completo para segurança do pet.',
      longDescription: 'Avaliação da saúde do coração através de eletrocardiograma e ecocardiograma, essenciais para pets idosos ou como risco cirúrgico pré-anestésico.',
      gallery: [`${baseURL}banner_1.jpeg`, `${baseURL}banner_2.jpeg`],
      includes: [
        'Realização do exame cardíaco',
        'Laudo por cardiologista veterinário',
        'Avaliação de risco cirúrgico'
      ],
      steps: [
        { title: 'Posicionamento', description: 'O pet é colocado em posição confortável.' },
        { title: 'Monitoramento', description: 'Captura dos sinais elétricos ou imagens do coração.' },
        { title: 'Conclusão', description: 'Orientação sobre a saúde cardiovascular do pet.' }
      ],
      animals: ['Cães', 'Gatos'],
      duration: '45 a 60 minutos',
      aftercare: 'Nenhum cuidado especial após o exame.',
      faqs: [
        { question: 'Pet agitado pode fazer?', answer: 'Sim, trabalhamos com muita paciência e, se necessário, técnicas de contenção leve.' }
      ]
    }
  ]

  const getServiceBySlug = (slug: string) => {
    return services.find(s => s.slug === slug)
  }

  return {
    services,
    getServiceBySlug
  }
}
