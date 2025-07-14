import React from 'react'

const NaviBarVehicle = () => {
  return (
    <div>
        
        <nav class="navbar navbar-expand-lg bg-secondary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">VEHICLE WEB</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">ADD VEHICLE</a>
                            <a class="nav-link" href="#">SEARCH VEHICLE</a>
                            <a class="nav-link" href="#">DELETE VEHICLE</a>
                            <a class="nav-link" href="#">VIEW VEHICLE</a>
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
  )
}

export default NaviBarVehicle