import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
            navigation : {
                projects : 'Projects',
                me : 'Me',
                home : 'Home'

            },
            home : {
              subtitle : 'Web Developer',
              text : 'Biulding a more creative and expressive Web.'
            },
            contacts : {
              web : 'Web',
              developer : 'Developer',
              designer : 'Designer',
              lastTitle : 'Building a more creative and expressive Web.',
              description1 : 'Hey, my name is Kevin. I’m a web developer and designer from Brazil.',
              description2 : 'I have proficiency in ReactJS, ThreeJS, API manipulation, JavaScript libraries. Focused mostly in Front-End development.',
              description3 : 'I also like cats and sushi. :)',
              getInTouch : 'Get in Touch.'
            },
            projects : {
              notes : 'Notes',
              description1 : 'Note taking web app with authentication handled by firebase.',

              calcule : 'Calcule Tudo',
              description2 : 'Math solving problems web app.',

              cat : 'Print Cat Images',
              description3 : 'Web app that interact with "The Cat API" and shows to users image, description and the selected cat traits.',

              dog : 'Print Dog Images',
              description4 : 'Web app that interact with the "Dog API" and shows to users random dog images.',

              thisPage : 'This Page',
              description5 : '',
              
              sourceCode : 'Source code'
            }
        }
      },
      
      pt: {
        translation: {
          navigation : {
              projects : 'Projetos',
              me : 'Eu',
              home : 'Página inicial'

          },
          home : {
            subtitle : 'Desenvolvedor Web',
            text : 'Criando uma internet mais criativa e expressiva.'
          },
          contacts : {
            web : 'Desenvolvedor',
            developer : 'Web',
            designer : 'Designer',
            lastTitle : 'Criando uma internet mais criativa e expressiva.',
            description1 : 'Eai, meu nome é Kevin. Eu sou desenvolvedor e designer do Brazil.',
            description2 : 'Eu tenho proficiência em ReactJS, ThreeJS, manipulação de API, bibliotecas JavaScript. Mais focado em desenvolvimento Front-end.',
            description3 : 'Eu também gosto de gatos e de sushi. :)',
            getInTouch : 'Entre em contato.'
          },
          projects : {
            notes : 'Notes',
            description1 : 'Aplicativo para tomada de notas com autenticação por firebase.',

            calcule : 'Calcule Tudo',
            description2 : 'Aplicativo para resolução de problemas matemáticos.',

            cat : 'Print Cat Images',
            description3 : 'Aplicativo que interage com "The Cat API" e mostra para o usuário imagens, descrição e características do gato selecionado.',

            dog : 'Print Dog Images',
            description4 : 'Aplicativo que interage com "Dog API"" e mostra para o usuário imagens aleatórias de cachorros.',

            thisPage : 'Essa página',
            description5 : '',
            
            sourceCode : 'Código-Fonte'
          }
      }
    },
    }
  });

export default i18n;