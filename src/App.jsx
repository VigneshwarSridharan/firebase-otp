import { useEffect, useRef, useState } from "react"
import firebase from './firebase'


const App = () => {
    let recaptchaElm = useRef(null)
    let [allowSubmit, setAllowSubmit] = useState(false)
    let [phone, setPhone] = useState('')

    const handleClick = () => {
        const appVerifier = window.recaptchaVerifier;
        var number = '+91' + phone;
        firebase.auth().signInWithPhoneNumber(number, appVerifier).then(function (e) {
            var code = prompt('Enter the otp', '');
            if (code === null) return;
            e.confirm(code).then(function (result) {
                console.log({ e, result })
            }).catch(function (error) {
                console.error({ error });
            });
        }).catch(function (error) {
            console.error({ error });
        });
    }
    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptchaElm.current);
        window.recaptchaVerifier.verify().then(res => {
            console.log(res)
            setAllowSubmit(true)
        })
    }, [])

    return (
        <div className="main">
            <input value={phone} onChange={({ target }) => setPhone(target.value)} />
            <div ref={recaptchaElm}></div>
            <button disabled={!allowSubmit} onClick={handleClick}>click me</button>
        </div>
    )
}

export default App