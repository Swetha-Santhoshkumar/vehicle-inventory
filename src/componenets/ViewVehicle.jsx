import React from 'react'
import NaviBarVehicle from './NaviBarVehicle'

const ViewVehicle = () => {
    return (
        <div>
            <br/>
            <NaviBarVehicle/>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">sI.no</th>
                        <th scope="col">Vehicle name</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Fule</th>
                        <th scope="col">Register number</th>
                        <th scope="col">Manufactured date</th>
                        <th scope="col">price</th>
                        <th scope="col">image</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>i20</td>
                        <td>Hyundai</td>
                        <td>Petrol</td>
                        <td>KL07AB1234</td>
                        <td>2022-05-10</td>
                        <td>₹7,00,000</td>
                        <td><img src="https://imgd.aeplcdn.com/1920x1080/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80&q=80" width="80" /></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Nexon EV Max</td>
                        <td>Tata Motors</td>
                        <td>Electric</td>
                        <td>MH12CD5678</td>
                        <td>2023-02-28</td>
                        <td>₹17,99,000</td>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUXMVBKI3fdXudmnDgFyIiQTV54nMKec9vg&s" width="100" /></td>
                        
                    </tr>
                    <tr>

                        <td>3</td>
                        <td>Creta SX</td>
                        <td>Hyundai</td>
                        <td>Diesel</td>
                        <td>TN09EF3456</td>
                        <td>2022-10-10</td>
                        <td>₹15,80,000</td>
                        <td><img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/8667/1751536196590/front-left-side-47.jpg?impolicy=resize&imwidth=420" width="100" /></td>
                        
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Amaze VX</td>
                        <td>Honda</td>
                        <td>Petrol</td>
                        <td>KL07GH7890</td>
                        <td>2020-04-20</td>
                        <td>₹9,10,000</td>
                        <td><img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/8667/1751536196590/front-left-side-47.jpg?impolicy=resize&imwidth=420" width="100" /></td>
                        
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default ViewVehicle