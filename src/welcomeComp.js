// import React, { useState } from 'react';

function Welcome (){
    // const [welcomeText,setWelcometext] = useState("");
    return (
        <div class="WelcomeContainer">
            <div class="ImgComponent">
                <img src='/images/welome.png' alt="welcome image" />
                {/* <img src={chickpea} alt="welcome image" /> */}
            </div>
            {/* <div>
                <button onClick={() => setWelcometext("txt")}>text</button>
            </div> */}
            <div class="TextComponent">
                {/* {console.log("welcomeText=======>>>>>>",welcomeText)} */}
                {/* <h1 className={`${welcomeText == "txt" ? 'welomeColor':''}`}>Welcome</h1> */}
                <h1>Welcome</h1>
                <p>Home made is a great way to make meals at home that are health and enjoyable. We have a variety of categories to choose from that help meet your needs in your health journey. You can customize the ingredients you want to be added in your meal. This can be due to health resources, you don’t have to use evrything in the list.</p>
                <p>The order will be sent straight to your door step in less then 1hr pre-packed for you in portions. Start cooking by folloing the visual guide in your order and serve your family a health meal.</p>
            </div>
        </div>
    );
}

export default Welcome;