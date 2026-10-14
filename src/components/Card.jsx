import {
  CardWrapper,
  CardGroup,
  CardTopic,
  CardLink,
  CardContent,
  CardTitle,
  CardDate,
} from "./Card.styled";

function Card({ card }) {
  const topicToColor = {
    "Web Design": "orange",
    Research: "green",
    Copywriting: "purple",
  };

  return (
    <CardWrapper>
      <CardGroup>
        <CardTopic $topic={card.topic} $color={topicToColor[card.topic]}>
          <p>{card.topic}</p>
        </CardTopic>

        <CardLink href="#" onClick={(event) => event.preventDefault()}>
          <div />
          <div />
          <div />
        </CardLink>
      </CardGroup>

      <CardContent>
        <CardTitle>{card.title}</CardTitle>

        <CardDate>
          <p>{card.date}</p>
        </CardDate>
      </CardContent>
    </CardWrapper>
  );
}

export default Card;