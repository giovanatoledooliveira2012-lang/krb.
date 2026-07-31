// Imagens ficam em public/images e são referenciadas de forma relativa à base
// do Vite (base: "./"), garantindo que carreguem em qualquer subdiretório do
// GitHub Pages sem precisar editar código.
const base = import.meta.env.BASE_URL;

export const trioImg = `${base}images/kurubi-trio.jpg`;
export const dripImg = `${base}images/kurubi-drip.jpg`;
