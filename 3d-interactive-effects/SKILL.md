---
name: 3d-interactive-effects
description: Adiciona efeitos 3D, animações interativas, elementos parallax avançados, transformações 3D CSS, hover effects sofisticados, transições dinâmicas e experiências imersivas a sites. Use esta skill quando quiser elevar o design com efeitos visuais impressionantes, animações que respondem ao usuário, elementos 3D sem heavy libraries, ou interações premium que causam impacto visual.
---

# 3D Interactive Effects

Adiciona efeitos 3D, animações interativas e experiências imersivas a sites web.

## Quando Usar

Use esta skill quando o usuário:
- Quer efeitos 3D e animações sofisticadas
- Precisa de hover effects avançados
- Quer elementos parallax complexos
- Precisa de transições e transformações 3D CSS
- Quer interações que respondam ao mouse/touch
- Deseja animations que causem impacto visual premium

## Tipos de Efeitos

### 1. 3D Transforms CSS
- rotateX, rotateY, rotateZ
- translateZ, perspective
- transform-style: preserve-3d
- perspective-origin

### 2. Hover Effects 3D
- Card tilt effect (跟随鼠标倾斜)
- 3D button flips
- Image 3D reveals
- Cube rotations

### 3. Parallax Effects
- Mouse-move parallax
- Scroll-triggered parallax
- Layer depth effects
- Mouse-following elements

### 4. Animações Interativas
- Cursor effects (trailing, glows)
- Click interactions
- Drag & drop animations
- Scroll progress indicators
- Loading animations

### 5. Efeitos Visuais Premium
- Glassmorphism (backdrop-filter)
- Glow effects (box-shadow, text-shadow)
- Particle effects (CSS/JS)
- Gradient animations
- Shimmer/loading effects

## Código Base

### 3D Card Tilt Effect
```css
.tilt-card {
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.tilt-card:hover {
  transform: perspective(1000px) rotateX(5deg) rotateY(-5deg);
}

.tilt-card__content {
  transform: translateZ(30px);
}
```

### Mouse Move Parallax
```javascript
const parallaxElements = document.querySelectorAll('.parallax-layer');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  parallaxElements.forEach(el => {
    const speed = el.dataset.speed || 1;
    el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});
```

### Glassmorphism
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
}
```

### Glow Effects
```css
.glow {
  box-shadow: 0 0 20px rgba(201, 169, 89, 0.5),
              0 0 40px rgba(201, 169, 89, 0.3),
              0 0 60px rgba(201, 169, 89, 0.1);
}

.text-glow {
  text-shadow: 0 0 10px rgba(201, 169, 89, 0.8),
               0 0 20px rgba(201, 169, 89, 0.5);
}
```

### Cursor Trail Effect
```javascript
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
```

## Implementação

1. Identificar onde adicionar efeitos 3D
2. Escolher efeitos apropriados para o contexto
3. Implementar CSS e JavaScript necessários
4. Testar em diferentes dispositivos
5. Garantir performance (evitar animações heavy)

## Performance

- Usar transform e opacity para animações
- Evitar animating propriedades como width, height
- Usar will-change com moderação
- Limitar elementos com parallax
- Testar em mobile

## Output

Adicionar ao site:
- CSS com efeitos 3D e animações
- JavaScript para interações
- Elementos HTML necessários
- Ajustes responsivos