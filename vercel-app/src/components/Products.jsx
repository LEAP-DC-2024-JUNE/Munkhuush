import { ProductCard } from "./ProductCard";
import Gwagon from "../../public/gclass.png";
import Pic2 from "../../public/Page2.png";
import Pic3 from "../../public/Page3.png";
import Pic4 from "../../public/Page4.png";
import Pic5 from "../../public/Page5.png";
import Pic1 from "../../public/Pic1.png";
export const Products = () => {
  const cards = [
    { imgSrc: Gwagon, title: "Gwagon", desc: "Conquer with luxury" },
    { imgSrc: Pic1, title: "Test1", desc: "Conquer with luxury" },
    { imgSrc: Pic2, title: "Test2", desc: "Conquer with luxury" },
    { imgSrc: Pic3, title: "Test3", desc: "Conquer with luxury" },
    { imgSrc: Pic4, title: "Test4", desc: "Conquer with luxury" },
    { imgSrc: Pic5, title: "Test5", desc: "Conquer with luxury" },
  ];
  return (
    <div className="flex flex-wrap gap-[24px] justify-center">
      {cards.map((product, index) => {
        return (
          <ProductCard
            key={index}
            imgSrc={product.imgSrc}
            desc={product.desc}
            title={product.title}
          />
        );
      })}

      {/* <ProductCard imgSrc={Gwagon} title="sdasd" desc="sdsada" /> */}
    </div>
  );
};
