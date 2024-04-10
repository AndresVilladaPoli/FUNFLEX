import img1 from "../../../../../../assets/images/shop/image 9ps5 3.png";
import img2 from "../../../../../../assets/images/shop/image 10ps5 1.png";
import img3 from "../../../../../../assets/images/shop/image 11ps5 2.png";
import img4 from "../../../../../../assets/images/shop/Rectangle 3ps4 1.png";
import img5 from "../../../../../../assets/images/shop/Rectangle 6ps4 2.png";
import img6 from "../../../../../../assets/images/shop/Rectangle 11.png";
import img7 from "../../../../../../assets/images/shop/Rectangle 10.png";
import img8 from "../../../../../../assets/images/shop/Rectangle 6fc241.png";
import img9 from "../../../../../../assets/images/shop/Rectangle 6fc242.png";
import img10 from "../../../../../../assets/images/shop/Rectangle 26.png";
import img11 from "../../../../../../assets/images/shop/Rectangle 6n1.png";
import img12 from "../../../../../../assets/images/shop/Rectangle 30.png";
import img13 from "../../../../../../assets/images/shop/Rectangle 6ads.png";
import img14 from "../../../../../../assets/images/shop/Rectangle 29.png";
import img15 from "../../../../../../assets/images/shop/Rectangle 6utopia1.png";
import img16 from "../../../../../../assets/images/shop/Rectangle 32.png";
import img17 from "../../../../../../assets/images/shop/Rectangle 6s1.png";
import img18 from "../../../../../../assets/images/shop/Rectangle 6s2.png";
import img19 from "../../../../../../assets/images/shop/Rectangle 36.png";
import img20 from "../../../../../../assets/images/shop/Rectangle 6spo1.png";
import img21 from "../../../../../../assets/images/shop/Rectangle 35.png";
import img22 from "../../../../../../assets/images/shop/Rectangle 6rdr1.png";
const products = [
  {
    id: 1,
    title: "PS5 Slim 1TB",
    category: "Consoles",
    price: 1450.99,
    availability: 10,
    description: "The PS5 Slim is a compact gaming console with a modern design, delivering powerful gaming experiences.",
    detailedDescription: "The PlayStation 5 Slim is the latest iteration of Sony's gaming console lineup, offering a more compact and streamlined design compared to its predecessors. With its sleek aesthetics and powerful performance, the PS5 Slim is designed to deliver an immersive gaming experience while occupying minimal space in your entertainment setup. The 1TB storage capacity ensures you have ample space to store your favorite games, apps, and media content.",
    technicalInfo : "Processor: Custom AMD Zen 2 CPU with 8 cores clocked at 3.5 GHz.\nGraphics: Custom AMD RDNA 2 GPU with 36 compute units clocked at 2.23 GHz.\n Memory: 16 GB GDDR6 RAM.\nStorage: 1TB Solid State Drive (SSD) for fast loading times and smooth gameplay.\nOptical Drive: Blu-ray Ultra HD 4K disc drive (optional, depending on model).\nMaximum Resolution: Supports up to 4K resolution at 120 frames per second (fps), with 8K capability.\nAudio: Tempest 3D AudioTech for immersive soundscapes.\nConnectivity: Wi-Fi 6, Bluetooth 5.1, USB-C, USB-A, Ethernet.\nDimensions: Approximately 390 mm x 104 mm x 260 mm (height x width x depth).\nWeight: Approximately 4.5 kg.",
    img: img1,
    images: [img1, img2, img3], 
  },
  {
    id: 2,
    title: "PS4 Pro 1TB",
    category: "Consoles",
    price: 80.99,
    availability: 5,
    description: "The PlayStation 4 Pro is a high-performance gaming console with a 1TB storage capacity. It offers enhanced graphics and smooth gameplay, making it a popular choice for gamers",
    detailedDescription: `
    The PlayStation 4 Pro is an enhanced version of the original PlayStation 4 gaming console. Designed to provide a high-quality gaming experience with improved graphics and optimized performance, the PS4 Pro is a popular choice among enthusiast gamers. With its 1TB storage capacity, you'll have plenty of space to store a wide variety of games, apps, and multimedia content. Immerse yourself in rich, immersive virtual worlds as you experience games with enhanced resolution and smoother frame rates.
      `,
      technicalInfo: `Processor: 8-core AMD 'Jaguar' processor.
    GPU: AMD Radeon GPU based on Polaris architecture with 4.20 TFLOPS capability.
    Memory: 8GB GDDR5 memory and 1GB DDR3.
    Storage: 1TB hard disk drive.
    Optical Drive: Blu-ray/DVD player.
    Maximum Resolution: 4K (upscaled) for supported video and games.
    Ports: 3 x USB 3.1 ports, 1 x HDMI 2.0 port, 1 x AUX port, 1 x Ethernet port.
    Connectivity: Wi-Fi 802.11 a/b/g/n/ac, Bluetooth 4.0.
    Dimensions: Approximately 295mm x 55mm x 327mm (width x height x length).
    Weight: Approximately 3.3kg.`
    ,
    img: img4,
    images: [img4, img5, img6], 
  },
  {
    id: 3,
    title: "FC24 PS5",
    category: "Videogames",
    price: 217.99,
    availability: 21,
    description: `
    Enjoy unrivaled authenticity in EA SPORTS FC™ 24, featuring football's biggest stars, teams, stadiums and leagues.
      `,
      detailedDescription: `
      HyperMotionV captures the game as it is in real life using volumetric data from more than 180 men's and women's professional matches to determine the movements of each soccer player. This allows us to offer authentic movement for the entire team, in addition to 1,200 exclusive running styles to enjoy the unique identity of soccer's biggest stars.
    
      With the improved Frostbite™ engine, Everyone's Game delivers realistic details with a new level of immersion in every match. New SAPIEN character technology transforms the way your footballers look and move, with realistically redesigned models that are 10 times more accurate and anatomically correct down to the smallest detail. Plus, GPU fabric stretches and moves for greater athleticism, making every sweep and celebration more like real-world football.    
    
      `,
      technicalInfo: `
      It is a game designed for next-generation and old-generation platforms, designed for cooperative and multiplayer Football gameplay.
      `,
    img: img7,
    images: [img7, img8, img9], 
  },
  {
    id: 4,
    title: "Netflix 1-Month Gift Card",
    category: "Entertainment",
    price: 23.99,
    availability: 99,
    description: `
    Netflix is ​​a subscription streaming service that allows its members to watch series and movies on a device with an internet connection.
      `,
      detailedDescription: `
      At Netflix, we want to entertain the world. Regardless of your tastes and where you live, we give you access to the best series, documentaries, movies and mobile games. Our users decide what they want to see, when to see it and with a simple subscription. We offer streaming content in more than 30 languages ​​and 190 countries, because great stories can come from anywhere and conquer audiences everywhere. We are the world's biggest fans of entertainment and we are always trying to help you find your next favorite story.
    
      `,
      technicalInfo: `
      Netflix uses AWS for virtually all of its computing and storage needs, including databases, analytics, recommendation engines, video transcoding, and more; hundreds of functions that in total use more than 100,000 server instances on AWS.
      `,
    img: img10,
    images: [img10, img11], 
  },

  {
    id: 5,
    title: "American Dream Album",
    category: "Music",
    price: 17.99,
    availability: 50,
    description: `
    American Dream (stylized in digital versions as American Dream) is the fourth studio album by American rock band LCD Soundsystem.
      `,
      detailedDescription: `
      The album 'american dream' not only stands out for its personal story, but also for the numerous high-profile collaborations it contains. Artists such as Travis Scott, Young Thug, Summer Walker, Doja Cat and Lil Durk, to name just a few, have lent their talent to bring this ambitious project to life.
    
      `,
      technicalInfo: `

-american dream
-all of me
-redrum
-n.h.i.e. (feat. Doja Cat)
-pop ur shit (feat. Young Thug & Metro Boomin)
-letter to my brudda
-dangerous (feat. Lil Durk & Metro Boomin)
-née-nah (feat. Travis Scott & Metro Boomin)
-see the real
-should've wore a bonnet (feat. Brent Faiyaz)
-just like me (feat. Burna Boy & Metro Boomin)
-red sky
-dark days (feat. Mariah the Scientist)

      `,
    img: img12,
    images: [img12, img13], 
  },

  {
    id: 6,
    title: "UTOPIA Album",
    category: "Music",
    price: 17.99,
    availability: 50,
    description: `
    Utopia is the fourth studio album by American rapper Travis Scott. It was released through Cactus Jack and Epic Records
      `,
      detailedDescription: `
      Travis Scott’s long-awaited “Utopia” album has arrived, and out of all 19 songs on the set, only a small handful saw the Houston-born rapper flying solo. In total, “Utopia” features over 18 artists — and that’s not including the indomitable list of producers and songwriters that offered their hand on the album.    
      `,
      technicalInfo: `
      1.HYAENA
      2.THANK GOD - con KayCyy
      3.MODERN JAM - con Teezo Touchdown
      4.MY EYES - con Bon Iver y Sampha
      5.GOD'S COUNTRY
      6.SIRENS
      7.MELTDOWN - con Drake
      8.FE!N - con Playboi Carti y Sheck Wes
      9.DELRESTO (ECHOES) - con Beyoncé y Bon Iver
      10.I KNOW ?
      11.TOPIA TWINS - con 21 Savage y Rob49
      12.CIRCUS MAXIMUS - con The Weeknd
      13.PARASAIL - con Yung Lean
      14.SKITZO - con Young Thug
      15.LOST FOREVER - con James Blake y Westside Gunn
      16.LOOOVE - con Kid Cudi
      17.K-POP - con Bad Bunny y The Weeknd
      18.TELEKINESIS - con Future y SZA
      19.TIL FURTHER NOTICE - con 21 Savage y James Blake

      `,
    img: img14,
    images: [img14, img15], 
  },

  {
    id: 7,
    title: "Nintendo Switch",
    category: "Consoles",
    price: 80.99,
    availability: 13,
    description: `
    The Nintendo Switch console is designed for any lifestyle, quickly transforming from a home console to a portable console.  
        `,
      detailedDescription: `
      Three modes in one
      TV mode
      Place the Nintendo Switch console in the dock and enjoy HD gaming on your TV.
      Semi-portable mode
      Use the console stand for screen sharing and multiplayer game fun.
      Portable mode
      Remove the console and play with the Joy-Con™ controllers attached.
 `,
      technicalInfo: `
      Size - 102mm x 239mm x 13.9mm (with Joy-Con attatched)
      Weight - Approx. 279 (398g with Joy-Con Controllers)
      Sceeen - Multi-touch screen, 6.2 inch LCD, 1280x720 resolution
      CPU / GPU - Nvidia customized Tegra processor
      32GB of Internal Memory - Some of this memory will be reserved for use by the system, but storage can be expanded with microSDXC cards.
      `,
    img: img16,
    images: [img16, img17, img18], 
  },

  {
    id: 8,
    title: "Spotify 1-Month Gift Card",
    category: "Entertainment",
    price: 217.99,
    availability: 13,
    description: `
    Buy a gift card from leading electronic and retail stores - in 1, 3, 6, and 12-month values. Gift cards are valid for 12 months from the date of purchase.
        `,
      detailedDescription: `
      Create the soundtrack for your life! Music has the power to evoke emotions and memories, making it an essential part of our lives. Listen to your favorite tunes and artists, explore the topics that interest you with podcasts, and make banger playlists for any occasion with the Spotify Premium 1 Month key. Whether you're in the mood for some upbeat pop hits, calming classical tunes, or something in between, Spotify Premium has you covered. Spotify Premium offers millions of music tracks, curated playlists, and exclusive Spotify Premium content. More than this, with a Spotify Premium subscription, you can not only download all your favorite music and listen to it offline but also forget the disturbing ads. Buy a Spotify Premium membership cheaper, and jam to your favorite music!
 `,
      technicalInfo: `
      The Card is a single-use card. Accordingly, when you redeem a Gift Card or eGift Card for a Spotify Premium subscription, the full value of the Card will be used to purchase a number of months of subscription equal to the total value of the Card, divided by the per-month subscription fee.
      `,
    img: img19,
    images: [img19, img20], 
  },

  {
    id: 9,
    title: "RDR2 PS4",
    category: "Videogames",
    price: 217.99,
    availability: 65,
    description: `
    Buy Red Dead Redemption 2 on PS4. Explore a vast, atmospheric world in the latest adventure from Grand Theft Auto creators Rockstar Games.        `,
      detailedDescription: `
      After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. `,
      technicalInfo: `
      Red Dead Redemption 2 is the sequel to Rockstar's hit video game Red Dead Redemption (2010), considered one of the company's best titles. This is the third installment of the Red Dead saga, which began in 2004 with Red Dead Revolver and will take us back to the Wild West to put us in the largest open world setting ever created by the parents of Grand Theft Auto and tell us a story. . about outlaws, revenge and heists in a highly realistic setting on PlayStation 4 and Xbox One.
      `,
    img: img21,
    images: [img21, img22], 
  },

  
  
  
];

export default products;