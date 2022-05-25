const descriptions = {
    schockOut: [
        'Schock out!',
        'Du geile/r Hengst*in &#x1F60F;',
        '&#x1F389;&#x1F389;&#x1F389;'
    ],
    schock: [
        'Jawoll!',
        'Schock &#x1F389;'
    ],
    street: [
        'Straße &#x1F389;'
    ],
    triple: [
        'Pasch &#x1F389;'
    ],
    twoFives: [
        'Zwei Fünfen im Ersten verlieren nicht!'
    ],
    aboveSix: [
        'Damit kann man arbeiten!',
        'Gar nicht so schlecht!'
    ],
    luckyBag: [
        'Mach lieber ne Wundertüte draus...',
        'Wie heißt das Spiel nochmal?',
        'Also ich würde nochmal würfeln...',
        'So würde ich das nicht stehen lassen...',
        'Schocken heißt das Spiel!'
    ],
    nothing: [
        'Was kannst du eigentlich?',
        '&#x1F926;',
        '...',
        'Das tut weh...',
        'Schon peinlich jetzt...',
        'Bittere Sache...'
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
    return <p>{ descriptions[randomNumber] }</p>;
}