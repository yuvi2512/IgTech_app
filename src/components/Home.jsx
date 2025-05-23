import {
  Box,
  Container,
  Typography,
  Button,
  InputBase,
  IconButton,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Rating,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Features from "../components/features";
import Accordion from "../components/Accordion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PaymentIcon from "@mui/icons-material/Payment";
import GoogleIcon from "@mui/icons-material/Google";
import CloudIcon from "@mui/icons-material/Cloud";

function Home() {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#f0f4f9", py: 6 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography variant="h6" component="div" sx={{ color: "black" }}>
              Landguru
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Button>Home</Button>
              <Button>Advertise</Button>
              <Button>Supports</Button>
              <Button>Contact</Button>
              <Button variant="contained" sx={{ bgcolor: "#ff9f1c" }}>
                Try For Free
              </Button>
            </Box>
          </Box>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Rating
                value={4}
                readOnly
                precision={0.5}
                size="small"
                sx={{ color: "black" }}
              />{" "}
              <Typography sx={{ color: "black" }}>
                Trusted by over 4,332 students
              </Typography>
              <Typography
                variant="h3"
                fontWeight={700}
                gutterBottom
                sx={{ color: "black" }}
              >
                Learn Design with Nia Matos
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 480, mb: 3 }}
              >
                Get your blood tests delivered at let home collect sample from
                the victory of the managements that supplies best design system
                guidelines ever.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "white",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  width: "fit-content",
                }}
              >
                <InputBase placeholder="Search Course Name" fullWidth />
                <IconButton type="submit">
                  <SearchIcon />
                </IconButton>
              </Box>
              <Box sx={{ mt: 2, display: "flex", gap: 2, color: "black" }}>
                Sponsored by :
                <PaymentIcon sx={{ fontSize: 32, color: "text.secondary" }} />
                <GoogleIcon sx={{ fontSize: 32, color: "text.secondary" }} />
                <CloudIcon sx={{ fontSize: 32, color: "text.secondary" }} />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", pl: 4 }}>
                <video
                  src="/vid1.mp4"
                  controls
                  autoPlay
                  loop
                  style={{ width: "100%", borderRadius: 12 }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 6, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            color="orange"
            display="block"
            gutterBottom
            sx={{ml:65}}
          >
            Quality Features
          </Typography>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="black"   sx={{ml:40}}>
            Tutorials that people love most
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Carousel showThumbs={false} infiniteLoop autoPlay>
              {[
                {
                  title: "How to work with prototype design with adobe",
                  rating: 5,
                  image: "/img1.jpg",
                },
                {
                  title: "Create multiple artboard by using figma",
                  rating: 4,
                  image: "/img2.jpg",
                },
                {
                  title: "Convert your web layout theming easily",
                  rating: 5,
                  image: "/img1.jpg",
                },
              ].map((tutorial, i) => (
                <Card key={i} sx={{ maxWidth: 345, margin: "auto" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={tutorial.image}
                      alt={tutorial.title}
                    />
                    <CardContent>
                      <Rating
                        value={tutorial.rating}
                        readOnly
                        precision={0.5}
                        size="small"
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                      >
                        {tutorial.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Carousel>
          </Box>
        </Container>
      </Box>

      <Features />
      <Accordion />
    </Box>
  );
}

export default Home;
