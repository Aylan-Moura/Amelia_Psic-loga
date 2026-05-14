---
name: seo-optimizer
description: Otimiza sites para SEO (Search Engine Optimization) e Core Web Vitals (LCP, TBT, CLS). Use esta skill para melhorar estrutura HTML semântica, meta tags, sitemap, robots.txt, schema markup, performance, velocidade de carregamento, accessibility, URLs amigáveis, canonical tags, e todas as melhores práticas de SEO on-page e Web Vitals. Inclui otimização de imagens, lazy loading, render blocking, layout stability, e muito mais.
---

# SEO Optimizer

Otimiza sites para SEO e Core Web Vitals (velocidade e performance) com as melhores práticas.

## Quando Usar

Use esta skill quando o usuário:
- Quer otimizar o site para mecanismos de busca
- Precisa de meta tags e schema markup
- Quer melhorar performance e velocidade (Core Web Vitals)
- Precisa de estrutura HTML semântica
- Quer criar sitemap e robots.txt
- Precisa de SEO on-page completo
- Quer otimizar LCP, TBT e CLS

## Core Web Vitals (Métricas de Velocidade)

### LCP (Largest Contentful Paint) - < 2.5s
O tempo para renderizar o maior elemento visível.
**Otimizações:**
- Preload da imagem hero (above-the-fold)
- Usar formatos modernos (WebP, AVIF)
- Inline CSS crítico
- CDN para assets
-减少 server response time

### TBT (Total Blocking Time) - < 200ms
Tempo total que a main thread é bloqueada.
**Otimizações:**
- Defer/async em scripts não essenciais
- Minificar e comprimir JS/CSS
- Remover JS blockers
- Code splitting
- Web workers para scripts pesados

### CLS (Cumulative Layout Shift) - < 0.1
Mudança cumulativa de layout.
**Otimizações:**
- Definir dimensões (width/height) em imagens
- Reservar espaço para ads embeds
- Font-display: swap/optional
- Não inserir conteúdo acima de conteúdo existente
- Animações usando transform/opacity

## Elementos de SEO

### 1. Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="author" content="...">
<meta name="robots" content="index, follow">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:url" content="...">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

### 2. Title Tag
```html
<title>Palavra-chave Principal | Marca - Texto Relevante</title>
```
- 50-60 caracteres
- Palavra-chave no início

### 3. Headings (Estrutura)
- H1: apenas 1 por página
- H2-H6: hierarquia lógica
- Incluir palavras-chave

### 4. Schema Markup (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Nome",
  "image": "URL",
  "description": "Descrição",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cidade",
    "addressRegion": "Estado",
    "addressCountry": "BR"
  },
  "telephone": "+55DD000000000",
  "priceRange": "$$",
  "openingHours": "Mo-Fr 08:00-18:00"
}
```

### 5. Semantic HTML
```html
<header>
<nav>
<main>
<article>
<section>
<aside>
<footer>
```

### 6. URLs Amigáveis
- lowercase
- hífens (não underscores)
- descritivas
- curtas

### 7. Atributos Alt em Imagens
```html
<img src="..." alt="Descrição com palavras-chave" width="800" height="600" loading="lazy">
```

### 8. Performance (Core Web Vitals)
```html
<!-- Preload imagem hero (LCP) -->
<link rel="preload" as="image" href="hero.webp">

<!-- Preconnect para CDN -->
<link rel="preconnect" href="https://cdn.site.com">

<!-- Defer JS não essencial -->
<script src="analytics.js" defer></script>

<!-- Async JS não crítico -->
<script src="chat-widget.js" async></script>

<!-- Font display swap -->
<link rel="stylesheet" href="fonts.css">
<style>
@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2');
  font-display: swap;
}
</style>

<!-- Critical CSS inline -->
<style>
/* CSS crítico acima da dobra */
.hero { min-height: 100vh; }
</style>

<!-- Resource Hints -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### 9. Otimização de Imagens
```html
<!-- Lazy loading nativo -->
<img src="image.jpg" loading="lazy" alt="..." width="800" height="600">

<!-- Picture com WebP/AVIF -->
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="..." width="800" height="600" loading="lazy">
</picture>
```

### 10. CLS Prevention
```html
<!-- Container com dimensões fixas para ads/embeds -->
<div style="min-height: 250px; aspect-ratio: 16/9;">
  <iframe src="ad-banner.html" title="Advertisement"></iframe>
</div>

<!-- Skeleton loading -->
<div class="skeleton" aria-hidden="true"></div>
```

### 11. Sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://site.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 12. Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://site.com/sitemap.xml
```

### 13. Canonical Tags
```html
<link rel="canonical" href="https://site.com/pagina">
```

### 14. Open Graph
```html
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Nome do Site">
```

## Processo de Otimização

### Fase 1: SEO On-Page
1. **Auditoria**: Analisar site atual
2. **Meta Tags**: Adicionar/otimizar
3. **Structure**: Verificar headings
4. **Schema**: Adicionar JSON-LD
5. **Semantic HTML**: Melhorar estrutura

### Fase 2: Core Web Vitals
1. **LCP**: Preload hero image, inline critical CSS, optimize server
2. **TBT**: Defer/async JS, minificar, remove blockers
3. **CLS**: Width/height em imagens, font-display swap, espacio reservado

### Fase 3: Technical SEO
1. **Sitemap**: Criar/atualizar
2. **Robots.txt**: Configurar
3. **HTTPS**: Garantir SSL
4. **Mobile**: Verificar responsive

## Checklist SEO + Web Vitals

### SEO On-Page
- [ ] Title tag (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] H1 único e descritivo
- [ ] Imagens com alt text
- [ ] URLs amigáveis
- [ ] Schema markup
- [ ] Open Graph tags
- [ ] Canonical URLs
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Favicon
- [ ] Mobile responsive
- [ ] SSL/HTTPS

### Core Web Vitals
- [ ] LCP < 2.5s (preload hero, CDN, optimized images)
- [ ] TBT < 200ms (defer JS, minificar, remove blockers)
- [ ] CLS < 0.1 (dimensões em imagens, font-display swap)
- [ ] Imagens com width/height explícitos
- [ ] Lazy loading em imagens below-the-fold
- [ ] Preload de recursos críticos
- [ ] Critical CSS inline
- [ ] Defer de scripts não essenciais
- [ ] Font-display: swap/optional
- [ ] CDN para assets estáticos

### Performance
- [ ] Minificar CSS
- [ ] Minificar JS
- [ ] Compression (Gzip/Brotli)
- [ ] WebP/AVIF em imagens
- [ ] Resource hints (preconnect, dns-prefetch)
- [ ] Code splitting (se aplicável)

## Técnicas Avançadas de Performance

### HTTP/2 Push
```
Link: </style.css>; rel=preload; as=style, </script.js>; rel=preload; as=script
```

### Service Worker (PWA)
```javascript
// Cache-first strategy
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

### Critical Path Optimization
- Extrair CSS crítico (above-the-fold)
- Inline critical CSS
- Adiar CSS não crítico

### Resource Hints
```html
<link rel="preload" href="hero.jpg" as="image">
<link rel="preconnect" href="https://api.site.com">
<link rel="dns-prefetch" href="https://external-cdn.com">
```

## Output

Entregar:
1. HTML otimizado com meta tags e performance
2. Schema markup JSON-LD
3. sitemap.xml
4. robots.txt
5. Recomendações de otimização Web Vitals
6. Checklist de otimização SEO + Core Web Vitals
7. Sugestões de ferramentas de auditoria (PageSpeed Insights, Lighthouse, GTmetrix)