const calebWidogast = {
    name: 'Caleb Widogast',
    description: 'Caleb is a reclusive, secretive human wizard with sticky fingers when it comes to magical items',
    race: 'Human',
    mainClass: 'Wizard',
    avatar: 'https://vignette.wikia.nocookie.net/criticalrole/images/9/92/Caleb_Widogast.jpg/revision/latest?cb=20180116194349',
    subClass: 'School of Transmutation',
    stats: {
        level: 8,
        hp: 49,
        str: 10,
        int: 20,
        ac: 11,
        dex: 12,
        wis: 16,
        dc: 16,
        con: 14,
        cha: 16,
    },
    abilities: [
        {
            aof: 'INDIVIDUAL',
            name: "Wizard's Companion",
            description: 'When the party wizard has an other worldly companion, he has bonuses to intelligence',
            effects: [
                {
                    type: 'ADVANTAGE',
                    stats: ['int'],
                    value: 10,
                },
            ],
        },
        {
            aof: 'PARTY',
            name: 'Needs a bath',
            description: "This individual's odor is so potent the party takes a hit to intelligence",
            effects: [
                {
                    type: 'DISADVANTAGE',
                    stats: ['int'],
                    value: 5,
                },
            ],
        },
    ],
};

export default calebWidogast;
