import assert from 'assert';
import { MongoClient } from 'mongodb';
import { url, collection } from '../config/db';

const findAll = (db, callback) => {
    const records = db.collection(collection);

    records.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        callback ? callback(docs) : null;
    });
}

const find = (callback, response) => {
    MongoClient.connect(url, async (err, db) => {
        if (err) { callback(false); return false }
        await findAll(db, callback);
        db.close();
    });
}

export { find };



