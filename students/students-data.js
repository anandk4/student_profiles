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
  { slug: "vansh-saini", name: "Vansh Saini", initials: "S1", photo: "students/photos/vansh-saini.jpeg", batch: "2025", batchLabel: "Batch 2025 – 2029, First Year", rank: 1, hasPage: true },
  { slug: "yash-raj", name: "Yash Raj", initials: "S2", photo: "", batch: "2025", batchLabel: "Batch 2025 – 2029, First Year", rank: 2, hasPage: true },
  { slug: "Ashutosh-Singh", name: "Ashutosh Singh", initials: "S3", photo: "students/photos/Ashutosh-Singh.JPEG.jpeg", batch: "2025", batchLabel: "Batch 2025 – 2029, First Year", rank: 3, hasPage: true },
  { slug: "Abhinandan-kumar", name: "Abhinandan Kumar", initials: "S4", photo: "students/photos/Abhinandan-Kumar.jpg", batch: "2025", batchLabel: "Batch 2025 – 2029, First Year", rank: 2, hasPage: true },
  { slug: "student-05", name: "Student Name", initials: "S5", photo: "", batch: "2025", batchLabel: "Batch 2025 – 2029, First Year", rank: null, hasPage: false },
  { slug: "student-06", name: "Student Name", initials: "S6", photo: "", batch: "2025", batchLabel: "Batch 2025 – 2029, First Year", rank: null, hasPage: false },
  { slug: "student-07", name: "Student Name", initials: "S7", photo: "", batch: "2025", batchLabel: "Batch 2025 – 2029, First Year", rank: null, hasPage: false },
  { slug: "student-08", name: "Student Name", initials: "S8", photo: "", batch: "2025", batchLabel: "Batch 2025 – 2029, First Year", rank: null, hasPage: false },
  { slug: "student-09", name: "Student Name", initials: "S9", photo: "", batch: "2025", batchLabel: "Batch 2025 – 2029, First Year", rank: null, hasPage: false },
  { slug: "student-10", name: "Student Name", initials: "S10", photo: "", batch: "2025", batchLabel: "Batch 2025 – 2029, First Year", rank: null, hasPage: false },
  { slug: "student-11", name: "Student Name", initials: "S11", photo: "", batch: "2025", batchLabel: "Batch 2025 – 2029, First Year", rank: null, hasPage: false },
  { slug: "student-12", name: "Student Name", initials: "S12", photo: "", batch: "2025", batchLabel: "Batch 2025 – 2029, First Year", rank: null, hasPage: false }
];
