function randomText() {
  var quotes = [
    "“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”",
    "“In three words I can sum up everything I've learned about life: it goes on.”",
    "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    "“If you tell the truth, you don't have to remember anything.”",
    "“A friend is someone who knows all about you and still loves you.”",
    "“To live is the rarest thing in the world. Most people exist, that is all.”",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
  ];
  var names = [
    "―Oscar Wilde",
    "― Frank Zappa",
    "― Marcus Tullius Cicero",
    "― Dr. Seuss",
    "― Mae West",
    "― Mahatma Gandhi",
    "― Robert Frost",
    "― J.K. Rowling",
    "― Mark Twain",
    "― Elbert Hubbard",
    "― Oscar Wilde",
    "― Mahatma Gandhi",
  ];
  var num = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").innerHTML = quotes[num];
  document.getElementById("writer").innerHTML = names[num];
}
