import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
  ButtonGroup,
  Tabs,
  Tab,
  Paper,
  CardMedia,
  CardActionArea,
  Rating,
} from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { styled } from "@mui/material/styles";
import { useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "200px",
  margin: theme.spacing(2),
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
  },
}));

const FeatureItem = ({ number, text }) => (
  <Grid item xs={12} md={3} textAlign="center">
    <Typography variant="h5" fontWeight="bold" color="primary">
      {number < 10 ? `0${number}` : number}
    </Typography>
    <Typography mt={2} color="black">
      {text}
    </Typography>
  </Grid>
);

const PlanCard = ({ title, price, features, buttonText, recommended }) => (
  <Paper
    elevation={recommended ? 6 : 2}
    sx={{
      p: 3,
      borderRadius: 4,
      border: recommended ? "2px solid #00c897" : "1px solid #e0e0e0",
      position: "relative",
      backgroundColor: recommended ? "#f9fffc" : "#fff",
    }}
  >
    {recommended && (
      <Chip
        label="Recommended"
        color="warning"
        size="small"
        sx={{ position: "absolute", top: 5, left: 16 }}
      />
    )}
    <Typography variant="h6" fontWeight="bold" mb={1}>
      {title}
    </Typography>
    {price && (
      <Typography color="primary" fontWeight="bold" mb={2}>
        Starting from {price}
      </Typography>
    )}
    <Box display="flex" flexDirection="column" gap={1} mb={3}>
      {features.map((f, i) => (
        <Box key={i} display="flex" alignItems="center" gap={1}>
          <CheckCircleIcon fontSize="small" color="success" />
          <Typography>{f}</Typography>
        </Box>
      ))}
    </Box>
    <Button
      variant={recommended ? "contained" : "outlined"}
      fullWidth
      sx={{
        mt: 4,
        backgroundColor: "#FEECDC",
        color: "#F88A12",
        textTransform: "none",
        borderRadius: 2,
      }}
    >
      {buttonText}
    </Button>
  </Paper>
);

const courses = [
  {
    title:
      "Professional graphic design tutorial full course with exercise file",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    rating: 5,
    reviews: 392,
    students: 2538,
    videos: 7,
    duration: "4 hrs",
    highlights: [],
  },
  {
    title: "Become ultimate photoshop expert within 30 days",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    rating: 4,
    reviews: 392,
    students: 2538,
    videos: 7,
    duration: "4 hrs",
    highlights: [
      "How to reduce file pixel dimentions without loosing quality",
      "Create vector file from restarize layer styles",
      "How to make logo pixel perfects with different extension",
      "Make color gradient with photoshop build-in tools",
    ],
  },
  {
    title: "After effects animation tutorial with photoshop documents",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    rating: 3,
    reviews: 392,
    students: 2538,
    videos: 7,
    duration: "4 hrs",
    highlights: [],
  },
  {
    title: "Adobe illustrator vector art design mockup",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    rating: 5,
    reviews: 392,
    students: 2538,
    videos: 7,
    duration: "4 hrs",
    highlights: [],
  },
];

const features = [
  "Ultimate access to all course, exercises and assessments",
  "Free access for all kind of exercise corrections with downloads.",
  "Total assessment corrections with free download access system",
  "Unlimited download of courses on the mobile app contents",
  "Download and print courses and exercise in PDF",
];

const CourseCard = ({ course }) => (
  <Card sx={{ display: "flex", mb: 2, p: 2, alignItems: "flex-start", gap: 2 }}>
    <PlayCircleFilledIcon sx={{ fontSize: 50, color: "orange" }} />
    <CardContent sx={{ flex: 1 }}>
      <Box display="flex" alignItems="center" gap={1}>
        <Rating value={course.rating} readOnly size="small" />
        <Typography variant="body2">({course.reviews} reviews)</Typography>
        <VisibilityIcon fontSize="small" sx={{ ml: 2 }} />
        <Typography variant="body2">
          {course.students} students watched
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ mt: 1 }}>
        {course.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {course.description}
      </Typography>
      {course.highlights.length > 0 && (
        <Grid container spacing={1}>
          {course.highlights.map((point, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center" }}
              >
                ✓ {point}
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </CardContent>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minWidth={150}
    >
      <ButtonGroup
        variant="contained"
        aria-label="Basic button group"
        color="success"
      >
        <Button>{course.videos} Video Classes</Button>
        <Button>{course.duration}</Button>
      </ButtonGroup>
    </Box>
  </Card>
);

function Features() {
  const nextSectionRef = useRef(null);

  const handleScroll = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Grid container spacing={5} sx={{ bgcolor: "#f2f6f7ff", padding: 5 }}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledCard sx={{ mt: 10 }}>
                <CardContent>
                  <Typography
                    variant="h3"
                    align="center"
                    color="orange"
                    gutterBottom
                  >
                    80k +
                  </Typography>
                  <Typography variant="body2" align="center">
                    We have more than students
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledCard>
                <CardContent>
                  <Typography
                    variant="h3"
                    align="center"
                    color="red"
                    gutterBottom
                  >
                    150+
                  </Typography>
                  <Typography variant="body2" align="center">
                    Free Online tutorial videos available
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledCard sx={{ mt: 10 }}>
                <CardContent>
                  <Typography
                    variant="h3"
                    align="center"
                    color="pink"
                    gutterBottom
                  >
                    90+
                  </Typography>
                  <Typography variant="body2" align="center">
                    Daily updated blog post maintain
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledCard>
                <CardContent>
                  <Typography
                    variant="h3"
                    align="center"
                    color="purple"
                    gutterBottom
                  >
                    & 3M
                  </Typography>
                  <Typography variant="body2" align="center">
                    Job posted everydays with qualifications
                  </Typography>
                </CardContent>
              </StyledCard>
              <KeyboardArrowDownIcon
                onClick={handleScroll}
                sx={{
                  fontSize: 40,
                  cursor: "pointer",
                  color: "#F88A12",
                  ml: 30,
                  pt: 5,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom color="orange">
            Core Features
          </Typography>
          <Typography variant="h5" color="black">
            Smart Jackpots that you may love this anytime & anywhere
          </Typography>
          <Typography variant="body1" color="black" sx={{ mt: 2 }}>
            Get your test delivered at let home collect samples from the victory
            of the management that supplies best design system guidelines
            ever.Get your test delivered at let home collect samples
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 4,
              backgroundColor: "#FEECDC",
              color: "#F88A12",
            }}
          >
            Explore details
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ p: 4, bgcolor: "white" }} ref={nextSectionRef}>
        <Typography
          variant="subtitle2"
          color="orange"
          gutterBottom
          sx={{ ml: 65 }}
        >
          QUALITY FEATURES
        </Typography>
        <Typography variant="h6" gutterBottom color="black" sx={{ ml: 60 }}>
          Popular Designing Course
        </Typography>
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </Box>

      <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9fbfd" }}>
        <Box textAlign="center" mb={8}>
          <Typography variant="overline" color="primary">
            What’s the function
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb={4} color="black">
            Let’s see how it works
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[1, 2, 3, 4].map((num) => (
              <FeatureItem
                key={num}
                number={num}
                text="Get your blood tests delivered at home collect a sample from the your blood tests."
              />
            ))}
          </Grid>
        </Box>

        <Box textAlign="center" mb={4}>
          <Typography variant="overline" color="primary">
            Pricing Plan
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb={2} color="black">
            Choose your pricing policy
          </Typography>
          <Tabs value={0} centered>
            <Tab label="Monthly Plan" />
            <Tab label="Annual Plan" />
          </Tabs>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={5}>
            <PlanCard
              title="Free Plan"
              features={features}
              buttonText="Start free trial"
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <PlanCard
              title="Premium"
              price="49.99/mo"
              features={features}
              buttonText="Subscribe Now"
              recommended
            />
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={5} sx={{ bgcolor: "#f2f6f7ff", padding: 5 }}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
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
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom color="orange">
            Free Tutorial
          </Typography>
          <Typography variant="h5" color="black">
            More than thousand of free tutorials upload every weeks
          </Typography>
          <Typography variant="body1" color="black" sx={{ mt: 2 }}>
            Get your test delivered at let home collect samples from the victory
            of the management that supplies best design system guidelines
            ever.Get your test delivered at let home collect samples
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 4,
              backgroundColor: "#FEECDC",
              color: "#F88A12",
            }}
          >
            Explore details
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Features;
