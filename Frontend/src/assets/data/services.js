import burn from '../images/Burn.jpg';
import cancer from '../images/cancer.jpg';
import heart from '../images/heart.jpg';
import labour from '../images/labour.jpg';
import mind from '../images/neurology.png';
import mind2 from '../images/mind2.png';
import MriDiagnosis from "../../pages/MriDiagnosis";



export const services = [
  {
    name: "Neurology",
    desc: "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
    bgColor: "rgba(254, 182, 13, .2)",
    textColor: "#FEB60D",
    img: mind,
    link: MriDiagnosis,
  },
  {
    name: "Cancer Care",
    desc: "Access personalized care plans and ongoing support to navigate your cancer journey with confidence and compassion.",
    bgColor: "rgba(254, 182, 13, .2)",
    textColor: "#FEB60D",
    img: cancer,
  },
  {
    name: "Labor & Delivery",
    desc: "Experience comprehensive support and personalized attention to ensure a safe and positive birth experience.",
    bgColor: "rgba(151, 113, 255, .2)",
    textColor: "#9771FF",
    img: labour,
  },
  {
    name: "Heart & Vascular",
    desc: "Trust our expertise for comprehensive heart health management and innovative solutions.",
    bgColor: "rgba(1, 181, 197, .2)",
    textColor: "#01B5C5",
    img: heart,
  },
  {
    name: "Mental Health",
    desc: "Receive specialized care and advanced therapies to manage and improve neurological health.",
    bgColor: "rgba(1, 181, 197, .2)",
    textColor: "#01B5C5",
    img: mind2,
  },
  {
    name: "Burn Treatment",
    desc: "Access advanced therapies to promote healing and recovery from burn injuries.",
    bgColor: "rgba(151, 113, 255, .2)",
    textColor: "#9771FF",
    img: burn,
  },
];
