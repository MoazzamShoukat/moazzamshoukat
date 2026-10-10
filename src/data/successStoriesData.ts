export interface SuccessStory {
  id: string;
  name: string;
  category: "IELTS" | "PTE" | "NAATI CCL" | "Canada PR" | "Australia PR" | "Student Visa";
  title: string;
  achievement: string;
  targetBadge: string;
  date: string;
  city: string;
  scoreBreakdown?: {
    overall: string;
    sections: { label: string; score: string }[];
  };
  testimonial: string;
  keyTakeaway: string;
}

export const successStoriesData: SuccessStory[] = [
  {
    id: "hamza-ielts-band-8-5",
    name: "Hamza Tariq",
    category: "IELTS",
    title: "IELTS Academic Band 8.5 on First Attempt",
    achievement: "Overall Band 8.5 (Listening: 9.0, Reading: 8.5, Speaking: 8.5, Writing: 7.5)",
    targetBadge: "Band 8.5 Achieved",
    date: "August 2026",
    city: "Lahore, Pakistan",
    scoreBreakdown: {
      overall: "8.5",
      sections: [
        { label: "Listening", score: "9.0" },
        { label: "Reading", score: "8.5" },
        { label: "Speaking", score: "8.5" },
        { label: "Writing", score: "7.5" }
      ]
    },
    testimonial: "I was stuck at 6.5 in writing and speaking for months. Moazzam Sir’s 1-on-1 feedback on task-response structures and mock speaking diagnostics helped me jump straight to 8.5 overall. His templates actually work without sounding artificial.",
    keyTakeaway: "Targeted lexical structures and daily speech drills eliminated hesitation within 3 weeks."
  },
  {
    id: "ayesha-pte-86-superior",
    name: "Ayesha Malik",
    category: "PTE",
    title: "PTE Academic 86/90 — Max 20 Points for Australia PR",
    achievement: "Overall 86 (Speaking: 90, Listening: 88, Reading: 84, Writing: 82)",
    targetBadge: "Superior English (+20 PR Pts)",
    date: "July 2026",
    city: "Islamabad, Pakistan",
    scoreBreakdown: {
      overall: "86",
      sections: [
        { label: "Speaking", score: "90" },
        { label: "Listening", score: "88" },
        { label: "Reading", score: "84" },
        { label: "Writing", score: "82" }
      ]
    },
    testimonial: "Because of Moazzam's software & AI engineering background, he understands the Pearson computerized scoring engine better than anyone. His pronunciation rhythm adjustments boosted my speaking score from 68 to a perfect 90.",
    keyTakeaway: "Acoustic stress control and Write From Dictation memorization strategies secured Superior English."
  },
  {
    id: "bilal-naati-ccl-76",
    name: "Bilal Ahmed",
    category: "NAATI CCL",
    title: "NAATI CCL Urdu Passed with 76/90 Points",
    achievement: "Dialogue 1: 38/45 | Dialogue 2: 38/45 (Total 76/90)",
    targetBadge: "Claimed +5 PR Points",
    date: "September 2026",
    city: "Karachi, Pakistan",
    scoreBreakdown: {
      overall: "76/90",
      sections: [
        { label: "Dialogue 1 (Medical)", score: "38/45" },
        { label: "Dialogue 2 (Legal)", score: "38/45" }
      ]
    },
    testimonial: "Those 5 points from NAATI CCL made all the difference in my Australian Subclass 190 EOI. Moazzam’s vocabulary glossaries and note-taking symbol techniques made interpreting technical dialogues effortless.",
    keyTakeaway: "Zero distortion and omission error mitigation through rigorous mock recordings."
  },
  {
    id: "usman-australia-pr-190",
    name: "Usman Raza (Software Engineer)",
    category: "Australia PR",
    title: "Australia Subclass 190 PR Visa Grant (Victoria)",
    achievement: "ACS Positive Skills Assessment + 95 GSM Points + Fast Grant",
    targetBadge: "Permanent Residency Granted",
    date: "June 2026",
    city: "Lahore, Pakistan",
    testimonial: "Moazzam handled both my ACS skills assessment reference letters and points calculation. When other consultants gave conflicting advice, his data-driven strategy and timeline tracking got me Victoria's invitation within 4 months.",
    keyTakeaway: "Accurate ANZSCO 261313 mapping and bulletproof employer duty letters prevented RPL deduction."
  },
  {
    id: "zainab-canada-express-entry",
    name: "Zainab Fatima",
    category: "Canada PR",
    title: "Canada PR Express Entry Category-Based STEM Draw",
    achievement: "CRS 492 • ITA Lodged & CoPR Issued in 5 Months",
    targetBadge: "Confirmation of PR (CoPR)",
    date: "May 2026",
    city: "Rawalpindi, Pakistan",
    testimonial: "From WES credential verification to maximizing my CLB 10 language scores and post-ITA documentation, Moazzam guided every single form. I landed in Toronto with zero delays.",
    keyTakeaway: "Targeting Category-Based Selection for STEM professionals avoided high general cutoffs."
  },
  {
    id: "daniyal-australia-student-visa",
    name: "Daniyal Shah",
    category: "Student Visa",
    title: "Australia Master’s Visa (Subclass 500) Approved",
    achievement: "University of New South Wales (UNSW) • Master of Data Science",
    targetBadge: "Visa Approved in 14 Days",
    date: "September 2026",
    city: "Faisalabad, Pakistan",
    testimonial: "With strict new Genuine Student (GS) guidelines, crafting a strong academic intent statement is essential. Moazzam crafted an exceptional GS statement connecting my past degree with future career outcomes.",
    keyTakeaway: "Robust Genuine Student (GS) narrative and airtight financial disclosure ensured zero queries."
  },
  {
    id: "maryam-pte-82-healthcare",
    name: "Dr. Maryam Khan",
    category: "PTE",
    title: "PTE Academic 82 for Australian Medical Council Registration",
    achievement: "All 4 Bands 80+ in 4 Weeks of Intensive 1-on-1 Coaching",
    targetBadge: "Medical Council Target Cleared",
    date: "April 2026",
    city: "Lahore, Pakistan",
    scoreBreakdown: {
      overall: "82",
      sections: [
        { label: "Speaking", score: "86" },
        { label: "Listening", score: "80" },
        { label: "Reading", score: "82" },
        { label: "Writing", score: "81" }
      ]
    },
    testimonial: "As a busy medical doctor, I couldn't attend regular academy classes. Moazzam’s tailored night sessions and targeted template feedback helped me secure 80+ across every module on my very first attempt.",
    keyTakeaway: "Private flexible scheduling and high-yield question practice."
  },
  {
    id: "saad-canada-student-visa",
    name: "Saad Sheikh",
    category: "Student Visa",
    title: "Canada Study Permit (Seneca Polytechnic Toronto)",
    achievement: "Post-Graduate Certificate with Spouse Open Work Permit Approval",
    targetBadge: "Dual Visa Approved",
    date: "August 2026",
    city: "Lahore, Pakistan",
    testimonial: "Filing study permits with spouse accompaniment can be risky. Moazzam structured our dual application and tied ties to our home country seamlessly. Both our visas were stamped without any interview.",
    keyTakeaway: "Transparent financial justification and dual study-work synergy documentation."
  }
];
