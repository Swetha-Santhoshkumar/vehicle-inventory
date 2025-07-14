import React from 'react'
import NaviBarVehicle from './NaviBarVehicle'

const AddVehicle = () => {
  return (
    <div>
        <NaviBarVehicle/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="format-label">Vehicle name : </label>
                                <input type="text" className="form-control" />
                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="format-label">Brand : </label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="format-label">Fluel : </label>
                                <select name="" id="" className="form-control">
                                    <option value="">Petrol</option>
                                    <option value="">Diesal</option>
                                    <option value="">CNG</option>
                                    <option value="">Electric</option>
                                </select>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="format-label">Type : </label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="format-label">Registration no. : </label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="format-label">Manufactured Date : </label>
                                <input type="date" name="" id="" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="format-label">Photo : </label>
                                <input type="file" name="" id="" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AddVehicle