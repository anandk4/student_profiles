/* ==========================================================================
   Department of Artificial Intelligence — Student Directory data
   ==========================================================================
   This is the single list that drives BOTH the "Featured Students" section
   and the full "Student Directory" on students.html and index.html.

   HOW A STUDENT ADDS THEIR OWN PAGE
   ----------------------------------
   1. Go to the "students/pages/" folder and copy "template.html".  
   2. Rename your copy to a short id with no spaces, e.g. "priya-singh.html"
      (use lowercase letters, numbers and hyphens only).
   3. Open your new file and replace the placeholder text with your own 
      information (batch, bio, programming skills, reasoning skills, 
      hobbies, area you'd like to explore, contact).
   4. Add your photo (see PHOTOS below), then come back to THIS file and
      add one new object to the STUDENTS_DATA array (copy an existing entry
      as a starting point), then set:
         slug:     "priya-singh"      <- must match your filename exactly
         hasPage:  true                <- makes your card clickable
   5. Save. Your card will now appear automatically on the Students page
      (and in Featured Students, if you set a "rank") and will link
      straight to the page you created in step 3.

   PHOTOS
   ----------------------------------
   Put your photo file in the "students/photos/" folder, named to match
   your slug — e.g. "students/photos/priya-singh.jpg". Then set the
   "photo" field below to that path, e.g. "students/photos/priya-singh.jpg". 
   Square photos (at least 300x300px) look best. If you leave "photo" as
   an empty string "", the site automatically shows a colored circle with
   your initials instead — no photo required.

   On your own profile page (students/pages/priya-singh.html) the image
   tag already points to "../photos/priya-singh.jpg" — just make sure your
   file name matches.

   FIELD REFERENCE
   ----------------------------------
   slug        - filename (without .html) inside students/pages/
   name        - full name shown on the card
   initials    - 1-3 letters shown when there is no photo
   photo       - path to photo from the site root, e.g.
                 "students/photos/priya-singh.jpg", or "" for no photo
   batch       - a short code for the batch filter, e.g. "2025"
                 (add a new code once a second batch joins the programme)
   batchLabel  - text shown under the name, e.g. "Batch 2025 – 2029"
   rank        - number 1-9 to feature in "Featured Students", or null
   hasPage     - true once the student has created their own page (step 3-4)
   ========================================================================== */

var STUDENTS_DATA = [
  { slug: "vansh-saini", name: "Vansh Saini", initials: "S1", photo: "students/photos/Vansh-Saini.JPEG", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 1, hasPage: true },
  { slug: "Yash-raj", name: "Yash Raj", initials: "S2", photo: "students/photos/yash_raj.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 2, hasPage: true },
  { slug: "Ashutosh-Singh", name: "Ashutosh Singh", initials: "S3", photo: "students/photos/ashutosh-singh.jpg.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 3, hasPage: true },
  { slug: "Abhinandan-kumar", name: "Abhinandan Kumar", initials: "S4", photo: "students/photos/Abhinandan-Kumar.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 2, hasPage: true },
  { slug: "Syed-Amaan", name: "Syed Amaan", initials: "S5", photo: "students/photos/syed-amaan-raza.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 4, hasPage: true },
  { slug: "Shubh-Pathak", name: "Shubh Pathak", initials: "S6", photo: "students/photos/Shubh-Pathak.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 5, hasPage: true },
  { slug: "om-kartike", name: "Om kartike", initials: "S7", photo: "students/photos/Om -kartike.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 7, hasPage: true },
  { slug: "Akhil-Bharti", name: "Akhil Bharti", initials: "S8", photo: "students/photos/Akhil-Bharti.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 8, hasPage: true },
  { slug: "Ansh-Gupta", name: "Ansh Gupta", initials: "S9", photo: "students/photos/Ansh Gupta.png", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 9, hasPage: true },
  { slug: "Soniya-Sharma", name: "Soniya Sharma", initials: "S10", photo: "students/photos/Soniya-Sharma.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 10, hasPage: true },
  { slug: "Priyanshu-kundan", name: "Priyanshu Kundan", initials: "S11", photo: "students/photos/Priyanshu-Kundan.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 11, hasPage: true },
  { slug: "Nikhil-Rathour", name: "Nikhil Rathour", initials: "S12", photo: "students/photos/Nikhil-Rathour.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 12, hasPage: true },
  { slug: "Prashant", name: "Prashant", initials: "S13", photo: "students/photos/Prashant.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 13, hasPage: true },
  { slug: "rishu-raj", name: "Rishu Raj", initials: "S14", photo: "students/photos/rishu-raj.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 14, hasPage: true},
  { slug: "Hardik-Tiwari", name: "Hardik Tiwari", initials: "S15", photo: "students/photos/Hardik-Tiwari.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 15, hasPage: true},
  { slug: "Abhinandan-kumar", name: "Abhinandan Kumar", initials: "S16", photo: "students/photos/Abhinandan-kumar.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 16, hasPage: true},
  { slug: "nandini_singh_rathor", name: "Nandini Singh Rathore", initials: "S17", photo: "students/photos/Nandini-singh-rathore.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 17, hasPage: true},
  { slug: "utsav", name: "Utsav", initials: "S18", photo: "students/photos/Utsav.png", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 18, hasPage: true},
  { slug: "Vishal", name: "Vishal", initials: "S19", photo: "students/photos/vishal.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 19, hasPage: true},
  { slug: "Aankhein", name: "Aankhein", initials: "S20", photo: "students/photos/aankhein.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 20, hasPage: true},
  { slug: "Roshan_Pandey", name: "Roshan Pandey", initials: "S21", photo: "students/photos/Roshan_pandey.png", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 21, hasPage: true},
  { slug: "Ankit_yadav", name: "Ankit Yadav", initials: "S22", photo: "students/photos/ankit.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 22, hasPage: true},
  { slug: "Prince", name: "Prince", initials: "S23", photo: "students/photos/prince.png", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 23, hasPage: true},
  { slug: "Krish", name: "Krish", initials: "S24", photo: "students/photos/krish.png", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 24, hasPage: true},
  { slug: "Kartikesh-kumar-jha", name: "Kartikesh Kumar Jha", initials: "S25", photo: "students/photos/kartikesh-kr-jha.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 25, hasPage: true},
  { slug: "Aaditya-Choudhary", name: "Aaditya Choudhary", initials: "S26", photo: "students/photos/aaditya-choudhary.png", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 26, hasPage: true},
  { slug: "Rohittiwari", name: "Rohit Tiwari", initials: "S27", photo: "students/photos/rohittiwari.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 27, hasPage: true},
  { slug: "Gautam_Kumar_", name: "Gautam Kumar", initials: "S28", photo: "students/photos/gautam_ kumar.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 28, hasPage: true},
  { slug: "Saksham-Mishra", name: "Saksham Mishra", initials: "S29", photo: "students/photos/saksham-mishra.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 29, hasPage: true},
  { slug: "Muhammad-Ayaz", name: "Muhammad Ayaz", initials: "S30", photo: "students/photos/Muhammad-ayaz.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 30, hasPage: true},
  { slug: "Ritik_Singh", name: "Ritik Singh", initials: "S31", photo: "students/photos/ritik_singh.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 31, hasPage: true},
  { slug: "Akshit-Singh", name: "Akshit Singh", initials: "S32", photo: "students/photos/akshit-singh.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 32, hasPage: true},
  { slug: "Aryan-Tomar", name: "Aryan Tomar", initials: "S33", photo: "students/photos/aryan-tomar.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 33, hasPage: true},
  { slug: "Shaksham-Sharma", name: "Shaksham Sharma", initials: "S34", photo: "students/photos/shaksham-sharma.png", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 34, hasPage: true},
  { slug: "tejas", name: "Tejas ", initials: "S34", photo: "students/photos/Tejas-naruka.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 35, hasPage: true},
  { slug: "Anand-kumar", name: "Anand Kumar ", initials: "S34", photo: "students/photos/Anand-kumar.png", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 36, hasPage: true},
  { slug: "vibhor-jaiswal", name: "Vibhor Jaiswal ", initials: "S34", photo: "students/photos/vibhor-jaiswal.png", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 37, hasPage: true},
  { slug: "HARSH-SOLANKI", name: "Harsh Solanki ", initials: "S35", photo: "students/photos/Harsh-solanki.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 38, hasPage: true},
  { slug: "Bhavya-A Agarwal", name: "Bhavya A Agarwal", initials: "S36", photo: "students/photos/", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 39, hasPage: true}
  
