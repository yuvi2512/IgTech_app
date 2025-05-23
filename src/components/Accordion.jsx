import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

const faqItems = [
  {
    question: "How to contact with rider’s emergency?",
    answer:
      "You can contact the rider’s emergency number through the profile or help section in the app.",
  },
  {
    question: "App installation failed, how to update system information?",
    answer:
      "Please check if your device meets the system requirements. Update your OS and try again.",
  },
  {
    question: "Website response taking time, how to improve?",
    answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic. It is used in websites and online forums where questions tend to recur, helping new users overcome knowledge gaps.",
  },
  {
    question: "New update fixed all bugs and issues",
    answer:
      "Yes, the latest update resolves known bugs and improves overall performance.",
  },
];

const AccordionPage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ bgcolor: "white", p: 4 }}>
      <Typography
        variant="overline"
        color="warning.main"
        sx={{ display: "block", textAlign: "center", fontWeight: 600 }}
      >
        Frequent Question
      </Typography>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          textAlign: "center",
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        Do you have any question
      </Typography>

      {faqItems.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{ borderBottom: "1px solid #eee", boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={
              expanded === index ? (
                <RemoveIcon color="primary" />
              ) : (
                <AddIcon color="primary" />
              )
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography sx={{ fontWeight: 500 }}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary" fontSize="14px">
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default AccordionPage;
