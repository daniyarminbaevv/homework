const num: number = 2;
const str: string = "str";
const boo: boolean = true;
function calculateArea(a: number): number {
  const A = Math.PI * a;
  return A;
}
calculateArea(5);
function calculateDensity(m: number, v: number): number {
  const p = m / v;
  return p;
}
calculateDensity(5, 6);
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string[];
};
const product: string[] = ["milk", "silk", "bread"];
