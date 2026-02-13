import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, '../public/data/jobs.json');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function addJob() {
    console.log('\n--- 🚀 Simulate New Job Post ---\n');

    try {
        const title = await question('Job Title (e.g. React Developer): ');
        const company = await question('Company Name (e.g. Stripe): ');

        if (!title || !company) {
            console.log('❌ Title and Company are required!');
            process.exit(1);
        }

        const newJob = {
            id: Date.now(),
            title,
            company,
            location: 'Dublin',
            type: 'Full-time',
            postedAt: new Date().toISOString(),
            url: '#'
        };

        // Read existing data
        let jobs = [];
        if (fs.existsSync(DATA_FILE)) {
            const data = fs.readFileSync(DATA_FILE, 'utf8');
            jobs = JSON.parse(data);
        }

        // Add new job to the TOP
        jobs.unshift(newJob);

        // Write back
        fs.writeFileSync(DATA_FILE, JSON.stringify(jobs, null, 2));

        console.log('\n✅ Job posted successfully!');
        console.log(`\nNew Job: ${title} at ${company}`);
        console.log('The website should reflect this change in a few seconds (next poll).');

    } catch (error) {
        console.error('Error:', error);
    } finally {
        rl.close();
    }
}

addJob();
