// Styles
import { Container, Flex } from '@/styles/Global';
import { Text } from '@/styles/Text';
import { Button } from '@/styles/Buttons';

// Components
import { Stack } from '@/components/Stack';
import { Project } from '@/components/Project';
import { Contacts } from '@/components/Contacts';

// Data
import { stackData } from '@/utils/stackData';
import { userData } from '@/utils/userData';

import { FaGithub } from 'react-icons/fa';

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from './style';

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/kenzie-portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={'48px'}
                height={'48px'}
              />
              <Text color="grey4">Greetings! I am {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              I{' '}
              <Text as="span" type="heading1" color="brand1">
                strive on
              </Text>{' '}
              turning your concepts and ideas into{' '}
              <Text as="span" type="heading1" color="brand1">
                reality
              </Text>{' '}
              through creative project development.
            </Text>
            <Text type="body1" color="grey2">
              I am a committed developer driven by a passion for continuous
              learning and a diverse background that has enriched my skills and
              perspective. In 2023, seeking a new challenge, I decided to pivot
              towards Full-Stack web development and enrolled in the Kenzie
              Academy Brazil. This immersive experience equipped me with a
              comprehensive skill set, including HTML, CSS, Javascript,
              Typescript, Python, and various other tools encompassing both
              Front-end and Back-end development. I now possess the capability
              to create compelling and efficient web applications seamlessly. My
              journey reflects a commitment to growth, adaptability, and a
              continuous pursuit of excellence. Although my journey commenced in
              2009 in Canada through an exchange program, honing my English and
              interpersonal skills. In 2011, I embarked on a transformative
              chapter by moving to Germany, where I spent over a decade. During
              this time, I not only acquired proficiency in German but also
              expanded my cultural understanding by working with diverse
              communities. My academic pursuit led me to Philology, a field
              centered on the study of languages, reflecting my intrinsic
              fascination with communication and connection. Over five years, I
              worked as a personal assistant at Voleatech GmbH, fostering a keen
              interest in programming and IoT To this day, I contribute to
              language education as a part-time teacher, guiding others in
              refining their language skills in English, German, Spanish, and
              Portuguese.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                See Projects
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ '&:hover': { color: '$grey1' } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                My projects
              </Text>
              <Text as="p" type="body1" color="grey2">
                Some of my{' '}
                <Text as="span" color="brand5">
                  side projects
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
