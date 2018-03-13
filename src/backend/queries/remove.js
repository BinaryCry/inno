import assert from 'assert';
import { MongoClient } from 'mongodb';
import { url, collection } from '../config/db';

const removeAll = (db, callback) => {
    const records = db.collection(collection);

    records.deleteMany({}, (err, result) => {
        callback ? callback(result) : null;
    });
}

const remove = (callback) => {
    MongoClient.connect(url, async (err, db) => {
        if (err) { callback(false); return false }
        await removeAll(db, callback);
        db.close();
    });
}

export { remove };



