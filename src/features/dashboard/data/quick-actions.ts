export interface QuickAction {
    title: string;
    description:string;
    gradient : string;
    href:string;
};

export const quickActions: QuickAction[] = [
    {
        title: "Narrate a Story",
        description : "Bring characters to life with expensive ai narration",
        gradient:"from-cyan-400 to-cyan-50",
        href : "/text-to-speech?=In a village tucked between mist-covered mountains, there lived an old clockmaker whose clocks never told the right time - but they always told the truth. One rainy evening, a stranger walked in and asked for a clock that could show him his future.",
    },
    {
    title: "Summarize an Article",
    description: "Turn long articles into quick easy summaries",
    gradient: "from-pink-400 to-pink-50",
    href: "/text-to-speech?=Artificial intelligence is transforming industries by automating repetitive tasks, improving decision-making, and enabling new forms of creativity across healthcare, education, and business.",
    },
    {
        title: "Generate a Podcast",
        description: "Convert your ideas into engaging podcast narration",
        gradient: "from-violet-400 to-violet-50",
        href: "/text-to-speech?=Welcome back to the Future Minds podcast, where today we explore how AI agents are reshaping the future of work and human creativity.",
    },
    {
        title: "Motivational Speech",
        description: "Create powerful speeches with cinematic voiceovers",
        gradient: "from-orange-400 to-orange-50",
        href: "/text-to-speech?=Success is not built in a single day. It is created through thousands of small decisions made consistently when nobody is watching.",
    },
    {
        title: "Read Study Notes",
        description: "Listen to your notes with natural AI voices",
        gradient: "from-green-400 to-green-50",
        href: "/text-to-speech?=Photosynthesis is the process by which green plants convert sunlight, water, and carbon dioxide into glucose and oxygen.",
    },
    {
        title: "Create Horror Narration",
        description: "Generate spooky cinematic storytelling instantly",
        gradient: "from-red-500 to-red-50",
        href: "/text-to-speech?=At exactly midnight, the abandoned radio suddenly turned on by itself, whispering the names of people who would disappear the next morning.",
    },
    {
        title: "Startup Pitch Voiceover",
        description: "Transform startup ideas into investor-ready narration",
        gradient: "from-blue-500 to-blue-50",
        href: "/text-to-speech?=Our platform uses advanced AI automation to help small businesses save hours of manual work while increasing productivity and revenue.",
    }
];