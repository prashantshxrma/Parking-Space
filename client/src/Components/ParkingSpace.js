import React from 'react'
import "../Style/ParkingSpace.css"
const ParkingSpace =  ()=> {
  return (
    <div><div class="parking-status">
    <h1>Parking Space Status</h1>
    <div class="sections">
        <div class="section">
            <h2>Section 1</h2>
            <div class="spots">
                <div class="spot vacant">1</div>
                <div class="spot vacant">2</div>
                <div class="spot occupied">3</div>
                <div class="spot vacant">4</div>
                <div class="spot vacant">5</div>
            </div>
        </div>
        <div class="section">
            <h2>Section 2</h2>
            <div class="spots">
                <div class="spot occupied">1</div>
                <div class="spot vacant">2</div>
                <div class="spot vacant">3</div>
                <div class="spot occupied">4</div>
                <div class="spot vacant">5</div>
            </div>
        </div>
        <div class="section">
            <h2>Section 3</h2>
            <div class="spots">
                <div class="spot vacant">1</div>
                <div class="spot occupied">2</div>
                <div class="spot vacant">3</div>
                <div class="spot vacant">4</div>
                <div class="spot occupied">5</div>
            </div>
        </div>
        <div class="section">
            <h2>Section 4</h2>
            <div class="spots">
                <div class="spot occupied">1</div>
                <div class="spot vacant">2</div>
                <div class="spot occupied">3</div>
                <div class="spot vacant">4</div>
                <div class="spot vacant">5</div>
            </div>
        </div>
        <div class="section">
            <h2>Section 5</h2>
            <div class="spots">
                <div class="spot vacant">1</div>
                <div class="spot occupied">2</div>
                <div class="spot vacant">3</div>
                <div class="spot occupied">4</div>
                <div class="spot vacant">5</div>
            </div>
        </div>
        <div class="section">
            <h2>Section 6</h2>
            <div class="spots">
                <div class="spot occupied">1</div>
                <div class="spot vacant">2</div>
                <div class="spot vacant">3</div>
                <div class="spot occupied">4</div>
                <div class="spot vacant">5</div>
            </div>
        </div>
    </div>
</div></div>
  )
}
export default ParkingSpace

