import { Card, Column, Grid, Heading, Media, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, playfolio } from "@/resources";

const playCards = [
  {
    title: "Skateboarding",
    description: "Started as a kid, took a break, and recently picked it back up despite my older hardware.",
    image: "/images/play/skate2.gif",
    // href: "/play/skateboarding",
  },
  {
    title: "Biking",
    description: "Mostly mountain biking these days; I prefer going uphill.",
    image: "/images/play/bike1.webp",
    // href: "/play/biking",
  },
  {
    title: "Hiking",
    description: "I usually feel better after a walk in the woods.",
    image: "/images/play/hike.webp",
    // href: "/play/biking",
  },
  {
    title: "Flying",
    description: "Sometimes I fly airplanes (this photo is my first solo flight in March, 2013).",
    image: "/images/play/152solo.webp",
    // href: "/playfolio/flying",
  },

  {
    title: "Woodworking",
    description: "Some things turn out better than others.",
    image: "/images/play/uke.webp",
    // href: "/play/making",
  },
  {
    title: "Music",
    description: "Guitar, piano, drums, bass, banjo, ukulele, harmonica, accordion, and trumpet (in order of proficiency from mediocre to please stop).",
    image: "/images/play/waylon.webp",
    // href: "/play/music",
  },
 {
    title: "Design and Build",
    description: "I make stuff I want and need, lately it's been mostly house projects.",
    image: "/images/play/miniramp.webp",
    // href: "/play/music",
  },
 {
    title: "Personal growth",
    description: "This is a weird thing to put here, but I spend a lot of time trying to be a better person, and not because I don't think I'm good enough.",
    image: "/images/play/fam.webp",
    // href: "/play/music",
  },
  {
    title: "Food",
    description: "One of my greatest sources of joy in life is cooking and eating good food.",
    image: "/images/play/jfoods.webp",
    // href: "/play/reading",
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: playfolio.title,
    description: playfolio.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(playfolio.title)}`,
    path: playfolio.path,
  });
}

export default function Playfolio() {
  return (
    <Column fillWidth maxWidth="m" paddingTop="24" gap="xl" horizontal="center" align="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={playfolio.title}
        description={playfolio.description}
        path={playfolio.path}
        image={`/api/og/generate?title=${encodeURIComponent(playfolio.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth maxWidth="s" gap="16" horizontal="center" align="center" paddingX="l">
        <Heading variant="heading-strong-xl" align="center">
          {playfolio.title}
        </Heading>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          {playfolio.description}
        </Text>
      </Column>
      <Grid columns="3" s={{ columns: 1 }} fillWidth gap="16" paddingX="l" marginBottom="40">
        {playCards.map((card) => (
          <Card
            key={card.title}
            radius="l-4"
            direction="column"
            padding="4"
            gap="8"
            border="neutral-alpha-weak"
            transition="micro-medium"
          >
            <Media
              src={card.image}
              alt={card.title}
              aspectRatio="4 / 3"
              radius="l"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <Column fillWidth padding="12" gap="8" horizontal="start">
              <Text variant="heading-strong-m" onBackground="neutral-strong" align="left">
                {card.title}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak" align="left">
                {card.description}
              </Text>
            </Column>
          </Card>
        ))}
      </Grid>
    </Column>
  );
}
