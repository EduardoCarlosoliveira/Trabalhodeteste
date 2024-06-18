# Testes Automatizados com Selenium

Este repositório contém testes automatizados utilizando Selenium para interagir com um site específico e validar suas funcionalidades.

## Objetivo

Desenvolver habilidades práticas na criação e execução de testes automatizados para aplicações web utilizando Selenium.

## Site Escolhido

O site escolhido para os testes é [FDR Clothing](https://fdrclothing.com/).

## Funcionalidades Testadas

1. **Mudança de Idioma:**
   - Altera o idioma do site através dos links disponíveis.
   - Assert: Verifica se a mudança de idioma é refletida corretamente na interface.

2. **Acesso a Página Inexistente:**
   - Tenta acessar uma página que não existe.
   - Assert: Confirma se o site redireciona corretamente para a página inicial após o erro.

3. **Login no Sistema:**
   - Realiza o login com credenciais fornecidas.
   - Assert: Verifica se o login é bem-sucedido e a página de conta é carregada.

4. **Navegação pelas Páginas:**
   - Navega entre diferentes seções do site, como a página inicial e a página de compras.
   - Assert: Confirma se cada página é acessada corretamente após a navegação.

5. **Redirecionamento para WhatsApp:**
   - Clica em um link que redireciona para o WhatsApp.
   - Assert: Verifica se o redirecionamento para o WhatsApp ocorre corretamente.

## Ferramentas Utilizadas

- Selenium WebDriver
- Mocha (para execução dos testes)
- Chai (para asserções)
- dotenv (para configuração de variáveis de ambiente)

## Instruções de Execução

1. Clone este repositório: 
```
git clone https://github.com/seu-usuario/.git
```
2. Instale as dependências:
```
npm install
```
3. Execute os testes:
```
npm test
```

## Observações

Este projeto foi desenvolvido como parte de um exercício acadêmico/profissional para prática de testes automatizados com Selenium. Qualquer dúvida ou sugestão, entre em contato.
