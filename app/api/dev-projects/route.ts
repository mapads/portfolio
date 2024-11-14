// pages/api/dev-projects/route.ts
import connectDB from '../../../lib/db';
import DevProject from '../../../lib/models/DevProject';

type ErrorWithMessage = {
    message: string;
};

// GET all projects
export async function GET() {
    console.log("Handling GET request for dev-projects...");
    try {
        await connectDB();
        const projects = await DevProject.find();
        console.log("Fetched projects:", projects);
        return new Response(JSON.stringify(projects), { status: 200 });
    } catch (error) {
        console.error("Error fetching projects:", error);
        return new Response(JSON.stringify({ error: 'Failed to fetch projects' }), { status: 500 });
    }
}

// POST a new project
export async function POST(req: Request) {
    console.log("Handling POST request for dev-projects...");
    try {
        await connectDB();
        const data = await req.json();
        const newProject = new DevProject(data);
        await newProject.save();
        return new Response(JSON.stringify({ message: 'Project created successfully', project: newProject }), { status: 201 });
    } catch (error) {
        const typedError = error as ErrorWithMessage;
        console.error("Error creating project:", typedError.message);
        return new Response(JSON.stringify({ error: 'Failed to create project due to - ' + typedError.message }), { status: 500 });
    }
}