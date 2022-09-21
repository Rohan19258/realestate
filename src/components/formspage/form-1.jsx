//import './from.css'

const Form1 = () => {
    return (
        <>
            <div className="card">
                <form>
                    <div className="form-box">
                    <div className="form-block">
                    <label for="property">Property Type</label>
                    <select name="property-type">
                            <option>Select Property Type</option>
                            <option value="residential">Residential</option>
                            <option value="Comercial">Comercial</option>
                            <option value="industrial">Industrial</option>
                    </select>
                    <label for="property">Property Age</label>
                    <input value="price" placeholder="Example: 10000"/>
                    <label for="property">Property Age</label>
                    <select name="property-type">
                            <option>Select Property Age</option>
                            <option value="residential">Early</option>
                            <option value="Comercial">Median</option>
                            <option value="industrial">Mode</option>
                    </select>
                    <label for="property">Property Description</label>
                    <input value="description"/>
                    </div>
                    <div className="form-block">
                    <label for="property">Negotable</label>
                    <select name="property-type" >
                            <option>Select Negotable</option>
                            <option value="residential">Early</option>
                            <option value="Comercial">Median</option>
                            <option value="industrial">Mode</option>
                    </select>
                    <label for="property">Ownership</label>
                    <select name="property-type" >
                            <option>Select Ownership</option>
                            <option value="residential">Early</option>
                            <option value="Comercial">Median</option>
                            <option value="industrial">Mode</option>
                    </select>
                    <label for="property">Property Approved</label>
                    <select name="property-type" >
                            <option>Property Approved</option>
                            <option value="residential">Early</option>
                            <option value="Comercial">Median</option>
                            <option value="industrial">Mode</option>
                    </select>
                    <label for="property">Bank Loan</label>
                    <select name="property-type" >
                            <option>Bank Loan</option>
                            <option value="residential">Early</option>
                            <option value="Comercial">Median</option>
                            <option value="industrial">Mode</option>
                    </select>
                    </div>
                    </div>
                    <div>
                    <button className='btn1'>Cancel</button>
                    <button className='btn2'>Save & Continue</button>
                    </div>
                </form>
            </div>
        </>
    );

}
export default Form1;