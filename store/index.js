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
          title: "Playable Link",
          details: "https://ldjam.com/events/ludum-dare/53/hermes",
        },
      ],
      technologies: [
        "Unity 2D",
        "C#",
        "Photoshop",
        "Aseprite",
      ],
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
