import { Client, Account, Databases, } from 'appwrite';

export const appwriteConfig = {
    projectId: `${import.meta.env.VITE_APPWRITE_PROJECT_ID}`,
    endpoint: `${import.meta.env.VITE_APPWRITE_ENDPOINT_URL}`,
    database: `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
    collection: `${import.meta.env.VITE_APPWRITE_COLL_ID}`

}

export const client = new Client();

client.setEndpoint(appwriteConfig.endpoint).setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);