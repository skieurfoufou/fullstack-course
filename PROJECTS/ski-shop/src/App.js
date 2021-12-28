import Title from "./Components/Title/Title";
import Filters from "./Components/Filters/Filters";
import ProductsList from "./Components/ProductsList/ProductsList";
import "./App.css";

function App() {
  const products = [
    {
      id: "A1",
      price: 850,
      model: "9X",
      image_url:
        "https://www.logolynx.com/images/logolynx/d7/d732a22b2cb5dd0c87829f70bd6a0da5.jpeg ",
      category: "competition-giant",
      brand: "Rossignol",
      sizes: "167,172,177,182",
    },
    {
      id: "A2",
      price: 800,
      model: "9S",
      image_url:
        "https://www.logolynx.com/images/logolynx/d7/d732a22b2cb5dd0c87829f70bd6a0da5.jpeg ",
      category: "competition-slalom",
      brand: "Rossignol",
      sizes: "150,155,160,165",
    },
    {
      id: "A3",
      price: 600,
      model: "pursuit",
      image_url:
        "https://www.logolynx.com/images/logolynx/d7/d732a22b2cb5dd0c87829f70bd6a0da5.jpeg ",
      category: "slope",
      brand: "Rossignol",
      sizes: "157,162,167,172,177",
    },
    {
      id: "A4",
      price: 850,
      model: "S/Race GS",
      image_url: "http://lofrev.net/wp-content/photos/2016/11/salomon_logo.jpg",
      category: "competition-giant",
      brand: "Salomon",
      sizes: "167,172,177,182",
    },
    {
      id: "A5",
      price: 800,
      model: "S/Race Sl",
      image_url: "http://lofrev.net/wp-content/photos/2016/11/salomon_logo.jpg",
      category: "competition-slalom",
      brand: "Salomon",
      sizes: "150,155,160,165",
    },
    {
      id: "A6",
      price: 600,
      model: "S/Force",
      image_url: "http://lofrev.net/wp-content/photos/2016/11/salomon_logo.jpg",
      category: "slope",
      brand: "Salomon",
      sizes: "157,162,167,172,177",
    },
    {
      id: "A7",
      price: 850,
      model: "WC Rebels e-GS",
      image_url:
        "https://www.icon-icon.com/wp-content/uploads/2021/06/HEAD-1-1024x805.png",
      category: "competition-giant",
      brand: "Head",
      sizes: "167,172,177,182",
    },
    {
      id: "A8",
      price: 800,
      model: "WC Rebels e-Sl",
      image_url:
        "https://www.icon-icon.com/wp-content/uploads/2021/06/HEAD-1-1024x805.png",
      category: "competition-slalom",
      brand: "Head",
      sizes: "150,155,160,165",
    },
    {
      id: "A9",
      price: 600,
      model: "Rebel e-Speed",
      image_url:
        "https://www.icon-icon.com/wp-content/uploads/2021/06/HEAD-1-1024x805.png",
      category: "slope",
      brand: "Head",
      sizes: "157,162,167,172,177",
    },
    {
      id: "A10",
      price: 830,
      model: "Speed Course Master GS",
      image_url:
        "https://www.nicepng.com/png/detail/804-8041120_northern-ski-works-carries-a-broad-selection-of.png",
      category: "competition-giant",
      brand: "Dynastar",
      sizes: "167,172,177,182",
    },
    {
      id: "A11",
      price: 780,
      model: "Speed Course Master Sl",
      image_url:
        "https://www.nicepng.com/png/detail/804-8041120_northern-ski-works-carries-a-broad-selection-of.png",
      category: "competition-slalom",
      brand: "Dynastar",
      sizes: "150,155,160,165",
    },
    {
      id: "A12",
      price: 750,
      model: "Speed 963 Konect",
      image_url:
        "https://www.nicepng.com/png/detail/804-8041120_northern-ski-works-carries-a-broad-selection-of.png",
      category: "slope",
      brand: "Dynastar",
      sizes: "157,162,167,172,177",
    },
  ];
  const filters = {
    brands: ["Rossignol", "Salomon", "Dynastar", "Head"],
    categories: ["Competion SL", "Competion GS", "Slope"],
    prices: ["200-500", "501-700", "701-1000"],
  };
  return (
    <div>
      <Title text="SKI SHOP" />
      <Filters filters={filters} />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
