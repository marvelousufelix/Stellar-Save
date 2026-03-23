/**
 * API utilities for group operations.
 * TODO: replace stub with actual Soroban contract invocation.
 */

export interface GroupData {
  name: string;
  description: string;
  contribution_amount: number; // stroops = XLM * 10_000_000
  cycle_duration: number;      // seconds
  max_members: number;
  min_members: number;
}

export async function createGroup(data: GroupData): Promise<string> {
  // stub — returns a mock group ID
  return Promise.resolve('mock-group-id');
}
