/*
  # Add user creation policy

  1. Changes
    - Add RLS policy to allow users to create their own profile
    - Policy ensures users can only create a row with their own auth.uid()

  2. Security
    - Policy only allows users to create their own profile
    - Prevents users from creating profiles for others
*/

CREATE POLICY "Users can create own profile"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);