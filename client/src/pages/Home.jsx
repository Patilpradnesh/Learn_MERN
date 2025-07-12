import { useAuth } from "../store/auth";
import { useState } from "react";


export const Home=()=>{
    
const [userData,setUserData]= useState(true);
const {user}=useAuth();
if(userData && user){
    setUserData({
        userName:user.userName,
    })
    setUserData(false);
}

    return <>
        
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>hey {user.userName} </p>
                        <h1>Welcome to PCP web</h1>
                        <p>information about us is like her </p>
                        <div className="btn btn-group">
                            <a href="/contact"><button className="btn">Connect now</button></a>
                            <a href="/service"><button className="btn">Our Services</button></a>
                            
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/images/regImg.jpg" alt="home page" 
                        width="400" height="350"/>
                    </div>
                </div>
            </section>
        </main>
       
    
    </>
};
