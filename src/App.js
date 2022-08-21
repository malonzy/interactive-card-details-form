import './style.css';

function App() {
  return (
    <div className="absolute w-full h-full m-0 block lg:grid lg:grid-cols-4">
        <div className="blurry-col">
            <div className="card-back text-white">
                <div className="h-full relative">
                    <p>000</p>
                </div>
            </div>
            <div className="card-front p-5 text-white">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white"/>
                    <div className="w-5 h-5 rounded-full border border-white"/>
                </div>
                <p className="card-number">
                    0000 0000 0000 0000
                </p>
                <div className="flex justify-between absolute bottom-5 w-10/12 mx-auto">
                    <p className="uppercase text-sm">Jane Appleseed</p>
                    <p className="text-xs">00/00</p>
                </div>
            </div>
        </div>
      <div className="lg:col-span-3 flex justify-center items-center">
        <div className="card-info-container">
            <div className="form-group">
                <label htmlFor="holderName">CARDHOLDER NAME</label>
                <input type="text" id="holderName" className="form-control" placeholder="e.g. Jane Appleseed"/>
            </div>
            <div className="form-group">
                <label htmlFor="cardNumber">CARD NUMBER</label>
                <input type="text" id="cardNumber" className="form-control" placeholder="e.g. 1234 5678 9123 0000"/>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="form-group" style={{margin:"0"}}>
                    <label htmlFor="expMM">EXP. DATE (MM/YY)</label>
                    <div className="flex gap-2">
                        <div className="w-1/2">
                            <input type="text" id="expMM" className="form-control" placeholder="MM"/>
                        </div>
                        <div className="w-1/2">
                            <input type="text" id="expYY" className="form-control" placeholder="YY"/>
                        </div>
                    </div>
                </div>
                <div className="form-group" style={{margin:"0"}}>
                    <label htmlFor="cvc">CVC</label>
                    <input type="text" id="cvc" className="form-control" placeholder="e.g. 123"/>
                </div>
            </div>
            <div className="form-group">
                <button className="confirm-btn">Confirm</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
