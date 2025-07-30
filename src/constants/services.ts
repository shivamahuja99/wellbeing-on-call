// src/constants/services.ts

export interface Service {
  key: string;
  name: string;
  description: string;
  image: string;
}

import trainedImg from "@/assets/Trained_Attendants.png";
import nursingImg from "@/assets/nursing_care.png";
import babyImg from "@/assets/mother_baby_care.svg";
import physiotherapyImg from "@/assets/Physiotherapy.png";
import medicalEquipmentImg from "@/assets/medicalEquipmentImg.jpg";
import criticalCareImg from "@/assets/criticalCareImg.jpg";
import labTestsImg from "@/assets/labTestsImg.jpg";
import elderCareImg from "@/assets/elder_care.png";


export const SERVICES: Service[] = [
  {
    key: "doctor_consultation",
    name: "Doctor Consultation",
    description: "Expert medical consultations from certified doctors at your doorstep",
    image: trainedImg,
  },
  {key: "mother_baby_care",
     
    image: babyImg,
    name: "Mother & Baby Care",
    description: "Specialized care for new mothers and newborn babies"
  
},
  {
    key: "nursing_care",
    name: "Nursing Care",
    description: "Professional nursing services for post-operative and chronic care",
    image: nursingImg,
  },
  {
    key: "lab_tests",
    name: "Lab Tests",
    description: "Comprehensive diagnostic tests and health screenings at home",
    image: labTestsImg,
  },
  {
    key: "physiotherapy",
    name: "Physiotherapy",
    description: "Expert physiotherapy sessions for recovery and rehabilitation",
    image: physiotherapyImg,
  },
  {
    key: "elder_care",
    name: "Elder Care",
    description: "Compassionate care services for senior citizens",
    image: elderCareImg,
  },
  {
    key: "medical_equipment",
    name: "Medical Equipment",
    description: "Rent or purchase medical equipment and devices",
    image: medicalEquipmentImg,
  },
  {
    key: "general_consultation",
    name: "General Consultation",
    description: "General health consultation for all your needs",
    image: criticalCareImg,
  },
];
