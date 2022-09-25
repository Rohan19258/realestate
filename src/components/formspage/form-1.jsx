import "./form.css"
const Form1 = ({formData,setFormData}) => {
        
        return (
                <>
                        <form id="f1" method="POST">
                                <div id="f1-table">
                                        <div className="f1-content">
                                                <label >Property Type</label>
                                                <select  name="property" value={formData.property}  onChange={e=>setFormData({...formData, property:e.target.value})} required>
                                                        <option>Select Property Type</option>
                                                        <option name="House" value="House">House</option>
                                                        <option name="Flat" value="Flat">Flat</option>

                                                </select>
                                                <label >Property Age</label>
                                                <input  />
                                                <label >Property Age</label>
                                                <select name="property-age">
                                                        <option>Select Property Age</option>
                                                        <option value="5-10">5-10</option>
                                                        <option value="10-20">10-20</option>
                                                        <option value="20-30">more than 20</option>
                                                </select>
                                                <label >Property Description</label>
                                                <input  />
                                        </div>
                                        <div className="f1-content">
                                       
                                                <label >Negotable</label>
                                                <select name="Negotable" >
                                                        <option>Select Negotable</option>
                                                        <option value="True">True</option>
                                                        <option value="False">False</option>
                                                </select>
                                                <label >Ownership</label>
                                                <select name="Owner" >
                                                        <option>Select Ownership</option>
                                                        <option value="individual">individual</option>
                                                        <option value="Joint">Joint</option>
                                                        
                                                </select>
                                                <label >Property Approved</label>
                                                <select name="property-type" >
                                                        <option>Property Approved</option>
                                                        <option value="residential">Early</option>
                                                        <option value="Comercial">Median</option>
                                                        <option value="industrial">Mode</option>
                                                </select>
                                                <label >Bank Loan</label>
                                                <select name="property-type" >
                                                        <option>Bank Loan</option>
                                                        <option value="Home">Home Loan</option>
                                                        <option value="person">Personal loan</option>
                                                </select>
                                                </div>
                                        </div>
                        </form>

                </>
        );

}
export default Form1;