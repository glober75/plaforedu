
const itinerariosModel = {

    idCount: 6,

    itinerarios: [
        {
            dados_gerais: {
                id: 0,
                titulo: 'Itinerarios Formativos',  // NOME DO ITINERARIO
                publico: '',
                descricao: 'Descrição dos Itinerarios',
            },

            grafo_publicado: {
                trilhas: [], // ids das trilhas
                elementos: [],
            },
        },
        {
            dados_gerais: {
                id: 1,
                titulo: 'Docente',  // NOME DO ITINERARIO
                publico: '',
                descricao: 'Descrição do Itinerário Docente',
            },

            grafo_publicado: {
                trilhas: [], // ids das trilhas
                elementos: [],
            },
        },
        {
            dados_gerais: {
                id: 2,
                titulo: 'Educação empreendedora',
                publico: '',
                descricao: 'Descrição do Itinerário Educação empreendedora',
            },

            grafo_publicado: {
                trilhas: [],
                elementos: [],    
            },
        },
        {
            dados_gerais: {
                id: 3,
                titulo: 'Iniciação ao Serviço Público',
                publico: '',
                descricao: 'Descrição do Itinerário Iniciação ao Serviço Público',
            },

            grafo_publicado: {
                trilhas: [],
                elementos: [],    
            },
        },
        {
            dados_gerais: {
                id: 4,
                titulo: 'Gerencial (Liderança)',
                publico: '',
                descricao: 'Descrição do Itinerário Gerencial (Liderança)',
            },

            grafo_publicado: {
                trilhas: [], 
                elementos: [],    
            },
        },
        {
            dados_gerais: {
                id: 5,
                titulo: 'Preparação para a aposentadoria',
                publico: '',
                descricao: 'Descrição do Itinerário Preparação para a aposentadoria',
            },

            grafo_publicado: {
                trilhas: [], 
                elementos: [],    
            },
        },
        {
            dados_gerais: {
                id: 6,
                titulo: 'Técnico Administrativo em Educação', 
                publico: '',
                descricao: 'Descrição do Itinerário Técnico Administrativo em Educação',
            },

            grafo_publicado: {
                trilhas: [],
                elementos: [],    
            },
        },
    ],

    cytoscapeStyle: [
        {
            selector: 'node',
            style: {

                'label': 'data(label)',
                'shape': 'round-diamond',
                'width': '40px',
                'height': '40px',
                'border-width' : '2px',
                'border-color' : '#ffb600',
                'color': '#ffb600',
                'background-fit': 'contain',
                'background-clip': 'none',
                'background-color': '#ffb600',
                'text-halign': 'right',
                'text-valign':'center',
                'text-margin-x': '10px',
            }
        }, 
        {
            selector: 'edge',
            style: {
                'background-color': '#ffb600',
                'text-background-color': 'yellow',
                'width': '3px',
                'target-arrow-shape': 'triangle',
                'control-point-step-size': '140px'
            }
        }
    ],

    componentStyle : {
        width: '100%',
        height: '500px',
        backgroundColor:'#fff'
    },

    edicao: {

        cytoscapeStyle: [
            {
                selector: 'node',
                style: {
                    'label': 'data(label)',
                    'shape': 'circle',
                    'width': '90px',
                    'height': '90px',
                    'border-width' : '0px',
                    'border-color' : '#0081b3',
                    'color': '#000',
                    'background-fit': 'contain',
                    'background-clip': 'none',
                    'background-color': '#0081b3',
                    'text-halign': 'center',
                    'text-valign':'center',
                    'text-margin-x': '0px',
                }
            }, 
            {
                selector: 'edge',
                style: {
                    'background-color': '#ffb600',
                    'width': '3px',
                    'target-arrow-shape': 'triangle',
                    'control-point-step-size': '140px'
                }
            }
        ],

        componentStyle : {
            width: '100%',
            height: '500px',
            backgroundColor:'#fff'
        },

        elements: [
            { 
                data: { 
                    id: 1,
                    label: 'Curso integrado de gerenciamento social',
                    descricao: 'descrição do node 1',
                    link: 'https://www.gov.br/pt-br',
                    tipo: 'Video',
                },
                grabbable: false,
            },
            { 
                data: { 
                    id: 2, 
                    label: 'Curso integrado de gerenciamento social',
                    descricao: 'descrição do node 2', 
                    link: 'https://www.gov.br/pt-br', 
                    tipo: 'Video', 
                }
            },
            { 
                data: { 
                    id: 3, 
                    label: 'Curso integrado de gerenciamento social',
                    descricao: 'descrição do node 3', 
                    link: 'https://www.gov.br/pt-br', 
                    tipo: 'Video', 
                }
            },
            { 
                data: { 
                    id: 6, 
                    label: 'Curso integrado de gerenciamento social',
                    descricao: 'descrição do node 4', 
                    link: 'https://www.gov.br/pt-br', 
                    tipo: 'Video', 
                }
            },
            { 
                data: { 
                    id: 4, 
                    source: 1,
                    target: 2, 
                    label: 'Edge 1', 
                    tipo: 'linha' 
                }
            },
            { 
                data: { 
                    id: 5, 
                    source: 1,
                    target: 3, 
                    label: 'Edge 2', 
                    tipo: 'linha' 
                }
            },
            { 
                data: { 
                    id: 7, 
                    source: 1,
                    target: 6, 
                    label: 'Edge 3', 
                    tipo: 'linha' 
                }
            },
        ],
    },
}


export default itinerariosModel