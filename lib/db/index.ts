import mongoose from 'mongoose'

// Use a global variable to cache the database connection to prevent
// multiple connections when reloading the server in a development environment.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached = (global as any).mongoose || { conn: null, promise: null }

/**
 * Establishes a connection to the MongoDB database.
 * Uses caching to avoid creating multiple connections.
 * @param {string} MONGODB_URI - The MongoDB connection string (default: process.env.MONGODB_URI).
 * @returns {Promise<mongoose.Connection>} The established database connection.
 * @throws {Error} If MONGODB_URI is not provided.
 */
export const connectToDatabase = async (
  MONGODB_URI = process.env.MONGODB_URI
) => {
  // Return the cached connection if it already exists
  if (cached.conn) return cached.conn

  // Throw an error if no MongoDB URI is provided
  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing')

  // Create and cache the connection promise if it does not exist
  cached.promise = cached.promise || mongoose.connect(MONGODB_URI)

  // Await the established connection and cache it
  cached.conn = await cached.promise

  return cached.conn
}
