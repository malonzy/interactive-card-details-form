import './style.css';
import {useEffect, useState} from "react";

function App() {
    const [cardNum,setCardNum] = useState('')
    const [holderName,setHolderName] = useState('')
    const [expM,setExpM] = useState('')
    const [expY,setExpY] = useState('')
    const [cvc,setCvc] = useState('')
    const [stage,setStage] = useState(1)

    const [cardNumErr,setCardNumErr] = useState('')
    const [holderNameErr,setHolderNameErr] = useState('')
    const [expErr,setExpErr] = useState('')
    const [cvcErr,setCvcErr] = useState('')

    function validateName(){
        if (holderName){
            if(holderName.split(' ').length === 1){
                setHolderNameErr('Enter first and last name')
                return false
            }else{
                setHolderNameErr('')
                return true
            }
        }else{
            setHolderNameErr('Can\'t be left blank')
            return false
        }
    }

    function validateCardNum(){
        if (cardNum){
            if (isNaN(Number(cardNum))){
                setCardNumErr('Wrong format, numbers only')
                return false
            }else{
                setCardNumErr('')
                return true
            }
        }else {
            setCardNumErr('Provider card number')
            return false
        }
    }

    function validateExpM(){
        if (expM){
            if (isNaN(Number(expM))){
                setExpErr('Invalid input')
                return false
            }else if (Number(expM) < 0 || Number(expM) > 12){
                setExpErr('Invalid input')
                return false
            }else {
                setExpErr('')
                return true
            }
        }else {
            setExpErr('Can\'t be blank')
            return false
        }
    }

    function validateExpY(){
        if (expY){
            if (isNaN(Number(expY))){
                setExpErr('Invalid input')
                return false
            }else{
                let fullYear = new Date().getFullYear().toString()
                if (Number(expY) < Number(fullYear.substring(2))){
                    setExpErr('Invalid year')
                    return false
                }else {
                    setExpErr('')
                    return true
                }
            }
        }else {
            setExpErr('Can\'t be blank')
            return false
        }
    }

    function validateCvc(){
        if (cvc){
            if (isNaN(Number(cvc))){
                setCvcErr('Invalid input')
                return false
            }else{
                setCvcErr('')
                return true
            }
        }else{
            setCvcErr('Can\'t be blank')
            return false
        }
    }

    function ccFormat(value) {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || ''
        const parts = []
        for (let i=0, len=match.length; i<len; i+=4) {
            parts.push(match.substring(i, i+4))
        }
        if (parts.length) {
            return parts.join(' ')
        } else {
            return value
        }
    }

    function addCard(){
        if (!validateName() || !validateExpM() || !validateExpY() || !validateCardNum() || !validateCvc()){
            alert('Check errors')
            return null
        }
        setStage(stage + 1)
    }

    useEffect(()=>{
        if (expM.length === 2){
            document.querySelector('#expYY').focus()
        }
    },[expM])

    useEffect(()=>{
        if (expY.length === 2){
            document.querySelector('#cvc').focus()
        }
    },[expY])

  return (
    <div className="absolute w-full h-full m-0 block lg:grid lg:grid-cols-4">
        <div className="blurry-col">
            <div className="lg:w-full w-1/2 mx-auto">
                <div className="card-back text-white">
                    <div className="h-full relative">
                        <p>{!cvc ? '000' : cvc}</p>
                    </div>
                </div>
                <div className="card-front p-5 text-white">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white"/>
                        <div className="w-5 h-5 rounded-full border border-white"/>
                    </div>
                    <p className="card-number">
                        {!cardNum ? '0000 0000 0000 0000' : ccFormat(cardNum)}
                    </p>
                    <div className="flex justify-between absolute bottom-5 w-10/12 mx-auto">
                        <p className="uppercase text-sm">{!holderName ? 'JANE APPLESEED' : holderName}</p>
                        <p className="text-xs">{`${!expM ? '00' : expM}/${!expY ? '00' : expY}`}</p>
                    </div>
                </div>
            </div>
        </div>
      <div className="lg:col-span-3 flex justify-center items-center">
              <div className="card-info-container">
                  {stage === 1 &&
                      <>
                          <div className="form-group">
                              <label htmlFor="holderName">CARDHOLDER NAME</label>
                              <input type="text" id="holderName" className={`${holderNameErr ? 'form-control-error' : 'form-control'}`} placeholder="e.g. Jane Appleseed" value={holderName} onChange={(e)=>{setHolderName(e.target.value)}} onBlur={validateName}/>
                              {holderNameErr && <small className="text-red-500">{holderNameErr}</small>}
                          </div>
                          <div className="form-group">
                              <label htmlFor="cardNumber">CARD NUMBER</label>
                              <input type="text" id="cardNumber" className={`${cardNumErr ? 'form-control-error' : 'form-control'}`} placeholder="e.g. 1234 5678 9123 0000" value={cardNum} onChange={(e)=>{setCardNum(e.target.value)}} maxLength={16} onBlur={validateCardNum}/>
                              {cardNumErr && <small className="text-red-500">{cardNumErr}</small>}
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                              <div className="form-group" style={{margin:"0"}}>
                                  <label htmlFor="expMM">EXP. DATE (MM/YY)</label>
                                  <div className="flex gap-2">
                                      <div className="w-1/2">
                                          <input type="text" id="expMM" className={`${expErr ? 'form-control-error' : 'form-control'}`} placeholder="MM" value={expM} onChange={(e)=>{setExpM(e.target.value)}} maxLength={2} onBlur={validateExpM}/>
                                      </div>
                                      <div className="w-1/2">
                                          <input type="text" id="expYY" className={`${expErr ? 'form-control-error' : 'form-control'}`} placeholder="YY" value={expY} onChange={(e)=>{setExpY(e.target.value)}} maxLength={2} onBlur={validateExpY}/>
                                      </div>
                                  </div>
                                  {expErr && <small className="text-red-500">{expErr}</small>}
                              </div>
                              <div className="form-group" style={{margin:"0"}}>
                                  <label htmlFor="cvc">CVC</label>
                                  <input type="text" id="cvc" className={`${cvcErr ? 'form-control-error' : 'form-control'}`} placeholder="e.g. 123" value={cvc} onChange={(e)=>{setCvc(e.target.value)}} maxLength={3} onBlur={validateCvc}/>
                                  {cvcErr && <small className="text-red-500">{cvcErr}</small>}
                              </div>
                          </div>
                          <div className="form-group">
                              <button className="confirm-btn" onClick={addCard}>Confirm</button>
                          </div>
                      </>
                  }
                  {stage === 2 &&
                      <div className="flex flex-col items-center gap-5 confirmation-container">
                          <img src="/assets/images/icon-complete.svg" alt="completed" />
                          <h3 className="text-2xl">THANK YOU!</h3>
                          <p className="mb-5">We've added your card details</p>
                          <button className="confirm-btn" onClick={()=>{window.location.reload()}}>Done</button>
                      </div>
                  }
              </div>
      </div>
    </div>
  );
}

export default App;
