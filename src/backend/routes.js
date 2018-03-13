import { insert, find, remove } from './queries';

const routes = (app) => {
    app.get('/', (request, response) => {
        response.type('html');
        response.send('Hello, World!');
    });

    app.get('/records', (request, response) => {
        response.type('json');
        find((result) => {
            if (result) response.send(JSON.stringify(result));
            else response.sendStatus(500);
        });
    });

    app.put('/add', (request, response) => {
        find((result) => {
            if (result) {
                if (result.length < 10) {
                    insert(request.query.record, (result) => {
                        if (result === 1) response.sendStatus(201);
                        else response.sendStatus(500);
                    })
                } else {
                    response.type('json')
                    response.status(200).send(JSON.stringify({ status: 'full' }));
                }
            } else response.sendStatus(500);
        })
    });

    app.delete('/records', (request, response) => {
        remove((result) => {
            if (result) response.sendStatus(200);
            else response.sendStatus(500);
        })
    })

    return app;
}

export default routes;