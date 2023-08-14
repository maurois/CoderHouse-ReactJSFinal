import { Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container sx={{ display: 'flex', flexGrow: 1, flexDirection:'column', alignItems: 'center' }}>
      <Typography variant="h4">404</Typography>
      <Typography variant="h5">Page Not Found</Typography>
      <Typography variant="body">Creo que nos perdimos...</Typography>
      <Typography variant="body">Mejor volvamos</Typography>
    </Container>
  );
}

export default NotFound;