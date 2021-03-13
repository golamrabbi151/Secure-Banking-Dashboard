import React from 'react'
import './style.scss'

const Create = () => {
    return (
        <div className="container-fluid py-4">
            <div className="shadow" style={{ marginLeft: 15,marginRight: 15, backgroundColor: '#fff' }}>
                <div className="row" >
                    <div className="col-12 col-lg-8 offset-lg-2 create-col-style" >
                        <h3 className="text-center ">Create Client</h3>
                        <form>
                            <div className="mb-3">
                                <label for="Name" className="form-label">Client Name</label>
                                <input type="text" className="form-control" id="Name" />
                            </div>
                            <div className="mb-3">
                                <label for="Email" className="form-label">Email</label>
                                <input type="text" className="form-control" id="Email" />
                            </div>
                            <div class="row">
                                <div class="col">
                                <div className="mb-3">
                                <label for="DateOfBirth" className="form-label">Date of Birth</label>
                                    <input type="date" class="form-control" id="DateOfBirth"  />
                                </div>
                                </div>
                                <div class="col">
                                    <div className="mb-3">
                                <label for="AccountNumber" className="form-label">Account Number</label>
                                    <input type="number" id="AccountNumber" class="form-control"   />
                                </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                <div className="mb-3">
                                <label for="BankName" className="form-label">Bank Name</label>
                                    <input type="text" class="form-control" id="BankName"  />
                                </div>
                                </div>
                                <div class="col">
                                <div className="mb-3">
                                <label for="Branch" className="form-label">Branch</label>
                                    <input type="text" id="Branch" class="form-control"   />
                                </div>
                                </div>
                            </div>
                            <button type="sumbit" class="btn shadow-none" style={{backgroundColor:'#ff5733',color:'#fff'}}>Create</button>
                            


                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;