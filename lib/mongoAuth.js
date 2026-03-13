import { initAuthCreds, BufferJSON, proto } from '@whiskeysockets/baileys';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME || 'whatsapp_sessions';

let _mongoClient = null;

async function _getMongoClient() {
    if (!_mongoClient) {
        _mongoClient = new MongoClient(MONGODB_URI, {
            serverSelectionTimeoutMS: 30000,
            connectTimeoutMS: 30000,
        });
        await _mongoClient.connect();
    }
    return _mongoClient;
}

async function _getCollection(sessionId) {
    const client = await _getMongoClient();
    return client.db(DB_NAME).collection(`auth_${sessionId}`);
}

export async function useMongoDBAuthState(sessionId = 'default') {
    const collection = await _getCollection(sessionId);

    const readData = async (key) => {
        try {
            const doc = await collection.findOne({ _id: key });
            if (!doc) return null;
            return JSON.parse(doc.value, BufferJSON.reviver);
        } catch {
            return null;
        }
    };

    const writeData = async (key, value) => {
        try {
            await collection.replaceOne(
                { _id: key },
                { _id: key, value: JSON.stringify(value, BufferJSON.replacer) },
                { upsert: true }
            );
        } catch (err) {
            console.error('[MongoDB] Write error:', err.message);
        }
    };

    const removeData = async (key) => {
        try {
            await collection.deleteOne({ _id: key });
        } catch {}
    };

    const creds = (await readData('creds')) || initAuthCreds();

    return {
        state: {
            creds,
            keys: {
                get: async (type, ids) => {
                    const data = {};
                    await Promise.all(
                        ids.map(async (id) => {
                            let value = await readData(`${type}-${id}`);
                            if (type === 'app-state-sync-key' && value) {
                                value = proto.Message.AppStateSyncKeyData.fromObject(value);
                            }
                            data[id] = value;
                        })
                    );
                    return data;
                },
                set: async (data) => {
                    const tasks = [];
                    for (const category of Object.keys(data)) {
                        for (const id of Object.keys(data[category])) {
                            const value = data[category][id];
                            const docKey = `${category}-${id}`;
                            tasks.push(value ? writeData(docKey, value) : removeData(docKey));
                        }
                    }
                    await Promise.all(tasks);
                },
            },
        },
        saveCreds: () => writeData('creds', creds),
    };
}
