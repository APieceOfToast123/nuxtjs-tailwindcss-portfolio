import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Our Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "IFLL",
      title: "Interstellar Frontier",
      category: "Topdown / 3D",
      img: "images/profiles/IFLLProfile.jpg",
      hoverVideo: "videos/IFLLProfile.mp4",
      publishDate: "Jul 20, 2024",
      tag: "Topdown / 3D",
      clientTitle: "Activity",
      objectivesTitle: "Developers",
      objectivesDetails: `
        <strong>Player Design:</strong> Reed Zhu<br>
        <strong>Enemy Design:</strong> Guoqiang Zhao<br>
        <strong>Boss Design:</strong> Andy Chen<br>
        <strong>UI/UX:</strong> Yuqi Qin<br>
        <strong>Technical Art:</strong> YuTian Lei<br>
        <strong>Music and Scheme:</strong> Xinyue Fen<br><br>
        Some assets/materials were sourced from free assets online, Unreal store, and AI-generated content.
      `,
      techTitle: "Platforms",
      socialTitle: "Share This",
      detailsTitle: "Overview",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/IFLLMainMenu.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/IFLLRealGamePic.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/IFLLRealGamePic2.jpg",
        },
      ],
      video: "../videos/Interstellar Frontier.mp4",
      companyInfos: [
        {
          id: uuidv4(),
          title: "CIGA GameJam 2024",
          details: "48 hours",
        },
      ],
      technologies: [
        "Unreal Engine 5",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            <strong>Interstellar Frontier: Limits and Limitless</strong> is a game that combines bullet-hell shooting with backpack resource management.
          `,
        },
        {
          id: uuidv4(),
          details: `
            Players take on the role of a spaceship navigating through the galaxy, defeating hostile ships while journeying toward the edge of the galaxy.
          `,
        },
        {
          id: uuidv4(),
          details: `
            The entire game mechanic revolves around the concepts of firepower and speed, requiring players to carefully balance the weight of their equipment with their movement speed. Carrying too much gear will limit the player's mobility, while insufficient firepower will leave them vulnerable to danger.
          `,
        },
      ],

      instructionDetails: [
        {
          id: uuidv4(),
          details: `"W,A,S,D" to Move`,
        },
        {
          id: uuidv4(),
          details: `"Space" to Slow down time and collocate your weapon`,
        },
        {
          id: uuidv4(),
          details: `"Left Click" to select weapon and click again to an empty slot to equip`,
        },
        {
          id: uuidv4(),
          details: `"Right Click" on a filled slot to unequip the weapon`,
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    {
      id: "DarkerThanBlack",
      title: "DarkerThanBlack",
      category: "3D / Soulslike",
      img: "images/profiles/DTBProfile.png",
      hoverVideo: "videos/DarkerThanBlack1.mp4",
      publishDate: "Jun 07, 2023",
      tag: "3D / Soulslike",
      clientTitle: "Activity",
      objectivesTitle: "Developers",
      objectivesDetails:
        "<strong>Design & Coding:</strong> Qin Yuqi",
      techTitle: "Platforms",
      detailsTitle: "Overview",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Project Management UI",
          img: "../images/DTBCharacter.jpg",
        },
        {
          id: uuidv4(),
          title: "Project Management UI",
          img: "../images/DTBRealGamePic.jpg",
        },
        {
          id: uuidv4(),
          title: "Project Management UI",
          img: "../images/DTBWeaponThrow.jpg",
        },
      ],
      video: "../videos/DarkerThanBlackSummary.mp4",
      companyInfos: [
        {
          id: uuidv4(),
          title: "Individual Project",
          details: "3 months",
        },
      ],
      technologies: [
        "Unity 3D",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "In a medieval world shrouded in darkness and corruption, a small pier and fortress have become trading hubs for thieves, gangsters, and knights. Once a thriving trade center, it has now fallen into chaos and depravity."
        },
        {
          id: uuidv4(),
          details:
            "The protagonist is an amnesiac hero who awakens on the pier's beach with only a mysterious glowing sword by his side. Legend says this sword was bestowed by ancient gods and holds great power. His mission is to liberate the pier and fortress from evil forces and reclaim his lost memories."
        },
        {
          id: uuidv4(),
          details:
            "Players will control the protagonist's adventure in this dark and dangerous world. The gameplay will be challenging like <strong>Dark Souls 3</strong>, filled with combat and exploration. The protagonist can use the sacred sword in various battles, including throwing and retrieving it like the Leviathan Axe in <strong>God of War</strong>, As the story progresses, he will encounter hidden righteous knights, ruthless gang leaders, and keepers of memories. Through battles and puzzles, he must grow stronger, rebuild his memories, and forever change the fate of the fallen pier and fortress."
        }
      ],
      instructionDetails: [
        {
          id: uuidv4(),
          isHeading: true,
          details: "Gamepad Mode",
        },
        {
          id: uuidv4(),
          details: `"Left Stick" to Move`,
        },
        {
          id: uuidv4(),
          details: `"Right Stick" to Rotate Camera`,
        },
        {
          id: uuidv4(),
          details: `"X Button" to Lock View`,
        },
        {
          id: uuidv4(),
          details: `"Y Button" to Jump`,
        },
        {
          id: uuidv4(),
          details: `"A Button" to Sprint`,
        },
        {
          id: uuidv4(),
          details: `"B Button" to Backstep/Roll`,
        },
        {
          id: uuidv4(),
          details: `"LT" to Raise Shield and Defend`,
        },
        {
          id: uuidv4(),
          details: `"LB" to Parry with Shield`,
        },
        {
          id: uuidv4(),
          details: `"RB" to Attack`,
        },
        {
          id: uuidv4(),
          details: `"RT" to Aim/Throw and Retrieve Weapon`,
        },
        // Keyboard Mode
        {
          id: uuidv4(),
          isHeading: true,
          details: "Keyboard Mode",
        },
        {
          id: uuidv4(),
          details: `"W, A, S, D" to Move`,
        },
        {
          id: uuidv4(),
          details: `"Shift" to Sprint`,
        },
        {
          id: uuidv4(),
          details: `"Space" to Backstep/Roll`,
        },
        {
          id: uuidv4(),
          details: `"Mouse Left Click" to Attack, Long Press to Throw and Retrieve Weapon`,
        },
        {
          id: uuidv4(),
          details: `"Mouse Right Press" to Defend`,
        },
        {
          id: uuidv4(),
          details: `"Ctrl" to Parry with Shield`,
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    {
      id: "PalFight",
      title: "Pal Fight",
      category: "2D / FTG",
      img: "images/profiles/PFProfile.jpg",
      hoverVideo: "videos/PFProfile.mp4",
      publishDate: "Jan 22, 2024",
      tag: "2D / FTG",
      clientTitle: "Activity",
      objectivesTitle: "Developers",
      objectivesDetails: `
        <strong>Design & Coding:</strong> Zhu Yunfeng<br>
      `,
      techTitle: "Platforms",
      socialTitle: "Share This",
      detailsTitle: "Overview",
      projectImages: [
        {
          id: uuidv4(),
          title: "Pal Fight Main Menu",
          img: "../images/PFRealGamePic1.jpg",
        },
        {
          id: uuidv4(),
          title: "Pal Fight Battle Scene",
          img: "../images/PFRealGamePic2.jpg",
        },
        {
          id: uuidv4(),
          title: "Pal Fight Funny Elements",
          img: "../images/PFRealGamePic3.jpg",
        },
      ],
      video: "../videos/PalFight.mp4",
      companyInfos: [
        {
          id: uuidv4(),
          title: "GGJ 2024",
          details: "48 hours",
        },
      ],
      technologies: [
        "Unity 2D",
      ],
      playableLink:"https://mark-zf.itch.io/pal-fight",
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            <strong>Pal Fight</strong> is a PVP battle game created during the Global Game Jam 2024, hosted at the NYU site. 
            The theme was <em>"make me laugh"</em>, and the game includes humorous elements to align with the theme. 
            Players can swing weapons, block, and jump while engaging in battles designed to evoke laughter and competitive fun.
          `,
        },
        {
          id: uuidv4(),
          details: `
            Pal Fight introduces unique mechanics such as the posture system, which prevents over-blocking by making players vulnerable if their posture meter fills up.
            This encourages strategic gameplay as players must manage both attacking and defending efficiently.
          `,
        },
      ],
      instructionDetails: [
        {
          id: uuidv4(),
          details: "Player 1:",
          isHeading: true, 
        },
        {
          id: uuidv4(),
          details: "A, D: Swing the weapon anticlockwise or clockwise",
        },
        {
          id: uuidv4(),
          details: "W: Jump",
        },
        {
          id: uuidv4(),
          details: "S: Block",
        },
        {
          id: uuidv4(),
          details: "Player 2:",
          isHeading: true, 
        },
        {
          id: uuidv4(),
          details: "←, →: Swing the weapon anticlockwise or clockwise",
        },
        {
          id: uuidv4(),
          details: "↑: Jump",
        },
        {
          id: uuidv4(),
          details: "↓: Block",
        },
        {
          id: uuidv4(),
          details: `
            <strong>Tip:</strong> Block can reduce your opponent's damage when they attack you, but it will still increase your posture to a small extent. 
            Press the block button just before your opponent hits you to deflect the attack and increase your opponent's posture significantly.
            When the posture meter reaches its maximum, the player enters a weak state and cannot block, allowing the opponent to deal a death blow.
          `,
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },    
    {
      id: "Hermes",
      title: "Hermes",
      category: "2D / Level-pass",
      img: "images/profiles/HermesProfile.jpg",
      hoverVideo: "videos/HermesProfile.mp4",
      publishDate: "May 04, 2023",
      tag: "2D / Level-pass",
      clientTitle: "Activity",
      objectivesTitle: "Developers",
      objectivesDetails: `
        <strong>Programming:</strong> HOW4RD, SapphireStar, QinYuqi<br>
        <strong>Art:</strong> Allie, UZUZ, Michelle_go<br>
        <strong>Level & UI Design:</strong> Michelle_go, UZUZ<br>
        <strong>Story script:</strong> cedaoan, H_Chloe
      `,
      techTitle: "Tools & Technologies",
      detailsTitle: "Overview",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Hermes - Olympus Realm",
          img: "../images/Hermes1.jpg",  
        },
        {
          id: uuidv4(),
          title: "Hermes - Mortal World",
          img: "../images/Hermes2.jpg",  
        },
        {
          id: uuidv4(),
          title: "Hermes - Underworld",
          img: "../images/Hermes3.jpg", 
        },
      ],
      video: "../videos/HermesSummary.mp4",
      companyInfos: [
        {
          id: uuidv4(),
          title: "LudumDare 53",
          details: "72 hours",
        },
      ],
      technologies: [
        "Unity 2D",
        "C#",
        "Photoshop",
        "Aseprite",
      ],
      playableLink:"https://ldjam.com/events/ludum-dare/53/hermes",
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            <strong>Hermes</strong> is a 2D vertical platformer based on Greek mythology. Players control Hermes, the messenger of the gods, tasked with delivering an important message from Zeus to Hades. The journey involves navigating through various realms and avoiding obstacles.
          `,
        },
        {
          id: uuidv4(),
          details: `
            The game starts with Hermes jumping out of the sky, falling through different realms including Olympus, the mortal world, and the underworld. Hermes must avoid falling into the abyss and navigate through challenging platforms.
          `,
        },
        {
          id: uuidv4(),
          details: `
            Along the way, Hermes will collect items such as the golden apple (which increases maximum health) and hearts (which recover health). The ultimate goal is to reach the underworld and deliver Zeus’s message to Hades.
          `,
        },
      ],
      instructionDetails: [
        {
          id: uuidv4(),
          details: "HOW TO PLAY",
          isHeading: true,
        },
        {
          id: uuidv4(),
          details: "Use WASD to move and click to continue with dialogues.",
        },
        {
          id: uuidv4(),
          details: "Press Shift to activate Iris’s blessing, allowing you to teleport to any block.",
        },
        {
          id: uuidv4(),
          details: `
            Avoid falling into the abyss or moving too slowly and touching the top of the screen. Make it to the end of each level to deliver the message to Hades.
          `,
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },        
    {
      id: "BALA",
      title: "BALA",
      category: "Simulation / 2D",
      img: "images/profiles/BALAProfile.jpg",
      // hoverVideo: "videos/BALAProfile.mp4",
      publishDate: "Sep 18, 2024",
      tag: "Simulation / 2D",
      clientTitle: "Activity",
      objectivesTitle: "Developers",
      objectivesDetails: `
        <strong>Game Design:</strong>DSK, artilor901z<br>
        <strong>Art Design:</strong>Sliver, Xian Bei<br>
        <strong>Music:</strong>Daisy<br>
        <strong>Programming:</strong>Hong Shuo, playerzhou, LZEE<br>
        `,
      techTitle: "Platforms",
      socialTitle: "Share This",
      detailsTitle: "Overview",
      projectImages: [
        {
          id: uuidv4(),
          title: "BALA Gameplay",
          img: "../images/BALAMainMenu.jpg",
        },
        {
          id: uuidv4(),
          title: "BALA Gameplay",
          img: "../images/BALA2.jpg",
        },
        {
          id: uuidv4(),
          title: "BALA Gameplay",
          img: "../images/BALA4.jpg",
        },
      ],
      video: "../videos/BALAGameplay.mp4",
      companyInfos: [
        {
          id: uuidv4(),
          title: "Indie Game Development 2024",
          details: "Ongoing Project",
        },
      ],
      technologies: [
        "Unity",
        "C#",
      ],
      playableLink:"https://autumnwater.itch.io/bala",
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            <strong>BALA</strong> is a simulation game where players take on the role of a food quality inspector, tasked with ensuring that the food meets customer demands while maintaining quality control.
          `,
        },
        {
          id: uuidv4(),
          details: `
            In the game, players must decide whether to deliver food to customers by using tools to inspect food ingredients and ensuring that each meal meets the unique requirements of different customers.
          `,
        },
        {
          id: uuidv4(),
          details: `
            It's crucial to check the quality of food and carefully balance the needs of customers with the standards of the kitchen, managed by the egotistical chef. Your decisions will affect both the satisfaction of the customers and the reputation of the restaurant.
          `,
        },
      ],
    
      instructionDetails: [
        {
          id: uuidv4(),
          details: `Mouse Click`,
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },    
    {
      id: "NekoSnake",
      title: "Neko Snake",
      category: "Snake-like / 2D",
      img: "images/profiles/NekoSnakeProfile.jpg",
      // hoverVideo: "videos/NekoSnakeProfile.mp4",
      publishDate: "Sep 18, 2024",
      tag: "Snake-like / 2D",
      clientTitle: "Activity",
      objectivesTitle: "Developers",
      objectivesDetails: `
      <strong>Programming:</strong> Hong Shuo<br>
      `,
      techTitle: "Platforms",
      socialTitle: "Share This",
      detailsTitle: "Overview",
      projectImages: [
        {
          id: uuidv4(),
          title: "Neko Snake Gameplay",
          img: "../images/NekoSnake1.jpg",
        },
        {
          id: uuidv4(),
          title: "Neko Snake Gameplay",
          img: "../images/NekoSnake2.jpg",
        },
        {
          id: uuidv4(),
          title: "Neko Snake Gameplay",
          img: "../images/NekoSnake3.jpg",
        },
      ],
      // video: "../videos/NekoSnakeGameplay.mp4",
      companyInfos: [
        {
          id: uuidv4(),
          title: "CIGA GameJam 2024",
          details: "48 hours",
        },
      ],
      technologies: [
        "Unity",
        "C#",
      ],
      playableLink:"https://dskhao.itch.io/neko-snake",
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            <strong>Neko Snake</strong> is a snake-like game with the core gameplay revolving around guiding the direction of a luxurious "cat car."
          `,
        },
        {
          id: uuidv4(),
          details: `
          Players will guide the cat car to collect scattered "cat balls" along the way, extending its length to achieve higher scores.
          `,
        },
        {
          id: uuidv4(),
          details: `
          The game offers a special twist where there are unique "cat balls" waiting for players to collect, which add exciting elements to the gameplay.
          `,
        },
      ],
      instructionDetails: [
        {
          id: uuidv4(),
          details: `"W,A,S,D" to Move`,
        },
        {
          id: uuidv4(),
          details: `"Space" to Boost speed`,
        },
        {
          id: uuidv4(),
          details: `"Left Click" to Collect cat balls`,
        },
        {
          id: uuidv4(),
          details: `"Right Click" to Activate special abilities`,
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },    
    {
      id: "Limited2Space",
      title: "Limited 2 Space",
      category: "Rhythm / 2D Platformer",
      img: "images/profiles/Limited2SpaceProfile.jpg",
      // hoverVideo: "videos/Limited2SpaceProfile.mp4",
      publishDate: "Sep 18, 2024",
      tag: "Rhythm / 2D Platformer",
      clientTitle: "Activity",
      objectivesTitle: "Developers",
      objectivesDetails: `
        <strong>Game Design:</strong>Hong Shuo<br>
      `,
      techTitle: "Platforms",
      socialTitle: "Share This",
      detailsTitle: "Overview",
      projectImages: [
        {
          id: uuidv4(),
          title: "Limited 2 Space Gameplay",
          img: "../images/Limit2SpaceMainMenu.jpg",
        },
        {
          id: uuidv4(),
          title: "Limited 2 Space Gameplay",
          img: "../images/Limit2Space1.jpg",
        },
        {
          id: uuidv4(),
          title: "Limited 2 Space Gameplay",
          img: "../images/Limit2Space2.jpg",
        },
      ],
      // video: "../videos/Limited2SpaceGameplay.mp4",
      companyInfos: [
        {
          id: uuidv4(),
          title: "Indie Game Development 2024",
          details: "Ongoing Project",
        },
      ],
      technologies: [
        "Unity",
        "C#",
      ],
      playableLink:"https://dskhao.itch.io/limited-2-space",
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            <strong>Limited 2 Space</strong> is a unique rhythm-based 2D platformer where the entire game is played using just the spacebar. Players control a robot in a post-apocalyptic future, interacting with the environment by pressing the spacebar at the right time to activate commands like "Move Left," "Jump," and even "Rewind" and "Replay."
          `,
        },
        {
          id: uuidv4(),
          details: `
            The game features a scrolling progress bar similar to a music player's timeline. By hitting or holding the spacebar when the progress indicator aligns with commands, players will watch their character perform actions in sync with the rhythm of the game.
          `,
        },
        {
          id: uuidv4(),
          details: `
            With commands like "Walk Left," "Walk Right," "Upper-Left Jump," "Replay," and "Death," players must carefully time their inputs to navigate the world and uncover its secrets.
          `,
        },
      ],
    
      instructionDetails: [
        {
          id: uuidv4(),
          details: `"Space" to Activate Commands`,
        },
        {
          id: uuidv4(),
          details: `"Hold Space" to Continue Action`,
        },
        {
          id: uuidv4(),
          details: `"Rewind" to Reverse the Progress Bar Direction`,
        },
        {
          id: uuidv4(),
          details: `"Replay" to Reset the Progress Bar`,
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },    
    {
      id: "WhatIsTrendingNow",
      title: "What is Trending Now",
      category: "Simulation / Strategy",
      img: "images/profiles/WITNProfile.jpg",
      // hoverVideo: "videos/WhatIsTrendingNowProfile.mp4",
      publishDate: "Sep 18, 2024",
      tag: "Simulation / Strategy",
      clientTitle: "Activity",
      objectivesTitle: "Developers",
      objectivesDetails: `
        <strong>Game Design & Program:</strong> Hong Shuo<br>
        `,
      techTitle: "Platforms",
      socialTitle: "Share This",
      detailsTitle: "Overview",
      projectImages: [
        {
          id: uuidv4(),
          title: "What is Trending Now Gameplay",
          img: "../images/WITN2.png",
        },
        {
          id: uuidv4(),
          title: "What is Trending Now Gameplay",
          img: "../images/WITN3.png",
        },
        {
          id: uuidv4(),
          title: "What is Trending Now Gameplay",
          img: "../images/WITN1.png",
        },
      ],
      // video: "../videos/WhatIsTrendingNowGameplay.mp4",
      companyInfos: [
        {
          id: uuidv4(),
          title: "Indie Game Development 2024",
          details: "Ongoing Project",
        },
      ],
      technologies: [
        "Unity",
        "Excel Integration",
      ],
      playableLink:"https://mark-zf.itch.io/what-is-trending-now",
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            <strong>What is Trending Now</strong> is a satirical commentary on the manipulation of trending news by social media platforms, aiming to provoke reflection on the ethics and responsibilities involved in media influence. Players take on the role of an intern editor at a social media company, tasked with curating the next day's trending news. The challenge is to balance societal welfare with the company's financial and viewership goals.
          `,
        },
        {
          id: uuidv4(),
          details: `
            Drawing inspiration from impactful games like "We Become What We Behold" and "Papers, Please," this game presents simple gameplay mechanics with profound consequences. Players drag news items onto the trending list, but each choice affects societal happiness, company metrics, and hidden storylines within the news.
          `,
        },
        {
          id: uuidv4(),
          details: `
            The game encourages players to think critically about the news they encounter online, promoting awareness of the media's influence on public opinion. Through hidden narratives and consequences, players experience the delicate balance between ethical decision-making and corporate interest in the digital world.
          `,
        },
        {
          id: uuidv4(),
          details: `
            The game’s structure is designed for easy content updates, separating content from the code. News items, dialogues, and storylines are imported from external Excel files, allowing dynamic updates without altering the underlying code. This system also simplifies localization for different languages, such as Chinese.
          `,
        },
      ],
    
      instructionDetails: [
        {
          id: uuidv4(),
          details: `"Drag News Items" to the Trending List`,
        },
        {
          id: uuidv4(),
          details: `"Monitor Impact" on Society, Viewership, and Financial Health`,
        },
        {
          id: uuidv4(),
          details: `"Discover Hidden Storylines" and their Consequences`,
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },    
    {
      id: "DontTouchMe",
      title: "Don't TOUCH ME",
      category: "Platform / 2D",
      img: "images/profiles/DTMProfile.jpg",
      // hoverVideo: "videos/DontTouchMeProfile.mp4",
      publishDate: "Sep 18, 2024",
      tag: "Platform / 2D",
      clientTitle: "Activity",
      objectivesTitle: "Developers",
      objectivesDetails: `
        <strong>Programming:</strong> Hong Shuo<br>
        `,
      techTitle: "Platforms",
      socialTitle: "Share This",
      detailsTitle: "Overview",
      projectImages: [
        {
          id: uuidv4(),
          title: "Don't TOUCH ME Gameplay",
          img: "../images/DTM1.jpg",
        },
        {
          id: uuidv4(),
          title: "Don't TOUCH ME Gameplay",
          img: "../images/DTM2.jpg",
        },
        {
          id: uuidv4(),
          title: "Don't TOUCH ME Gameplay",
          img: "../images/DTM3.jpg",
        },
      ],
      // video: "../videos/DontTouchMeGameplay.mp4",
      companyInfos: [
        {
          id: uuidv4(),
          title: "CIGA GameJam 2024",
          details: "48 hours",
        },
      ],
      technologies: [
        "Unity",
        "C#",
      ],
      playableLink:"https://dskhao.itch.io/dont-touch-me",
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            <strong>Don't TOUCH ME</strong> is a two-player platform-jumping game with chase mechanics as its core gameplay, where players take on the roles of patients and doctors in a mental hospital, engaging in a tug of war, alternating as the chasing and fleeing parties.
          `,
        },
        {
          id: uuidv4(),
          details: `
            The game begins with the doctor being the pursuer, equipped with a giant hand to catch the patient. Once a player is caught, the roles reverse, and the patient becomes the pursuer, continuing this alternating dynamic.
          `,
        },
        {
          id: uuidv4(),
          details: `
            The pursuer wins if they manage to touch the fleeing player within the time limit, while the fleeing player wins if they successfully avoid contact. The game is played in a best-of-five format.
          `,
        },
        {
          id: uuidv4(),
          details: `
            The updated version includes a multi-map selection system with three distinct maps, offering varying play styles and strategic elements. Players can now interact with unique map elements such as quick elevators and piston doors to outmaneuver their opponents.
          `,
        },
        {
          id: uuidv4(),
          details: `
            A new card skill system has been added, allowing the losing player from the previous round to draw a card that grants special abilities. There are five types of cards, each with unique effects, and both the doctor and patient have their own distinct card designs. Some cards are exclusive to the chasing or fleeing roles.
          `,
        },
      ],
    
      instructionDetails: [
        {
          id: uuidv4(),
          details: `"W,A,S,D" to Move`,
        },
        {
          id: uuidv4(),
          details: `"Space" to Jump`,
        },
        {
          id: uuidv4(),
          details: `"Left Click" to Use Ability`,
        },
        {
          id: uuidv4(),
          details: `"Right Click" to Activate Special Card Skill`,
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    {
      id: "SnapAdventure",
      title: "SnapAdventure",
      category: "2D / Wechat Mini Peogram",
      img: "images/profiles/SnapAProfile.jpg",
      hoverVideo: "videos/SnapAdventureProfile.mp4",
      publishDate: "Dec 23, 2023",
      tag: "2D / Wechat Mini Peogram",
      clientTitle: "Activity",
      objectivesTitle: "Developers",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Overview",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Social App",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Social App",
          img: "../images/web-project-2.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Social App",
          img: "../images/mobile-project-2.jpg",
        },
      ],
      video: "../videos/SnapAdventureMV.mp4",
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    {
      id: "SightVR",
      title: "Sight - VR",
      category: "VR / Simulation",
      img: "images/profiles/SightVRProfile.jpg",
      // hoverVideo: "videos/SightVRProfile.mp4",
      publishDate: "Sep 18, 2024",
      tag: "VR / Simulation",
      clientTitle: "Activity",
      objectivesTitle: "Developers",
      objectivesDetails: `
        <strong>Programming:</strong>Zhu Yunfeng<br>
      `,
      techTitle: "Platforms",
      socialTitle: "Share This",
      detailsTitle: "Overview",
      projectImages: [
        {
          id: uuidv4(),
          title: "Sight VR Gameplay",
          img: "../images/SightVRGameplay1.jpg",
        },
        {
          id: uuidv4(),
          title: "Sight VR Gameplay",
          img: "../images/SightVRGameplay2.jpg",
        },
        {
          id: uuidv4(),
          title: "Sight VR Gameplay",
          img: "../images/SightVRGameplay3.jpg",
        },
      ],
      // video: "../videos/SightVRGameplay.mp4",
      companyInfos: [
        {
          id: uuidv4(),
          title: "VR & AR Course Project",
          details: "2024",
        },
      ],
      technologies: [
        "Unity",
        "Meta VR SDK",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            <strong>Sight - VR</strong> is a virtual reality simulation game designed to replicate the daily experiences of visually impaired individuals, fostering empathy and understanding among the general public. Inspired by the mobile public service game "见" (Seeing), this VR game adapts the concept of navigating through darkness into an immersive VR environment, offering a unique and interactive experience.
          `,
        },
        {
          id: uuidv4(),
          details: `
            In the game, players assume the role of a visually impaired person waking up in a dark hotel room. Using a tactile stick to sense their surroundings, they must find their way out of the room. Objects within the detection area are outlined with white strokes, helping players "see" through touch as they navigate the space.
          `,
        },
        {
          id: uuidv4(),
          details: `
            The game employs haptic feedback to guide players—vibrating controllers signal the presence of obstacles, with different feedback patterns for front, back, left, or right obstructions. Once players exit the room, light and color gradually fill the environment, creating a powerful contrast to the darkness, emphasizing the challenges of visual impairment.
          `,
        },
        {
          id: uuidv4(),
          details: `
            Developed using Unity and Meta's VR SDK, the game implements a unique shader that highlights object outlines based on the tactile stick's contact points. The black overlay on the camera further enhances the perception of distance and texture through this visual representation.
          `,
        },
      ],
    
      instructionDetails: [
        {
          id: uuidv4(),
          details: `"Trigger" to Use the Cane for Sensing`,
        },
        {
          id: uuidv4(),
          details: `"Left Joystick" to Move Forward, Backward, Left, or Right`,
        },
        {
          id: uuidv4(),
          details: `"Right Joystick" to Rotate or Physically Rotate Body`,
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },    
    {
      id: "TalesOfWheatField",
      title: "TalesOfWheatField",
      category: "2D/ Stardew Valley-like",
      img: "images/profiles/TWFProfile.png",
      hoverVideo: "videos/TalesOfWheatFieldProfile.mp4",
      publishDate: "May 13, 2024",
      tag: "2D / Stardew Valley-like",
      clientTitle: "Activity",
      objectivesTitle: "Developers",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Tools & Technologies",
      socialTitle: "Share This",
      detailsTitle: "Overview",
      projectImages: [
      ],
      video: "../videos/TalesOfWheatFieldSummary.mp4",
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/in/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
      ],
    },
    // {
    //   id: "ParkinsonHandGame",
    //   title: "Parkinson - Hand Game",
    //   category: "Rehabilitation / Medical",
    //   img: "images/profiles/ParkinsonHandGameProfile.jpg",
    //   hoverVideo: "videos/ParkinsonHandGameProfile.mp4",
    //   publishDate: "Sep 18, 2024",
    //   tag: "Rehabilitation / Medical",
    //   clientTitle: "Activity",
    //   objectivesTitle: "Developers",
    //   objectivesDetails: `
    //     <strong>Game Design & Development:</strong> Zhu Yunfeng<br>
    //    `,
    //   techTitle: "Platforms",
    //   socialTitle: "Share This",
    //   detailsTitle: "Overview",
    //   projectImages: [
    //     {
    //       id: uuidv4(),
    //       title: "Parkinson Hand Game - Gameplay",
    //       img: "../images/ParkinsonHandGameGameplay1.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Parkinson Hand Game - Gameplay",
    //       img: "../images/ParkinsonHandGameGameplay2.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Parkinson Hand Game - Gameplay",
    //       img: "../images/ParkinsonHandGameGameplay3.jpg",
    //     },
    //   ],
    //   video: "../videos/ParkinsonHandGameGameplay.mp4",
    //   companyInfos: [
    //     {
    //       id: uuidv4(),
    //       title: "Medical Game Development",
    //       details: "Ongoing Project",
    //     },
    //   ],
    //   technologies: [
    //     "Unity",
    //     "Camera-based Motion Detection",
    //     "XML Data Collection",
    //   ],
    //   playableLink:"https://dskhao.itch.io/parkinson-hand-game",
    //   projectDetails: [
    //     {
    //       id: uuidv4(),
    //       details: `
    //         <strong>Parkinson - Hand Game</strong> is a rehabilitation game designed for patients with Parkinson's disease. The game uses a camera to detect hand movements, allowing players to interact with in-game objects by clenching their fists. This setup motivates patients to perform rehabilitation exercises and aids doctors in collecting valuable movement data for diagnosis.
    //       `,
    //     },
    //     {
    //       id: uuidv4(),
    //       details: `
    //         Inspired by the fist-clenching test in section 3.6 of the MDS-UPDRS (Unified Parkinson's Disease Rating Scale), the game is designed to measure and evaluate hand movements, offering an engaging way to collect data while providing an enjoyable rehabilitation experience for patients.
    //       `,
    //     },
    //     {
    //       id: uuidv4(),
    //       details: `
    //         Hand movement data is saved in XML format, which can be easily imported into Excel for graph and chart generation. This assists doctors in analyzing the progression of Parkinson's disease in patients, offering valuable insight into their motor skills over time.
    //       `,
    //     },
    //   ],
    
    //   instructionDetails: [
    //     {
    //       id: uuidv4(),
    //       details: `"Use Camera" to Detect Hand Movements`,
    //     },
    //     {
    //       id: uuidv4(),
    //       details: `"Perform Fist Clenching" to Interact with Objects`,
    //     },
    //     {
    //       id: uuidv4(),
    //       details: `"Data Automatically Saved" in XML Format for Analysis`,
    //     },
    //   ],
    //   socialSharings: [
    //     {
    //       id: uuidv4(),
    //       name: "Twitter",
    //       icon: "twitter",
    //       url: "https://twitter.com/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "LinkedIn",
    //       icon: "linkedin",
    //       url: "https://linkedin.com/in/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Facebook",
    //       icon: "facebook",
    //       url: "https://facebook.com",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Instagram",
    //       icon: "instagram",
    //       url: "https://instagram.com",
    //     },
    //   ],
    // },    
    // {
    //   id: "Diggernaut",
    //   title: "Diggernaut",
    //   category: "RPG / Adventure",
    //   img: "images/profiles/DiggernautProfile.jpg",
    //   hoverVideo: "videos/DiggernautProfile.mp4",
    //   publishDate: "Sep 18, 2023",
    //   tag: "RPG / Adventure",
    //   clientTitle: "Activity",
    //   objectivesTitle: "Developers",
    //   objectivesDetails: `
    //     <strong>Game Design:</strong> Reed Zhu<br>
    //     <strong>Art Design:</strong> Guoqiang Zhao<br>
    //     <strong>Sound Design:</strong> Andy Chen<br>
    //     <strong>UI/UX:</strong> Yuqi Qin<br>
    //     <strong>Programming:</strong> Hong Shuo<br>
    //     <strong>Music:</strong> Xinyue Fen<br><br>
    //     Some assets/materials were sourced from free assets online, Unreal store, and AI-generated content.
    //   `,
    //   techTitle: "Platforms",
    //   socialTitle: "Share This",
    //   detailsTitle: "Overview",
    //   projectImages: [
    //     {
    //       id: uuidv4(),
    //       title: "Diggernaut Gameplay",
    //       img: "../images/DiggernautGameplay1.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Diggernaut Gameplay",
    //       img: "../images/DiggernautGameplay2.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Diggernaut Gameplay",
    //       img: "../images/DiggernautGameplay3.jpg",
    //     },
    //   ],
    //   video: "../videos/DiggernautGameplay.mp4",
    //   companyInfos: [
    //     {
    //       id: uuidv4(),
    //       title: "Kenney Jam 2023",
    //       details: "48 hours",
    //     },
    //   ],
    //   technologies: [
    //     "Unity",
    //     "C#",
    //   ],
    //   playableLink:"https://dskhao.itch.io/diggernaut",
    //   projectDetails: [
    //     {
    //       id: uuidv4(),
    //       details: `
    //         <strong>Diggernaut</strong> was developed in just 48 hours for Kenney Jam 2023. This action-packed RPG adventure invites players to take on the role of a treasure-hunting digger. Your mission is to delve deep into the unknown, discovering diamonds, gold, and other riches while protecting your stronghold from invading monsters.
    //       `,
    //     },
    //     {
    //       id: uuidv4(),
    //       details: `
    //         As the ultimate digger, you will explore hidden caves and uncover long-lost treasures. But riches come with their dangers—stay alert as monsters threaten your stronghold, and keep your digging skills sharp!
    //       `,
    //     },
    //     {
    //       id: uuidv4(),
    //       details: `
    //         The game features an engaging blend of exploration, resource collection, and base defense, challenging players to become master diggers while defending their wealth.
    //       `,
    //     },
    //   ],
    
    //   instructionDetails: [
    //     {
    //       id: uuidv4(),
    //       details: `"W,A,S,D" to Move`,
    //     },
    //     {
    //       id: uuidv4(),
    //       details: `"Left Mouse Button (LMB)" to Dig & Attack`,
    //     },
    //   ],
    //   socialSharings: [
    //     {
    //       id: uuidv4(),
    //       name: "Twitter",
    //       icon: "twitter",
    //       url: "https://twitter.com/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "LinkedIn",
    //       icon: "linkedin",
    //       url: "https://linkedin.com/in/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Facebook",
    //       icon: "facebook",
    //       url: "https://facebook.com",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Instagram",
    //       icon: "instagram",
    //       url: "https://instagram.com",
    //     },
    //   ],
    // },    
    // {
    //   id: "OnPurposeGGJ2023",
    //   title: "On Purpose - GGJ 2023",
    //   category: "Puzzle / Math",
    //   img: "images/profiles/OnPurposeGGJ2023Profile.jpg",
    //   hoverVideo: "videos/OnPurposeGGJ2023Profile.mp4",
    //   publishDate: "Jan 30, 2023",
    //   tag: "Puzzle / Math",
    //   clientTitle: "Activity",
    //   objectivesTitle: "Developers",
    //   objectivesDetails: `
    //     <strong>Game Design Lead & Programming:</strong> Yuqi Qin<br>
    //     <strong>Art Design:</strong> Guoqiang Zhao<br>
    //     <strong>Level Design:</strong> Andy Chen<br>
    //     <strong>Music & Sound Design:</strong> Xinyue Fen<br><br>
    //     This game was developed during the Global Game Jam 2023 at the Shanghai Site, centered around the theme "Roots."
    //   `,
    //   techTitle: "Platforms",
    //   socialTitle: "Share This",
    //   detailsTitle: "Overview",
    //   projectImages: [
    //     {
    //       id: uuidv4(),
    //       title: "On Purpose Gameplay",
    //       img: "../images/OnPurposeGameplay1.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "On Purpose Gameplay",
    //       img: "../images/OnPurposeGameplay2.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "On Purpose Gameplay",
    //       img: "../images/OnPurposeGameplay3.jpg",
    //     },
    //   ],
    //   video: "../videos/OnPurposeGameplay.mp4",
    //   companyInfos: [
    //     {
    //       id: uuidv4(),
    //       title: "Global Game Jam 2023",
    //       details: "48-hour Development",
    //     },
    //   ],
    //   technologies: [
    //     "Unity",
    //     "C#",
    //   ],
    //   projectDetails: [
    //     {
    //       id: uuidv4(),
    //       details: `
    //         <strong>On Purpose</strong> is a puzzle-solving game developed during Global Game Jam 2023. Drawing inspiration from the math concept of the square root (√), players use math properties and the function of the root symbol to solve puzzles. This game explores the interaction between the root and interactive blocks, where the position, mode, and coefficient of the root determine how blocks behave.
    //       `,
    //     },
    //     {
    //       id: uuidv4(),
    //       details: `
    //         Players must apply mathematical reasoning and spatial awareness to complete levels, carefully interacting with blocks to avoid getting stuck. The freedom in level 4 introduces a complex challenge where careful planning is essential to succeed.
    //       `,
    //     },
    //     {
    //       id: uuidv4(),
    //       details: `
    //         The game was completed in 48 hours, but later optimizations improved the game’s components and scenes. This blend of math-based mechanics with puzzle-solving offers a unique and engaging gameplay experience.
    //       `,
    //     },
    //   ],
    
    //   instructionDetails: [
    //     {
    //       id: uuidv4(),
    //       details: `"Use Root Symbol" to Interact with Blocks`,
    //     },
    //     {
    //       id: uuidv4(),
    //       details: `"Solve Puzzles" by Adjusting the Position, Mode, and Coefficient of the Root`,
    //     },
    //   ],
    //   socialSharings: [
    //     {
    //       id: uuidv4(),
    //       name: "Twitter",
    //       icon: "twitter",
    //       url: "https://twitter.com/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "LinkedIn",
    //       icon: "linkedin",
    //       url: "https://linkedin.com/in/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Facebook",
    //       icon: "facebook",
    //       url: "https://facebook.com",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Instagram",
    //       icon: "instagram",
    //       url: "https://instagram.com",
    //     },
    //   ],
    //   moreInfoLink: "https://mark-zf.itch.io/gamejam-2023",
    //   moreInfoLinkDescription: "Click here to play",
    //   googleDriveLink: "https://drive.google.com/drive/folders/1mmEZlW2xrFhPiffq0Z9AS_X0hiVR0jb_",
    //   googleDriveLinkDescription: "Click here to get more information about this game"
    // }
    

  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/realstoman",
    },
    {
      id: uuidv4(),
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/realstoman",
    },
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: "linkedin",
      url: "https://linkedin.com/in/realstoman",
    },
    {
      id: uuidv4(),
      name: "Youtube",
      icon: "youtube",
      url: "https://youtube.com/c/realstoman",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
    {
      id: uuidv4(),
      value: "mobile",
      name: "Mobile Applicaiton",
    },
    {
      id: uuidv4(),
      value: "ui-ux",
      name: "UI/UX Design",
    },
    {
      id: uuidv4(),
      value: "branding",
      name: "Branding & Animations",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
