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
  { slug: "vansh-saini", name: "Vansh Saini", initials: "S1", photo: "students/photos/vansh-saini.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 1, hasPage: true },
  { slug: "yash-raj", name: "Yash Raj", initials: "S2", photo: "", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 2, hasPage: true },
  { slug: "Ashutosh-Singh", name: "Ashutosh Singh", initials: "S3", photo: "students/photos/Ashutosh-Singh.JPEG.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 3, hasPage: true },
  { slug: "Abhinandan-kumar", name: "Abhinandan Kumar", initials: "S4", photo: "students/photos/Abhinandan-Kumar.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 2, hasPage: true },
  { slug: "Syed-Amaan", name: "Syed Amaan", initials: "S5", photo: "students/photos/syed-amaan-raza.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 4, hasPage: true },
  { slug: "Shubh-Pathak", name: "Shubh Pathak", initials: "S6", photo: "students/photos/Shubh-Pathak.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 5, hasPage: true },
  { slug: "om-kartike", name: "Om kartike", initials: "S7", photo: "students/photos/om-kartike.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 7, hasPage: true },
  { slug: "Akhil-Bharti", name: "Akhil Bharti", initials: "S8", photo: "students/photos/Akhil-Bharti.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 8, hasPage: true },
  { slug: "Ansh-Gupta", name: "Ansh Gupta", initials: "S9", photo: "students/photos/Ansh Gupta.png", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 9, hasPage: true },
  { slug: "Soniya-Sharma", name: "Soniya Sharma", initials: "S10", photo: "students/photos/Soniya-Sharma.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 10, hasPage: true },
  { slug: "Priyanshu-Kundan", name: "Priyanshu Kundan", initials: "S11", photo: "students/photos/Priyanshu-Kundan.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 11, hasPage: true },
  { slug: "Nikhil-Rathour", name: "Nikhil Rathour", initials: "S12", photo: "students/photos/Nikhil-Rathour.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 12, hasPage: true },
  { slug: "Prashant", name: "Prashant", initials: "S13", photo: "students/photos/Prashant.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 13, hasPage: true },
  { slug: "rishu-raj", name: "Rishu Raj", initials: "S14", photo: "students/photos/rishu-raj.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 14, hasPage: true},
  { slug: "Hardik-Tiwari", name: "Hardik Tiwari", initials: "S15", photo: "students/photos/Hardik-Tiwari.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 15, hasPage: true},
  { slug: "Abhinandan-kumar", name: "Abhinandan Kumar", initials: "S16", photo: "students/photos/Abhinandan-kumar.jpg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 16, hasPage: true},
  { slug: "Nandini-Singh", name: "Nandini Singh Rathore", initials: "S17", photo: "students/photos/Nandini-singh-rathore.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 17, hasPage: true},
  { slug: "utsav", name: "Utsav", initials: "S18", photo: "students/photos/Utsav.png", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 18, hasPage: true},
  { slug: "Vishal", name: "Vishal", initials: "S19", photo: "students/photos/vishal.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 19, hasPage: true},
  { slug: "Aankhein", name: "Aankhein", initials: "S20", photo: "students/photos/aankhein.jpeg", batch: "2026", batchLabel: "Batch 2026 – 2030, First Year", rank: 20, hasPage: true}
];
