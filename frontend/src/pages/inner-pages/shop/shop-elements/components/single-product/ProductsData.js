import img1 from "../../../../../../assets/images/shop/image 9ps5 3.png";
import img2 from "../../../../../../assets/images/shop/image 10ps5 1.png";
import img3 from "../../../../../../assets/images/shop/image 11ps5 2.png";
import img4 from "../../../../../../assets/images/shop/Rectangle 3ps4 1.png";
import img5 from "../../../../../../assets/images/shop/Rectangle 6ps4 2.png";
import img6 from "../../../../../../assets/images/shop/Rectangle 11.png";

const products = [
  {
    id: 1,
    title: "PS5 Slim 1TB",
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
    price: 217.99,
    availability: 2,
    description: `
    FC24 is an action-packed first-person shooter (FPS) game developed for the PlayStation 5 console. Dive into intense battles and thrilling missions as you navigate through immersive environments and face off against formidable enemies. With stunning graphics and fluid gameplay, FC24 delivers an exhilarating gaming experience that will keep you on the edge of your seat.
      `,
      detailedDescription: `
    FC24 is the latest installment in the popular FC series, known for its fast-paced gameplay and dynamic combat mechanics. Set in a futuristic world where chaos reigns, you play as a skilled soldier tasked with taking down a powerful enemy organization known as "The Syndicate". As you progress through the game, you'll uncover secrets, unravel conspiracies, and confront challenging adversaries in adrenaline-fueled firefights.
    
    The game features a variety of weapons, gadgets, and abilities to customize your playstyle. Whether you prefer stealthy tactics or all-out action, FC24 offers plenty of options to suit your preferences. Team up with friends in co-op mode or test your skills against other players in competitive multiplayer matches.
    
    FC24 takes full advantage of the PlayStation 5's hardware capabilities, delivering stunning visuals, responsive controls, and immersive audio. With support for ray tracing, 4K resolution, and high frame rates, FC24 offers a next-generation gaming experience like no other.
      `,
      technicalInfo: `
    Platform: PlayStation 5
    Genre: First-Person Shooter (FPS)
    Developer: StudioX
    Publisher: GamingCorp
    Release Date: TBA
    Players: 1-4 (single player, multiplayer)
    Online Features: Multiplayer, Online Co-op, Leaderboards
    Languages: English, French, Spanish, German, Italian, Japanese
    Storage Required: TBA GB
    Age Rating: Pending ESRB/PEGI Rating
      `,
    img: img4,
    images: [img4, img5, img6], 
  },
  
  
];

export default products;