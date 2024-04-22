// * utils

// * general
import { Provider } from 'react-redux';

// * components
import { TodoList } from './components/todoList';
import { TodoForm } from './components/todoForm';
import { Container, ThemeProvider, createTheme } from '@mui/material';

// * models

// * state manager
import { store } from './redux/store';

// * types

// * initialized theme
let theme = createTheme({
  palette: {
    primary: {
      main: '#447829',
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
        },
      },
    },
  },
});

// * app
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Provider store={store}>
          <section>
            {/* form */}
            <TodoForm />
          </section>

          <section style={{ margin: '20px 0' }}>
            {/* list */}
            <TodoList />
          </section>
        </Provider>
      </Container>
    </ThemeProvider>
  );
};
