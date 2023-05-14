const names = [
    "Agsilly",
    "Albion",
    "Alvida",
    "Amadob",
    "Andre",
    "Arlong",
    "Arthur",
    "Baggaley",
    "Bartolomeo",
    "Basil Hawkins",
    "Bizarre",
    "Blondie",
    "Bluejam",
    "Boa Hancock",
    "Brew",
    "Brocca",
    "Buggy",
    "Cands",
    "Candy",
    "Capone Bege",
    "Caribou",
    "Cavendish",
    "Charlotte Linlin",
    "Charlotte Lola",
    "Chesskippa",
    "Choi",
    "Colscon",
    "Decalvan Brothers",
    "Delacuaji",
    "Demaro Black",
    "Devil Dias",
    "Diez Barrels",
    "Doma",
    "Donquixote Doflamingo",
    "Edward Newgate",
    "Elmy",
    "Epoida",
    "Eustass Kid",
    "Fisher Tiger",
    "Forliewbs",
    "Foxy",
    "Foxy",
    "Fugar",
    "Gally",
    "Gecko Moria",
    "Gerotini",
    "Gol D. Roger",
    "Goo",
    "Great Michael",
    "Gyro",
    "Hajrudin",
    "Hangan",
    "Happygun",
    "Haritsu Kendiyo",
    "Hody Jones",
    "Ibusu",
    "Ideo",
    "Islewan",
    "Jewelry Bonney",
    "John",
    "Julius",
    "Kaidou",
    "Karma",
    "Kechatch",
    "Kinga",
    "Kuro",
    "Lacuba",
    "Leo",
    "Lip Doughty",
    "Little Oars Jr.",
    "Macro",
    "Marshall D. Teach",
    "Masira",
    "McGuy",
    "Mikazuki",
    "Mikazuki",
    "Monkey D. Luffy",
    "Ninth",
    "Nosgarl",
    "Oli",
    "Palms",
    "Pavlik",
    "Peachbeard",
    "Puppu",
    "Pururu",
    "Raccoon",
    "Ramba",
    "Reforte",
    "Rocks D. Xebec",
    "Roshio",
    "Rush",
    "Scratchmen Apoo",
    "Seamars",
    "Shoujou",
    "Shanks",
    "Sleepy",
    "Squard",
    "Trafalgar D. Water Law",
    "Urouge",
    "Vander Decken",
    "Vander Decken IX",
    "Vitan",
    "Wallem",
    "Whitey Bay",
    "X Drake",
    "Yurikah",
    "Zodia",
    "Zucca",
];

const thoughts = [
    "Im gonna be king of the pirates!",
    "I found the One Piece!",
    "Im on my way to Laugh Tale!",
    "Buggy is the best Emperor of all time!",
    "Sajis cooking is the best!",
    "That damned Luffy...",
    "The Cross Guild is at it again!",
    "New chapter is out!",
    "Yo! Ya-yo ya-yo! Dreaming Dont give it up Luffy!",
    "Hes made of rubber!",
    "Im worried I could spoil something in One Piece for the grader",
    "so Ill try my best not to say any manga spoilers here!",
    "One piece is absolutely incredible",
    "Thriller Bark was my least favorite arc",
    "Im kind of really into once piece right now",
];

const possibleReactions = [
    "👍",
    "👎",
    "♥",
    "💢",
    "🏴‍☠️",
    "Ive been reading this for 5 years",
    "At least we get a chapter every week",
    "(╯°□°)╯︵ ┻━┻",
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () => `${getRandomArrItem(names)}`;

const getRandomThought = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughts),
            reactions: [...getReaction(2)],
        });
    }
    return results;
};

const getReaction = (int) => {
    if (int === 1) {
        return getRandomArrItem(possibleReactions);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactions: getRandomArrItem(possibleReactions),
            username: getRandomName(),
        });
    }
    return results;
};

module.exports = { getRandomName, getRandomThought, getReaction };
