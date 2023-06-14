const inspirations = [
    {
        "quote": "Life isn’t about getting and having, it’s about giving and being.",
        "author": "Kevin Kruse"
    },
    {
        "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
        "author": "Napoleon Hill"
    },
    {
        "quote": "Strive not to be a success, but rather to be of value.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        "author": "Robert Frost"
    },
    {
        "quote": "I attribute my success to this: I never gave or took any excuse.",
        "author": "Florence Nightingale"
    },
    {
        "quote": "You miss 100% of the shots you don’t take.",
        "author": "Wayne Gretzky"
    },
    {
        "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
        "author": "Michael Jordan"
    },
    {
        "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
        "author": "Amelia Earhart"
    },
    {
        "quote": "Every strike brings me closer to the next home run.",
        "author": "Babe Ruth"
    },
    {
        "quote": "Definiteness of purpose is the starting point of all achievement.",
        "author": "W. Clement Stone"
    },
    {
        "quote": "We become what we think about.",
        "author": "Earl Nightingale"
    },
    {
        "quote": "Life is what happens to you while you’re busy making other plans.",
        "author": "John Lennon"
    },
    {
        "quote": "We may say most aptly that the Analytical Engine weaves algebraical patterns just as the Jacquard-loom weaves flowers and leaves.",
        "author": "Ada Lovelace"
    },
    {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "quote": "If you want to achieve greatness stop asking for permission.",
        "author": "Anonymous"
    },
    {
        "quote": "Things work out best for those who make the best of how things work out.",
        "author": "John Wooden"
    },
    {
        "quote": "To live a creative life, we must lose our fear of being wrong.",
        "author": "Anonymous"
    },
    {
        "quote": "If you are not willing to risk the usual you will have to settle for the ordinary.",
        "author": "Jim Rohn"
    },
    {
        "quote": "Trust because you are willing to accept the risk, not because it’s safe or certain.",
        "author": "Anonymous"
    },
    {
        "quote": "Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
        "author": "Swami Vivekananda"
    },
    {
        "quote": "All our dreams can come true if we have the courage to pursue them.",
        "author": "Walt Disney"
    },
    {
        "quote": "Good things come to people who wait, but better things come to those who go out and get them.",
        "author": "Anonymous"
    },
    {
        "quote": "If you do what you always did, you will get what you always got.",
        "author": "Anonymous"
    },
    {
        "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
        "author": "Winston Churchill"
    },
    {
        "quote": "Just when the caterpillar thought the world was ending, he turned into a butterfly.",
        "author": "Proverb"
    },
    {
        "quote": "Successful entrepreneurs are givers and not takers of positive energy.",
        "author": "Anonymous"
    },
    {
        "quote": "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.",
        "author": "Vaibhav Shah"
    },
    {
        "quote": "Opportunities don't happen, you create them.",
        "author": "Chris Grosser"
    },
    {
        "quote": "Try not to become a person of success, but rather try to become a person of value.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "author": "Eleanor Roosevelt"
    }
];


// Your code goes here.  

function getQuote() {
       var index = Math.floor(Math.random() * inspirations.length);
       document.getElementById("quote-text").innerHTML = inspirations[index].quote;
       document.getElementById("author").innerHTML = inspirations[index].author;
}