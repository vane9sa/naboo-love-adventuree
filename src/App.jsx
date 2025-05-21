import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import "./index.css";

const backgroundMusic = new Howl({
  src: ["/sounds/across-the-stars.mp3"],
  loop: true,
  volume: 0.5,
});

const images = {
  intro: "/images/river-path.jpg",
  forest: "/images/forest-creature.webp",
  petCreature: "/images/meadow-path.jpg",
  hiddenTrail: "/images/garden-view.jpg",
  lake: "/images/naboo-lake.jpg",
  boatRide: "/images/villa-from-water.jpg",
  cliffView: "/images/villa-overlook.jpg",
  meadow: "/images/garden-view.jpg",
  villaEntrance: "/images/villa-exterior.jpg",
  reunion: "/images/wedding-varykino.webp",
};

export default function NabooLoveAdventure() {
  const [scene, setScene] = useState("intro");

  useEffect(() => {
    if (!backgroundMusic.playing()) backgroundMusic.play();
    return () => backgroundMusic.stop();
  }, []);

  const scenes = {
    intro: {
      text: "A girl with bright brown curls and glowing light skin wakes by the lakes of Naboo. Her heart races to find the one she loves — a girl with flowing dark hair and warm brown eyes. She's headed to the villa Varykino to find her.",
      dialogue: "\"I know she’s waiting for me. I feel it in every part of me.\"",
      options: [
        { text: "Enter the forest path", next: "forest" },
        { text: "Walk along the lakeside", next: "lake" },
      ],
    },
    forest: {
      text: "She walks into the lush forest, sunlight filtering through the trees. A gentle creature blocks her way, curious but calm.",
      dialogue: "\"Are you leading me to her?\"",
      options: [
        { text: "Pet the creature", next: "petCreature" },
        { text: "Take another path", next: "hiddenTrail" },
      ],
    },
    petCreature: {
      text: "The creature hums and dances, leading her toward a secret meadow bathed in golden light.",
      dialogue: "\"You’re magic… just like her.\"",
      options: [
        { text: "Follow it to the meadow", next: "meadow" },
      ],
    },
    hiddenTrail: {
      text: "A glade of flowers glows softly in the morning light. Her thoughts drift to her love’s smile and voice.",
      dialogue: "\"This place feels like her… peaceful and full of light.\"",
      options: [
        { text: "Pick a flower and continue", next: "villaEntrance" },
      ],
    },
    lake: {
      text: "She walks along the sparkling shore. A small boat floats quietly nearby with a ribbon tied to its side.",
      dialogue: "\"Maybe this is how I find her…\"",
      options: [
        { text: "Take the boat", next: "boatRide" },
        { text: "Keep walking", next: "cliffView" },
      ],
    },
    boatRide: {
      text: "The boat glides effortlessly, carrying her across the calm lake toward the villa surrounded by trees.",
      dialogue: "\"The wind feels like her whisper… I’m almost there.\"",
      options: [
        { text: "Step onto the dock", next: "villaEntrance" },
      ],
    },
    cliffView: {
      text: "From the cliff, she sees the golden roofs of Varykino. Her heart leaps in her chest.",
      dialogue: "\"That’s where she is. That’s where we’ll be together.\"",
      options: [
        { text: "Take the path", next: "villaEntrance" },
      ],
    },
    meadow: {
      text: "She crosses a field blooming with soft petals and finds a carved stone that reads: 'Love guides you home.'",
      dialogue: "\"Her love is my compass.\"",
      options: [
        { text: "Hurry down the marked trail", next: "villaEntrance" },
      ],
    },
    villaEntrance: {
      text: "The majestic villa rises before her, warm light glowing from every window. Her breath catches.",
      dialogue: "\"She’s here. I can feel her.\"",
      options: [
        { text: "Enter the villa", next: "reunion" },
      ],
    },
    reunion: {
      text: "Inside, the girl with dark straight hair waits in the garden under the trees. Their eyes meet. No words. Just love. Always love.",
      dialogue: "\"I knew you’d find me.\"\n\"Always.\"",
      options: [
        { text: "Play again", next: "intro" },
      ],
    },
  };

  const current = scenes[scene];

  return (
    <div className="p-6 max-w-xl mx-auto">
      <motion.div
        className="rounded-xl overflow-hidden shadow-xl mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={images[scene]} alt="Scene" className="w-full object-cover h-64" />
      </motion.div>
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <p className="mb-2">{current.text}</p>
        <p className="italic text-purple-700 whitespace-pre-line">{current.dialogue}</p>
      </div>
      <div className="space-y-2">
        {current.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setScene(option.next)}
            className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
