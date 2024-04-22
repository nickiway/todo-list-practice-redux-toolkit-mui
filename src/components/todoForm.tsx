// * general
import { ChangeEvent, FormEvent } from 'react';

// * state
import { useAppDispatch } from '../redux/store';
import { add } from '../redux/slices/todosSlice';

// * hooks
import { useState } from 'react';

// * models
import TodoObjectModel from '../models/TodoObjectModel';

// * utils
import { generateUId } from '../utils/id';

// * components
import { Button, Input, Box, Typography, Stack } from '@mui/material';

// * types

export const TodoForm = () => {
  const [title, setTitle] = useState<string>('');
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = new TodoObjectModel(
      generateUId(),
      title,
      new Date(new Date().getTime() + 3600 * 1000),
    );

    if (title.length === 0) return;

    dispatch(add(newTodo));

    // reset input value
    setTitle('');
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <Box>
      <header>
        <Typography variant="h5">My todo list</Typography>
      </header>
      <form onSubmit={onSubmit}>
        <Stack spacing={2}>
          <div>
            <Input
              autoFocus
              fullWidth
              name="title"
              type="text"
              placeholder="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>

          <div>
            <Button fullWidth type="submit" variant="outlined">
              Submit todo
            </Button>
          </div>
        </Stack>
      </form>
    </Box>
  );
};
