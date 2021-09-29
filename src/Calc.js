import { useState } from "react"
import { Button, Paragraph } from "./style/Button"
import Input from "./style/StyledInput"

const Calc = () => {
    const [currentScore, setCurrentScore] = useState(0) //prvi input za rezultat
    const [inputNum, setInputNum] = useState('') //drugi input, unos
    const [pDisplay, setPDisplay] = useState('') //paragraf
    const [displayError, setDisplayError] = useState({ display: 'none' }) //obavestenje o gresci

    return (
        <>
            {/* morala sam da dodam ovo readOnly jer izbacuje upozorenje posto input polje ne sluzi za unos i nema event onChange */}
            <Input readOnly value={currentScore} />
            <Input type="number" placeholder="Unesite broj" value={inputNum} onChange={(e) => {
                //input iako je type=number sam po sebi tu vrednost vraca kao string a nama zbog operacija treba broj
                setInputNum(Number(e.target.value));
            }} />

            {/* Paragraf za ispis postupka */}
            <Paragraph>{pDisplay}</Paragraph>
            <Paragraph style={displayError}>Niste uneli broj</Paragraph>

            {/* Sabiranje */}
            <Button onClick={(e) => {
                // u slucaju kad se ne unese broj a klikne dugme za operaciju, u paragraf bi ispisalo znak sa dugmeta i poremetilo bi dalji racun
                // recimo mnozenje i deljenje bi vodilo ka Infinity i NaN
                if (inputNum === '') {
                    setDisplayError({ display: 'block' })
                } else {
                    setCurrentScore(currentScore + inputNum);
                    // na ono sto je vec pisalo, samo kacim sledecu vrednost unetu u drugom input polju, kao string koji nadovezujem
                    setPDisplay(`${pDisplay} + ${inputNum}`)
                    setInputNum('') //da resetujem i polje za unos
                    setDisplayError({ display: 'none' }) //moram da brisem zaostalo upozorenje da ne buni korisnika kada dalje nastavi pravilno da unosi brojeve
                }
            }}> + </Button>

            {/* Oduzimanje */}
            <Button onClick={(e) => {
                if (inputNum === '') {
                    setDisplayError({ display: 'block' })
                } else {
                    setCurrentScore(currentScore - inputNum);
                    setPDisplay(`${pDisplay} - ${inputNum}`)
                    setInputNum('')
                    setDisplayError({ display: 'none' })
                }
            }}> - </Button>

            {/* Mnozenje */}
            <Button onClick={(e) => {
                if (inputNum === '') {
                    setDisplayError({ display: 'block' })
                } else {
                    setCurrentScore(currentScore * inputNum);
                    setPDisplay(`${pDisplay} * ${inputNum}`)
                    setInputNum('')
                    setDisplayError({ display: 'none' })
                }
            }}> * </Button>

            {/* Deljenje */}
            <Button onClick={(e) => {
                if (inputNum === '') {
                    setDisplayError({ display: 'block' })
                } else {
                    setCurrentScore(currentScore / inputNum);
                    setPDisplay(`${pDisplay} / ${inputNum}`)
                    setInputNum('')
                    setDisplayError({ display: 'none' })
                }
            }}> / </Button>

            {/* Dugme za brisanje */}
            <div>
                <Button primary onClick={(e) => {
                    setCurrentScore(0);
                    setPDisplay("");
                    setDisplayError({ display: 'none' })
                }}>Clear</Button>
            </div>
        </>
    )
}

export default Calc;