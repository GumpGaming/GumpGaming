$.noConflict()(function($) {
  $(document).ready(function() {
    var randomNumber;
    var randomSpot;
    //var randomQuote;
    /*
        function getSpot() {
          var Spots = ["AFK", "Train", "B3", "B4", "B5", "B6", "B7", "C1", "C2", "C3",
            "C4", "C5", "C6", "C7", "C8", "D1", "D2", "D3", "D4", "D5", "D6",
            "D7", "D8", "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "F1",
            "F2", "F3", "F4", "F5", "F6", "F7", "F8", "G2", "G3", "G4", "G5",
            "G6", "G7", "G8", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "I4",
            "I5", "I6", "I7", "I8", "AFK", "Train"
          ];
    */
    function getSpot() {
      var Spots = ["B3", "B4", "B5", "B6",
        "C1", "C2", "C3", "C4", "C5", "C6", "C7",
        "D1", "D2", "D3", "D4", "D5", "D6", "D7",
        "E0", "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9",
        "F0", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9",
        "G0", "G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9",
        "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8",
        "I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8",
        "Jump At Start Of Plane",
        "Jump At End Of Plane",
        "Follow an Enemy To The Ground",
        "Follow an Enemy To The Ground",
        "First Contract On Plane Path",
        "Center Of Circle",
        "Farthest Area From Circle",
        "Top of Circle",
        "Bottom Of Circle",
        "Left Side Of Circle",
        "Right Side Of Circle",
        "Last Contract On Plane Path",
        "Any No Named Location"
      ];

/*
      var Quotes = ["Never in the field of human conflict was so much owed by so many to so few. — Winston Churchill",
        "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
        "In war there is no prize for the runner-up. — General Omar Bradley",
        "Ours is a world of nuclear giants and ethical infants. We know more about war than we know about peace, more about killing than we know about living. — General Omar Bradley",
        "The soldier above all others prays for peace, for it is the soldier who must suffer and bear the deepest wounds and scars of war. — General Douglas MacArthur",
        "They died hard, those savage men - like wounded wolves at bay. They were filthy, and they were lousy, and they stunk. And I loved them. — General Douglas MacArthur",
        "We must be prepared to make heroic sacrifices for the cause of peace that we make ungrudgingly for the cause of war. There is no task that is more important or closer to my heart. — Albert Einstein",
        "Future years will never know the seething hell and the black infernal background, the countless minor scenes and interiors of the secession war; and it is best they should not. The real war will never get in the books. — Walt Whitman",
        "It is foolish and wrong to mourn the men who died. Rather we should thank God that such men lived. — General George S. Patton",
        "Never think that war, no matter how necessary, nor how justified, is not a crime. — Ernest Hemingway",
        "Every man's life ends the same way. It is only the details of how he lived and how he died that distinguish one man from another. — Ernest Hemingway",
        "All wars are civil wars, because all men are brothers. — Francois Fenelon",
        "Only the dead have seen the end of war. — Plato",
        "Death is nothing, but to live defeated and inglorious is to die daily. — Napoleon Bonaparte",
        "A soldier will fight long and hard for a bit of colored ribbon. — Napoleon Bonaparte",
        "He who fears being conquered is sure of defeat. — Napoleon Bonaparte",
        "You must not fight too often with one enemy, or you will teach him all your art of war. — Napoleon Bonaparte",
        "If we don't end war, war will end us. — H. G. Wells",
        "He who has a thousand friends has not a friend to spare, And he who has one enemy will meet him everywhere. — Ali ibn-Abi-Talib",
        "War is as much a punishment to the punisher as it is to the sufferer. — Thomas Jefferson",
        "War would end if the dead could return. — Stanley Baldwin",
        "When you have to kill a man it costs nothing to be polite. — Winston Churchill",
        "Battles are won by slaughter and maneuver. The greater the general, the more he contributes in maneuver, the less he demands in slaughter. — Winston Churchill",
        "History will be kind to me for I intend to write it. — Winston Churchill",
        "We shall defend our island, whatever the cost may be, we shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender. — Winston Churchill",
        "When you get to the end of your rope, tie a knot and hang on. — Franklin D. Roosevelt",
        "A hero is no braver than an ordinary man, but he is brave five minutes longer. — Ralph Waldo Emerson",
        "Our greatest glory is not in never failing, but in rising up every time we fail. — Ralph Waldo Emerson",
        "The object of war is not to die for your country but to make the other bastard die for his. — General George S. Patton",
        "Better to fight for something than live for nothing. — General George S. Patton",
        "Courage is fear holding on a minute longer. — General George S. Patton",
        "We happy few, we band of brothers/For he today that sheds his blood with me/Shall be my brother. — William Shakespeare,’’ King Henry V’’",
        "Cowards die many times before their deaths; The valiant never taste of death but once. — William Shakespeare, ‘’Julius Caesar’’",
        "Never interrupt your enemy when he is making a mistake. — Napoleon Bonaparte",
        "There are only two forces in the world, the sword and the spirit. In the long run the sword will always be conquered by the spirit. — Napoleon Bonaparte",
        "Courage and perseverance have a magical talisman, before which difficulties disappear and obstacles vanish into air. — John Quincy Adams",
        "Courage is being scared to death - but saddling up anyway. — John Wayne",
        "Above all things, never be afraid. The enemy who forces you to retreat is himself afraid of you at that very moment. — Andre Maurois",
        "I have never made but one prayer to God, a very short one: 'O Lord, make my enemies ridiculous.' And God granted it. — Voltaire",
        "He conquers who endures. — Persius",
        "You know the real meaning of peace only if you have been through the war. — Kosovar",
        "Those who have long enjoyed such privileges as we enjoy forget in time that men have died to win them. — Franklin D. Roosevelt",
        "In war there is no substitute for victory. — General Douglas MacArthur",
        "War is a series of catastrophes which result in victory. — Georges Clemenceau",
        "Mankind must put an end to war, or war will put an end to mankind. — John F. Kennedy",
        "War does not determine who is right, only who is left. — Bertrand Russell",
        "A ship without Marines is like a garment without buttons. — Admiral David D. Porter, USN",
        "Whether you like it or not, history is on our side. We will bury you! — Nikita Khrushchev",
        "If the enemy is in range, so are you. — Infantry Journal",
        "So long as there are men, there will be wars. — Albert Einstein",
        "Aim towards the Enemy. — Instruction printed on US Rocket Launcher",
        "I think the human race needs to think about killing. How much evil must we do to do good? — Robert McNamara",
        "Any military commander who is honest will admit he makes mistakes in the application of military power. — Robert McNamara",
        "You can make a throne of bayonets, but you cant sit on it for long. — Boris Yeltsin",
        "Diplomats are just as essential in starting a war as soldiers are for finishing it. — Will Rogers",
        "All that is necessary for evil to succeed is for good men to do nothing. — Edmund Burke"
      ];
*/
      randomNumber = Math.floor(Math.random() * Spots.length);
      randomSpot = Spots[randomNumber];
    //  randomQuote = Quotes[randomNumber];

      $(".Spot").text(randomSpot);
    //  $(".Quote").text(randomQuote);
    }

    $("#newSpot").on("click", function() {
      getSpot();
    });

  });
});
