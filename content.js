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
    "Happy Birthday to the most special person in my life! ❤️🫶🏻",
"You are my happiness, my strength, and my favourite person.",
"I feel so lucky to have you by my side. ❤️",
"May all your dreams come true, and may life bring you endless happiness and success. ✨",
"I pray that we keep growing together and creating beautiful memories.",
"I can't wait to celebrate countless birthdays with you by my side.",
"My today, my tomorrow, my forever. I love you endlessly! ❤️♾️"],
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
      { src: "./1.jpeg", type: "couple", caption: "", date: "" },
      { src: "./2.jpg", type: "couple", caption: "", date: "" },
      { src: "./3.jpeg", type: "couple", caption: "", date: "" },
      { src: "./4.jpeg", type: "couple", caption: "", date: "" },
      { src: "./5.jpeg", type: "couple", caption: "", date: "" },
      { src: "./6.jpeg", type: "couple", caption: "", date: "" },
      { src: "./7.jpeg", type: "couple", caption: "", date: "" },
      { src: "./8.jpeg", type: "couple", caption: "", date: "" }
    ]
  },
  song: {
    title: "A Song for This Moment",
    subtitle: "Add the song that means something to you both.",
    file: "./songg.m4a",
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
