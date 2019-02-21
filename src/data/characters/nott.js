const nottTheBrave = {
    name: 'Nott the Brave',
    description: 'Nott is a green, three foot tall goblin rogue. She gets nervous easily, has kleptomaniacal tendencies and hates water',
    race: 'Goblin',
    mainClass: 'Rogue',
    subClass: 'Arcane Trickster',
    avatar: 'https://vignette.wikia.nocookie.net/criticalrole/images/d/dc/Nott.jpg/revision/latest?cb=20180116194408',
    stats: {
        level: 8,
        hp: 65,
        str: 11,
        int: 16,
        ac: 18,
        dex: 20,
        wis: 11,
        dc: 14,
        con: 14,
        cha: 5,
    },
    abilities: [
        {
            aof: 'INDIVIDUAL',
            name: 'Inebriation',
            description: 'When severly intoxicated the individual takes penalty to intelligence and dexterity but has boosted charimsa',
            effects: [
                {
                    type: 'DISADVANTAGED',
                    stats: ['int', 'dex'], 
                    value: -20, 
                },
                {
                    type: 'ADVANTAGE',
                    stats: ['cha'],
                    value: 20,
                },
            ],
        },
        {
            aof: 'INDIVIDUAL',
            name: "Mother's love",
            description: 'When Caleb Widogast is in the same party as Nott, Nott gets a bonus to intelligece and charisma',
            effects: [
                {
                    type: 'ADVANTAGE',
                    stats: ['cha', 'int'],
                    value: 10,
                },
            ],
        },
    ],
};

export default nottTheBrave;
