import { useState } from "react";

import "./appStyles.css"

import Chart from "./components/chart/chart";
import Header from "./components/header/header";


function App() {
  const [selectedCategoria, setSelectedCategoria] = useState({});
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedBrand, setSelectedBrand] = useState({});

  function findProducts(catSelected) {
    setSelectedCategoria(categorias.find(cat => cat.name == catSelected));
  };
  function findBrands(prodSelected) {
    setSelectedProduct(selectedCategoria.products.find(cat => cat.name == prodSelected));
  };

  function selectBrand(braSelected) {
    setSelectedBrand(selectedProduct.brands.find(cat => cat.name == braSelected));
    console.log(selectedBrand.sold)
  };

  // Uma refatoração seria a mudança dos dados para outro arquivo, porém tive uma dificuldade em
  // outra parte, e devido ao volume dos dados que consumiria um tempo que não me restou para colocar 
  // em outro arquivo

  let goiaba = {
    name: "goiaba",
    sold: [111, 222, 333, 444]
  };

  let laranja = {
    name: "laranja",
    sold: [444, 333, 222, 111]
  };


  let fruta = {
    name: "fruta",
    brands: [goiaba, laranja],
  };

  let couve = {
    name: "couve",
    sold: [555, 666, 777, 888]
  };

  let alface = {
    name: "alface",
    sold: [888, 777, 666, 555]
  };

  let verdura = {
    name: "verdura",
    brands: [couve, alface],
  };

  let arroz = {
    name: "arroz",
    sold: [444, 555, 666, 777]
  };

  let trigo = {
    name: "trigo",
    sold: [777, 666, 555, 444]
  };

  let cereal = {
    name: "cereal",
    brands: [arroz, trigo],
  };
  let comida = {
    name: "comida",
    products: [fruta, verdura, cereal],
  };

  let nike = {
    name: "nike",
    sold: [666, 777, 666, 888]
  };
  let adidas = {
    name: "adidas",
    sold: [888, 777, 555, 666]
  };

  let blusa = {
    name: "blusa",
    brands: [nike, adidas],
  };

  let mizuno = {
    name: "mizuno",
    sold: [666, 333, 444, 555]
  };

  let topper = {
    name: "topper",
    sold: [555, 333, 777, 666]
  };
  let tenis = {
    name: "tenis",
    brands: [mizuno, topper],
  };

  let diesel = {
    name: "diesel",
    sold: [666, 777, 666, 888]
  };

  let levi = {
    name: "levi",
    sold: [555, 333, 777, 666]
  };

  let calca = {
    name: "calca",
    brands: [diesel, levi],
  };
  let roupa = {
    name: "roupas",
    products: [blusa, tenis, calca],
  };

  let ouro = {
    name: "ouro",
    sold: [666, 777, 666, 888]
  };

  let prata = {
    name: "prata",
    sold: [555, 333, 777, 666]
  };

  let colar = {
    name: "colar",
    brands: [ouro, prata],
  };

  let oriente = {
    name: "oriente",
    sold: [666, 777, 666, 888]
  };
  let cassio = {
    name: "cassio",
    sold: [555, 333, 777, 666]
  };
  let relogio = {
    name: "relogio",
    brands: [oriente, cassio],
  };

  let LA = {
    name: "LA",
    sold: [666, 777, 666, 888]
  };

  let Fila = {
    name: "Fila",
    sold: [555, 333, 777, 666]
  };

  let bone = {
    name: "bone",
    brands: [LA, Fila],
  };
  let acessorios = {
    name: "acessorios",
    products: [colar, relogio, bone],
  };


  let categorias = [comida, roupa, acessorios];


  return (
    <>
      <Header />
      <main>
        <div className="container-selects">
          {/* Uma refatoração futura seria criar um componente para o select, não consegui fazer pois não tive tempo
          hábil para localizar como passar informações do elemento filho para o pai */}
          <div>
            <label>Categoria: </label>
            <select name="select" onChange={(event) => { findProducts(event.target.value) }}>
              <option value="" disabled selected hidden>Categorias</option>
              {
                categorias.map(element => {
                  return <option value={element.name}>{element.name ? element.name : element}</option>
                })
              }
            </select>
          </div>
          <div>
            <label>Produto: </label>
            <select name="select" onChange={(event) => { findBrands(event.target.value) }}>
              <option value="" disabled selected hidden>Produtos</option>
              {
                (selectedCategoria.products ? selectedCategoria.products : ["produto"]).map(element => {
                  return <option value={element.name}>{element.name ? element.name : element}</option>
                })
              }
            </select>
          </div>
          <div>
            <label>Marca: </label>
            <select name="select" onChange={(event) => { selectBrand(event.target.value) }} >
              <option value="" disabled selected hidden>Marcas</option>
              {
                (selectedProduct.brands ? selectedProduct.brands : ["marcas"]).map(element => {
                  return <option value={element.name}>{element.name ? element.name : element}</option>
                })
              }
            </select>
          </div>
        </div>
        <div className="chart-container">
          <h2>Sales by month:</h2>
          <Chart data={selectedBrand.sold ? selectedBrand.sold : [0, 0, 0, 0]} />
        </div>
      </main>
    </>

  );
}

export default App;
