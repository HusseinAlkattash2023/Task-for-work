

const Section2=()=>{
    return(
        <div className="section2">
            <div className="form1">
                <h2>First Question:</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <span>Your Answare:</span>
                <textarea placeholder="write here..."></textarea> 
            </div>
            <div className="form2">
            <h2>Second Question:</h2>
            <form>
                <label>
                <input type="radio"/> Connect with requtable universitis
                </label>
                <label>
                <input type="radio"/> Scheduling a meeting with department heads
                </label>
                <label>
                <input type="radio"/> Gather more information about a file
                </label>
            </form>
            </div>
            <div className="form3">
                <h2>Justification:</h2>
                <p>Justify Your Choice(150 word):  </p>
                <textarea placeholder="write here..."></textarea>
            </div>
        </div>
    )
}

export default Section2