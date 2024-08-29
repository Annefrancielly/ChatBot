### Jet-X Chrome Extension ###

## Descrição
•Jet-X é uma extensão para Google Chrome criada para otimizar a interação dos atendentes da Jetsales com um chatbot alimentado por IA do Chatbase. 
•A extensão oferece uma interface de chatbot rápida e acessível diretamente em páginas específicas, como a RD Station.

## Funcionalidades
- **Popup Personalizado:** Apresenta um popup para interação rápida com o chatbot.
- **Injeção de Conteúdo:** Insere um iframe do chatbot diretamente nas páginas configuradas para suporte contínuo.
- **Ícones Personalizados:** Utiliza ícones do Microsoft Fluent UI Emoji para personalizar a interface.

## Estrutura do Projeto
- **manifest.json:** Configurações básicas, permissões e recursos da extensão.
- **background.js:** Script de segundo plano que lida com eventos importantes, como a instalação da extensão.
- **content.js:** Script injetado em páginas específicas para adicionar o chatbot diretamente no conteúdo.
- **popup.js:** Gerencia a interface do popup, carregando o iframe do chatbot.
- **popup.html:** Estrutura HTML do popup, incluindo a área do chatbot.
- **popup.css:** Estilos personalizados para o popup da extensão.

## Instalação
1. Clone o repositório em sua máquina local:
    ```bash
    git clone <URL-DO-REPOSITORIO>
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd jet-x
    ```
3. Configure seu ID de chatbot e domínio no arquivo `env.example.js`:
    ```javascript
    const ENV = {
        BOT_ID: "seu-bot-id",
        CHATBOT_DOMAIN: "seu-chatbot-domain"
    };
    ```
4. Abra o Chrome e acesse `chrome://extensions/`.
5. Ative o modo de desenvolvedor.
6. Clique em "Carregar sem compactação" e selecione o diretório do projeto.

## Observações
- Certifique-se de substituir `"seu-bot-id"` e `"seu-chatbot-domain"` pelos valores reais fornecidos pelo Chatbase.
- Teste a extensão para garantir que o chatbot apareça corretamente nas páginas configuradas.




    
