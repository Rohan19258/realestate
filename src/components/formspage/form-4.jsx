import "./form.css"
const Form4 = ({formData,setFormData}) => {
        
        return (
                <>
                        <form id="f1"  method='POST'>
                                <div id="f1-table">
                                        <div className="f1-content">
                                               
                                                <label >Email</label>
                                                <input  placeholder="Email"/>
                                                <label >Area</label>
                                                <select name="property-type">
                                                        <option>Select  Area</option>
                                                        <option value="residential">Residential</option>
                                                        <option value="Comercial">Comercial</option>
                                                        <option value="industrial">Industrial</option>
                                                </select>
                                                <label >Address</label>
                                                <input  placeholder="Address"/>
                                                <label >Latitude</label>
                                                <input  placeholder="Latitude"/>
                                        </div>
                                        <div className="f1-content">
                                       
                                                <label >City</label>
                                                <select name="property-type" >
                                                        <option>Select City</option>
                                                        <option value="residential">Early</option>
                                                        <option value="Comercial">Median</option>
                                                        <option value="industrial">Mode</option>
                                                </select>
                                                <label >Pincode</label>
                                                <select name="property-type" >
                                                        <option>Select Pincode</option>
                                                        <option value="residential">Early</option>
                                                        <option value="Comercial">Median</option>
                                                        <option value="industrial">Mode</option>
                                                </select>
                                                <label >Landmark</label>
                                                <input  placeholder="Landmark"/>
                                                <label >Longitude</label>
                                                <input  placeholder="Longitude"/>
                                                </div>
                                        </div>
                        </form>

                </>
        );

}
export default Form4;