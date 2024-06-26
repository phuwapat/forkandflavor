import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BtnBox from "../Components/BtnBox";
import BtnLetter from "../Components/BtnLetter";
import BtnBack from "../Components/BtnBack";

function Createpost() {
    return ( 
        <div className="Createpost">
            <header>
                <Navbar/>
            </header>
            <main>
                <BtnBack path={-1}/>
                <div className="Createpost__form">
                    <form>
                        <div className="createpost-first-part">
                            <div className="Createpost__image">
                                <label for="file-input">
                                    <div className="box-input-image noto-sans-thai-looped-bold">
                                        <p>+ add a photo of your dish</p>
                                    </div>
                                </label>
                                <input type="file" id="file-input" accept="image"/>
                            </div>
                            <div className="createpost-input-info noto-sans-thai-looped-bold">
                                <input type="text" className="fredoka" placeholder="Name..."/>
                                <input type="text" className="noto-sans-thai-looped-bold" placeholder="+ add tags"/>
                                <input type="text" className="noto-sans-thai-looped-bold" placeholder="+ add tags"/>
                                <div>
                                    <label for="cook-time"><img src="./../../public/Image/Icon/FaRegClockB.svg" />&nbsp; Cook Time:</label>
                                    <input type="text" id="cook-time" />
                                </div>
                                <div>
                                    <label for="yield"><img src="./../../public/Image/Icon/usersB.svg" />&nbsp; Yield:</label>
                                    <input type="text" id="yield"/>
                                </div>
                                <input type="text" className="noto-sans-thai-looped-bold" placeholder="description..."/>
                            </div>
                        </div>
                        <div className="createpost-second-part">
                            <div className="ingredient-box">
                                <div className="ingredient-box-input fredoka">
                                    <div>
                                        <label for="ingredients">Ingredients</label>
                                        <input type="text" id="ingredients"/>
                                    </div>
                                    <div>
                                        <label for="quantity">quantity</label>
                                        <input type="text" id="quantity"/>
                                    </div>
                                    <button><img src="./../../public/Image/Icon/trashcan.svg"/></button>
                                </div>
                                <BtnLetter name="+ ingredient" />
                                <img className="end-box-input" src="./../../public/Image/Icon/end-box-ingredient.svg" />
                            </div>
                            <div className="instruction-box-input fredoka">
                                <label for="instruction">Instruction</label>
                                <button><img src="./../../public/Image/Icon/trashcan.svg"/></button>
                                <input type="text" id="instruction"/>
                                <BtnLetter name="+ add a photo" />
                                <div>
                                    <BtnLetter name="+ section" />
                                    <BtnLetter name="+ instruction" />
                                </div>
                                <button><img src="./../../public/Image/Icon/hamburger.svg"/></button>
                            </div>
                        </div>
                        <div>
                            <BtnBox name="Cancel"/>
                            <BtnBox name="Post"/>
                        </div>
                    </form>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Createpost;