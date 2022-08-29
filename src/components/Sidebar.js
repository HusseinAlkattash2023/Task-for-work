
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";

import { FaFilePdf } from "react-icons/fa";

const Sidebar=()=>{
    return (
        <div className="sidebar">
        <button className="btn btn-primary mt-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
          <span style={{fontSize:'30px'}}><IoDocumentTextOutline/></span>
        </button>
      
       <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div className="offcanvas-header bg-primary text-light">
          <h5 className="offcanvas-title" id="staticBackdropLabel"><IoDocumentTextOutline/> The Supplement</h5>
          <button type="button" className="btn-close text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body mt-3">
          <div style={{borderRadius:"10px"}} className="my-3 d-flex justify-content-between bg-secondary px-2 py-3">
            <div className="text-light"><FaFilePdf/> Supplement 1</div>
            <div className="text-light" style={{fontSize:"20px" , cursor:'pointer'}}><IoAddOutline/></div>
          </div>
          <div style={{borderRadius:"10px"}} className="my-3 d-flex justify-content-between bg-secondary px-2 py-3">
            <div className="text-light"><FaFilePdf/> Supplement 2</div>
            <div className="text-light" style={{fontSize:"20px" , cursor:'pointer'}}><IoAddOutline/></div>
          </div> 
          <div style={{borderRadius:"10px"}} className="my-3 d-flex justify-content-between bg-secondary px-2 py-3">
            <div className="text-light"><FaFilePdf/> Supplement 3</div>
            <div className="text-light" style={{fontSize:"20px" , cursor:'pointer'}}><IoAddOutline/></div>
          </div> 
          <div style={{borderRadius:"10px"}} className="my-3 d-flex justify-content-between bg-secondary px-2 py-3">
            <div className="text-light"><FaFilePdf/> Supplement 4</div>
            <div className="text-light" style={{fontSize:"20px" , cursor:'pointer'}}><IoAddOutline/></div>
          </div>
          <div style={{borderRadius:"10px"}} className="my-3 d-flex justify-content-between bg-secondary px-2 py-3">
            <div className="text-light"><FaFilePdf/> Supplement 5</div>
            <div className="text-light" style={{fontSize:"20px" , cursor:'pointer'}}><IoAddOutline/></div>
          </div>    
        </div>
      </div>
        </div>
    )
}

export default Sidebar;