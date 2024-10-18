import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db('blogeditor'); // Replace with your database name

    if (req.method === 'GET') {
        const users = await db.collection('blogs').find({}).toArray(); // Fetch all users
        res.json(users);
    } else if (req.method === 'POST') {
        const user = req.body; // Get the user data from the request body
        await db.collection('users').insertOne(user); // Insert new user
        res.status(201).json(user);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}