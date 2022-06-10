import React from 'react';
import imageUrl from '../images/images';
import './css/home.css';

function Home() {
    return (
        <div className='home-div'>
            <div className='home-pic-div'>
                <img className='home-pic' src={imageUrl.creperiet} alt="Johannes på bild" />
            </div>
            <div className='home-text'>
                <h2>Välkommen!</h2>
                <p>
                    Mitt namn är Johannes och jag är en 31 årig ung man som är bosatt i Visby. Under min ungdom har jag spenderat många 
                    sommarlov och helger genom att prova på olika arbetsplatser för att få en bredare blick av arbetslivet. 
                    Under perioder har jag också varit bosatt och arbetat utomlands. Det är inte lätt att hitta sitt kall här i livet, 
                    vad man vill göra när man blir stor. Men nu, äntligen har jag hittat en sysselsättning som är 
                    spännande, givande och extremt utvecklande. Webbutveckling!
                </p>
                <p>
                    Jag är en pigg, nyfiken och ansvarstagande person som aldrig är rädd att ta mig an nya utmaningar. Har god fysik och är 
                    van med tunga och kluriga arbetsuppgifter. Jag är envis som en varg och ger sällan eller aldrig upp. Att kunna lära och ta 
                    in nya saker snabbt och se till att ha huvudet på skaft är egenskaper jag har som är viktigt inom alla arbeten. Dåliga 
                    egenskaper skulle kunna vara att jag ibland är för noggrann och envis för mitt eget bästa och tiden kan då springa iväg 
                    på aningen onödiga saker.
                </p>
                <p>
                    Jag studerar just nu Webbutvecklare .NET. Det är en distansutbildning som utgår ifrån Värnamo. Jag söker därför efter 
                    arbetsgivare belägna i Visby, i första hand, alternativt distansmöjligheter. Mitt mål med utbildningen och framtida 
                    arbete är att utvecklas så mycket jag bara kan för att öppna upp möjligheterna att exempelvis starta eget bolag.
                </p>
            </div>
        </div>
    )
}

export default Home;





/*         <div>
            <ul className="ul-nav">
                <li><a href="#hero"><i className="fas fa-home"></i></a></li>
                <li><a href="#projects" id="project"><i className="fas fa-folder"></i></a></li>
                <li><a href="#about-link" id="about"><i className="fas fa-user"></i></a></li>
                <li><a href="#contact-link" id="contact"><i className="fas fa-envelope-open-text"></i></a></li>
            </ul>
        </div> */