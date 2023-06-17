import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider, Container, Grid, Typography } from '@mui/material';
import Footer from './Components/Link/Footer';
import theme from './configuracionMUI/theme';
import SweetAlert from './Components/Link/SweetAlert.js';
import Cards from './Components/Cards/Cards';
import Cines4d from './Components/Main/cines4D';
import Ubicaciones from './Components/Main/ubicaciones';
import Estrenos from './Components/Estrenos/Estrenos';
import styled from '@emotion/styled';

export const Title = styled(Typography)(() => ({
  fontSize: 22,
  marginBottom: 25,
  marginTop: 25,
  textAlign: 'center',
}));

function App() {
  const [data, setData] = useState([]);

  const getMovies = async () => {
    const res = await fetch("http://localhost:3000/funciones").then(res => res.json());
    setData(res);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SweetAlert />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Cartelera</Link>
            </li>
            <li>
              <Link to="/salas">Salas</Link>
            </li>
            <li>
              <Link to="/estrenos">Estrenos</Link>
            </li>
            <li>
              <Link to="/sucursales">Sucursales</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Title id='Cartelera' sx={{ color: '#FF7700' }} gutterBottom>Cartelera</Title>
            <Container sx={{ marginY: 5 }}>
              <Grid container spacing={3}>
                {data.map((pelicula, index) => (
                  <Cards title={pelicula.title} img={pelicula.img} id={pelicula.id} category={pelicula.category} price={pelicula.price} key={index} />
                ))}
              </Grid>
            </Container>
          </Route>

          <Route path="/salas">
            <Title id='Salas' sx={{ color: '#FF7700' }} gutterBottom>Nuestras Salas</Title>
            <Container maxWidth="lg">
              <Cines4d />
            </Container>
          </Route>

          <Route path="/estrenos">
            <Container>
              <Estrenos />
            </Container>
          </Route>

          <Route path="/sucursales">
            <Title id='Sucursales' sx={{ color: '#FF7700' }} gutterBottom>Sucursales</Title>
            <Container maxWidth="lg">
              <Ubicaciones />
            </Container>
          </Route>
        </Switch>
      </Router>

      <div id='Contacto'><Footer /></div>
      </ThemeProvider>
  );
}

export default App;