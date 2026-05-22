import { Column, Heading, Meta, Schema, AvatarGroup, Button, Media, Row, Text } from "@once-ui-system/core";
import { baseURL, about, person, play } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: play.title,
    description: play.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(play.title)}`,
    path: play.path,
  });
}

// export default function Play() {
//   return (
//     <Column maxWidth="m" paddingTop="24" gap="l">
//       <Schema
//         as="webPage"
//         baseURL={baseURL}
//         path={play.path}
//         title={play.title}
//         description={play.description}
//         image={`/api/og/generate?title=${encodeURIComponent(play.title)}`}
//         author={{
//           name: person.name,
//           url: `${baseURL}${about.path}`,
//           image: `${baseURL}${person.avatar}`,
//         }}
//       />
//       <Column maxWidth="s" gap="16" horizontal="center" align="center">
//         <Text variant="label-strong-m" onBackground="brand-weak">
//           Play
//         </Text>
//         <Heading variant="display-strong-xl">{play.title}</Heading>
//       </Column>
//       <Projects customPath={["src", "app", "play", "projects"]} columns="3" />
//     </Column>
//   );
// }


export default function Play() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={play.path}
        title={play.title}
        description={play.description}
        image={`/api/og/generate?title=${encodeURIComponent(play.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {play.title}
      </Heading>
      <Text variant="body-default-l" align="center" onBackground="neutral-weak" marginBottom="xl">
        This is what I do for fun and some other stuff you know
      </Text>
      <Projects customPath={["src", "app", "play", "projects"]} columns="3" />
    </Column>
  );
}