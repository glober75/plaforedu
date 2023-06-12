import React from 'react';
import HeaderHome from '../components/header/HeaderHome';
import './faq.css';

import LogoFaq from '../assets/FAQ.svg';

import { Link } from 'react-router-dom';

import {
  Layout,
  Row,
  Col,
  Typography,
  Image,
  Collapse,
  Grid,
  ConfigProvider,
} from 'antd';

const { useBreakpoint } = Grid;

const { Panel } = Collapse;
const { Content } = Layout;
const { Text, Title } = Typography;

export default function FAQ() {
  const screens = useBreakpoint();

  const styleTitle = {
    fontFamily: 'Poppins',
    color: '#2C55A1',
    fontSize: '25px',
  };
  const styleText = { fontFamily: 'Roboto', fontSize: '18px' };

  const perguntas = [
    {
      titulo: 'O que é a PlaforEDU?',
      texto:
        'A PlaforEDU tem como objetivo proporcionar um espaço onde os servidores podem encontrar capacitações com a finalidade de potencializar sua atuação na Educação Profissional e Tecnológica, no âmbito da Rede Federal de Educação Profissional, Científica e Tecnológica (RFEPCT).',
    },
    {
      titulo: 'Como funciona a lógica de categorias e competências associadas?',
      texto:
        'A PlaforEDU reúne diversos cursos online abertos (Cursos Mooc) ofertados por diversas instituições de ensino, entre outras, da RFEPCT, que dão suporte ao desenvolvimento das competências recomendadas para um setor público de alto desempenho por meio de Itinerários Formativos. Na PlaforEDU você pode buscar as competências associadas ao seu perfil profissional, a partir de uma busca simples, e ter acesso a todos os cursos relacionados àquelas competências.',
    },
    {
      titulo: 'Quais os itinerários da PlaforEDU?',
      texto:
        'A PlaforEDU apresenta os perfis de servidores da RFEPCT em cinco Itinerários Formativos. São eles: Iniciação ao serviço público, Técnico-Administrativo em Educação, Docente, Gerencial e Aposentadoria',
    },
    {
      titulo: 'Qual a abordagem do itinerário “Iniciação ao serviço público”?',
      texto:
        'Este Itinerário Formativo pretende integrar o servidor recém-empossado ao ambiente institucional ao qual terá exercício, preparando-o para o desempenho de atividades vinculadas ao ambiente organizacional em que atuará e ao cargo que ocupa na instituição.',
    },
    {
      titulo:
        'Qual a abordagem do itinerário “Técnico-Administrativo em Educação”?',
      texto:
        'Este Itinerário formativo visa capacitar profissionais alinhados com as políticas institucionais. Nesse sentido, o itinerário apresentará inicialmente aos Técnicos-Administrativos em Educação o Plano de Carreira, suas atribuições e responsabilidades para o desempenho do cargo ao qual foi nomeado. Os outros cursos do itinerário pretendem qualificar os servidores nas diversas áreas de atuação - educacional e administrativa.',
    },
    {
      titulo: 'Qual a abordagem do itinerário “Docente”?',
      texto:
        'Este itinerário é um processo formativo interativo e reflexivo, proporcionando ao docente a resolução dos problemas enfrentados nas práticas educativas em um contexto pedagógico. A metodologia adotada é dinâmica, proporcionando a construção de novos saberes por intermédio das trilhas vinculadas à teoria e às práticas docentes.',
    },
    {
      titulo: 'Qual a abordagem do itinerário “Gerencial”?',
      texto:
        'O itinerário formativo gerencial pode ser percorrido por servidores técnicos-administrativos ou docentes que estejam em cargos/funções de gestão ou que desejem se capacitar para tal, com metodologias modernas, abarcando temáticas tradicionais e contemporâneas.',
    },
    {
      titulo: 'Qual a abordagem do itinerário “Aposentadoria”?',
      texto:
        'A aposentadoria já é realidade na Rede Federal EPCT, o itinerário que se apresenta traz o enfoque para um novo encarreiramento. O itinerário foi elaborado a partir de 3 pilares: Formação no contexto psicológico preparando-se para esta nova realidade, em que as demandas de trabalho e rotina anteriores não existirão mais. Atividades futuras: o aposentado deve pensar no seu perfil, fazer análise de suas características pessoais, habilidades e preferências para descobrir o que irá fazer depois. Pode se associar a ONGs, empreender etc. Financeiro: se este aspecto não estiver bem equacionado, dificilmente o aposentado conseguirá realizar as outras coisas. É fundamental o planejamento financeiro, saber o quanto vai gastar do momento do desligamento para frente e fazer uma análise de expectativa de vida.',
    },
    {
      titulo: 'O que é a mandala das competências?',
      texto:
        'As competências são a mobilização de conhecimentos, habilidades e atitudes para solucionar problemas e lidar com situações cotidianas profissionais. Essas competências estão associadas e agrupadas por categorias, sendo elas: Envolvimento profissional, Recursos digitais, Ensino e aprendizagem, Avaliação, Capacitação dos aprendentes, Programação da competência digital dos aprendentes, Gestão de resultados, Gestão de relacionamentos, Gestão de mudanças, Orientação a resultados, Processos de melhoria, Transversais. Abaixo é apresentado o infográfico com a Mandala de Competências organizada pelas competências associadas em categorias.',
    },
    {
      titulo: 'O que são Trilhas Formativas?',
      texto:
        'São percursos formativos propostos a partir do encadeamento de cursos ordenados, com o objetivo de desenvolver competências por meio da capacitação e qualificação profissional.',
    },
    {
      titulo: 'Como faço para me inscrever em um curso?',
      texto:
        'Na página inicial do PlaforEDU, clique no Itinerário Formativo que deseja cursar. No centro da tela, serão apresentados os percursos formativos sugeridos para cada competência a ser desenvolvida. Clique nos cursos que deseja cursar. Sugerimos iniciar pelo primeiro curso da Trilha Formativa escolhida. Ao clicar no curso escolhido, será aberto um pop-up, que trará as informações do curso: descrição, carga horária, instituição certificadora e link do curso. Sugerimos ao usuário habilitar a exibição dos pop-ups da página da PlaforEDU. Para acessar o curso, clique no link disponível no pop-up aberto. Ao clicar no link, você será direcionado para a página da instituição que oferta o curso. Siga as instruções de cadastro de cada instituição para ter acesso ao curso. Pronto! Você terá acesso a todos os materiais e atividades do curso. Bons estudos!',
    },
    {
      titulo: 'Em quantos cursos posso me inscrever?',
      texto:
        'Não há limites de inscrições em cursos disponíveis na PlaforEDU. Você poderá se inscrever em quantos cursos quiser, a qualquer tempo, inclusive simultaneamente, desde que tenha disponibilidade para cursá-los.',
    },
    {
      titulo: 'Os cursos ofertados na PlaforEDU são gratuitos?',
      texto:
        'Todos os cursos ofertados na PlaforEDU são gratuitos. Em geral, são abertos e não apresentam limites de vagas.',
    },
    {
      titulo: 'Todos os cursos darão certificados?',
      texto:
        'Todos os cursos dão direito a um certificado emitido pela instituição ofertante, desde que o estudante atenda aos requisitos mínimos determinados em cada curso. Não serão emitidos certificados impressos, apenas em formato digital.',
    },
    {
      titulo:
        'Sou de outra instituição. Posso participar dos cursos da PlaforEDU?',
      texto:
        'Todos os cursos são abertos à participação do público em geral, seja servidor público federal ou não.',
    },
    {
      titulo: 'Os cursos terão a mediação de um tutor?',
      texto:
        'De modo geral, os cursos são autoinstrucionais, ou seja, não há mediação de tutor e as atividades possuem correção automatizada. Orientamos o aluno a consultar a descrição de cada curso na plataforma da instituição ofertante.',
    },
    {
      titulo:
        'Como posso tirar dúvidas referente aos cursos em que me inscrevi?',
      texto:
        'Para tirar quaisquer dúvidas referentes aos conteúdos programáticos dos cursos, deve-se consultar as instituições ofertantes.',
    },
    {
      titulo: 'O curso terá encontros presenciais?',
      texto:
        'Não. Os cursos ofertados na PlaforEDU serão realizados na modalidade de educação a distância. Os materiais didáticos para leitura, como atividades educacionais, serão realizados pela plataforma da instituição ofertante.',
    },
    {
      titulo: 'Tenho horário fixo para acessar os cursos?',
      texto:
        'Não existem horários pré-definidos para acessar os cursos. Reforçamos a importância de se planejar o tempo disponível para acompanhar o curso em que você se inscreveu.',
    },
    {
      titulo: 'Quando irei iniciar o curso escolhido?',
      texto:
        'Todos os cursos disponíveis na PlaforEDU terão início imediato, assim que a inscrição for realizada. Para acompanhar os cursos nos quais se inscreveu, siga as instruções das instituições ofertantes.',
    },
    {
      titulo:
        'Posso utilizar os cursos da PlaforEDU para usufruir da Licença Capacitação?',
      texto:
        'Os cursos disponíveis na PlaforEDU iniciam imediatamente após a realização da inscrição, não há previsão de agendamento de início de curso para fins de Licença Capacitação. Sugerimos que verifique junto a sua unidade de gestão de pessoas as devidas orientações. Ressaltamos que os cursos da PlaforEDU possuem carga horária geral, isto é, não dividida em módulos. Também informamos que os cursos são sem tutoria e que a PlaforEDU não disponibilizará os relatórios de acesso do usuário aos cursos.',
    },
    {
      titulo:
        'Encontrei erros no site da PlaforEDU ou nos cursos ofertados? O que fazer?',
      texto:
        'A PlaforEDU disponibiliza um canal rápido de atendimento para orientá-lo, bem como para esclarecer dúvidas e acolher sugestões. Para isso, clique no ícone Fale Conosco, disponível no canto superior direito da página da PlaforEDU.',
    },
  ];

  const [selected, setSelected] = React.useState(null);

  const toggleAccordion = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <HeaderHome />
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: screens.md ? '1fr 1fr' : null,
          marginTop: '80px',
          marginBottom: '80px',
        }}
      >
        <div>
          <span>FAQ</span>
          <h1
            style={{
              fontSize: '57px',
              fontWeight: '500',
              color: 'var(--titulos)',
              lineHeight: '1.12',
              letterSpacing: '-0.25px',
            }}
          >
            Dúvidas Frequentes
          </h1>
          <h2 className="subTitulo">Ainda precisa de ajuda?</h2>
          <Link
            style={{
              textDecoration: 'none',
              color: 'var(--texto-corpo)',
              marginTop: '4px',
              marginBottom: '20px',
              display: 'inline-block',
            }}
            to={'/faleconosco'}
          >
            Entrar em contato
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '20px',
            background: 'none',
            border: 'none',
          }}
        >
          {perguntas.map((pergunta, i) => (
            <div
              style={{
                background: 'white',
                borderRadius: '5px 5px 0px 0px',
                borderStyle: 'none',
                filter:
                  'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2)) drop-shadow(0px 5px 10px rgba(44, 86, 162, 0.05))',
              }}
              // header={pergunta.titulo}
              key={pergunta.titulo}
            >
              <div className="pergunta" onClick={() => toggleAccordion(i)}>
                <h3 style={{ marginBottom: 0 }} className="subtitulo">
                  {pergunta.titulo}
                </h3>
                <span>+</span>
              </div>
              <div className={selected === i ? 'conteudo ativo' : 'conteudo'}>
                <p className="texto">{pergunta.texto}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Col
            style={{
              width: '80%',
              marginBottom: '50px',
            }}
          >
            <Title style={styleTitle}>O que é a PlaforEDU?</Title>
            <Text style={styleText}>
              A PlaforEDU tem como objetivo proporcionar um espaço onde os
              servidores podem encontrar capacitações com a finalidade de
              potencializar sua atuação na Educação Profissional e Tecnológica,
              no âmbito da Rede Federal de Educação Profissional, Científica e
              Tecnológica (RFEPCT).
            </Text>
            <Title style={styleTitle}>
              Como funciona a lógica de categorias e competências associadas?
            </Title>
            <Text style={styleText}>
              A PlaforEDU reúne diversos cursos online abertos (Cursos Mooc)
              ofertados por diversas instituições de ensino, entre outras, da
              RFEPCT, que dão suporte ao desenvolvimento das competências
              recomendadas para um setor público de alto desempenho por meio de
              Itinerários Formativos. Na PlaforEDU você pode buscar as
              competências associadas ao seu perfil profissional, a partir de
              uma busca simples, e ter acesso a todos os cursos relacionados
              àquelas competências.{' '}
            </Text>
            <Title style={styleTitle}>Quais os itinerários da PlaforEDU?</Title>
            <Text style={styleText}>
              A PlaforEDU apresenta os perfis de servidores da RFEPCT em cinco
              Itinerários Formativos. São eles:{' '}
            </Text>
            <ul>
              <li style={{ color: '#2C55A1', fontSize: '23px' }}>
                <Text style={styleText}>Iniciação ao serviço público</Text>
              </li>
              <li style={{ color: '#2C55A1', fontSize: '23px' }}>
                <Text style={styleText}>
                  Técnico-Administrativo em Educação
                </Text>
              </li>
              <li style={{ color: '#2C55A1', fontSize: '23px' }}>
                <Text style={styleText}>Docente</Text>
              </li>
              <li style={{ color: '#2C55A1', fontSize: '23px' }}>
                <Text style={styleText}>Gerencial</Text>
              </li>
              <li style={{ color: '#2C55A1', fontSize: '23px' }}>
                <Text style={styleText}>Aposentadoria</Text>
              </li>
            </ul>
            <Title style={styleTitle}>
              Qual a abordagem do itinerário “Iniciação ao serviço público” ?{' '}
            </Title>
            <Text style={styleText}>
              Este Itinerário Formativo pretende integrar o servidor
              recém-empossado ao ambiente institucional ao qual terá exercício,
              preparando-o para o desempenho de atividades vinculadas ao
              ambiente organizacional em que atuará e ao cargo que ocupa na
              instituição.
            </Text>
            <Title style={styleTitle}>
              Qual a abordagem do itinerário “Técnico-Administrativo em
              Educação”?
            </Title>
            <Text style={styleText}>
              Este Itinerário formativo visa capacitar profissionais alinhados
              com as políticas institucionais. Nesse sentido, o itinerário
              apresentará inicialmente aos Técnicos-Administrativos em Educação
              o Plano de Carreira, suas atribuições e responsabilidades para o
              desempenho do cargo ao qual foi nomeado. Os outros cursos do
              itinerário pretendem qualificar os servidores nas diversas áreas
              de atuação - educacional e administrativa.{' '}
            </Text>
            <Title style={styleTitle}>
              Qual a abordagem do itinerário “Docente”?
            </Title>
            <Text style={styleText}>
              Este itinerário é um processo formativo interativo e reflexivo,
              proporcionando ao docente a resolução dos problemas enfrentados
              nas práticas educativas em um contexto pedagógico. A metodologia
              adotada é dinâmica, proporcionando a construção de novos saberes
              por intermédio das trilhas vinculadas à teoria e às práticas
              docentes.
            </Text>
            <Title style={styleTitle}>
              Qual a abordagem do itinerário “Gerencial”?
            </Title>
            <Text style={styleText}>
              O itinerário formativo gerencial pode ser percorrido por
              servidores técnicos-administrativos ou docentes que estejam em
              cargos/funções de gestão ou que desejem se capacitar para tal, com
              metodologias modernas, abarcando temáticas tradicionais e
              contemporâneas.
            </Text>
            <Title style={styleTitle}>
              Qual a abordagem do itinerário “Aposentadoria”?
            </Title>
            <Text style={styleText}>
              A aposentadoria já é realidade na Rede Federal EPCT, o itinerário
              que se apresenta traz o enfoque para um novo encarreiramento.
            </Text>
            <br />
            <Text style={styleText}>
              O itinerário foi elaborado a partir de 3 pilares: Formação no
              contexto psicológico preparando-se para esta nova realidade, em
              que as demandas de trabalho e rotina anteriores não existirão
              mais. Atividades futuras: o aposentado deve pensar no seu perfil,
              fazer análise de suas características pessoais, habilidades e
              preferências para descobrir o que irá fazer depois. Pode se
              associar a ONGs, empreender etc. Financeiro: se este aspecto não
              estiver bem equacionado, dificilmente o aposentado conseguirá
              realizar as outras coisas. É fundamental o planejamento
              financeiro, saber o quanto vai gastar do momento do desligamento
              para frente e fazer uma análise de expectativa de vida.
            </Text>
            <Title style={styleTitle}>
              O que é a Mandala das competências?
            </Title>
            <Text style={styleText}>
              As competências são a mobilização de conhecimentos, habilidades e
              atitudes para solucionar problemas e lidar com situações
              cotidianas profissionais. Essas competências estão associadas e
              agrupadas por categorias, sendo elas: Envolvimento profissional,
              Recursos digitais, Ensino e aprendizagem, Avaliação, Capacitação
              dos aprendentes, Programação da competência digital dos
              aprendentes, Gestão de resultados, Gestão de relacionamentos,
              Gestão de mudanças, Orientação a resultados, Processos de
              melhoria, Transversais. Abaixo é apresentado o infográfico com a
              Mandala de Competências organizada pelas competências associadas
              em categorias.
            </Text>
            <Title style={styleTitle}>O que são Trilhas Formativas?</Title>
            <Text style={styleText}>
              São percursos formativos propostos a partir do encadeamento de
              cursos ordenados, com o objetivo de desenvolver competências por
              meio da capacitação e qualificação profissional.
            </Text>

            <Title style={styleTitle}>
              Como faço para me inscrever em um curso?
            </Title>
            <ol>
              <li style={styleText}>
                <Text style={styleText}>
                  Na página inicial do PlaforEDU, clique no Itinerário Formativo
                  que deseja cursar.
                </Text>
              </li>
              <li style={styleText}>
                <Text style={styleText}>
                  No centro da tela, serão apresentados os percursos formativos
                  sugeridos para cada competência a ser desenvolvida. Clique nos
                  cursos que deseja cursar. Sugerimos iniciar pelo primeiro
                  curso da Trilha Formativa escolhida.
                </Text>
              </li>
              <li style={styleText}>
                <Text style={styleText}>
                  Ao clicar no curso escolhido, será aberto um pop-up, que trará
                  as informações do curso: descrição, carga horária, instituição
                  certificadora e link do curso. Sugerimos ao usuário habilitar
                  a exibição dos pop-ups da página da PlaforEDU.
                </Text>
              </li>
              <li style={styleText}>
                <Text style={styleText}>
                  Para acessar o curso, clique no link disponível no pop-up
                  aberto.
                </Text>
              </li>
              <li style={styleText}>
                <Text style={styleText}>
                  Ao clicar no link, você será direcionado para a página da
                  instituição que oferta o curso. Siga as instruções de cadastro
                  de cada instituição para ter acesso ao curso.
                </Text>
              </li>
              <li style={styleText}>
                <Text style={styleText}>
                  Pronto! Você terá acesso a todos os materiais e atividades do
                  curso. Bons estudos!
                </Text>
              </li>
            </ol>

            <Title style={styleTitle}>
              Em quantos cursos posso me inscrever?
            </Title>
            <Text style={styleText}>
              Não há limites de inscrições em cursos disponíveis na PlaforEDU.
              Você poderá se inscrever em quantos cursos quiser, a qualquer
              tempo, inclusive simultaneamente, desde que tenha disponibilidade
              para cursá-los.
            </Text>

            <Title style={styleTitle}>
              Os cursos ofertados na PlaforEDU são gratuitos?
            </Title>
            <Text style={styleText}>
              Todos os cursos ofertados na PlaforEDU são gratuitos. Em geral,
              são abertos e não apresentam limites de vagas.
            </Text>

            <Title style={styleTitle}>
              Todos os cursos darão certificados?
            </Title>
            <Text style={styleText}>
              Todos os cursos dão direito a um certificado emitido pela
              instituição ofertante, desde que o estudante atenda aos requisitos
              mínimos determinados em cada curso. Não serão emitidos
              certificados impressos, apenas em formato digital.
            </Text>

            <Title style={styleTitle}>
              Sou de outra instituição. Posso participar dos cursos da
              PlaforEDU?
            </Title>
            <Text style={styleText}>
              Todos os cursos são abertos à participação do público em geral,
              seja servidor público federal ou não.
            </Text>

            <Title style={styleTitle}>
              Os cursos terão a mediação de um tutor?
            </Title>
            <Text style={styleText}>
              De modo geral, os cursos são autoinstrucionais, ou seja, não há
              mediação de tutor e as atividades possuem correção automatizada.
              Orientamos o aluno a consultar a descrição de cada curso na
              plataforma da instituição ofertante.
            </Text>

            <Title style={styleTitle}>
              Como posso tirar dúvidas referente aos cursos em que me inscrevi?
            </Title>
            <Text style={styleText}>
              Para tirar quaisquer dúvidas referentes aos conteúdos
              programáticos dos cursos, deve-se consultar as instituições
              ofertantes.
            </Text>

            <Title style={styleTitle}>
              O curso terá encontros presenciais?
            </Title>
            <Text style={styleText}>
              Não. Os cursos ofertados na PlaforEDU serão realizados na
              modalidade de educação a distância. Os materiais didáticos para
              leitura, como atividades educacionais, serão realizados pela
              plataforma da instituição ofertante.
            </Text>

            <Title style={styleTitle}>
              Tenho horário fixo para acessar os cursos?
            </Title>
            <Text style={styleText}>
              Não existem horários pré-definidos para acessar os cursos.
              Reforçamos a importância de se planejar o tempo disponível para
              acompanhar o curso em que você se inscreveu.
            </Text>

            <Title style={styleTitle}>
              Quando irei iniciar o curso escolhido?
            </Title>
            <Text style={styleText}>
              Todos os cursos disponíveis na PlaforEDU terão início imediato,
              assim que a inscrição for realizada. Para acompanhar os cursos nos
              quais se inscreveu, siga as instruções das instituições
              ofertantes.
            </Text>

            <Title style={styleTitle}>
              Posso utilizar os cursos da PlaforEDU para usufruir da Licença
              Capacitação?
            </Title>
            <Text style={styleText}>
              Os cursos disponíveis na PlaforEDU iniciam imediatamente após a
              realização da inscrição, não há previsão de agendamento de início
              de curso para fins de Licença Capacitação. Sugerimos que verifique
              junto a sua unidade de gestão de pessoas as devidas orientações.
              Ressaltamos que os cursos da PlaforEDU possuem carga horária
              geral, isto é, não dividida em módulos. Também informamos que os
              cursos são sem tutoria e que a PlaforEDU não disponibilizará os
              relatórios de acesso do usuário aos cursos.
            </Text>

            <Title style={styleTitle}>
              Encontrei erros no site da PlaforEDU ou nos cursos ofertados? O
              que fazer?
            </Title>
            <Text style={styleText}>
              A PlaforEDU disponibiliza um canal rápido de atendimento para
              orientá-lo, bem como para esclarecer dúvidas e acolher sugestões.
              Para isso, clique no ícone Fale Conosco, disponível no canto
              superior direito da página da PlaforEDU.
            </Text>
          </Col>
        </Row> */}
      </div>
    </>
  );
}
