
import "./CategoryCard.scss";
import productsData from "../../assets/data/products.json";

const imgContext = require.context("../../assets/images", true);

const CategoryCard = () => {

    const products = productsData?.Product ?? [];

    // 원하는 id 4개만 뽑기
    const pickedIds = [1, 11, 21, 31];

    // 4개만 필터링 (여기서 pickedProducts는 길이 4가 됨)
    const pickedProducts = products.filter((item) => pickedIds.includes(item.id));

    /**
     * JSON 경로 "/images/Harness/Htype1-1.png"
     * -> require.context 경로 "./Harness/Htype1-1.png" 로 변환해야 함
     */
    const getImgSrc = (jsonPath) => {
        // "/images/Harness/Htype1-1.png" -> "./Harness/Htype1-1.png"
        const fixedPath = jsonPath.replace("/images/", "./");
        return imgContext(fixedPath);
    };

    const titleById = {
        1: "대형견 추천형",
        11: "기본형",
        21: "목 편한형",
        31: "의류형",
    };

    return (
        <div className="category-card">
            <div className="img-card">
            {/* <img src={require(`../../assets/images/하네스/harness/Htype1-1.png`)}/> */}
            </div>
        </div>
    );
};

export default CategoryCard;
