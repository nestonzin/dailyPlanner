import { Text } from "@chakra-ui/react";

interface GreetingProps {
  user: string;
}
const Greeting = ({ user }: GreetingProps) => {
  const date = new Date();
  const hours = date.getUTCHours();
  let greeting = "";

  if (hours >= 6 && hours < 12) {
    greeting = "Bom dia";
  } else if (hours >= 12 && hours < 19) {
    greeting = "Boa tarde";
  } else {
    greeting = "Boa noite";
  }
  const daysOfWeek = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  return (
    <>
      <Text fontWeight="bold">
        {greeting}, {user}
      </Text>
      <Text fontWeight="thin">
        hoje é {dayOfWeek} {day} de {month} de {year}
      </Text>
    </>
  );
};

export default Greeting;
