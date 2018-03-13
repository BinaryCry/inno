// returns in callback 1 if document was inserted

import assert from 'assert';
import { MongoClient } from 'mongodb';
import { url, collection } from '../config/db';

const insertRecord = (db, data, callback) => {
    const records = db.collection(collection);

    records.insertOne({ data }, (err, result) => {
        assert.equal(err, null);
        callback ? callback(result.result.n) : null;
    });
}

const insert = (data, callback) => {
    assert.equal('string', typeof data);
    MongoClient.connect(url, async (err, db) => {
        assert.equal(null, err);
        await insertRecord(db, data, callback);
        db.close();
    });
}

export { insert };



