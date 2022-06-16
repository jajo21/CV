import React, {useState} from 'react';
import imageUrl from '../images/images';
import {skills} from '../data/skills.js';
import './css/home.css';

function Home() {

    const [more, setMore] = useState(false);

    return (
        <div className='home-div'>
            <div className='home-pic-div'>
                <img className='home-pic' src={imageUrl.creperiet} alt="Johannes på bild" />
            </div>
            <div className='about'>
                <div className='about-short'>
                    <h2>Välkommen!</h2>
                    <p>
                        Mitt namn är Johannes och jag utbildar mig till Webbutvecklare i full fart! Jag har en passion för att skapa och 
                        lära mig nya saker. Här nere nämner jag vissa av de tekniker jag har arbetat med hittills under utbildningen.
                    </p>
                    <div>
                        {skills?.map((topic, index) => {
                            return(
                                <div key={index} className='topic'>  
                                    <h4>{topic.title}</h4>
                                    <div className='skills'>
                                        {topic.skills?.map((skill, index) => {
                                            return(
                                                <div key={index} className='skill'>{skill.title}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='about-more'>
                    <div className='about-more-title' onClick={() => setMore(!more)}>
                        <h2>Mer om mig</h2>
                        <span>{more ? '-' : '+'}</span>
                    </div>
                    <div className={more ? 'about-more-content show' : 'about-more-content'}>
                        <p>
                            Jag är en 31 årig ung man som är bosatt i Visby. Under min ungdom har jag spenderat många 
                            sommarlov och helger genom att prova på olika arbetsplatser för att få en bredare blick av arbetslivet. 
                            Under perioder har jag också varit bosatt och arbetat utomlands. Det är inte lätt att hitta sitt kall här i livet, 
                            vad man vill göra när man blir stor. Men nu, äntligen har jag hittat en sysselsättning som är 
                            spännande, givande och extremt utvecklande. Webbutveckling!
                        </p>
                        <p>
                            Jag är en pigg, nyfiken och ansvarstagande person som aldrig är rädd att ta mig an nya utmaningar. Har god fysik och är 
                            van med tunga och kluriga arbetsuppgifter. Jag är envis som en varg och ger sällan eller aldrig upp. Att kunna lära och 
                            ta in nya saker snabbt och se till att ha huvudet på skaft är egenskaper jag besitter som är viktiga inom alla arbeten. 
                            Dåliga egenskaper skulle kunna vara att jag ibland är för noggrann och envis för mitt eget bästa och tiden kan då 
                            springa iväg på onödiga småsaker.
                        </p>
                        <p>
                            Jag studerar just nu Webbutvecklare .NET och jag söker aktivt efter min nästa arbetsgivare. Webbutvecklare.NET är en 
                            distansutbildning som utgår ifrån Värnamo. Jag söker i första hand efter arbetsgivare belägna i Visby, alternativt 
                            distansmöjligheter. Mitt mål med utbildningen och framtida arbete är att utvecklas så mycket jag bara kan för att i 
                            framtiden kunna följa min dröm att driva någon form av eget bolag.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;