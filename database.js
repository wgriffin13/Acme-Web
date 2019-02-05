// setting up the node-postgres driver
const pg = require('pg');
const postgresUrl = 'postgres://localhost/acme_web_db';
const client = new pg.Client(postgresUrl);

const dbPagesSeed = `
    DROP TABLE IF EXISTS pages;
    CREATE TABLE pages(
        ID serial primary key,
        name varchar,
        is_home_page boolean      
    );
    INSERT INTO pages(name, is_home_page) values('Home', true);
    INSERT INTO pages(name, is_home_page) values ('Employees', false);
    INSERT INTO pages(name, is_home_page) values ('Contact', false);
    `;

const dbContentTable = `
    DROP TABLE IF EXISTS content;
    CREATE TABLE content(
        ID serial primary key,
        name varchar,
        body varchar,
        page_id integer
    );
    `;

client.connect()
    .then(() => console.log(`Sucessfully connected to -> ${postgresUrl}`))
    .then(() => client.query(dbPagesSeed))
    .then(() => console.log('Seeded pages'))
    .then(() => client.query(dbContentTable))
    .then(() => console.log('Built dbContentTable'))
    .catch(ex => console.log(ex))
