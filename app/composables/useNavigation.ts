export const useNavigation = () => {
  const activeSection = useState('activeSection', () => 'home')
  const isManualScrolling = useState('isManualScrolling', () => false)
  const showHeader = useState('showHeader', () => true)

  const navItems = [
    { id: 'home', label: 'Início', icon: 'ph:house-fill', ariaLabel: 'Ir para o início', path: '/' },
    { id: 'servicos', label: 'Serviços', icon: 'ph:first-aid-fill', ariaLabel: 'Ver serviços', path: '/#servicos' },
    { id: 'depoimentos', label: 'Depoimentos', icon: 'ph:star-fill', ariaLabel: 'Ver depoimentos', path: '/#depoimentos' },
    { id: 'faq', label: 'Dúvidas', icon: 'ph:question-fill', ariaLabel: 'Dúvidas frequentes', path: '/faq' }
  ]


  const setActiveSection = (id: string) => {
    activeSection.value = id
  }

  return {
    navItems,
    activeSection,
    isManualScrolling,
    setActiveSection,
    showHeader
  }
}
