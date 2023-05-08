import eyeExam from "../img/testing.jpg";
import diagnosis from "../img/diagnosis.jpg";
import contactlense from "../img/contactlense.jpg";
import eyewears from "../img/eyewear.jpg";
import familycare from "../img/familycare.jpg";
import eyeinfection from "../img/eyeinfection.jpg";
import clinic1 from "../img/clinic/clinic1.jpg";
import clinic2 from "../img/clinic/clinic5.jpg";
import clinic3 from "../img/clinic/clinic7.jpg";
import gallary1 from "../img/gallary/gallary1.jpg";
import gallary2 from "../img/gallary/gallary2.jpg";
import gallary4 from "../img/gallary/gallary4.jpg";
import gallary5 from "../img/gallary/gallary5.jpg";
import gallary6 from "../img/gallary/gallary6.jpg";
import gallary7 from "../img/gallary/gallary7.jpg";
import gallary9 from "../img/gallary/gallary9.jpg";
import gallary10 from "../img/gallary/gallary10.jpg";
import gallary11 from "../img/gallary/gallary11.jpg";
import gallary12 from "../img/gallary/gallary12.jpg";
import call from "../img/social/call.png";
import fb from "../img/social/fb.webp";
import gmail from "../img/social/gmail.png";
import insta from "../img/social/insta.webp";
import wa from "../img/social/whatsapp.png";
import yt from "../img/social/yt.png";
import exam1 from "../img/exam/exam1.jpg";
import exam2 from "../img/exam/exam2.jpg";
import exam3 from "../img/exam/exam3.jpg";
import exam4 from "../img/exam/exam4.jpg";
import exam5 from "../img/exam/exam5.jpg";
import exam6 from "../img/exam/exam6.jpg";
import exam7 from "../img/exam/exam7.jpg";
import visual from "../img/exam/visual-acuity-test.webp";
import refraction from "../img/exam/refraction-test.jpg";
import muscle from "../img/exam/eye-muscle-test.jpg";
import pressure from "../img/exam/eye-pressure-test.jpg";
import extra from "../img/exam/additional-test.jpg";

export const emailPattern = /\S+@\S+\.\S+/;

export const services = [
  {
    title: "Eye Test",
    url: eyeExam,
  },
  {
    title: "Diagnosis",
    url: diagnosis,
  },
  {
    title: "Contact Lenses",
    url: contactlense,
  },
  {
    title: "Eyewears",
    url: eyewears,
  },
  {
    title: "Family Care",
    url: familycare,
  },
  {
    title: "Eye Infections",
    url: eyeinfection,
  },
];

export const gallaryImages = [
  clinic1,
  clinic2,
  clinic3,
  gallary1,
  gallary2,
  gallary4,
  gallary5,
  gallary6,
  gallary7,
  gallary9,
  gallary10,
  gallary11,
  gallary12,
];

export const socialMedia = [
  {
    imgUrl: fb,
    url: "https://www.facebook.com/842958123gyan",
    color: "#1877f2",
  },
  {
    imgUrl: insta,
    url: "https://instagram.com/gyan.paliwal?igshid=YmMyMTA2M2Y=",
    color: "#db2c78",
  },
  {
    imgUrl: wa,
    url: "https://wa.me/+919727622278",
    color: "#4ecc5c",
  },
  {
    imgUrl: yt,
    url: "https://www.youtube.com",
    color: "#ff0000",
  },
  {
    imgUrl: gmail,
    url: "mailto:deksharma800@gmail.com",
    color: "#ea4335",
  },
  {
    imgUrl: call,
    url: "tel:+919727622278",
    color: "#1b1c1f",
  },
];

export const examImages = [exam1, exam6, exam4, exam7, exam2, exam5, exam3];

export const examTypes = [
  {
    title: "Visual Acuity Test",
    description:
      "This test determines how well the patient can see at different distances and is used to diagnose nearsightedness, farsightedness, and astigmatism.",
    logo: visual,
  },
  {
    title: "Refraction Test",
    description:
      "During this test, we use a Phoropter, a machine with lenses of varying strengths, and ask the patient to look through it while we change the lenses to find the ones that provide the clearest vision.",
    logo: refraction,
  },
  {
    title: "Eye Muscle Test",
    description:
      "This test examines the muscles that control eye movement and alignment. This helps in diagnosing conditions such as strabismus or amblyopia.",
    logo: muscle,
  },
  {
    title: "Eye Pressure Test",
    description:
      "The eye pressure test is used to measure intraocular pressure and detect glaucoma. This is usually done with a puff of air or a gentle touch to the eye.",
    logo: pressure,
  },
  {
    title: "Additional Tests",
    description:
      "Depending on the patient's history and symptoms, We may perform additional tests such as color vision testing or visual field testing.",
    logo: extra,
  },
];
