//I decided to make an object for this simple app
const sentenceGenerator = {
    //Added some arrays of the different parts of the random sentence.
    //In the begining I thought to add the "It" subject, but it didn't go well in the different random sentences.
    subjects : ["I", "You", "He", "She", "We", "They"],
    //Feel free to add and/or replace the verbs, objects and prepositional phrases
    //The app is developed to work with just verbs in the past
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
    //Down here is the function that randomly generates the sentencee
    generate () {
        /* Here are the variables that randomly store the different part of the sentence
        coded the random subject, verb, object and preposional phrase to be as long as the arrays above */
        const randomSubject = this.subjects[Math.floor(Math.random() * (this.subjects.length -1))];
        const randomVerb = this.verbs[Math.floor(Math.random() * 
        (this.verbs.length - 1))];
        const randomObject = this.objects[Math.floor(Math.random() * 
        (this.objects.length - 1))];
        const randomPrepositionalPhrase = this.prepositionalPhrases[Math.floor(
        Math.random() * (this.prepositionalPhrases.length - 1))];
        //finally I just made the function to just print the random sentence to the console.
        console.log(`${randomSubject} ${randomVerb} ${randomObject} ${randomPrepositionalPhrase}.`)
    }
}

sentenceGenerator.generate();