'use server';

import type { IAllIdeaResponseRoot } from '../models/ideasinterfaces';
import { ClientError } from '../util/clientError';

const baseURL = process.env.BASE_API_URL;

export async function getAllIdea(
  params?: Record<string, any>
): Promise<IAllIdeaResponseRoot | any> {
  try {
    console.log(`${baseURL}/idea?${new URLSearchParams(params).toString()}`);
    const response = await fetch(`${baseURL}/ideas?${new URLSearchParams(params).toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      next: {
        tags: ['get-all-ideas'],
      },
    });

    if (!response.ok) {
      const error = await ClientError.create(response);
      throw error;
    }

    const data: Omit<IAllIdeaResponseRoot, 'success'> = await response.json();

    return {
      ...data,
      success: true,
    };
  } catch (error) {
    if (error instanceof ClientError) {
      return {
        success: false,
        message: error.message,
        code: error.code,
      };
    }

    return {
      success: false,
      message: 'An unexpected error occurred',
      code: 500,
    };
  }
}
