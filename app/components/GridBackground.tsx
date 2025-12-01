'use client';

import { useEffect, useRef } from 'react';

interface Dot {
  element: HTMLDivElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function GridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const linesRef = useRef<HTMLDivElement[]>([]);
  const mouseRef = useRef({ x: -300, y: -300 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const gridContainer = containerRef.current;
    if (!gridContainer) return;

    const maxSpeed = 0.3;
    const mouseConnectionRadius = 150;
    const nodeConnectionRadius = 100;
    const nodeLineOpacity = 0.4;

    let containerWidth = gridContainer.offsetWidth;
    let containerHeight = gridContainer.offsetHeight;

    const calculateNumDots = (width: number) => {
      if (width < 768) return 35;
      else if (width < 1024) return 60;
      else return 80;
    };

    const getRandomLetter = () => {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    };

    const createSingleLetterNode = (xPos: number, yPos: number, initialVx?: number, initialVy?: number) => {
      const dotElement = document.createElement('div');
      dotElement.classList.add('grid-dot');
      dotElement.textContent = getRandomLetter();

      const dot: Dot = {
        element: dotElement,
        x: xPos,
        y: yPos,
        vx: initialVx !== undefined ? initialVx : (Math.random() - 0.5) * 2 * maxSpeed,
        vy: initialVy !== undefined ? initialVy : (Math.random() - 0.5) * 2 * maxSpeed
      };

      dot.element.style.transform = `translate(${dot.x}px, ${dot.y}px) translate(-50%, -50%)`;
      gridContainer.appendChild(dot.element);
      dotsRef.current.push(dot);
      return dot;
    };

    const createLetterNodes = () => {
      const currentNumDots = calculateNumDots(containerWidth);
      dotsRef.current = [];
      gridContainer.innerHTML = '';
      linesRef.current = [];

      for (let i = 0; i < currentNumDots; i++) {
        createSingleLetterNode(
          Math.random() * containerWidth,
          Math.random() * containerHeight
        );
      }
    };

    const updateNodePositions = () => {
      dotsRef.current.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        const buffer = 10;

        if ((dot.x < buffer && dot.vx < 0) || (dot.x > containerWidth - buffer && dot.vx > 0)) {
          dot.vx *= -1;
          dot.x = Math.max(buffer, Math.min(dot.x, containerWidth - buffer));
        }
        if ((dot.y < buffer && dot.vy < 0) || (dot.y > containerHeight - buffer && dot.vy > 0)) {
          dot.vy *= -1;
          dot.y = Math.max(buffer, Math.min(dot.y, containerHeight - buffer));
        }

        dot.element.style.transform = `translate(${dot.x}px, ${dot.y}px) translate(-50%, -50%)`;
      });
    };

    const drawLines = () => {
      linesRef.current.forEach(line => line.remove());
      linesRef.current = [];

      for (let i = 0; i < dotsRef.current.length; i++) {
        const dotA = dotsRef.current[i];

        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dotB = dotsRef.current[j];
          const dx = dotB.x - dotA.x;
          const dy = dotB.y - dotA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < nodeConnectionRadius) {
            const line = document.createElement('div');
            line.classList.add('line');
            const angle = Math.atan2(dy, dx);
            line.style.left = `${dotA.x}px`;
            line.style.top = `${dotA.y}px`;
            line.style.width = `${dist}px`;
            line.style.transform = `rotate(${angle}rad)`;
            line.style.opacity = String((1 - (dist / nodeConnectionRadius)) * nodeLineOpacity);
            gridContainer.appendChild(line);
            linesRef.current.push(line);
          }
        }

        const mouseDx = dotA.x - mouseRef.current.x;
        const mouseDy = dotA.y - mouseRef.current.y;
        const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDist < mouseConnectionRadius) {
          const line = document.createElement('div');
          line.classList.add('line');
          const angle = Math.atan2(mouseDy, mouseDx);
          line.style.left = `${mouseRef.current.x}px`;
          line.style.top = `${mouseRef.current.y}px`;
          line.style.width = `${mouseDist}px`;
          line.style.transform = `rotate(${angle}rad)`;
          line.style.opacity = String(1 - (mouseDist / mouseConnectionRadius));
          gridContainer.appendChild(line);
          linesRef.current.push(line);
        }
      }
    };

    const animate = () => {
      updateNodePositions();
      drawLines();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const updateMousePosition = (event: MouseEvent | Touch) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    const handleMouseMove = (event: MouseEvent) => updateMousePosition(event);
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) updateMousePosition(event.touches[0]);
    };
    const handleMouseLeave = () => {
      mouseRef.current.x = -mouseConnectionRadius * 2;
      mouseRef.current.y = -mouseConnectionRadius * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchend', handleMouseLeave);

    const handleResize = () => {
      const newWidth = gridContainer.offsetWidth;
      const newHeight = gridContainer.offsetHeight;
      if (newWidth !== containerWidth || newHeight !== containerHeight) {
        containerWidth = newWidth;
        containerHeight = newHeight;
        if (containerWidth > 0 && containerHeight > 0) {
          if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
          createLetterNodes();
          animate();
        }
      }
    };

    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250);
    };

    window.addEventListener('resize', debouncedResize);

    createLetterNodes();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchend', handleMouseLeave);
      window.removeEventListener('resize', debouncedResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return <div ref={containerRef} id="grid-container" className="grid-container" />;
}
