const fs = require('fs');
const path = require('path');

const JOBS_FILE = path.join(__dirname, '../public/data/jobs.json');

const NEW_JOBS = [
    {
        title: "Security Consultant",
        company: "Ralawise (via IrishJobs)",
        location: "Dublin, Ireland",
        salary: "€50,000 - €60,000 a year",
        posted: "Just now",
        applicants: "New",
        type: "Full-time",
        description: "Consult with clients on security best practices and compliance.",
        skills: ["Consulting", "ISO 27001", "Communication"],
        hrEmail: "jobs@ralawise.com",
        applyUrl: "https://www.irishjobs.ie/",
        logo: null
    },
    {
        title: "SOC Analyst",
        company: "Smartbox Group",
        location: "Dublin, Ireland",
        salary: "€45,000 - €55,000 a year",
        posted: "Just now",
        applicants: "New",
        type: "Full-time",
        description: "Join our SOC team to monitor and respond to security threats.",
        skills: ["SIEM", "Incident Response", "Networking"],
        hrEmail: "careers@smartbox.com",
        applyUrl: "https://careers.smartbox.com/",
        logo: null
    },
    {
        title: "IT Security Analyst",
        company: "Davy",
        location: "Dublin, Ireland",
        salary: "€55,000 - €70,000 a year",
        posted: "Just now",
        applicants: "New",
        type: "Full-time",
        description: "Protect financial data and infrastructure. Analyze security logs and improve defenses.",
        skills: ["Financial Services", "Risk", "Security Analysis"],
        hrEmail: "recruit@davy.ie",
        applyUrl: "https://www.davy.ie/careers/",
        logo: null
    }
];

try {
    const data = fs.readFileSync(JOBS_FILE, 'utf8');
    const jobs = JSON.parse(data);

    // Pick a random job template
    const template = NEW_JOBS[Math.floor(Math.random() * NEW_JOBS.length)];

    const newJob = {
        ...template,
        id: Date.now(), // Unique ID
        posted: "Just now"
    };

    // Add to beginning of array
    jobs.unshift(newJob);

    // Keep only last 20 jobs
    const updatedJobs = jobs.slice(0, 20);

    fs.writeFileSync(JOBS_FILE, JSON.stringify(updatedJobs, null, 2));

    console.log(`✅ Successfully added new job: "${newJob.title}" at ${newJob.company}`);
    console.log(`📂 Updated ${JOBS_FILE}`);

} catch (err) {
    console.error("❌ Error updating jobs file:", err);
}
