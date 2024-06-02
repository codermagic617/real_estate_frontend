import SearchBar from "../../components/SearchBar/SearchBar";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            laudantium beatae reiciendis deserunt accusantium? Deleniti, dicta
            odio cupiditate, obcaecati enim nobis quis, sit mollitia beatae in
            ipsam nulla consequatur ipsa?
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of experience</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Execllence Awards</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Ready Properties </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
