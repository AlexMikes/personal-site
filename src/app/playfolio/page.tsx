import { Card, Column, Grid, Heading, Media, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, playfolio } from "@/resources";

const playCards = [
  {
    title: "Flying",
    description: "Working toward clearer skies, better judgment, and smoother landings.",
    image: "/images/play/152solo.webp",
    href: "/play/flying",
  },
  {
    title: "Biking",
    description: "Mountain bike rides, small adventures, and the occasional questionable climb.",
    image: "/images/play/bike1.webp",
    href: "/play/biking",
  },
  {
    title: "Making",
    description: "Personal builds, experiments, fixtures, sketches, and things made mostly for the joy of it.",
    image: "/images/projects/acrylicsurf/acsurf1.webp",
    href: "/play/making",
  },
  {
    title: "Music",
    description: "Guitar, piano, drums, bass, banjo, accordion, trumpet, and harmonica.",
    image: "/images/gallery/horizontal-2.jpg",
    href: "/play/music",
  },
  {
    title: "Reading",
    description: "Books, ideas, notes, and the threads that keep following me around.",
    image: "/images/gallery/vertical-2.jpg",
    href: "/play/reading",
  },
  {
    title: "Skateboarding",
    description: "A stubborn little archive of balance, motion, and learning things the slow way.",
    image: "/images/gallery/horizontal-4.jpg",
    href: "/play/skateboarding",
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
    <Column maxWidth="m" paddingTop="24" gap="xl">
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
      <Column maxWidth="s" gap="16" horizontal="center" align="center" paddingX="l">
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
            href={card.href}
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
