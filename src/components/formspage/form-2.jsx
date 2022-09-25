import "./form.css";
const Form2 = ({formData,setFormData}) => {
        return (
                <>
                        <form id="f1" method="POST">
                                <div id="f1-table">
                                        <div className="f1-content">
                                                <label >Length</label>
                                                <input placeholder="Example: 1000" />
                                                <label >Total Area</label>
                                                <input  placeholder="Example: 7500" value={formData.area} onChange={(e)=>setFormData({...formData,area:e.target.value})} />
                                                <label >No of BHK</label>
                                                <select name="property-type">
                                                        <option>Select No of BHK</option>
                                                        <option value="residential">1</option>
                                                        <option value="Comercial">2</option>
                                                        <option value="industrial">3</option>
                                                </select>
                                                
                                                {/* <label >Attached</label>
                                                <select name="property-type">
                                                        <option>Select Attached</option>
                                                        <option value="residential">Early</option>
                                                        <option value="Comercial">Median</option>
                                                        <option value="industrial">Mode</option>
                                                </select> */}
                                                <label >Furnished</label>
                                                <select name="property-type">
                                                        <option>Select Furnished</option>
                                                        <option value="residential">Fully  Furnished</option>
                                                        <option value="Comercial">Semi Furnished</option>
                                                        <option value="industrial">Not  Furnished</option>
                                                </select>
                                                {/* <label >Lift</label>
                                                <select name="property-type">
                                                        <option>Select Lift</option>
                                                        <option value="residential">Early</option>
                                                        <option value="Comercial">Median</option>
                                                        <option value="industrial">Mode</option>
                                                </select> */}
                                                {/* <label >Facing</label>
                                                <select name="property-type">
                                                        <option>Select Facing</option>
                                                        <option value="residential">Early</option>
                                                        <option value="Comercial">Median</option>
                                                        <option value="industrial">Mode</option>
                                                </select> */}
                                                
                                        </div>
                                        <div className="f1-content">
                                                <label >Breath</label>
                                                <input placeholder="Example: 1000" />
                                                <label >Area Unit </label>
                                                <select name="property-type" >
                                                        <option>Area Unit </option>
                                                        <option value="residential">per meter square</option>
                                                        <option value="Comercial">feet</option>
                                                        <option value="industrial">acre</option>
                                                </select>
                                                {/* <label >No of Floor</label>
                                                <select name="property-type" >
                                                        <option>Select No of Floor</option>
                                                        <option value="residential">Early</option>
                                                        <option value="Comercial">Median</option>
                                                        <option value="industrial">Mode</option>
                                                </select> */}
                                                {/* <label >Western Toilet</label>
                                                <select name="property-type" >
                                                        <option>Select Western Toilet</option>
                                                        <option value="residential">Early</option>
                                                        <option value="Comercial">Median</option>
                                                        <option value="industrial">Mode</option>
                                                </select> */}
                                                <label >Car Parking</label>
                                                <select name="property-type" >
                                                        <option>Select Car Parking</option>
                                                        <option value="True">True</option>
                                                        <option value="False">False</option>
                                                </select>
                                                <label >Electricity</label>
                                                <input placeholder="Example: 3 phase" />
                                                </div>
                                        </div>
                        </form>

                </>
        );

}
export default Form2;