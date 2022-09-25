import "./form.css";
const Form3 = ({formData,setFormData}) => {
        return (
                <>
                        <form id="f1" method="POST">
                                <div id="f1-table">
                                        <div className="f1-content">
                                                <label >Name</label>
                                                <select name="property-type">
                                                        <option>Owner</option>
                                                        <option value="residential">Residential</option>
                                                        <option value="Comercial">Comercial</option>
                                                        <option value="industrial">Industrial</option>
                                                </select>
                                                <label >Posted by</label>
                                                <select name="property-type">
                                                        <option>Posted By</option>
                                                        <option value="residential">Early</option>
                                                        <option value="Comercial">Median</option>
                                                        <option value="industrial">Mode</option>
                                                </select>
                                                <label >Featured Package</label>
                                                <select name="property-type">
                                                        <option>Please Select</option>
                                                        <option value="residential">Early</option>
                                                        <option value="Comercial">Median</option>
                                                        <option value="industrial">Mode</option>
                                                </select>
                                                <div style={{
                                                        "backgroundColor": "#6AB4F8",
                                                        "width": "20%",
                                                        "height": "20%",
                                                        "borderRadius": "50%",
                                                        "display": "flex",
                                                        "justifyContent": "center",
                                                        "alignItems": "center",
                                                        "marginTop": "2%"
                                                }}>
                                                        <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.625 0.25L8.65125 3.5H3.5C1.7125 3.5 0.25 4.9625 0.25 6.75V26.25C0.25 28.0375 1.7125 29.5 3.5 29.5H29.5C31.2875 29.5 32.75 28.0375 32.75 26.25V6.75C32.75 4.9625 31.2875 3.5 29.5 3.5H24.3487L21.375 0.25H11.625ZM16.5 24.625C12.015 24.625 8.375 20.985 8.375 16.5C8.375 12.015 12.015 8.375 16.5 8.375C20.985 8.375 24.625 12.015 24.625 16.5C24.625 20.985 20.985 24.625 16.5 24.625Z" fill="white" />
                                                        </svg>
                                                </div>

                                        </div>
                                        <div className="f1-content">
                                                <label>Mobile</label>
                                                <input placeholder="Enter Mobile Number" value={formData.contact} onChange={(e)=>setFormData({...formData,contact:e.target.value})} />
                                                <label >Sale Type</label>
                                                <select name="property-type" >
                                                        <option>Please Select</option>
                                                        <option value="residential">Early</option>
                                                        <option value="Comercial">Median</option>
                                                        <option value="industrial">Mode</option>
                                                </select>
                                                <label >PPD Package</label>
                                                <select name="property-type" >
                                                        <option>Please Select</option>
                                                        <option value="residential">Early</option>
                                                        <option value="Comercial">Median</option>
                                                        <option value="industrial">Mode</option>
                                                </select>
                                        </div>
                                </div>
                        </form>

                </>
        );

}
export default Form3;