/* PERSONALIZE YOUR WEBSITE HERE.
   Change text between quotes. Keep commas and brackets in place.
   Photo paths are relative to this project folder. Missing photos show placeholders. */
const her = "Janviii";
const me = "Arshit";

window.SITE_CONFIG = {
  herName: her,
  yourName: me,
  birthday: "October 15, 2026",
  anniversary: "", // Optional: leave blank until you want to add it.
  relationshipDuration: "", // Optional. Do not guess.
  opening: {
    line: her + ", I made something special just for you.",
    card: her + " ❤️",
    button: "Open Your Surprise ❤️"
  },
  letter: {
    greeting: "Happy Birthday, " + her + " ❤️🎂",
    paragraphs: [
      "Happy Birthday to the most special person in my life! ❤️ You are not just my love, but also my happiness, my strength, and my future. I feel so lucky to have you in my life. May your life always be filled with love, success, happiness, and endless smiles.",
      "I pray that all your dreams come true and that we continue to create beautiful memories together. I can't wait to spend my life with you and celebrate many more birthdays by your side.",
      "I love you so much, my forever person! 💖😘",
      "No website or collection of words could ever capture every feeling perfectly, but this is my little way of making your day more memorable."
    ],
    closing: "With love,",
    signature: me + " ❤️",
    button: "Continue Our Memories ✨"
  },
  photos: {
    title: "Memories",
    subtitle: "Real moments, kept close.",
    tabAll: "Some Moments",
    tabHer: her,
    tabBoth: "Together",
    emptyHint: "Your photo goes here",
    button: "One Last Surprise ✨",
    items: [
      { src: "1.jpeg", type: "couple", caption: "", date: "" },
      { src: "assets/photos/2.jpg", type: "couple", caption: "", date: "" },
      { src: "assets/photos/3.jpeg", type: "couple", caption: "", date: "" },
      { src: "assets/photos/4.jpeg", type: "couple", caption: "", date: "" },
      { src: "assets/photos/5.jpeg", type: "couple", caption: "", date: "" },
      { src: "assets/photos/6.jpeg", type: "couple", caption: "", date: "" },
      { src: "assets/photos/7.jpeg", type: "couple", caption: "", date: "" },
      { src: "assets/photos/8.jpeg", type: "couple", caption: "", date: "" }
    ]
  },
  song: {
    title: "A Song for This Moment",
    subtitle: "Add the song that means something to you both.",
    file: "assets/songg.m4a",
    displayName: "Your chosen song",
    placeholder: "Your song will live here when you’re ready to add it.",
    button: "One Last Surprise ✨"
  },
  reveal: {
    heading: "Happy Birthday, " + her + " ❤️",
    paragraphs: [
      "Happy 24th, Janviii. ❤️✨",
      "Keep smiling, keep dreaming, and never forget how special you are.",
	"Some people make life beautiful just by existing.",
	"For me, you will always be one of them.",
	"In every dream, in every plan, in every tomorrow.",
	"There will always be a little piece of you.",
	"You, in every version of my forever. ♾️",
    ],
    closing: "With all my love,",
    signature: me + " ❤️",
    button: "Relive Our Story ✨"
  }
};
