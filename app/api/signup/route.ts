import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const usersFilePath = path.join(process.cwd(), 'data', 'users.json');

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ message: 'Username and password are required' }, { status: 400 });
    }

    let users = [];
    if (fs.existsSync(usersFilePath)) {
      let usersData = fs.readFileSync(usersFilePath, 'utf-8');
      
      // Strip BOM if present
      if (usersData.charCodeAt(0) === 0xFEFF) {
        usersData = usersData.slice(1);
      }
      
      if (usersData.trim()) {
        try {
          users = JSON.parse(usersData);
        } catch (e) {
          console.error("Failed to parse users.json, treating as empty.", e);
          users = [];
        }
      }
    }

    const userExists = users.find((user: any) => user.username === username);

    if (userExists) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    users.push({ username, password });
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
} 