import { Box } from "@material-ui/core";

interface IWelcomeMessageProps {
  position: String;
  country?: String;
}
const WelcomeMessage = ({
  position,
  country = "Vietnam",
}: IWelcomeMessageProps) => {
  return (
    <Box mb={1}>
      Welcome {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;
