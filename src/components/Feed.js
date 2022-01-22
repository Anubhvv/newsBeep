import React from "react"
import NewsPost from "./NewsPost"


export default function Feed(props){
    
    const feedElement=(    
    <div>
        <h3>Aaj ki taza khabar</h3>
        <div className="newsposts">
            <NewsPost 
                img="https://img.etimg.com/thumb/msid-88986565,width-1070,height-580,imgsize-367791,overlay-economictimes/photo.jpg" 
                title="Electric Vehicle battery makers are getting their hands on everything"
                source="Times of India"
            />
            <NewsPost 
                img="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202201/elon-musk-2_0-sixteen_nine.jpg" 
                title="Tesla shareholders want Elon Musk to repay $13 bn for SolarCity deal"
                source="Business Today"
            />
            <NewsPost 
                img="https://www.wric.com/wp-content/uploads/sites/74/2022/01/tesla.jpeg?w=1280"
                title="Felony charges are 1st in a fatal crash involving Tesla Autopilot"
                source="8News"
            />
            <NewsPost 
                img="https://247wallst.com/wp-content/uploads/2019/01/gettyimages-933052786.jpg"
                title= "Cathie Wood’s ARK Invest Buys for 1/18"
                source="24/7 Wall St."
            />
            <NewsPost 
                img="https://1734811051.rsc.cdn77.org/data/images/full/399450/volkswagen-bosch-agree-to-make-battery-centers-for-eu-by-2030.jpg"
                title="Volkswagen, Bosch Agrees to Setup 6 Battery Production Centers in EU by 2030; Is this for Electric Vehicles?"
                source="Tech Times"
            />
        </div>
    </div>
    )
    if(props.showFeed)
        return feedElement
    else return (<div></div>)
    
}