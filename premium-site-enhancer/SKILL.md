---
name: premium-site-enhancer
description: Cria sites premium do zero ou melhora sites existentes com design moderno, foto grande no mobile (70-80vh), animações sofisticadas e estética altamente profissional. Use esta skill para criar landing pages, portfólios, sites profissionais, e-commerce, blogs institucionais ou qualquer tipo de site moderno com visual premium. Inclui código CSS/JS customizado baseado nos requisitos do usuário. Ideal para profissionais (psicólogos, médicos, advogados, consultores), empresas, lojas virtuais e projetos pessoais que querem um site elegante e atual.
---

# Premium Site Enhancer

Cria sites premium do zero ou melhora sites existentes com design moderno, foto grande no mobile, animações sofisticadas e estética altamente profissional.

## Quando Usar

Use esta skill quando o usuário:
- Quer criar um site do zero com design premium
- Quer melhorar/transformar um site existente
- Precisa de design moderno e premium
- Quer adicionar animações sofisticadas
- Precisa de foto grande na versão mobile (70-80vh)
- Quer um site profissional elegante
- Precisa de: landing page, portfólio, site institucional, e-commerce, blog, loja virtual

## Tipos de Site Suportados

1. **Landing Page** - Página única de conversão
2. **Portfólio** - Galeria de trabalhos/projetos
3. **Site Profissional** - Para profissionais (psicólogo, médico, advogado, consultor)
4. **E-commerce** - Loja virtual com produtos
5. **Site Institucional** - Empresa, ONG, associação
6. **Blog** - Artigos e conteúdo
7. **One Page** - Tudo em uma página

## Estrutura do Output

A skill gera:
1. **HTML** completo ou modificado
2. **CSS** com design premium e responsivo
3. **JavaScript** para animações e interações
4. **Assets** (imagens, ícones se necessário)

## Requisitos de Design

### Mobile Hero Grande
- Foto principal deve ocupar 70-80% da tela no mobile
- Imagem de fundo com overlay escuro (rgba(0,0,0,0.4) ou similar)
- Texto sobreposto centralizado e legível
- Design full-height no mobile (min-height: 80vh)
- No desktop: min-height: 100vh

### Animações Requeridas
1. **Fade-in** nos elementos ao carregar (IntersectionObserver)
2. **Hover effects** nos botões e cards (transform, box-shadow)
3. **Smooth scroll** entre seções
4. **Parallax** opcional na imagem de fundo
5. **Staggered animation** para listas e elementos
6. **Typing effect** opcional no texto do hero

### Premium Elements
- Tipografia elegante (Google Fonts)
- Cores sofisticadas (dourados, azuis profundos, tons neutros)
- Sombras suaves e degradês subtis
- Espaçamentos generosos (padding, margin)
- Bordas arredondadas modernas (border-radius)
- Transições suaves (cubic-bezier)

### Paletas de Cores Premium
```
Option 1 - Elegant Gold:
  --primary: #1a1a2e
  --accent: #c9a959
  --light: #f8f8f8

Option 2 - Modern Blue:
  --primary: #0f3460
  --accent: #e94560
  --light: #f8f9fa

Option 3 - Minimalist:
  --primary: #2d3436
  --accent: #00b894
  --light: #ffffff
```

## Processo

### Para criar do zero:
1. Perguntar o tipo de site desejado
2. Identificar conteúdo (texto, fotos, produtos)
3. Selecionar template adequado
4. Gerar HTML/CSS/JS completo

### Para melhorar existente:
1. Analisar o site atual
2. Identificar elementos a melhorar
3. Manter conteúdo existente
4. Adicionar design premium e animações

### Gerar código:
- HTML semântico e acessível
- CSS com variáveis CSS (custom properties)
- JavaScript com IntersectionObserver
- Responsividade completa (mobile-first)
- Otimizado para performance

## Templates Incluídos

### Template 1: Hero Central
- Foto grande como background fullscreen
- Título e subtítulo centralizados
- CTA botão elegante
- Seções: Sobre, Serviços, Contato

### Template 2: Split Hero
- Metade imagem, metade texto (desktop)
- Mobile: foto grande em cima
- Design assimétrico moderno

### Template 3: Overlay Text
- Imagem fullscreen com texto sobreposto
- Design extremamente premium
- Ideal para projetos visuais

### Template 4: Portfólio Grid
- Grid de imagens/gallery
- Lightbox para visualização
- Categorias e filtros

### Template 5: E-commerce
- Grid de produtos
- Cards com imagem, preço, botão
- Carrinho (opcional)

## Código Requerido

### HTML Base
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título do Site</title>
  <link rel="stylesheet" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Nav -->
  <nav class="premium-nav">...</nav>

  <!-- Hero -->
  <section class="premium-hero" style="background-image: url('img.jpg');">
    <div class="premium-hero__overlay"></div>
    <div class="premium-hero__content">
      <h1 class="premium-hero__title">...</h1>
      <p class="premium-hero__subtitle">...</p>
      <a href="#contato" class="premium-hero__cta">...</a>
    </div>
  </section>

  <!-- Sections -->
  <section class="premium-section">...</section>

  <!-- Footer -->
  <footer class="premium-footer">...</footer>

  <script src="script.js"></script>
</body>
</html>
```

### CSS Base Premium
```css
:root {
  --primary: #1a1a2e;
  --accent: #c9a959;
  --light: #f8f8f8;
  --dark: #0f0f1a;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Lato', sans-serif;
  --shadow-soft: 0 4px 20px rgba(0,0,0,0.08);
  --transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.premium-hero {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .premium-hero {
    min-height: 80vh;
  }
}

.fade-in-section {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### JavaScript Animations
```js
const initAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-section, .fade-in-element').forEach(el => {
    observer.observe(el);
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
};

document.addEventListener('DOMContentLoaded', initAnimations);
```

## Output Final

Entregar ao usuário:
1. **index.html** - Arquivo HTML completo
2. **style.css** - Arquivo CSS com todos os estilos premium
3. **script.js** - Arquivo JS com animações
4. **Instruções** - Como usar/instalar
5. **Sugestões** - Fotos recomendadas, cores alternativas

## Validação

Antes de entregar, verificar:
- Foto hero ocupa 70-80% da altura no mobile
- Animações funcionam suavemente (sem lag)
- Design é responsivo (mobile, tablet, desktop)
- Tipografia é elegante e legível
- Cores transmitem premium
- Código é semântico e acessível
- Imagens são otimizadas (lazy loading)
- Navegação funciona no mobile

## Perguntas para o Usuário

Se necessário, perguntar:
1. Que tipo de site você quer? (landing page, portfólio, e-commerce, etc)
2. Você tem um site existente ou quer criar do zero?
3. Qual o tema/área? (saúde, jurídica, negócios, pessoal)
4. Quais cores você prefere?
5. Você tem fotos para usar no hero?
6. Quais seções precisa? (sobre, serviços, contato, etc)