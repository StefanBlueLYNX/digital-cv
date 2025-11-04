-- Supabase Database Setup
-- Run this SQL in your Supabase SQL Editor to create the messages table

CREATE TABLE IF NOT EXISTS messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert messages
CREATE POLICY "Allow public insert" ON messages
  FOR INSERT
  WITH CHECK (true);

-- Optional: Create a policy that allows only authenticated users to read messages
-- Uncomment if you want to restrict read access
-- CREATE POLICY "Allow authenticated read" ON messages
--   FOR SELECT
--   USING (auth.role() = 'authenticated');

