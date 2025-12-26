import { useState, useEffect } from "react";
import ProductCard from "../components/category/ProductCard";
import Products from "../assets/data/products.json";
import './CategoryPage.scss';
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams(); // URL에서 "H", "Y", "L", "C" 가져오기
  const [CardList, setCardList] = useState([]);
  const [bestList, setBestList] = useState([]);

  // 카테고리 이름 매핑
  const categoryNames = {
    H: "기본형",
    Y: "목 편한 유형",
    L: "대형견 추천",
    c: "의류형"
  };

  useEffect(() => {
    // 해당 카테고리 필터링
    const cditem = Products.Product.filter((item) => item.type === category);
    const items = cditem.filter((item) => item.best === true);
    setCardList(cditem);
    setBestList(items);
  }, [category]);

  return (
    <div id="category-page">
      <div className="category-wrap">
        <div className="category-top">
          <div>
            {/* 여기에 메인 이미지 넣어도 됨 */}
            <img/>
          </div>
        </div>

        <div className="category-best">
          <p>댕댕하네's <span>{categoryNames[category]}</span> 베스트 상품</p>
          <div className="cetegory-bestlist">
            {bestList.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="category-prod">
          {CardList.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        <div className="info-text">
          <p>강아지 별로 개인차가 있을 수 있습니다</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
