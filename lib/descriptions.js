const descriptions = {
    schockOut: [
        <p>Schock out!</p>,
        <p>Du geile/r Hengst*in &#x1F60F;</p>,
        <p>&#x1F389;&#x1F389;&#x1F389;</p>
    ],
    schock: [
        <p>Jawoll!</p>,
        <p>Schock &#x1F389;</p>
    ],
    street: [
        <p>Straße &#x1F389;</p>
    ],
    triple: [
        <p>Pasch &#x1F389;</p>
    ],
    twoFives: [
        <p>Zwei Fünfen im Ersten verlieren nicht!</p>
    ],
    aboveSix: [
        <p>Damit kann man arbeiten!</p>,
        <p>Gar nicht so schlecht!</p>
    ],
    luckyBag: [
        <p>Mach lieber ne Wundertüte draus...</p>,
        <p>Wie heißt das Spiel nochmal?</p>,
        <p>Also ich würde nochmal würfeln...</p>,
        <p>So würde ich das nicht stehen lassen...</p>,
        <p>Schocken heißt das Spiel!</p>
    ],
    nothing: [
        <p>Was kannst du eigentlich?</p>,
        <p>&#x1F926;</p>,
        <p>...</p>,
        <p>Das tut weh...</p>,
        <p>Schon peinlich jetzt...</p>,
        <p>Bittere Sache...</p>
    ]
};

export function getDescription(dices, layedOutOnes, move) {
    const values = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };
    values[1] = layedOutOnes;
    dices.map(dice => {
        values[dice] += 1;
    });
    if(values[1] === 3) {
        return getRandomEntry(descriptions.schockOut);
    }
    else if(values[1] === 2) {
        return getRandomEntry(descriptions.schock);
    }
    else if(move === 1) {
        if(values[5] === 2) {
            return getRandomEntry(descriptions.twoFives);
        }
        let street = 0;
        let begin = false;
        for(let i = 1; i <= 6; i++) {
            if(values[i] === 3) {
                return getRandomEntry(descriptions.triple);
            }
            else if(values[i] === 1) {
                street += 1;
                begin = true;
            }
            else if(values[i] === 0 && begin && street < 3) {
                break;
            }
        }
        if(street === 3) {
            return getRandomEntry(descriptions.street);
        }
    }
    if(values[6] > 0) {
        return getRandomEntry(descriptions.aboveSix);
    }
    if(move === 2) {
        return getRandomEntry(descriptions.luckyBag);
    }
    return getRandomEntry(descriptions.nothing);
}

function getRandomEntry(descriptions) {
    const randomNumber = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomNumber];
}