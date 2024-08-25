Jet-X Chrome Extension
Descrição
Jet-X é uma extensão para o Google Chrome projetada para facilitar a interação dos atendentes da Jetsales com um chatbot integrado com IA do Chatbase. A extensão se integra diretamente em páginas específicas, como a RD Station, para oferecer uma interface de chatbot rápida e acessível.

Funcionalidades
Popup Personalizado: A extensão possui um popup que exibe um chatbot para interação rápida.
Injeção de Conteúdo: Um iframe do chatbot é injetado diretamente nas páginas configuradas, oferecendo suporte constante.
Ícones Personalizados: Ícones do Microsoft Fluent UI Emoji são usados para personalizar a interface da extensão.
Estrutura do Projeto
manifest.json: Define as configurações básicas, permissões e recursos da extensão.
background.js: Script de segundo plano que registra eventos importantes, como a instalação da extensão.
content.js: Script injetado em páginas específicas para adicionar um chatbot diretamente no conteúdo.
popup.js: Gerencia a interface do popup da extensão, carregando um iframe do chatbot.
popup.html: Define a estrutura HTML do popup, incluindo a área onde o chatbot é exibido.
popup.css: Estilos personalizados para o popup da extensão.Jet-X Chrome Extension
Descrição
Jet-X é uma extensão para o Google Chrome projetada para facilitar a interação dos atendentes da Jetsales com um chatbot integrado com IA do Chatbase. A extensão se integra diretamente em páginas específicas, como a RD Station, para oferecer uma interface de chatbot rápida e acessível.

Funcionalidades
Popup Personalizado: A extensão possui um popup que exibe um chatbot para interação rápida.
Injeção de Conteúdo: Um iframe do chatbot é injetado diretamente nas páginas configuradas, oferecendo suporte constante.
Ícones Personalizados: Ícones do Microsoft Fluent UI Emoji são usados para personalizar a interface da extensão.
Estrutura do Projeto
manifest.json: Define as configurações básicas, permissões e recursos da extensão.
background.js: Script de segundo plano que registra eventos importantes, como a instalação da extensão.
content.js: Script injetado em páginas específicas para adicionar um chatbot diretamente no conteúdo.
popup.js: Gerencia a interface do popup da extensão, carregando um iframe do chatbot.
popup.html: Define a estrutura HTML do popup, incluindo a área onde o chatbot é exibido.
popup.css: Estilos personalizados para o popup da extensão.
Instalação
Clone este repositório em sua máquina local:
Navegue até o diretório do projeto

Copiar código
cd jet-x
Adicione seu ID de chatbot e domínio no arquivo env.example.js:
const ENV = {
    BOT_ID: "seu-bot-id",
    CHATBOT_DOMAIN: "seu-chatbot-domain"
};
Abra o Chrome e acesse chrome://extensions/.
Ative o modo de desenvolvedor.
Clique em "Carregar sem compactação" e selecione o diretório do projeto.
