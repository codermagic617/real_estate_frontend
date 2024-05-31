

import SearchBar from '../../components/SearchBar/SearchBar'

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, quidem! Incidunt numquam repudiandae consequatur consectetur iusto eaque facilis exercitationem eos dicta illo qui itaque nam sunt, maiores quos vero beatae.</p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years Of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>100+</h1>
                            <h2>Execellence Awards</h2>
                        </div>
                        <div className="box">
                            <h1>2000</h1>
                            <h2>Ready Properties</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imageContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage