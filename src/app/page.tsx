import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Media,
} from "@once-ui-system/core";
import { home, about, person, baseURL, work, playfolio } from "@/resources";
import { Mailchimp } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <RevealFx fillWidth horizontal="center" paddingBottom="24">
        <Media
          src={home.image}
          alt={`${person.name} portrait`}
          radius="xl"
          sizes="(max-width: 400px) 100vw, 400px"
          style={{ width: "100%", maxWidth: 400, aspectRatio: "4 / 3", objectFit: "cover" }}
        />
      </RevealFx>
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>

          <RevealFx
            paddingTop="12"
            delay={0.4}
            horizontal="center"
            fillWidth
          >
            <Row gap="12" horizontal="center" wrap>
              <Button
                id="about"
                data-border="rounded"
                prefixIcon="person"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {about.label}
                </Row>
              </Button>

              <Button
                id="work"
                data-border="rounded"
                prefixIcon="grid"
                href={work.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {work.label}
                </Row>
              </Button>

              <Button
                id="play"
                data-border="rounded"
                prefixIcon="rocket"
                href={playfolio.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {playfolio.label}
                </Row>
              </Button>
            </Row>
          </RevealFx>
          


        </Column>
      </Column>
      <Mailchimp />
    </Column>
  );
}
