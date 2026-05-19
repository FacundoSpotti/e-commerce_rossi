import { useEffect, useRef, useState } from "react"; //hook personalizado para efectos de scroll, permite que los elementos aparezcan cuando el usuario hace scroll hacia ellos

export function useScrollReveal() {

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => { //useEffect, otro hook que permite ejecutar codigo cuando el componente se carga y cada vez que cambia
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []); //este [] significa que se ejecutara solo una vez, cuando el componente se carga

  return [ref, visible]; //devuelve el ref y la variable visible al componente que lo llama, estos comentarios son para entenderlos porque le pedimos a la IA que haga este codigo 
}
