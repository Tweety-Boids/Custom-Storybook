const hairColors = [
  { value: "black", label: "Black", description: "A deep, dark color." },
  { value: "brown", label: "Brown", description: "A rich, warm color." },
  { value: "blonde", label: "Blonde", description: "A light, sunny color." },
  { value: "red", label: "Red", description: "A vibrant, fiery color." },
  { value: "grey", label: "Grey", description: "A neutral, silver color." },
];

const eyeColors = [
  { value: "blue", label: "Blue", description: "A bright, cool color." },
  { value: "black", label: "Black", description: "A deep, dark color." },
  { value: "brown", label: "Brown", description: "A warm, earthy color." },
  { value: "green", label: "Green", description: "A fresh, vibrant color." },
];

const genres = [
  {
    value: "actionAdventure",
    label: "Action/Adventure",
    description:
      "High-energy stories with thrilling journeys and daring heroes.",
  },
  {
    value: "anthology",
    label: "Anthology",
    description:
      "A collection of short stories, often from different authors or artists.",
  },
  {
    value: "biographyMemoir",
    label: "Biography/Memoir",
    description:
      "Real-life stories about historical figures or personal experiences.",
  },
  {
    value: "comedy",
    label: "Comedy",
    description:
      "Humor-driven narratives, ranging from lighthearted to satirical.",
  },
  {
    value: "crimeDetective",
    label: "Crime/Detective",
    description:
      "Mystery-solving, investigations, and noir-style storytelling.",
  },
  {
    value: "cyberpunk",
    label: "Cyberpunk",
    description:
      "Futuristic, dystopian settings with advanced technology and societal decay.",
  },
  {
    value: "drama",
    label: "Drama",
    description:
      "Emotionally intense, character-driven stories with personal conflicts.",
  },
  {
    value: "fantasy",
    label: "Fantasy",
    description: "Magic, mythical creatures, and fantastical worlds.",
  },
  {
    value: "historicalFiction",
    label: "Historical Fiction",
    description:
      "Stories set in real historical periods with fictionalized elements.",
  },
  {
    value: "horror",
    label: "Horror",
    description:
      "Dark, eerie, and suspenseful narratives featuring supernatural or psychological terror.",
  },
  {
    value: "magicalRealism",
    label: "Magical Realism",
    description:
      "Real-world settings with subtle or integrated magical elements.",
  },
  {
    value: "mysteryThriller",
    label: "Mystery/Thriller",
    description: "Suspenseful plots with twists, investigations, and tension.",
  },
  {
    value: "mythologyFolklore",
    label: "Mythology/Folklore",
    description:
      "Adaptations or original stories inspired by myths and legends.",
  },
  {
    value: "postApocalyptic",
    label: "Post-Apocalyptic",
    description: "Stories set in a world after a major catastrophe.",
  },
  {
    value: "romance",
    label: "Romance",
    description: "Love stories, from lighthearted to dramatic relationships.",
  },
  {
    value: "satireParody",
    label: "Satire/Parody",
    description: "Social or cultural critiques using humor and exaggeration.",
  },
  {
    value: "scienceFiction",
    label: "Science Fiction",
    description: "Space travel, futuristic technology, and speculative worlds.",
  },
  {
    value: "sliceOfLife",
    label: "Slice of Life",
    description: "Everyday experiences and relatable human interactions.",
  },
  {
    value: "superhero",
    label: "Superhero",
    description:
      "Stories featuring heroic figures with extraordinary abilities.",
  },
  {
    value: "surrealExperimental",
    label: "Surreal/Experimental",
    description:
      "Abstract, dreamlike, or unconventional narratives and visuals.",
  },
];

const artStyles = [
  {
    value: "3d-model",
    label: "3D Model",
  },
  {
    value: "analog-film",
    label: "Analog Film",
  },
  {
    value: "anime",
    label: "Anime",
  },
  {
    value: "cinematic",
    label: "Cinematic",
  },
  {
    value: "comic-book",
    label: "Comic Book",
  },
  {
    value: "fantasy-art",
    label: "Fantasy",
  },
  {
    value: "line-art",
    label: "Line Art",
  },
  {
    value: "neon-punk",
    label: "Neon Punk",
  },
  {
    value: "photographic",
    label: "Photographic",
  },
]

const artStylesALT = [
  {
    value: "abstractExperimental",
    label: "Abstract/Experimental",
    description: "Non-traditional layouts, surreal imagery.",
  },
  {
    value: "animeManga",
    label: "Anime/Manga",
    description: "Detailed linework, expressive eyes, dynamic action.",
  },
  {
    value: "cartoonish",
    label: "Cartoonish",
    description: "Bright colors, exaggerated expressions, simple shapes.",
  },
  {
    value: "celShaded",
    label: "Cel-Shaded",
    description: "Bold outlines with flat, distinct shading areas.",
  },
  {
    value: "chibi",
    label: "Chibi",
    description: "Super-deformed, small bodies with big heads, often cute.",
  },
  {
    value: "classicStorybook",
    label: "Classic Storybook",
    description: "Soft watercolor or pastel illustrations.",
  },
  {
    value: "cyberpunk",
    label: "Cyberpunk",
    description: "Neon lighting, high-tech dystopian aesthetics.",
  },
  {
    value: "fantasyIllustration",
    label: "Fantasy Illustration",
    description: "Highly detailed, magical elements, realistic rendering.",
  },
  {
    value: "gothic",
    label: "Gothic",
    description: "Dark, moody tones with intricate designs.",
  },
  {
    value: "indieHandDrawn",
    label: "Indie/Hand-Drawn",
    description: "Rough, sketch-like or uniquely stylized.",
  },
  {
    value: "minimalist",
    label: "Minimalist",
    description: "Simple, flat colors with little detail.",
  },
  {
    value: "noirBlackWhite",
    label: "Noir/Black & White",
    description: "Heavy shadows, high contrast, detective or mystery themes.",
  },
  {
    value: "painterly",
    label: "Painterly",
    description: "Resembles oil or acrylic painting, often impressionistic.",
  },
  {
    value: "popArt",
    label: "Pop Art",
    description: "Vibrant, commercial-inspired, comic book aesthetics.",
  },
  {
    value: "retroVintage",
    label: "Retro/Vintage",
    description:
      "Inspired by mid-century comic strips and pulp fiction covers.",
  },
  {
    value: "sciFiRealism",
    label: "Sci-Fi Realism",
    description: "High-detail futuristic settings, semi-realistic.",
  },
  {
    value: "silhouetteCutout",
    label: "Silhouette/Cutout",
    description: "Strong black shapes, high contrast, minimalistic.",
  },
  {
    value: "superheroWesternComics",
    label: "Superhero/Western Comics",
    description: "Muscular characters, action-packed, dramatic lighting.",
  },
  {
    value: "whimsical",
    label: "Whimsical",
    description: "Playful, dreamy, often featuring hand-drawn textures.",
  },
];

const pronouns = [
  { value: "he/him", label: "He/Him" },
  { value: "she/her", label: "She/Her" },
  { value: "they/them", label: "They/Them" },
  { value: "xe/xem", label: "Xe/Xem" },
  { value: "ze/zir", label: "Ze/Zir" },
  { value: "ze/hir", label: "Ze/Hir" },
  { value: "ey/em", label: "Ey/Em" },
  { value: "fae/faer", label: "Fae/Faer" },
  { value: "ve/ver", label: "Ve/Ver" },
  { value: "per/per", label: "Per/Per" },
  { value: "noPronouns", label: "No Pronouns (Name Only)" },
  { value: "preferNotToSay", label: "Prefer Not to Say" },
];

export { genres, artStyles, hairColors, eyeColors, pronouns };
