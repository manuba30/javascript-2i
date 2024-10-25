function conjuguer() {
    const verb = document.getElementById('verb').value.trim();
    const tense = document.getElementById('tense').value;
    const resultat = document.getElementById('resultat');
    
    resultat.innerHTML = ''; 

    if (!verb || !verb.endsWith('er')) {
        alert('Veuillez entrer un verbe du premier groupe se terminant par "er".');
        return;
    }

    const pronouns = ['Je', 'Tu', 'Il/Elle', 'Nous', 'Vous', 'Ils/Elles'];
    let stem = verb.slice(0, -2); 
    let conjugations = [];

    switch (tense) {
        case 'present':
            conjugations = conjuguerPresent(stem, verb);
            break;
        case 'futur':
            conjugations = conjuguerFutur(stem);
            break;
        case 'imparfait':
            conjugations = conjuguerImparfait(stem, verb);
            break;
    }

    for (let i = 0; i < pronouns.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${pronouns[i]} ${conjugations[i]}`;
        resultat.appendChild(li);
    }
}

function conjuguerPresent(stem, verb) {
    const endings = ['e', 'es', 'e', 'ons', 'ez', 'ent'];

    if (verb.endsWith('cer')) {
        stem = stem.slice(0, -1) + 'ç'; 
    } else if (verb.endsWith('ger')) {
        stem = stem + 'e'; 
    }

    return [
        stem + endings[0],
        stem + endings[1],
        stem + endings[2],
        verb.endsWith('ger') ? stem + endings[3] : stem.slice(0, -1) + 'ons',
        stem + endings[5]
    ];
}

function conjuguerFutur(stem) {
    const endings = ['ai', 'as', 'a', 'ons', 'ez', 'ont'];
    return [
        stem + 'er' + endings[0],
        stem + 'er' + endings[1],
        stem + 'er' + endings[2],
        stem + 'er' + endings[3],
        stem + 'er' + endings[4],
        stem + 'er' + endings[5]
    ];
}

function conjuguerImparfait(stem, verb) {
    const endings = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'];

    if (verb.endsWith('ger')) {
        stem += 'e';
    }

    return [
        stem + endings[0],
        stem + endings[1],
        stem + endings[2],
        stem + endings[3],
        stem + endings[4],
        stem + endings[5]
    ];
}
