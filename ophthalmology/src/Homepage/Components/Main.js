import React from "react";
import classes from './Main.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import pic1 from './1.png'
import pic2 from './2.png'
import pic3 from './3.png'
import pic4 from './4.png'


export default function Main(){


    return(
       <div className="container">
            <div className="row mt-5">
                <div className="col-9 bg-danger">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={pic1} class="d-block w-100" alt="..." /
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        >
                        </div>
                        <div class="carousel-item">
                        <img src={pic2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img src={pic3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
                <div className="col-3">
                    <div className={`row  ${classes.Translate}`}>
                        <button className={`${classes.MainButton} col-9`}>Your Appoitments</button>
                    </div>
                    <div className={`row mt-3 ${classes.Translate}`}>
                        <button className={`${classes.MainButton} col-9`}>Your Records</button>
                    </div>
                    <div className={`row mt-3 ${classes.Translate}`}>
                        <button className={`${classes.MainButton} col-9`}>Our Staff</button>
                    </div>
                    <div className={`row mt-3 ${classes.Translate}`}>
                        <button className={`${classes.MainButton} col-9`}>Book an Appointments</button>
                    </div>
                </div>
            </div>
       </div>
    )
}