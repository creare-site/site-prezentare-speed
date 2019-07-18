import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import featureImage from "../../static/images/intro.gif" 
import featureVideo from "../../static/images/cheetah.mp4" 

import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"

var videoStyle = {
  width: '100%'
};

const IndexPage = () => (
    <Layout>
        <SEO title="Open-Source Gatsby Starter with SCSS Styling"/>

        <div className={"page-header home"}>
            <h1>
                Creare Site
            </h1>
            <p>
                Site de presentare, simplu si rapid. Un produs <a href="https://websitemarket.ro/?ref=site-speed">WebsiteMarket</a>
            </p>

            <br />

            <div className={"row"}>
                <div className={"col-2 first"}></div>
                <div className={"col-8"}>

                    <video style={videoStyle} playsinline muted loop="true" autoplay="autoplay" controls>
                        <source src={featureVideo} type="video/mp4" />
                    </video>                

                </div>
            </div>                    
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Open-Source</h2>
                                <p>
                                    Acest website este un produs open-source, adica oricine poate visualiza codul sursa.
                                    <br />
                                    Aflati mai multe informatii accesand WebsiteMarket.  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Rapid si Simplu</h2>
                                <p>
                                    Aplicatia este construita pe o platforma de ultima generatie, sigura si rapida.
                                </p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNews}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Alte Informatii</h2>
                                <p>
                                    <br /> Video Credits <a href="https://www.youtube.com/watch?v=8-9oFxYFODE">Formula E Car vs Cheetah</a> 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Produs open-source</h2>
                    <p>
                        Aceasta aplicatie este un produs open-source. Afla mai multe pe WebsiteMarket
                    </p>
                </div>

                <div className={"button"}>
                    <a href="https://github.com/creare-site/site-prezentare-speed">Vezi codul sursa</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
