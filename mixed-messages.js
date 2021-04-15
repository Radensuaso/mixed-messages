const sentenceGenerator = {
    subjects : ["I", "You", "He", "She", "We", "They"],
    verbs : ["became", "dug", "baked", "found",
    "felt", "fought", "forgot", "heard", "knew", "programmed",
    "saw", "taught", "dressed", "dried", "eliminated",
    "enjoyed", "followed", "freezed", "fried", "persuaded", 
    "kissed", "invited", "loved"],
    objects : ["the law", "the crime", "the computer",
    "the robot", "the Mafia", "the gorila", "the chihuahua",
    "the god of turnips", "the Batman", "the chipmunk",
    "the race car", "the Hellhound", "the vampire",
    "the Werewolf", "Johnny Bravo", "Bugs Bunny"],
    prepositionalPhrases : ["by force", "by mistake",
    "by no means", "at a moment's notice", "at night",
    "for a price", "for a good cause", "for a reason",
    "for a change", "for love", "for real", "in exchange for kiss",
    "in fear of Goku", "on schedule", "on the record"],
    generate () {
        const randomSentence = [];
        const randomSubject = this.subjects[Math.floor(Math.random() * 6)];
        const randomVerb = this.verbs[Math.floor(Math.random() * 
        (this.verbs.length - 1))];
        const randomObject = this.objects[Math.floor(Math.random() * 
        (this.objects.length - 1))];
        const randomPrepositionalPhrase = this.prepositionalPhrases[Math.floor(
        Math.random() * (this.prepositionalPhrases.length - 1))];
        console.log(`${randomSubject} ${randomVerb} ${randomObject} ${randomPrepositionalPhrase}.`)
    }
}

sentenceGenerator.generate();