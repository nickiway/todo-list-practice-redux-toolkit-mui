// * hooks
import { useAppSelector } from '../redux/store';

// * components
import { TodoItem } from './todoItem';
import { Box, Grid } from '@mui/material';

// * models

//* todo list
export const TodoList = () => {
  const todos = useAppSelector((state) => state.todosReducer.storage);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} width={'100%'}>
        {todos.map((item) => (
          <Grid key={item.uniqueKey} item xs={12} md={4}>
            <TodoItem todoInstance={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
