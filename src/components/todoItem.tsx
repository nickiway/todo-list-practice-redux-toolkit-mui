// * state
import { useAppDispatch } from '../redux/store';
import { toggleStatus } from '../redux/slices/todosSlice';

// * models
import { styled } from '@mui/material/styles';
import TodoObjectModel from '../models/TodoObjectModel';

// * hooks

// * components
import {
  Card,
  CardContent,
  Typography,
  createTheme,
  ThemeProvider,
  Box,
  Stack,
  Checkbox,
} from '@mui/material';

import { CardProps } from '@mui/material';
import { green, red } from '@mui/material/colors';

interface CustomCardProps {
  isCompleted: boolean;
}

const CustomCard = styled(Card)<CustomCardProps & CardProps>(
  ({ isCompleted }) => ({
    backgroundColor: isCompleted ? green[200] : red[200],
  }),
);

const theme = createTheme({
  components: {
    MuiTypography: {},
  },
});

export const TodoItem = ({
  todoInstance,
}: {
  todoInstance: TodoObjectModel;
}) => {
  const dispatch = useAppDispatch();

  const { deadline, status, title, uniqueKey } = todoInstance;

  const toggleCard = () => {
    dispatch(toggleStatus(uniqueKey));
  };

  return (
    <ThemeProvider theme={theme}>
      <CustomCard isCompleted={status}>
        <CardContent>
          <Stack direction="row">
            <Checkbox checked={status} onClick={toggleCard} />

            <Box>
              <Typography variant="h6">{title}</Typography>

              <Typography variant="caption">
                {deadline.toLocaleTimeString()}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </CustomCard>
    </ThemeProvider>
  );
};
